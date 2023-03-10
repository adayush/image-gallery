import { useEffect, useState } from "react";

import Header from "./components/Header";
import Cover from "./components/Cover";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import useListPhotos from "./hooks/useListPhotos";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [currQuery, setCurrQuery] = useState("");
  const [imageData, setImageData] = useState();
  const [pageNo, setPageNo] = useState(0);

  function scrolledBottom() {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;

    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 500;
    if (currentScroll + modifier > documentHeight) {
      listPhotos("scroll");
    }
  }

  function listPhotos(type, query = "") {
    if (type === "search" && (search !== currQuery || query)) {
      setCurrQuery(query || search);
      useListPhotos(query || search, 1, imageData, setImageData);
      setPageNo(1);
    } else if (type === "scroll") {
      useListPhotos(query || currQuery, pageNo + 1, imageData, setImageData);
      setPageNo(pageNo + 1);
      document.removeEventListener("scroll", scrolledBottom);
    } else if (!imageData) {
      useListPhotos(null, 1, imageData, setImageData);
      setPageNo(pageNo + 1);
    }
  }

  useEffect(() => {
    listPhotos();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("scroll", scrolledBottom);
    }, 200);
  }, [imageData]);

  function handleSearch(value) {
    if (value !== search) {
      setSearch(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    listPhotos("search");
  }

  function tagSearch(tag) {
    handleSearch(tag);
    listPhotos("search", tag);
  }

  return (
    <div className="App">
      <Header>
        <SearchBar
          search={search}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          className="md:bg-gray-100 dark:bg-slate-700 dark:text-white"
        />
      </Header>
      <Cover>
        <SearchBar
          search={search}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        />
      </Cover>
      <Gallery imageData={imageData} tagSearch={tagSearch} />
    </div>
  );
}

export default App;
