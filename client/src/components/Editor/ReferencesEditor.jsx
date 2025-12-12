import React from "react";

export default function ReferencesEditor({ data, onUpdate }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">References</h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="
            border border-gray-300 dark:border-gray-700 
            rounded p-4 mb-4
            bg-white dark:bg-gray-900
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Reference {index + 1}</h3>

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

          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                const updated = [...data];
                updated[index].name = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full p-2 rounded
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
              "
              placeholder="Reference Person Name"
            />
          </div>

          {/* Position */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Position</label>
            <input
              type="text"
              value={item.position}
              onChange={(e) => {
                const updated = [...data];
                updated[index].position = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full p-2 rounded
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
              "
              placeholder="Manager, Team Lead…"
            />
          </div>

          {/* Company */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              value={item.company}
              onChange={(e) => {
                const updated = [...data];
                updated[index].company = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full p-2 rounded
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
              "
              placeholder="ABC Pvt Ltd"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={item.email}
              onChange={(e) => {
                const updated = [...data];
                updated[index].email = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full p-2 rounded
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
              "
              placeholder="contact@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              value={item.phone}
              onChange={(e) => {
                const updated = [...data];
                updated[index].phone = e.target.value;
                onUpdate(updated);
              }}
              className="
                w-full p-2 rounded
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
              "
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          onUpdate([
            ...data,
            { name: "", position: "", company: "", email: "", phone: "" },
          ])
        }
        className="px-4 py-2 bg-indigo-600 text-white rounded shadow mt-2"
      >
        + Add Reference
      </button>
    </div>
  );
}
