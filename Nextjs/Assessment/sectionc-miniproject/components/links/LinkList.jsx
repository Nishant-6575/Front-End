import LinkCard from "./LinkCard";

export default function LinkList({ links }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">
        My Links
      </h2>

      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
        />
      ))}
    </div>
  );
}