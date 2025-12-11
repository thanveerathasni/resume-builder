import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function MainLayout({
  sidebar,
  editor,
  preview,
  theme,
  toggleTheme,
  template,
  setTemplate
}) {
  const [tab, setTab] = useState("editor");

  return (
    <div className="
      h-screen flex flex-col 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-gray-100
    ">
      
      {/* HEADER */}
      <header
        className="
          h-14 flex items-center justify-between px-6 
          bg-white dark:bg-gray-900 
          border-b border-gray-200 dark:border-gray-700
          shadow-sm
        "
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-brand text-white flex items-center justify-center font-semibold">
            RB
          </div>
          <h1 className="text-lg font-semibold">Resume Builder</h1>
        </div>

        {/* THEME BUTTON */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:opacity-80"
          >
            {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>

          {/* TEMPLATE SWITCH */}
          <button
            onClick={() =>
              setTemplate(template === "minimal" ? "enhanced" : "minimal")
            }
            className="
              px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 
              text-xs hover:opacity-80
            "
          >
            {template === "minimal" ? "Enhanced Template" : "Minimal Template"}
          </button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Build smart resumes
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
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

        {/* MAIN CONTENT */}
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
                  ? "text-brand font-semibold border-b-2 border-brand"
                  : "text-gray-500"
              }`}
            >
              Sections
            </button>

            <button
              onClick={() => setTab("editor")}
              className={`flex-1 p-3 text-sm ${
                tab === "editor"
                  ? "text-brand font-semibold border-b-2 border-brand"
                  : "text-gray-500"
              }`}
            >
              Editor
            </button>

            <button
              onClick={() => setTab("preview")}
              className={`flex-1 p-3 text-sm ${
                tab === "preview"
                  ? "text-brand font-semibold border-b-2 border-brand"
                  : "text-gray-500"
              }`}
            >
              Preview
            </button>
          </div>

          {/* DESKTOP EDITOR */}
          <div className="hidden md:block p-6">
            {editor}
          </div>

          {/* MOBILE SWITCH */}
          <div className="md:hidden p-4">
            {tab === "sidebar" && sidebar}
            {tab === "editor" && editor}
            {tab === "preview" && preview}
          </div>
        </main>

        {/* PREVIEW */}
        <aside
          className="
            hidden md:block w-[420px] 
            bg-gray-50 dark:bg-gray-800
            border-l border-gray-200 dark:border-gray-700
            overflow-auto
          "
        >
          {preview}
        </aside>
      </div>
    </div>
  );
}
