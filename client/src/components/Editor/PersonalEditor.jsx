import React from "react";

export default function PersonalEditor({ data, onUpdate }) {
<<<<<<< HEAD

  function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    onUpdate({
      ...data,
      photo: reader.result, // base64
    });
  };
  reader.readAsDataURL(file);
}

=======
>>>>>>> dev
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
<<<<<<< HEAD
      <div className="mb-4">
  <label className="block text-sm font-medium mb-1">
    Profile Photo
  </label>

  {data.photo && (
    <img
      src={data.photo}
      alt="Profile"
      className="w-24 h-24 rounded-full object-cover mb-2 border"
    />
  )}

  <input
    type="file"
    accept="image/*"
    onChange={handlePhotoUpload}
  />
</div>

=======
>>>>>>> dev

      {/* Reusable input component */}
      {[
        ["Full Name", "fullName", "text"],
        ["Email", "email", "email"],
        ["Phone", "phone", "text"],
        ["Address", "address", "text"],
        ["LinkedIn", "linkedin", "text"],
        ["GitHub", "github", "text"],
        ["Portfolio", "portfolio", "text"],
      ].map(([label, key, type]) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            {label}
          </label>

          <input
            type={type}
            value={data[key]}
            onChange={(e) => onUpdate({ ...data, [key]: e.target.value })}
            className="
              w-full p-2 rounded 
              bg-white dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-gray-100
              focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600
              focus:outline-none
              transition
            "
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
        </div>
      ))}
    </div>
  );
}
