import React from "react";

export default function ProjectEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Projects</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 mb-5 bg-white dark:bg-gray-900 shadow-sm"
        >
          {/* Header + Delete */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Project {index + 1}</h3>

            <button
              onClick={() => {
                const updated = data.filter((_, idx) => idx !== index);
                onUpdate(updated);
              }}
              className="text-red-500 text-xs font-medium hover:text-red-400"
            >
              Delete
            </button>
          </div>

          {/* Project Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                const updated = [...data];
                updated[index].name = e.target.value;
                onUpdate(updated);
              }}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-800"
              placeholder="Netflix Clone, E-commerce App..."
            />
          </div>

          {/* Project Link */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Link (optional)</label>
            <input
              type="text"
              value={item.link}
              onChange={(e) => {
                const updated = [...data];
                updated[index].link = e.target.value;
                onUpdate(updated);
              }}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-800"
              placeholder="GitHub or Live Demo"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={item.description}
              onChange={(e) => {
                const updated = [...data];
                updated[index].description = e.target.value;
                onUpdate(updated);
              }}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 h-24 bg-white dark:bg-gray-800 resize-none"
              placeholder="Tech stack, what you built, your role..."
            />
          </div>
        </div>
      ))}

      {/* ADD NEW PROJECT BUTTON */}
      <button
        onClick={() => {
          const newItem = {
            name: "",
            link: "",
            description: ""
          };
          onUpdate([...data, newItem]);
        }}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700"
      >
        + Add Project
      </button>

    </div>
  );
}
