import React from "react";

export default function ReferencesPreview({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">References</h2>

      <div className="space-y-3 text-sm">
        {data.map((ref, idx) => (
          <div key={idx} className="leading-relaxed">
            <div className="font-semibold">{ref.name || "Name"}</div>
            <div>
              {ref.position || "Position"} — {ref.company || "Company"}
            </div>
            {ref.email && <div>Email: {ref.email}</div>}
            {ref.phone && <div>Phone: {ref.phone}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
