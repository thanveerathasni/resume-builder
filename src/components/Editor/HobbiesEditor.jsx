import React from "react";

export default function HobbiesEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Hobbies & Interests</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="
            border border-gray-300 dark:border-gray-700 
            rounded p-4 mb-4 
            bg-white dark:bg-gray-900
            text-gray-900 dark:text-gray-100
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Hobby {index + 1}</h3>
            <button
              onClick={() => {
                const updated = data.filter((_, i) => i !== index);
                onUpdate(updated);
              }}
              className="text-red-500 text-xs hover:text-red-700"
            >
              Delete
            </button>
          </div>

          {/* Hobby Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Hobby</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                const updated = [...data];
                updated[index].name = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full border border-gray-300 dark:border-gray-700 
                rounded p-2 
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
              "
              placeholder="e.g. Reading, Traveling, Music…"
            />
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          onUpdate([...data, { name: "" }])
        }
        className="px-4 py-2 bg-indigo-600 text-white rounded shadow mt-2"
      >
        + Add Hobby
      </button>
    </div>
  );
}
