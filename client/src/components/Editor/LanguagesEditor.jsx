import React from "react";

export default function LanguagesEditor({ data, onUpdate }) {
  return (
    <div className="
      p-6 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-gray-100
      transition-colors duration-200
    ">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="
            border border-gray-300 dark:border-gray-700 
            rounded p-4 mb-4 
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            shadow-sm 
            transition-colors duration-200
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Language {index + 1}</h3>

            <button
              onClick={() => {
                const updated = data.filter((_, i) => i !== index);
                onUpdate(updated);
              }}
              className="text-red-500 dark:text-red-400 text-xs hover:text-red-700 dark:hover:text-red-300"
            >
              Delete
            </button>
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Language</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                const updated = [...data];
                updated[index].name = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full rounded p-2 
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100
              "
              placeholder="English, Tamil, Malayalam…"
            />
          </div>

          {/* Proficiency */}
          <div>
            <label className="block text-sm font-medium mb-1">Proficiency</label>

            <select
              value={item.level}
              onChange={(e) => {
                const updated = [...data];
                updated[index].level = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full p-2 rounded 
                bg-white dark:bg-gray-700 
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100
              "
            >
              <option>Basic</option>
              <option>Conversational</option>
              <option>Fluent</option>
              <option>Native</option>
            </select>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          onUpdate([...data, { name: "", level: "Fluent" }])
        }
        className="
          px-4 py-2 
          bg-indigo-600 hover:bg-indigo-700 
          dark:bg-indigo-500 dark:hover:bg-indigo-600
          text-white rounded shadow mt-2
        "
      >
        + Add Language
      </button>
    </div>
  );
}
