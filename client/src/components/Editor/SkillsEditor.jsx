import React from "react";

export default function SkillsEditor({ data, onUpdate }) {
  const updateSkill = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    onUpdate(updated);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 dark:border-gray-700 rounded p-4 mb-4 bg-white dark:bg-gray-900"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Skill {index + 1}</h3>
            <button
              onClick={() =>
                onUpdate(data.filter((_, i) => i !== index))
              }
              className="text-red-500 dark:text-red-400 text-xs hover:text-red-700"
            >
              Delete
            </button>
          </div>

          {/* Skill Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Skill Name</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateSkill(index, "name", e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-800"
              placeholder="JavaScript, React, Node.js"
            />
          </div>

          {/* Level */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Level</label>
            <select
              value={item.level}
              onChange={(e) => updateSkill(index, "level", e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-800"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          onUpdate([...data, { name: "", level: "Beginner" }])
        }
        className="px-4 py-2 bg-indigo-600 text-white rounded shadow mt-2"
      >
        + Add Skill
      </button>
    </div>
  );
}
