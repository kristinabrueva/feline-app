import Image from "next/image";

const Features: React.FunctionComponent = () => {
  return (
    <div className="mt-20 flow-root p-10 relative h-fit">
      <div className="-z-50">
        <Image
          height={235}
          width={235}
          alt="gemetrical fugure on the background"
          src="https://uploads-ssl.webflow.com/6207dfcde6b2c229418d9e73/620fd028b7dbdd2b6c7bd42c_feature-1.png"
          className="absolute top-12 left-0 "
        />
        <Image
          height={317}
          width={317}
          alt="gemetrical fugure on the background"
          src="https://uploads-ssl.webflow.com/6207dfcde6b2c229418d9e73/620fd659a117ef989bc2b15d_feature-3.png"
          className="absolute lg:right-1/3 lg:bottom-0 right-0 top-1/3"
        />
        <Image
          height={420}
          width={420}
          alt="gemetrical fugure on the background"
          src="https://uploads-ssl.webflow.com/6207dfcde6b2c229418d9e73/620fd6dd43008681a25c2ba0_feature-2.png"
          className="absolute -bottom-20 left-0 lg:-top-20 lg:right-0 lg:left-auto"
        />
      </div>
      <div className="rounded-3xl ring-1 ring-gray-900/10 bg-white/60 backdrop-blur-sm px-12 pb-20 pt-6 ">
        <div className="isolate grid grid-cols-1 gap-y-8 sm:gap-y-16 divide-y-2 divide-purple-200 sm:mx-8 lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-y-0 lg:divide-x-2 xl:-mx-4 lg:py-[50px] py-10 ">
          <div className="lg:px-8 xl:px-14 sm:mx-8 lg:mx-0 pt-5 sm:pt-14">
            <h3
              id="tier-basic"
              className="text-4xl font-normal leading-7 text-gray-900"
            >
              Flexible
            </h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-xl tracking-tight text-gray-900">
                Cats are able to rotate their supple spines more than many other
                animals and can twist their bodies to a much greater extent.
              </span>
            </p>

            <ul
              role="list"
              className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Rotate their torso up to 90 degrees
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Have especially elastic cushioning disks between bones
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Shoulder blade is attached to the rest of the body only by
                muscles
              </li>
            </ul>
          </div>
          <div className="lg:px-8 xl:px-14 sm:mx-8 lg:mx-0 pt-5 sm:pt-14">
            <h3
              id="tier-basic"
              className="text-4xl font-normal leading-7 text-gray-900"
            >
              Elegant
            </h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-xl tracking-tight text-gray-900">
                Cats are role models on how to be elegant
              </span>
            </p>

            <ul
              role="list"
              className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Have a righting reflex, which allows them land safely on their
                feet
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Their paws are soft and padded, which helps them jump around
                quietly.
              </li>
            </ul>
          </div>
          <div className="lg:px-8 xl:px-14 sm:mx-8 lg:mx-0 pt-5 sm:pt-14">
            <h3
              id="tier-basic"
              className="text-4xl font-normal leading-7 text-gray-900"
            >
              Clever
            </h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-xl tracking-tight text-gray-900">
                Cat intelligence is the capacity of the domesticated cat to
                solve problems and adapt to its environment.
              </span>
            </p>

            <ul
              role="list"
              className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Have excellent memories
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Have an information-retention or recall of a duration up to 10
                years
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Have fully developed concepts of object permanence
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
