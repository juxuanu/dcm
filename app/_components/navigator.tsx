import React, { createRef, useEffect, useState } from "react";
import SearchIcon from "@dcm/app/_components/search-icon";
import Button from "@dcm/app/_components/button";

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
    <div className="flex h-fit w-full flex-row flex-nowrap">
      <div
        className="flex h-8 w-8 items-center justify-center"
        style={{ width: searchMode ? "100%" : "initial" }}
      >
        <div className="h-fit w-fit border-r border-solid border-bookBlue pr-2">
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center"
            onClick={() => setSearchMode(!searchMode)}
          >
            <SearchIcon />
          </div>
        </div>
        <input
          className={`border-b border-bookBlue bg-transparent outline-bookBlue ${
            searchMode && "mx-3"
          }`}
          ref={inputRef}
          style={{ width: searchMode ? "100%" : 0 }}
          tabIndex={searchMode ? 1 : -1}
          role="searchbox"
          aria-roledescription="buscador de paraules i descripcions"
          onChange={(event) => props.onSearch(event.currentTarget.value)}
          placeholder="això"
        />
      </div>
      <div
        className="h-fit w-full overflow-x-auto"
        style={{ width: searchMode ? 0 : "100%" }}
      >
        <ul className="mx-auto flex h-fit w-fit flex-row flex-nowrap">
          {props.data.map((i) => (
            <li
              key={i}
              className="flex h-8 w-8 items-center justify-center overflow-hidden uppercase"
            >
              <a href={`#${i}`}>
                <div className="h-fit w-fit">
                  <Button
                    active={false}
                    extraClasses="flex justify-center items-center"
                  >
                    {i}
                  </Button>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
