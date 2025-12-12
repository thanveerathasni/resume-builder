import React from "react";

/**
 * Props:
 *  - data: { title, items: [{ heading, description }] }
 *  - template (optional)
 */
export default function CustomSectionPreview({ data }) {
  if (!data) return null;
  const { title = "", items = [] } = data;
  if (!title && items.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">{title || "Custom Section"}</h2>

      <div className="text-sm leading-relaxed space-y-3">
        {items.map((it, i) =>
          (it.heading || it.description) ? (
            <div key={i} className="pb-2 border-b last:border-b-0 border-gray-200 dark:border-gray-700">
              {it.heading && <div className="font-semibold">{it.heading}</div>}
              {it.description && <div className="text-gray-700 dark:text-gray-300">{it.description}</div>}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
