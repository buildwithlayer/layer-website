import Image from "next/image";

const Investors = () => {
  const investors = [
    {
      name: "Drive Capital",
      logo: "/drive-logo.png",
      url: "https://www.drivecapital.com/",
    },
    {
      name: "Resolute Ventures",
      logo: "/resolute-logo.png",
      url: "https://www.resolute.vc/",
    },
    {
      name: "1517 Fund",
      logo: "/1517-logo.png",
      url: "https://www.1517fund.com/",
    },
    {
      name: "Expansion VC",
      logo: "/expansion-logo.png",
      url: "https://www.expansionvc.com/",
    },
    {
      name: "Detroit Venture Partners",
      logo: "/detroit-logo.png",
      url: "https://www.detroit.vc/",
    },
    {
      name: "Alumni Ventures",
      logo: "/alumni-logo.png",
      url: "https://www.av.vc/",
    },
  ];

  return (
    <div className="flex flex-col gap-3 items-center mt-6">
      <div className="bg-gray-100 border-[1px] border-gray-200 rounded-[16px] py-1 px-3">
        <p className="text-gray-600 text-[.8rem] whitespace-pre">
          {`Backed by some of the best  🚀`}
        </p>
      </div>
      <div className="flex gap-8 items-center justify-center p-2 flex-wrap">
        {investors.map((investor) => (
          <a href={investor.url} target="_blank" key={investor.name}>
            <Image
              src={investor.logo}
              alt={investor.name + " Logo"}
              style={{ height: "16px" }}
            ></Image>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Investors;
