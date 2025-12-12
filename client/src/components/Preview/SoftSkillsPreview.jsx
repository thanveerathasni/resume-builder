import React from "react";

export default function SoftSkillsPreview({ data, template }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Soft Skills</h2>

      <ul className="list-disc pl-5 space-y-1">
        {data.map((item, i) => (
          <li key={i} className="text-sm">
            {item.name || "Soft Skill"}
          </li>
        ))}
      </ul>
    </div>
  );
}
