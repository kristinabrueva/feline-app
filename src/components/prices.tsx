import Header from "./header";

const Prices: React.FunctionComponent = () => {
  return (
    <section className="lg:mt-20 mt-24">
      <Header text="Price plan" />
      <div
        style={{
          backgroundImage: `url('https://uploads-ssl.webflow.com/6207dfcde6b2c229418d9e73/6207f36f5e57f0bc9b0e3f66_figure-1.png')`,
        }}
        className="mt-4 p-10 flex lg:flex-row flex-col w-full gap-10"
      >
        <div className="zoom-in-transition rounded-3xl flex-grow p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 backdrop-blur-sm sm:mx-8 lg:mx-0 lg:rounded-tr-3xl ">
          <h3
            id="tier-team"
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Buy
          </h3>
          <p className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
            800 AUD
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            You can search cat breeds by temperament, physical needs, potential
            health needs and even lifespan
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Possible genetic defects
            </li>

            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Breeding pets is not eco friendly
            </li>

            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Purebred cats&apos;s lifespans don&apos;t tend to be as long as
              more genetically diverse cats
            </li>
          </ul>
        </div>
        <div className="zoom-in-transition rounded-3xl flex-grow p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 backdrop-blur-sm sm:mx-8 lg:mx-0 lg:rounded-tr-3xl ">
          <h3
            id="tier-team"
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Adopt
          </h3>
          <p className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
            250 AUD
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            The cat of your dreams may be waiting for you in a shelter.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              A better option for our planet
            </li>

            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Usually hugely adaptable
            </li>

            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              The fee cover vaccinations and desexing
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prices;
