import BlogsAndTalks from "./_components/sections/BlogsAndTalks";
import Faq from "./_components/sections/Faq";
import Features from "./_components/sections/Features";
import Overview from "./_components/sections/Overview";
import Team from "./_components/sections/Team";
import Testimonials from "./_components/sections/Testimonials";
import WhyLayer from "./_components/sections/WhyLayer";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center px-4">
      <Overview />
      <Features />
      <WhyLayer />
      <Testimonials />
      <BlogsAndTalks />
      <Team />
      <Faq />
    </div>
  );
}
