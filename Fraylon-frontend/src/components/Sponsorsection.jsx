const sponsors = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
];

const SponsorSection = () => {
  const allSponsors = [...sponsors, ...sponsors];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest mb-2 bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
          Trusted By Industry Leaders
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
          Our Sponsors
        </h3>
        <div className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 via-green-500 to-blue-500" />
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-12 animate-marquee w-max">
          {allSponsors.map((sponsor, i) => (
            <div
              key={`${sponsor.name}-${i}`}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white min-w-[160px] shrink-0 hover:shadow-lg hover:border-teal-400 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
              <span className="mt-3 text-xs font-medium text-gray-500">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mx-auto mt-16 h-0.5 w-full max-w-md rounded-full bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 opacity-30" />
      </div>
    </section>
  );
};

export default SponsorSection;