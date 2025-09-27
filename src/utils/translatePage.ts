// src/utils/translatePage.ts
type TextNodeWithOriginal = { node: Node; original: string };

// 儲存原文的陣列
let originalTextNodes: TextNodeWithOriginal[] = [];
// cache: key = 原文, value = 翻譯
let cachedTranslations: Record<string, string> = {};

// batch 翻譯並儲存到 cache
export async function preloadTranslate(sl: string = "en", tl: string = "zh-CN"): Promise<void> {
  const elements = document.querySelectorAll("body *:not(script):not(style)");

  const textNodes: ChildNode[] = [];
  elements.forEach((el) => {
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim() !== "") {
        textNodes.push(node);
        if (!originalTextNodes.find((item) => item.node === node)) {
          originalTextNodes.push({ node, original: node.nodeValue! });
        }
      }
    });
  });

  const originalTexts = textNodes.map((node) => node.nodeValue);
  const joinedText = originalTexts.join("\n");

  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(
        joinedText
      )}`
    );
    const data = await res.json();
    const translatedText = data[0].map((item: any) => item[0]).join("\n");
    const translatedArray = translatedText.split("\n");

    // 儲存到 cache
    textNodes.forEach((node, idx) => {
      cachedTranslations[node.nodeValue!] = translatedArray[idx] || node.nodeValue!;
    });

    console.log("Cache loaded:", cachedTranslations);
  } catch (err) {
    console.error("Translation preload failed:", err);
  }
}

// 使用 cache 翻譯全頁
export function translatePage(): void {
  originalTextNodes.forEach((item) => {
    const cached = cachedTranslations[item.original];
    if (cached) {
      item.node.nodeValue = cached;
    }
  });
}

// 還原原文
export function revertPage(): void {
  originalTextNodes.forEach((item) => {
    item.node.nodeValue = item.original;
  });
}
