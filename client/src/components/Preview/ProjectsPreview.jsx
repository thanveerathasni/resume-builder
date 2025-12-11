import React from "react";

export default function ProjectPreview({ data, template }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Projects</h2>

      {data.map((item, index) => (
        <div key={index} className="mb-4">
          
          {/* Name + Link */}
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {item.name || "Project Title"}
          </h3>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-indigo-600 dark:text-indigo-400 underline"
            >
              {item.link}
            </a>
          )}

          {/* Description */}
          {item.description && (
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          )}

        </div>
      ))}
    </div>
  );
}
