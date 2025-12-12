import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function MainLayout({
  sidebar,
  editor,
  preview,
  theme = "light",
  toggleTheme = () => {},
  template = "minimal",
  setTemplate = () => {}
}) {
  const [tab, setTab] = React.useState("editor");

  return (
    <div
      className="
        h-screen flex flex-col 
        bg-white dark:bg-gray-900 
        text-gray-900 dark:text-gray-100
        transition-colors duration-200
      "
    >
      {/* HEADER */}
      <header
        className="
          h-14 flex items-center justify-between px-4 md:px-6
          bg-white dark:bg-gray-900
          border-b border-gray-200 dark:border-gray-700
          shadow-sm
        "
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-indigo-600 text-white flex items-center justify-center font-semibold">
            RB
          </div>
          <h1 className="text-lg font-semibold">Resume Builder</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* TEMPLATE SWITCH */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setTemplate("minimal")}
              className={`
                px-2 py-1 rounded text-xs transition
                ${
                  template === "minimal"
                    ? "bg-gray-200 dark:bg-gray-700 font-medium"
                    : "text-gray-600 dark:text-gray-300"
                }
              `}
            >
              Minimal
            </button>

            <button
              onClick={() => setTemplate("enhanced")}
              className={`
                px-2 py-1 rounded text-xs transition
                ${
                  template === "enhanced"
                    ? "bg-gray-200 dark:bg-gray-700 font-medium"
                    : "text-gray-600 dark:text-gray-300"
                }
              `}
            >
              Enhanced
            </button>
          </div>

          {/* THEME SWITCH */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-md 
              bg-gray-100 dark:bg-gray-800 
              text-gray-800 dark:text-gray-200 
              hover:opacity-90 transition
            "
          >
            {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR (Desktop only) */}
        <aside
          className="
            hidden md:block w-72
            bg-white dark:bg-gray-900
            border-r border-gray-200 dark:border-gray-700
            overflow-auto
          "
        >
          {sidebar}
        </aside>

        {/* MAIN COLUMN */}
        <main className="flex-1 overflow-auto">
          {/* MOBILE TABS */}
          <div
            className="
              md:hidden flex justify-around
              bg-white dark:bg-gray-900
              border-b border-gray-200 dark:border-gray-700
            "
          >
            <button
              onClick={() => setTab("sidebar")}
              className={`flex-1 p-3 text-sm ${
                tab === "sidebar"
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Sections
            </button>

            <button
              onClick={() => setTab("editor")}
              className={`flex-1 p-3 text-sm ${
                tab === "editor"
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Editor
            </button>

            <button
              onClick={() => setTab("preview")}
              className={`flex-1 p-3 text-sm ${
                tab === "preview"
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Preview
            </button>
          </div>

          {/* DESKTOP EDITOR */}
          <div className="hidden md:block p-6">
            <div className="max-w-4xl mx-auto">{editor}</div>
          </div>

          {/* MOBILE CONTENT */}
          <div className="md:hidden p-4">
            {tab === "sidebar" && sidebar}
            {tab === "editor" && editor}
            {tab === "preview" && preview}
          </div>
        </main>

        {/* DESKTOP PREVIEW (A4 + Fade Animation) */}
        <aside
          className="
            hidden md:block 
            w-[420px]
            bg-gray-50 dark:bg-gray-800
            border-l border-gray-200 dark:border-gray-700
            overflow-auto p-6
            flex justify-center
          "
        >
          <div
            key={template}
            className="
              fade-template fade-template-active
              bg-white dark:bg-gray-900 
              shadow-sm 
              p-6 
              w-[794px]        /* A4 width */
              min-h-[1123px]   /* A4 height */
              transition-all duration-300
            "
          >
            {preview}
          </div>
        </aside>
      </div>
    </div>
  );
}
