import type { ReactNode } from "react";

const PLACEHOLDER = /(\[[^\]]+\])/g;

/**
 * Renders a content string, marking any [bracketed] segments as placeholders.
 * The marking is a quiet dotted underline defined in globals.css. Once the
 * brackets are removed from the content, the marking disappears.
 */
export function Copy({ children }: { children: string }): ReactNode {
  return children.split(PLACEHOLDER).map((part, index) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={index} data-placeholder="">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
