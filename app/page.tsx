import Build from "./_components/sections/build/Build";
import Details from "./_components/sections/details/Details";
import Overview from "./_components/sections/overview/Overview";

export default function Home() {
  const sections = [Overview, Build, Details];
  return (
    <div className="flex flex-col w-full items-center px-4">
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
