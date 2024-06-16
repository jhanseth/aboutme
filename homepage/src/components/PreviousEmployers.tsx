export default function PreviousEmployers() {
  return (
    <div className="bg-white pt-32 sm:py-26">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center leading-8 font-bold sm:text-2xl">
          Previous employers 💼
        </h1>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./easy_ad_logo.svg"
            alt="easyAdLogo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
            src="./kriminalomsorgen_logo.png"
            alt="kriminalomsorgenLogo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./power_logo.png"
            alt="powerLogo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./forsvaret_logo.png"
            alt="forsvaretLogo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="./operaen_logo.png"
            alt="operaenLogo"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
