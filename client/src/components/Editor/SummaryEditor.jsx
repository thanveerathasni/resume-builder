import React from "react";

export default function SummaryEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>

      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
        Summary
      </label>

      <textarea
        value={data.text}
        onChange={(e) => onUpdate({ ...data, text: e.target.value })}
        className="
          w-full p-2 rounded h-40 resize-none
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-gray-100
          focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600
          focus:outline-none
          transition
        "
        placeholder="Write a short professional summary…"
      />
    </div>
  );
}
