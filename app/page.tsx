import Build from "./_components/sections/build/Build";
import Details from "./_components/sections/details/Details";
import Overview from "./_components/sections/overview/Overview";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center px-4">
      <Overview />
      <Build />
      <Details />
    </div>
  );
}
