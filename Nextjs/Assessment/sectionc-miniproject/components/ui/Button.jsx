export default function Button({
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className="
      bg-indigo-600
      hover:bg-indigo-700
      text-white
      px-4
      py-3
      rounded-lg
      font-medium"
    >
      {children}
    </button>
  );
}