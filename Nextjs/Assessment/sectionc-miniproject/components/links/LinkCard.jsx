export default function LinkCard({
  title,
  url,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
      block
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      p-5"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-800">
            {title}
          </h3>

          <p className="text-sm text-gray-500 truncate">
            {url}
          </p>
        </div>

        <div className="text-indigo-600 text-xl">
          →
        </div>
      </div>
    </a>
  );
}