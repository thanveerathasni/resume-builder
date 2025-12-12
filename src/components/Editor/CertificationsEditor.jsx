import React from "react";

export default function CertificationsEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Certifications</h2>

      {data.map((cert, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
        >
          {/* TITLE */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Certification Title</label>
            <input
              type="text"
              value={cert.title}
              onChange={(e) => {
                const updated = [...data];
                updated[index].title = e.target.value;
                onUpdate(updated);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
              placeholder="Google UX Design, AWS Cloud Practitioner..."
            />
          </div>

          {/* ORGANIZATION */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Issued By</label>
            <input
              type="text"
              value={cert.issuer}
              onChange={(e) => {
                const updated = [...data];
                updated[index].issuer = e.target.value;
                onUpdate(updated);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
              placeholder="Google, Meta, Coursera..."
            />
          </div>

          {/* YEAR */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Year / Validity</label>
            <input
              type="text"
              value={cert.year}
              onChange={(e) => {
                const updated = [...data];
                updated[index].year = e.target.value;
                onUpdate(updated);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
              placeholder="2023, Valid till 2026, etc."
            />
          </div>

          {/* DELETE */}
          <button
            onClick={() => {
              const updated = data.filter((_, i) => i !== index);
              onUpdate(updated);
            }}
            className="text-red-500 text-sm hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}

      {/* ADD NEW CERTIFICATION */}
      <button
        onClick={() =>
          onUpdate([
            ...data,
            { title: "", issuer: "", year: "" }
          ])
        }
        className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700"
      >
        + Add Certification
      </button>

    </div>
  );
}
