import React, { createRef, useEffect, useState } from "react";
import Button from "@dcm/components/button";
import { SearchIcon } from "@dcm/components/search-icon";

interface Props {
  data: string[];
  // eslint-disable-next-line no-unused-vars
  onSearch: (searchTerm: string) => void;
}

const Navigator: React.FC<Props> = (props) => {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const inputRef = createRef<HTMLInputElement>();
  useEffect(() => {
    if (!searchMode) {
      props.onSearch("");
      if (inputRef.current) inputRef.current.value = "";
    }
    if (searchMode && inputRef.current) inputRef.current.focus();
  }, [inputRef, props, searchMode]);

  return (
    <div className="flex flex-row flex-nowrap w-full h-fit">
      <div
        className="h-8 w-8 flex justify-center items-center"
        style={{ width: searchMode ? "100%" : "initial" }}
      >
        <div className="w-fit h-fit pr-2 border-r border-solid border-bookBlue">
          <div
            className="w-full h-full flex justify-center items-center cursor-pointer"
            onClick={() => setSearchMode(!searchMode)}
          >
            <SearchIcon />
          </div>
        </div>
        <input
          className={`bg-transparent border-b border-bookBlue outline-bookBlue ${
            searchMode && "mx-3"
          }`}
          ref={inputRef}
          style={{ width: searchMode ? "100%" : 0 }}
          tabIndex={searchMode ? 1 : -1}
          role="search"
          onChange={(event) => props.onSearch(event.currentTarget.value)}
          placeholder="això"
        />
      </div>
      <div
        className="w-full h-fit overflow-x-auto"
        style={{ width: searchMode ? 0 : "100%" }}
      >
        <ul className="mx-auto w-fit h-fit flex flex-row flex-nowrap">
          {props.data.map((i) => (
            <li
              key={i}
              className="uppercase w-8 h-8 overflow-hidden flex justify-center items-center"
            >
              <div
                className="w-fit h-fit"
                onClick={() => {
                  const element = document.getElementById(i);
                  if (element)
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                <Button
                  active={false}
                  extraClasses="flex justify-center items-center"
                >
                  {i}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
