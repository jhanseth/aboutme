import {
  CommandLineIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Creating Mission-Critical Applications",
    description: (
      <span>
        Successfully designed and built a new Site Management Application. Used
        in a multi-level security{" "}
        <a
          href="https://digitaltmesseverktoy.thales.no/products/acecom"
          target="blank"
        >
          <span className="text-indigo-600 hover:text-indigo-500">
            Voice Communication System
          </span>
        </a>
        .
      </span>
    ),
    icon: CommandLineIcon,
  },
  {
    name: "Leadership Experience",
    description:
      "Former Sergeant in the Armed Forces. Developed strong communication and problem-solving skills through experience in complex training exercises.",
    icon: UserGroupIcon,
  },
  {
    name: "Balancing Functionality & Aesthetics",
    description:
      " I strive for clean and intuitive interfaces that prioritize clarity and functionality without compromising aesthetics.",
    icon: SparklesIcon,
  },
  {
    name: "Building Community - Company Culture",
    description:
      "Leveraging my passion for fostering a positive work environment, I actively participate in the Thales Sports team & Social Committee as a board member.",
    icon: HeartIcon,
  },
];

function AboutMe() {
  return (
    <>
      <div className="bg-white py-10 sm:pt-26">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hello there! I'm Jakob 👋
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a problem solver that enjoys building things and working
              collaboratively. Currently working as a Software Engineer at
              Thales Norway.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
