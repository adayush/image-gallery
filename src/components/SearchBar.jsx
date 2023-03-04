import { SearchIcon, CrossIcon } from "./Icons";

function SearchBar({ search, handleSearch, handleSubmit, className }) {
  return (
    <form onSubmit={handleSubmit} className={`${className || ""} flex m-auto w-full gap-2 p-2 md:max-w-2xl align-middle bg-white rounded-md`}>
      <button type="submit" className="m-auto">
        <SearchIcon />
      </button>
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for images"
        className="text-md w-full min-w-[10rem] bg-transparent focus-visible:outline-none"
      />
      <button type="button" onClick={() => handleSearch("")} className="m-auto">
        <CrossIcon />
      </button>
    </form>
  );
}

export default SearchBar;
