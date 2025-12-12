import React from "react";

export default function AwardsPreview({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Awards & Achievements</h2>

      {data.map((item, index) => (
        <div key={index} className="mb-3 pb-2 border-b border-gray-300 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {item.title || "Award Title"}
          </h3>

          <div className="text-sm text-gray-700 dark:text-gray-300">
            {item.issuer || "Issuer"} — {item.year || "Year"}
          </div>

          {item.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
