import React from "react";

export default function HobbiesPreview({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Hobbies & Interests</h2>

      <ul className="list-disc ml-5 text-sm leading-relaxed">
        {data.map((item, index) =>
          item.name ? <li key={index}>{item.name}</li> : null
        )}
      </ul>
    </div>
  );
}
