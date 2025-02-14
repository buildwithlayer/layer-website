import React from "react";
import ThumbUpIcon from "public/thumb-up-outlined.svg";
import NeonLogo from "public/neon-logo.svg";

const Details = () => {
  const benefits = [
    {
      name: "Tools",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <ThumbUpIcon />,
    },
    {
      name: "Accurate Responses",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <ThumbUpIcon />,
    },
    {
      name: "Observability",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <ThumbUpIcon />,
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-black border-b-[1px] border-gray-100 overflow-hidden">
      <div className="w-full max-w-[--content-width] flex flex-col z-10">
        {/* Top Section */}
        <div className="flex flex-col gap-[150px] py-28 relative">
          {/*
            Benefits Section
          <div className="flex w-full">
            {benefits.map((tab, index) => {
              return (
                <div key={index} className="flex flex-col gap-4 px-6 py-4">
                  <div className="flex items-center p-2 bg-gray-200 self-start rounded-md">
                    {React.cloneElement(tab.icon, {
                      className: "w-6 h-6",
                      fill: "white",
                    })}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg/none">{tab.name}</h3>
                    <p className="text-gray-400">{tab.content}</p>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Customers */}
          <div className="flex flex-col gap-12 text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">
                Powering the Agent Experience for Top APIs
              </h2>
              <p>
                Amet eu exercitation minim tempor proident laborum minim veniam
                velit ullamco.
              </p>
            </div>
            <div className="flex gap-24 opacity-50 items-center justify-center">
              <NeonLogo className="h-8" fill="white" />
              <NeonLogo className="h-8" fill="white" />
              <NeonLogo className="h-8" fill="white" />
            </div>
          </div>
          {/* End Customers */}
          {/* Gradient BG */}
          <div className="absolute bottom-0 -z-10 translate-y-[50%] -translate-x-[10%] w-full h-[800px] bg-[radial-gradient(var(--layer-pink-dark)_0%,rgba(0,0,0,0)_70%)] opacity-60"></div>
          <div className="absolute bottom-0 right-0 -z-10 translate-y-[50%] -translate-x-[30%] w-[400px] h-[400px] bg-[radial-gradient(var(--layer-purple-dark)_0%,rgba(0,0,0,0)_70%)] opacity-60"></div>
        </div>
        {/* End Top Section */}
      </div>
      <div className="w-full flex justify-center z-10 backdrop-blur-sm bg-gradient-to-b from-transparentBlack-30 to-black">
        {/* CTA Section */}
        <div className="flex flex-col gap-12 py-24 max-w-[--content-width]">
          <div className="flex flex-col gap-1 text-center">
            <h2 className="text-3xl font-semibold">
              Make your API agent-friendly
            </h2>
            <p>
              Amet eu exercitation minim tempor proident laborum minim veniam
              velit ullamco.
            </p>
          </div>
        </div>
        {/* End CTA Section */}
      </div>
    </div>
  );
};

export default Details;
