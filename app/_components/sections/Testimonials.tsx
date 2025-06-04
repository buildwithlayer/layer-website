import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col items-center border-[1px] border-gray-900 rounded-md">
      <p className="text-2xl p-4 text-center">"{quote}"</p>
      <div className="flex gap-3 items-center border-t-[1px] border-gray-900 w-full p-2">
        <Image
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full"
          width={128}
          height={128}
        />
        <div className="flex flex-col text-left gap-1">
          <p className="font-medium text-lg/none">{name}</p>
          <p className="text-sm/none text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      name: "John Smith",
      title: "CTO @ ABC Co.",
      quote: "Pariatur et sunt quis ea aute est proident id.",
      imageSrc: "/placeholder-person.png",
    },
    {
      name: "John Smith 2",
      title: "CTO @ ABC Co.",
      quote: "Pariatur et sunt quis ea aute est proident id.",
      imageSrc: "/placeholder-person.png",
    },
  ];
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative p-8 md:px-16 border-x-[1px] border-x-gray-900">
        <h2 className="section-header">TESTIMONIALS</h2>
        <div className="flex gap-4 flex-col md:flex-row">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
