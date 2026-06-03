export default function MobileShell({ children }) {
  return (
    <div className="min-h-screen  flex justify-center py-10 px-4">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}