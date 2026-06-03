"use client";

import { useState } from "react";

export default function EditProfileForm({
  profile,
  onSave,
}) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Edit Profile
      </h2>

      <div className="space-y-4">
        <input
          value={name}
          placeholder="Name"
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <textarea
          value={bio}
          placeholder="Bio"
          rows="3"
          onChange={(e) =>
            setBio(e.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <button
          onClick={() =>
            onSave({ name, bio })
          }
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}