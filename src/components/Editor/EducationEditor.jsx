import React from "react";

export default function EducationEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">Education</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="
            bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            rounded-lg p-4 mb-5 shadow-sm
          "
        >
          {/* Header */}
          <div className="flex justify-between mb-3">
            <h3 className="font-medium">Education {index + 1}</h3>

            <button
              onClick={() =>
                onUpdate(data.filter((_, i) => i !== index))
              }
              className="text-red-500 text-xs hover:text-red-400"
            >
              Delete
            </button>
          </div>

          {/* Inputs */}
          {[
            ["School", "school"],
            ["Degree", "degree"],
          ].map(([label, key]) => (
            <div className="mb-3" key={key}>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                {label}
              </label>

              <input
                value={item[key]}
                onChange={(e) => {
                  const updated = [...data];
                  updated[index][key] = e.target.value;
                  onUpdate(updated);
                }}
                className="
                  w-full p-2 rounded 
                  bg-white dark:bg-gray-800
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600
                "
              />
            </div>
          ))}

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["start", "end"].map((key) => (
              <div key={key}>
                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                  {key === "start" ? "Start Date" : "End Date"}
                </label>

                <input
                  value={item[key]}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index][key] = e.target.value;
                    onUpdate(updated);
                  }}
                  className="
                    w-full p-2 rounded 
                    bg-white dark:bg-gray-800
                    border border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-gray-100
                    focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600
                  "
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-3">
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
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
                w-full p-2 rounded h-24 resize-none
                bg-white dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-gray-100
                focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600
              "
            />
          </div>
        </div>
      ))}

      {/* Add Button */}
      <button
        onClick={() =>
          onUpdate([
            ...data,
            {
              school: "",
              degree: "",
              start: "",
              end: "",
              description: "",
            },
          ])
        }
        className="
          mt-4 px-4 py-2 bg-indigo-600 text-white rounded
          hover:bg-indigo-700 dark:hover:bg-indigo-500
        "
      >
        + Add Education
      </button>
    </div>
  );
}
