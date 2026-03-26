type PortableChild = { text?: string };

type PortableBlock = {
  _type?: string;
  children?: PortableChild[];
};

export function blocksToPlainText(blocks: PortableBlock[] | undefined): string {
  if (!blocks?.length) return "";
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children.map((c) => c.text ?? "").join("");
    })
    .filter(Boolean)
    .join("\n");
}
