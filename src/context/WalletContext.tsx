import { BrowserProvider, JsonRpcSigner } from 'ethers';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { NETWORK_CONFIG } from '../config/contracts';
import DepositModal from '../components/wallet/DepositModal';
import WithdrawModal from '../components/wallet/WithdrawModal';

const AUTO_CONNECT_STORAGE_KEY = 'riverbit:autoConnect';

const readAutoConnectPreference = (): boolean => {
  if (typeof window === 'undefined') {
    return true;
  }
  const stored = window.localStorage.getItem(AUTO_CONNECT_STORAGE_KEY);
  if (stored === null) {
    return true;
  }
  return stored === 'true';
};

interface WalletContextValue {
  account: string | null;
  chainId: number | null;
  isConnected: boolean;
  isCorrectNetwork: boolean;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  ensureCorrectNetwork: () => Promise<void>;
  getSigner: () => Promise<JsonRpcSigner>;
  getProvider: () => Promise<BrowserProvider>;
  openDepositModal: () => void;
  openWithdrawModal: () => void;
  closeDepositModal: () => void;
  closeWithdrawModal: () => void;
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

const chainParams = {
  chainId: NETWORK_CONFIG.chainHex,
  chainName: NETWORK_CONFIG.name,
  rpcUrls: [NETWORK_CONFIG.rpcUrl],
  blockExplorerUrls: [NETWORK_CONFIG.blockExplorer],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
};

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [autoConnectEnabled, setAutoConnectEnabled] = useState<boolean>(readAutoConnectPreference);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(
      AUTO_CONNECT_STORAGE_KEY,
      autoConnectEnabled ? 'true' : 'false',
    );
  }, [autoConnectEnabled]);

  const getOrCreateProvider = useCallback(async (): Promise<BrowserProvider> => {
    if (provider) {
      return provider;
    }

    if (!window.ethereum) {
      throw new Error('检测不到钱包扩展，请安装 MetaMask');
    }

    const browserProvider = new BrowserProvider(window.ethereum, 'any');
    setProvider(browserProvider);
    return browserProvider;
  }, [provider]);

  const ensureCorrectNetwork = useCallback(async () => {
    if (!window.ethereum) {
      throw new Error('检测不到钱包扩展');
    }

    const currentChainHex = (await window.ethereum.request({ method: 'eth_chainId' })) as string;
    if (currentChainHex === NETWORK_CONFIG.chainHex) {
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: NETWORK_CONFIG.chainHex }],
      });
    } catch (error: unknown) {
      const err = error as { code?: number };
      if (err?.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [chainParams],
        });
      } else {
        throw error;
      }
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      throw new Error('检测不到钱包扩展，请先安装 MetaMask');
    }

    setIsConnecting(true);
    try {
      const browserProvider = await getOrCreateProvider();
      const accounts = (await browserProvider.send('eth_requestAccounts', [])) as string[];
      const primaryAccount = accounts?.[0] ?? null;
      setAccount(primaryAccount);

      const chainHex = (await browserProvider.send('eth_chainId', [])) as string;
      setChainId(parseInt(chainHex, 16));

      await ensureCorrectNetwork();

      const finalChainHex = (await browserProvider.send('eth_chainId', [])) as string;
      setChainId(parseInt(finalChainHex, 16));
      setAutoConnectEnabled(true);
    } finally {
      setIsConnecting(false);
    }
  }, [ensureCorrectNetwork, getOrCreateProvider]);

  const disconnectWallet = useCallback(() => {
    setAccount(null);
    setChainId(null);
    setAutoConnectEnabled(false);
    setShowDeposit(false);
    setShowWithdraw(false);
  }, []);

  const getSigner = useCallback(async () => {
    const browserProvider = await getOrCreateProvider();
    return browserProvider.getSigner();
  }, [getOrCreateProvider]);

  const getProvider = useCallback(async () => {
    return getOrCreateProvider();
  }, [getOrCreateProvider]);

  // Auto connect (if enabled) and hydrate initial state
  useEffect(() => {
    if (!window.ethereum) {
      return;
    }

    let isMounted = true;

    const initialise = async () => {
      if (!autoConnectEnabled) return;
      try {
        const browserProvider = await getOrCreateProvider();
        const [accounts, chainHex] = await Promise.all([
          browserProvider.send('eth_accounts', []) as Promise<string[]>,
          browserProvider.send('eth_chainId', []) as Promise<string>,
        ]);

        if (!isMounted) return;

        setAccount(accounts?.[0] ?? null);
        setChainId(parseInt(chainHex, 16));
      } catch (error) {
        console.warn('Failed to initialise provider', error);
      }
    };

    initialise();

    const handleAccountsChanged = (accounts: string[]) => {
      if (!isMounted) return;
      const nextAccount = accounts?.[0] ?? null;
      setAccount(nextAccount);
      setAutoConnectEnabled(accounts.length > 0);
      if (accounts.length === 0) {
        setChainId(null);
      }
    };

    const handleChainChanged = (chainHex: string) => {
      if (!isMounted) return;
      setChainId(parseInt(chainHex, 16));
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      isMounted = false;
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum?.removeListener('chainChanged', handleChainChanged);
    };
  }, [autoConnectEnabled, getOrCreateProvider]);

  const contextValue = useMemo<WalletContextValue>(() => ({
    account,
    chainId,
    isConnected: Boolean(account),
    isCorrectNetwork: chainId === NETWORK_CONFIG.chainId,
    isConnecting,
    connectWallet,
    disconnectWallet,
    ensureCorrectNetwork,
    getSigner,
    getProvider,
    openDepositModal: () => setShowDeposit(true),
    openWithdrawModal: () => setShowWithdraw(true),
    closeDepositModal: () => setShowDeposit(false),
    closeWithdrawModal: () => setShowWithdraw(false),
  }), [
    account,
    chainId,
    connectWallet,
    disconnectWallet,
    ensureCorrectNetwork,
    getSigner,
    getProvider,
    isConnecting,
  ]);

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
      <DepositModal isOpen={showDeposit} onClose={() => setShowDeposit(false)} />
      <WithdrawModal isOpen={showWithdraw} onClose={() => setShowWithdraw(false)} />
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return ctx;
};
