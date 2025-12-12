import React from "react";

export default function SkillsPreview({ data, template }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Skills</h2>

      <div
        className={
          template === "enhanced"
            ? "grid grid-cols-2 gap-2 text-sm"
            : "grid grid-cols-2 gap-1 text-sm"
        }
      >
        {data.map((skill, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-medium">{skill.name || "Skill"}</span>
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
