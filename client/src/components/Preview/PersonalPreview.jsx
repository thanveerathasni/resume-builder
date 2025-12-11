import React from "react";

export default function PersonalPreview({ data, template }) {
  if (!data) return null;

  // ---- ATS VERSION ----
  if (template === "minimal") {
    return (
      <div className="text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
        {data.fullName}
        {"\n"}
        {data.email}
        {"\n"}
        {data.phone}
        {"\n"}
        {data.address}
        {"\n"}
        LinkedIn: {data.linkedin}
        {"\n"}
        GitHub: {data.github}
        {"\n"}
        Portfolio: {data.portfolio}
      </div>
    );
  }

  // ---- ENHANCED VERSION ----
  return (
    <div className="pb-6 border-b mb-6 border-gray-300 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        {data.fullName || "Your Name"}
      </h1>

      <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
        {data.email && <div>{data.email}</div>}
        {data.phone && <div>{data.phone}</div>}
        {data.address && <div>{data.address}</div>}

        {data.linkedin && <div className="text-blue-500">LinkedIn: {data.linkedin}</div>}
        {data.github && <div>GitHub: {data.github}</div>}
        {data.portfolio && <div>Portfolio: {data.portfolio}</div>}
      </div>
    </div>
  );
}
