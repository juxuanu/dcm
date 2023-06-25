import React from "react";
import Button from "@dcm/components/button";

interface Props {
  data: string[];
}

const Navigator: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-fit overflow-x-auto">
      <ul className="mx-auto w-fit h-fit flex flex-row flex-nowrap">
        {props.data.map((i) => (
          <li
            key={i}
            className="uppercase w-8 h-8 overflow-hidden flex justify-center items-center"
          >
            <Button
              active={false}
              extraClasses="flex justify-center items-center"
            >
              <div
                onClick={() => {
                  const element = document.getElementById(i);
                  if (element)
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                {i}
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigator;
