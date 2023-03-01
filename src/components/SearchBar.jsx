import { useState } from "react";
import { SearchIcon, CrossIcon } from "./Icons";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex gap-2 p-2 align-middle bg-white rounded-md">
      <button className="m-auto">
        <SearchIcon />
      </button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for images"
        className="text-md w-full focus-visible:outline-none"
      />
      <button onClick={() => setSearch("")} className="m-auto">
        <CrossIcon />
      </button>
    </div>
  );
}

export default SearchBar;
