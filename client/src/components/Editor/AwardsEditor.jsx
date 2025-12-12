import React from "react";

export default function AwardsEditor({ data, onUpdate }) {
  return (
    <div className="
      p-6 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-gray-100
      transition-colors duration-200
    ">

      <h2 className="text-xl font-semibold mb-4">Awards & Achievements</h2>

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
            <h3 className="font-medium">Award {index + 1}</h3>

            <button
              onClick={() => {
                const updated = data.filter((_, i) => i !== index);
                onUpdate(updated);
              }}
              className="
                text-red-500 dark:text-red-400 
                text-xs 
                hover:text-red-700 dark:hover:text-red-300
              "
            >
              Delete
            </button>
          </div>

          {/* Title */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              value={item.title}
              onChange={(e) => {
                const updated = [...data];
                updated[index].title = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full rounded p-2 
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100
              "
              placeholder="Best Performer Award"
            />
          </div>

          {/* Issuer */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Issuer
            </label>
            <input
              type="text"
              value={item.issuer}
              onChange={(e) => {
                const updated = [...data];
                updated[index].issuer = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full rounded p-2 
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100
              "
              placeholder="Company or Organization"
            />
          </div>

          {/* Year */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Year
            </label>
            <input
              type="text"
              value={item.year}
              onChange={(e) => {
                const updated = [...data];
                updated[index].year = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full rounded p-2 
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100
              "
              placeholder="2023"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={item.description}
              onChange={(e) => {
                const updated = [...data];
                updated[index].description = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full rounded p-2 h-20 resize-none
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100
              "
              placeholder="Short description about this achievement"
            />
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          onUpdate([
            ...data,
            { title: "", issuer: "", year: "", description: "" },
          ])
        }
        className="
          px-4 py-2 
          bg-indigo-600 hover:bg-indigo-700 
          dark:bg-indigo-500 dark:hover:bg-indigo-600
          text-white rounded shadow mt-2
        "
      >
        + Add Award
      </button>
    </div>
  );
}
