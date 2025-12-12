import React from "react";

export default function LanguagesPreview({ data, template }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">
        Languages
      </h2>

      <ul className="text-sm leading-relaxed">
        {data.map((item, i) => (
          <li key={i}>
            {item.name || "Language"} — {item.level || "Fluent"}
          </li>
        ))}
      </ul>
    </div>
  );
}
