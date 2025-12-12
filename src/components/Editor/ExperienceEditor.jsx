import React from "react";

export default function ExperienceEditor({ data = [], onUpdate }) {
  
  const updateField = (index, field, value) => {
    const copy = [...data];
    copy[index][field] = value;
    onUpdate(copy);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      {data.map((item, index) => (
        <div 
          key={index} 
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 mb-5"
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Experience {index + 1}</h3>

            <button 
              onClick={() => {
                const filtered = data.filter((_, i) => i !== index);
                onUpdate(filtered);
              }}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Delete
            </button>
          </div>

          {/* Company */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Company</label>
            <input
              type="text"
              value={item.company}
              onChange={(e) => updateField(index, "company", e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
              placeholder="Company name"
            />
          </div>

          {/* Role */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Role</label>
            <input
              type="text"
              value={item.role}
              onChange={(e) => updateField(index, "role", e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
              placeholder="Job Title / Position"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="text"
                value={item.start}
                onChange={(e) => updateField(index, "start", e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
                placeholder="Jan 2021"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="text"
                value={item.end}
                onChange={(e) => updateField(index, "end", e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
                placeholder="Dec 2023 / Present"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Description</label>
            <textarea
              value={item.description}
              onChange={(e) =>
                updateField(index, "description", e.target.value)
              }
              className="w-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded h-28 resize-none"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}

      {/* ADD BUTTON */}
      <button
        onClick={() =>
          onUpdate([
            ...data,
            {
              company: "",
              role: "",
              start: "",
              end: "",
              description: ""
            }
          ])
        }
        className="px-4 py-2 bg-brand text-white rounded"
      >
        + Add Experience
      </button>

    </div>
  );
}
