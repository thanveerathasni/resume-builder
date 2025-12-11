import React from "react";

export default function EducationPreview({ data, template }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  // --- ATS MODE ---
  if (template === "minimal") {
    return (
      <div className="text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
        EDUCATION:
        {"\n\n"}
        {data
          .map((item) => {
            return `${item.degree || "Degree"} - ${item.school || "School"}
${item.start || "Start"} to ${item.end || "End"}
${item.description || ""}`;
          })
          .join("\n\n")}
      </div>
    );
  }

  // --- ENHANCED MODE ---
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-brand dark:text-brand-light">
        Education
      </h2>

      {data.map((item, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300 dark:border-gray-700">

          <h3 className="font-semibold text-gray-900 dark:text-gray-200">
            {item.degree || "Degree"} — {item.school || "School Name"}
          </h3>

          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {item.start || "Start"} — {item.end || "End"}
          </div>

          {item.description && (
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          )}

        </div>
      ))}
    </div>
  );
}
