export default function ProfileHeader({ name, bio }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 text-center mb-6">
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mb-5 flex items-center justify-center text-white text-4xl font-bold">
        {name?.charAt(0)}
      </div>

      <h1 className="text-3xl font-bold text-gray-800">
        {name}
      </h1>

      <p className="text-gray-500 mt-2">
        {bio}
      </p>
    </div>
  );
}