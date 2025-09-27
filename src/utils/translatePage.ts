type TextNodeWithOriginal = { node: Node; original: string };

// 儲存原文嘅陣列
let originalTextNodes: TextNodeWithOriginal[] = [];

export async function translatePage(sl: string = "en", tl: string = "zh-CN"): Promise<void> {
  const elements = document.querySelectorAll("body *:not(script):not(style)");

  const textNodes: ChildNode[] = [];
  elements.forEach((el) => {
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim() !== "") {
        textNodes.push(node);
        // 只儲存一次原文
        if (!originalTextNodes.find((item) => item.node === node)) {
          originalTextNodes.push({ node, original: node.nodeValue! });
        }
      }
    });
  });

  for (let i = 0; i < textNodes.length; i++) {
    const node = textNodes[i];
    const text = node.nodeValue!;
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(
          text
        )}`
      );
      const data = await res.json();
      const translated = data[0]?.[0]?.[0];
      node.nodeValue = translated || text;
    } catch (err) {
      console.error("Translation failed for:", text, err);
    }
  }
}

export function revertPage(): void {
  originalTextNodes.forEach((item) => {
    item.node.nodeValue = item.original;
  });
  // 可選：清空陣列，避免累積
  originalTextNodes = [];
}
