import { Logo, SearchIcon, MenuIcon } from "./Icons";
import SearchBar from "./SearchBar";

function Header({ handleSubmit, search, handleSearch }) {
  const css = `.switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
    align-self: center;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #2196f3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
  
  /* Rounded sliders */
  .slider {
    border-radius: 30px;
  }
  
  .slider:before {
    border-radius: 50%;
  }`

  function toggleDark() {
    if (document.getElementById('checkBox').checked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="py-6 px-7 bg-white dark:bg-slate-900 md:max-w-6xl m-auto">
      <style>{css}</style>
      <nav className="flex gap-8 justify-between">
        <div className="flex my-auto w-32">
          <Logo class="" />
        </div>
        <div className="hidden gap-3 w-full md:flex [&>p]:m-auto [&>p]:font-semibold dark:[&>p]:text-white">
          <SearchBar handleSubmit={handleSubmit} search={search} handleSearch={handleSearch} className="md:bg-gray-100 dark:bg-slate-700 dark:text-white" />
          <p>Explore</p>
          <p>Collections</p>
          <p>Community</p>
        </div>
        <div className="flex gap-2 md:hidden">
          <button className="m-auto">
            <SearchIcon class="stroke-black dark:stroke-white" />
          </button>
          <button className="m-auto">
            <MenuIcon class="stroke-black dark:stroke-white" />
          </button>
        </div>
        <div className="hidden md:flex">
        <label class="switch">
          <input type="checkbox" onChange={toggleDark} id="checkBox" />
          <span class="slider"></span>
        </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
