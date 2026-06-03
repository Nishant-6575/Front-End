export default function ProjectCard({
  title,
  description,
  year,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
        {year}
      </span>
    </div>
  );
}