import { Fragment } from 'react';

const INLINE_TOKEN_REGEX =
  /(`[^`\n]+`|\*\*[^*\n]+?\*\*|\*[^\s*][^*\n]*?[^\s*]\*|\*[^\s*]\*)/g;

export function FormattedInlineText({ text }: { text: string }) {
  const parts = text.split(INLINE_TOKEN_REGEX);
  return (
    <>
      {parts.map((part, idx) => {
        if (!part) return null;
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          return (
            <code
              key={idx}
              className="font-mono text-[0.9em] px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return (
            <strong
              key={idx}
              className="font-semibold text-slate-900 dark:text-slate-100"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 3) {
          return <em key={idx}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={idx}>{part}</Fragment>;
      })}
    </>
  );
}
