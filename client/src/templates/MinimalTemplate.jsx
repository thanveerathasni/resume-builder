import React from "react";

export default function MinimalTemplate({ sections }) {
  const get = (type) => sections.find((s) => s.type === type)?.data;

  // BASIC
  const personal = get("personal");
  const summary = get("summary");

  // LIST / ARRAY
  const experience = get("experience");
  const education = get("education");
  const projects = get("projects");
  const skills = get("skills");
  const languages = get("languages");
  const softskills = get("softskills");
  const hobbies = get("hobbies");

  // COMPLEX
  const certifications = get("certifications");
  const awards = get("awards");
  const references = get("references");
  const customSections = sections.filter((s) => s.type === "custom");

  // SAFE LIST RENDERER
  const listToText = (list) =>
    list
      ?.map((item) =>
        typeof item === "string"
          ? item
          : item.name || item.value || item.label || ""
      )
      .filter(Boolean)
      .join(" • ");

  return (
    <div className="max-w-[800px] mx-auto bg-white text-black px-10 py-12 font-sans leading-relaxed">

      {/* ===== HEADER / PERSONAL INFO ===== */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {personal?.fullName || "Your Name"}
        </h1>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          {personal?.email && <p>{personal.email}</p>}
          {personal?.phone && <p>{personal.phone}</p>}
          {personal?.address && <p>{personal.address}</p>}
          {personal?.linkedin && <p>LinkedIn: {personal.linkedin}</p>}
          {personal?.github && <p>GitHub: {personal.github}</p>}
          {personal?.portfolio && <p>Portfolio: {personal.portfolio}</p>}
        </div>
      </header>

      <Divider />

      {/* ===== SUMMARY ===== */}
      {summary?.text && (
        <Section title="Summary">
          <p className="text-sm">{summary.text}</p>
        </Section>
      )}

      {/* ===== EXPERIENCE ===== */}
      {experience?.length > 0 && (
        <Section title="Experience">
          {experience.map((item, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between">
                <p className="font-semibold">
                  {item.role} — {item.company}
                </p>
                <p className="text-xs text-gray-500">
                  {item.start} {item.end && `– ${item.end}`}
                </p>
              </div>
              {item.description && (
                <p className="mt-1 text-sm">{item.description}</p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ===== PROJECTS ===== */}
      {projects?.length > 0 && (
        <Section title="Projects">
          {projects.map((p, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium">{p.name}</p>
              {p.link && (
                <p className="text-xs text-gray-500">{p.link}</p>
              )}
              {p.description && (
                <p className="text-sm">{p.description}</p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ===== SKILLS ===== */}
      {skills?.length > 0 && (
        <Section title="Skills">
          <p className="text-sm">{listToText(skills)}</p>
        </Section>
      )}

      {/* ===== CERTIFICATIONS ===== */}
      {certifications?.length > 0 && (
        <Section title="Certifications">
          {certifications.map((c, i) => (
            <p key={i} className="text-sm">
              {c.title}
              {c.issuer && ` — ${c.issuer}`}
              {c.year && ` (${c.year})`}
            </p>
          ))}
        </Section>
      )}

      {/* ===== AWARDS ===== */}
      {awards?.length > 0 && (
        <Section title="Awards">
          {awards.map((a, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{a.title}</p>
              {(a.issuer || a.year) && (
                <p className="text-sm text-gray-600">
                  {a.issuer} {a.year && `(${a.year})`}
                </p>
              )}
              {a.description && (
                <p className="text-sm">{a.description}</p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ===== LANGUAGES ===== */}
      {languages?.length > 0 && (
        <Section title="Languages">
          <p className="text-sm">{listToText(languages)}</p>
        </Section>
      )}

      {/* ===== SOFT SKILLS ===== */}
      {softskills?.length > 0 && (
        <Section title="Soft Skills">
          <p className="text-sm">{listToText(softskills)}</p>
        </Section>
      )}

      {/* ===== HOBBIES ===== */}
      {hobbies?.length > 0 && (
        <Section title="Hobbies">
          <p className="text-sm">{listToText(hobbies)}</p>
        </Section>
      )}

      {/* ===== REFERENCES ===== */}
      {references?.length > 0 && (
        <Section title="References">
          {references.map((r, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{r.name}</p>
              <p className="text-sm">
                {r.position}, {r.company}
              </p>
              <p className="text-sm text-gray-600">
                {r.email} • {r.phone}
              </p>
            </div>
          ))}
        </Section>
      )}

      {/* ===== CUSTOM SECTIONS ===== */}
      {customSections.map((sec) => (
        <Section key={sec.id} title={sec.data.title}>
          {sec.data.items.map((item, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{item.heading}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </Section>
      ))}

      {/* ===== EDUCATION ===== */}
      {education?.length > 0 && (
        <Section title="Education">
          {education.map((e, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-gray-600">{e.school}</p>
            </div>
          ))}
        </Section>
      )}
    </div>
  );
}

/* ===== Helpers ===== */

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-700">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Divider() {
  return <hr className="my-6 border-gray-300" />;
}
