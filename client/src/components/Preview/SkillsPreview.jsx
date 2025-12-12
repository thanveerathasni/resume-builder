import React from "react";

export default function SkillsPreview({ data = [], template }) {
  if (!data.length) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Skills</h2>

      {template === "minimal" ? (
        /* ATS-friendly simple list */
        <ul className="list-disc ml-5 text-sm space-y-1">
          {data.map((skill, i) => (
            <li key={i}>
              {skill.name} — {skill.level}
            </li>
          ))}
        </ul>
      ) : (
        /* Enhanced tag style */
        <div className="flex flex-wrap gap-2">
          {data.map((skill, i) => (
            <span
              key={i}
              className="
                px-3 py-1 rounded text-sm 
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-800
              "
            >
              {skill.name} — {skill.level}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
