import React from "react";

/**
 * Props:
 *  - data: { title: string, items: [{ heading, description }] }
 *  - onUpdate(newData)
 */
export default function CustomSectionEditor({ data = { title: "", items: [] }, onUpdate }) {
  // ensure data shape
  const section = {
    title: data.title ?? "",
    items: Array.isArray(data.items) ? data.items : []
  };

  const updateTitle = (value) => {
    onUpdate({ ...section, title: value });
  };

  const updateItem = (index, field, value) => {
    const updated = section.items.map((it, i) => (i === index ? { ...it, [field]: value } : it));
    onUpdate({ ...section, items: updated });
  };

  const addItem = () => {
    onUpdate({ ...section, items: [...section.items, { heading: "", description: "" }] });
  };

  const removeItem = (index) => {
    onUpdate({ ...section, items: section.items.filter((_, i) => i !== index) });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">Custom Section</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Section Title</label>
        <input
          type="text"
          value={section.title}
          onChange={(e) => updateTitle(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="e.g. Leadership, Publications, Extra Activities"
        />
      </div>

      {section.items.map((it, idx) => (
        <div key={idx} className="mb-4 border border-gray-200 dark:border-gray-700 rounded p-3 bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Item {idx + 1}</div>
            <button
              onClick={() => removeItem(idx)}
              className="text-red-500 dark:text-red-400 text-xs hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="mb-2">
            <label className="block text-sm mb-1">Heading</label>
            <input
              type="text"
              value={it.heading}
              onChange={(e) => updateItem(idx, "heading", e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              placeholder="e.g. Project Lead, Volunteer Coordinator"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              value={it.description}
              onChange={(e) => updateItem(idx, "description", e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-20 resize-none"
              placeholder="Short one-line description — keep it ATS-friendly."
            />
          </div>
        </div>
      ))}

      <div className="mt-2">
        <button
          onClick={addItem}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
}
