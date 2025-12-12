import React from "react";

export default function CertificationsPreview({ data = [], template }) {
  if (!data.length) return null;

  return (
    <div className="mb-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Certifications</h2>

      {template === "minimal" ? (
        <ul className="list-disc ml-5 text-sm space-y-1">
          {data.map((c, i) => (
            <li key={i}>
              {c.title || "Certification"} — {c.issuer || "Issuer"} ({c.year || "Year"})
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-2">
          {data.map((c, i) => (
            <div
              key={i}
              className="p-2 border-b border-gray-300 dark:border-gray-700 text-sm leading-relaxed"
            >
              <div className="font-medium">{c.title || "Certification"}</div>
              <div className="text-gray-600 dark:text-gray-300">
                {c.issuer || "Issuer"} — {c.year || "Year"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
