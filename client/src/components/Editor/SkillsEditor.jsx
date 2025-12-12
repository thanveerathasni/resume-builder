import React from "react";

export default function SkillsEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      {data.map((skill, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
        >
          {/* NAME */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Skill Name</label>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => {
                const updated = [...data];
                updated[index].name = e.target.value;
                onUpdate(updated);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
              placeholder="React, Node.js, MongoDB..."
            />
          </div>

          {/* LEVEL */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Level</label>
            <select
              value={skill.level}
              onChange={(e) => {
                const updated = [...data];
                updated[index].level = e.target.value;
                onUpdate(updated);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>

          {/* DELETE */}
          <button
            onClick={() => {
              const updated = data.filter((_, i) => i !== index);
              onUpdate(updated);
            }}
            className="text-red-500 text-sm hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}

      {/* ADD SKILL */}
      <button
        onClick={() => {
          onUpdate([...data, { name: "", level: "Beginner" }]);
        }}
        className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700"
      >
        + Add Skill
      </button>

    </div>
  );
}
