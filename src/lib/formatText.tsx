import { ReactNode } from 'react';

export function renderInlineFormatted(text: string): ReactNode[] {
  const tokenRegex =
    /(\*\*\*[^*\n]+\*\*\*|\*\*[^*\n]+\*\*|__[^_\n]+__|`[^`\n]+`|\*(?!\s)[^*\n]+?(?<!\s)\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('***') && part.endsWith('***') && part.length > 6) {
      return (
        <strong
          key={idx}
          className="font-semibold italic text-slate-950 dark:text-white"
        >
          {part.slice(3, -3)}
        </strong>
      );
    }
    if (part.startsWith('__') && part.endsWith('__') && part.length > 4) {
      return (
        <span
          key={idx}
          className="underline decoration-2 underline-offset-3 font-semibold text-slate-950 dark:text-white"
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong
          key={idx}
          className="font-semibold text-slate-950 dark:text-white"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[0.88em] text-sky-700 dark:text-sky-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export function renderFormattedMultiline(text: string): ReactNode[] {
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((paragraph, pIdx) => {
    const lines = paragraph.split('\n');
    return (
      <p key={pIdx} className={pIdx > 0 ? 'mt-2.5' : undefined}>
        {lines.map((line, lIdx) => (
          <span key={lIdx}>
            {lIdx > 0 && <br />}
            {renderInlineFormatted(line)}
          </span>
        ))}
      </p>
    );
  });
}

export function stripItemPrefix(text: string): string {
  const trimmed = text.trim();
  if (!/^Item\s+\d+(?:\.\d+)*\./i.test(trimmed)) {
    return trimmed;
  }

  const parenMatch = trimmed.match(/^Item\s+\d+(?:\.\d+)*\.\s+[\s\S]*?\)\.\s+([\s\S]+)$/);
  if (parenMatch && parenMatch[1].trim()) {
    return parenMatch[1].trim();
  }

  const doubleDotMatch = trimmed.match(/^Item\s+\d+(?:\.\d+)*\.\s+[\s\S]*?\.\.\s+([\s\S]+)$/);
  if (doubleDotMatch && doubleDotMatch[1].trim()) {
    return doubleDotMatch[1].trim();
  }

  const singleTitleMatch = trimmed.match(
    /^Item\s+\d+(?:\.\d+)*\.\s+(?:\d+(?:\.\d+)*\.\s+)?[^.\n]{1,140}?\.\s+([\s\S]+)$/
  );
  if (singleTitleMatch && singleTitleMatch[1].trim()) {
    return singleTitleMatch[1].trim();
  }

  return trimmed;
}
