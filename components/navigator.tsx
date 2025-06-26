import Button from "@dcm/components/button";
import SearchIcon from "@dcm/components/search-icon";
import type React from "react";
import { createRef, useEffect, useState } from "react";

interface Props {
  data: string[];
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
        <div className="border-book-blue h-fit w-fit border-r border-solid pr-2">
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center"
            onClick={() => setSearchMode(!searchMode)}
            onKeyDown={() => setSearchMode(!searchMode)}
          >
            <SearchIcon />
          </div>
        </div>
        <input
          className={`border-book-blue outline-book-blue border-b bg-transparent ${
            searchMode && "mx-3"
          }`}
          ref={inputRef}
          style={{ width: searchMode ? "100%" : 0 }}
          tabIndex={searchMode ? 1 : -1}
          role="searchbox"
          aria-roledescription="buscador de paraules i descripcions"
          onChange={(event) => props.onSearch(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSearchMode(false);
            }
          }}
          placeholder="això"
        />
      </div>
      <div
        className="h-fit w-full overflow-x-auto"
        style={{ width: searchMode ? 0 : "100%" }}
      >
        <ul className="mx-auto flex h-fit w-fit flex-row flex-nowrap">
          {props.data.map((value) => (
            <li
              key={value}
              className="flex h-8 w-8 items-center justify-center overflow-hidden uppercase"
            >
              <a href={`#${value}`}>
                <div className="h-fit w-fit">
                  <Button
                    active={false}
                    extraClasses="flex justify-center items-center cursor-pointer"
                  >
                    {value}
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
