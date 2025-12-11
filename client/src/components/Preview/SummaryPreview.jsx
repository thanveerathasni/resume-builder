import React from "react";

export default function SummaryPreview({ data, template }) {
  if (!data || !data.text) return null;

  // --- ATS MODE ---
  if (template === "minimal") {
    return (
      <div className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
        SUMMARY:
        {"\n"}
        {data.text}
      </div>
    );
  }

  // --- ENHANCED MODE ---
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-brand dark:text-brand-light">
        Summary
      </h2>

      <p className="leading-relaxed text-sm text-gray-700 dark:text-gray-300">
        {data.text}
      </p>
    </div>
  );
}
