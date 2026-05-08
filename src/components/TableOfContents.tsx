export type TocItem = { id: string; text: string; level: number };

export function extractTocItems(content: string): TocItem[] {
  return content
    .split("\n")
    .filter((line) => /^#{2,3} /.test(line))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^#{2,3} /, "").trim();
      const id = `h-${text.replace(/\s+/g, "-").replace(/[^\w぀-鿿-]/g, "")}`;
      return { id, text, level };
    });
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav className="sticky top-28 p-6 border border-[#ede8e0] bg-white">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-4 h-px bg-[#c4954a]" />
        <p className="text-[#c4954a] text-[10px] font-bold uppercase tracking-widest">目次</p>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}>
            <a
              href={`#${item.id}`}
              className="text-xs text-gray-600 hover:text-[#c4954a] transition-colors leading-relaxed block"
            >
              {item.level === 2 && <span className="text-[#c4954a] mr-1.5 text-[10px]">▶</span>}
              {item.level === 3 && <span className="text-gray-300 mr-1.5 text-[10px]">—</span>}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
