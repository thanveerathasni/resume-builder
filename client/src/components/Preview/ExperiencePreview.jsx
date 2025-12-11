import React from "react";

export default function ExperiencePreview({ data = [], template = "minimal" }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-bold mb-3">
        Experience
      </h2>

      {data.map((item, index) => (
        <div key={index} className="mb-4 pb-3 border-b border-gray-300 dark:border-gray-700">

          {/* ROLE + COMPANY */}
          <h3 className="font-semibold text-lg">
            {item.role || "Job Title"}
          </h3>

          <div className="text-sm text-gray-700 dark:text-gray-300">
            {item.company || "Company"} • {item.start || "Start"} — {item.end || "End"}
          </div>

          {/* DESCRIPTION – Minimal or Enhanced */}
          {template === "enhanced" ? (
            <ul className="list-disc ml-5 mt-2 text-gray-800 dark:text-gray-300 text-sm space-y-1">
              {(item.description || "").split(".").map((line, i) =>
                line.trim() ? <li key={i}>{line.trim()}</li> : null
              )}
            </ul>
          ) : (
            item.description && (
              <p className="mt-2 text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            )
          )}

        </div>
      ))}
    </div>
  );
}
