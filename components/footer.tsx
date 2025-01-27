import type { FC } from "react";

const corito = (
  <svg
    version="1.1"
    width="26px"
    height="23px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 19.21 17.25"
    enableBackground="new 0 0 19.21 17.25"
    xmlSpace="preserve"
  >
    <title>Cor</title>
    <g>
      <path
        className="fill-book-blue dark:fill-blue-200"
        d="M19.122,4.853
		c-0.571-4.542-6.469-6.611-9.489-2.982C9.622,1.884,9.61,1.898,9.598,1.912C6.74-1.558,1.117,0.011,0.197,4.381
		C0.082,4.793-0.009,5.505-0.096,5.93H0.01V6.5l0.043,0.208c0.636,4.291,4.775,6.676,7.598,9.345
		c0.513,0.414,1.269,1.267,1.965,1.198c0.711,0.072,1.508-0.838,2.031-1.257C14.968,12.973,20.011,9.824,19.122,4.853z
		 M5.083,11.047c-1.675-1.529-3.274-3.338-2.996-5.57c0.294-3.635,4.751-4.687,6.49-1.48c0.366,0.582,1.03,0.769,1.571,0.447
		c0.627-0.445,1.044-1.45,1.671-1.786c3.82-2.334,6.88,2.76,4.436,6.003c-1.89,2.604-4.36,4.218-6.653,6.333
		C8.111,13.713,6.549,12.357,5.083,11.047z"
      />
    </g>
  </svg>
);

const Footer: FC = () => (
  <footer className="mx-auto mt-8 mb-10 h-fit w-full max-w-4xl">
    <div className="mx-auto flex h-auto w-7 flex-row flex-nowrap content-center justify-center">
      {corito}
    </div>
  </footer>
);

export default Footer;
