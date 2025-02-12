import Overview from "./_components/sections/overview/Overview";

export default function Home() {
  const sections = [Overview];
  return (
    <div className="flex flex-col w-full items-center px-4">
      {sections.map((Section) => (
        <Section key={Section.name} />
      ))}
    </div>
  );
}
