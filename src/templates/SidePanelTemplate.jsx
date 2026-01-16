import React from "react";

export default function SidePanelTemplate({ sections }) {
  const get = (type) => sections.find((s) => s.type === type)?.data;

  const personal = get("personal");
  const summary = get("summary");
  const experience = get("experience");
  const education = get("education");
  const skills = get("skills");
  const languages = get("languages");

  const listToText = (list) =>
    list
      ?.map((item) =>
        typeof item === "string"
          ? item
          : item.name || item.value || item.label || ""
      )
      .filter(Boolean)
      .join(", ");

  return (
    <div className="max-w-[900px] mx-auto bg-white text-black font-sans flex">

      {/* ===== LEFT SIDEBAR ===== */}
      <aside className="w-[30%] bg-gray-100 p-6">

        <h1 className="text-2xl font-bold mb-2">
          {personal?.fullName || "Your Name"}
        </h1>

        <div className="text-sm text-gray-700 space-y-1 mb-6">
          {personal?.email && <p>{personal.email}</p>}
          {personal?.phone && <p>{personal.phone}</p>}
          {personal?.address && <p>{personal.address}</p>}
          {personal?.linkedin && <p>{personal.linkedin}</p>}
          {personal?.github && <p>{personal.github}</p>}
          {personal?.portfolio && <p>{personal.portfolio}</p>}
        </div>

        {skills?.length > 0 && (
          <SidebarSection title="Skills">
            <p className="text-sm">{listToText(skills)}</p>
          </SidebarSection>
        )}

        {languages?.length > 0 && (
          <SidebarSection title="Languages">
            <p className="text-sm">{listToText(languages)}</p>
          </SidebarSection>
        )}
      </aside>

      {/* ===== RIGHT CONTENT ===== */}
      <main className="w-[70%] p-8">

        {summary?.text && (
          <Section title="Summary">
            <p className="text-sm">{summary.text}</p>
          </Section>
        )}

        {experience?.length > 0 && (
          <Section title="Experience">
            {experience.map((item, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold">
                  {item.role} — {item.company}
                </p>
                <p className="text-xs text-gray-500">
                  {item.start} – {item.end}
                </p>
                <p className="text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </Section>
        )}

        {education?.length > 0 && (
          <Section title="Education">
            {education.map((e, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-gray-600">{e.school}</p>
              </div>
            ))}
          </Section>
        )}
      </main>
    </div>
  );
}

/* ===== Helpers ===== */

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </section>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div className="mb-5">
      <h3 className="text-sm font-bold uppercase mb-1">{title}</h3>
      {children}
    </div>
  );
}
