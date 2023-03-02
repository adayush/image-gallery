import SearchBar from "./SearchBar";

function Cover({ handleSubmit, search, handleSearch }) {
  return (
    <div
      className={`bg-slate-500 bg-[url('https://images.unsplash.com/photo-1675329363211-9bbf30434b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] bg-cover bg-center`}
    >
      <div className="flex flex-col gap-4 text-center px-10 py-20 backdrop-brightness-50">
        <h1 className="text-2xl text-white font-bold">
          Download High Quality Images by creators
        </h1>
        <p className="text-sm text-white font-medium">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <SearchBar handleSubmit={handleSubmit} search={search} handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default Cover;
