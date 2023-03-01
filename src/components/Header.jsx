import { Logo, SearchIcon, MenuIcon } from "./Icons";

function Header() {
  return (
    <header className="py-6 px-7">
      <nav className="flex justify-between">
        <div className="flex w-32">
          <Logo class="" />
        </div>
        <div></div>
        <div className="flex gap-2">
          <button className="m-auto">
            <SearchIcon class="stroke-black dark:stroke-white" />
          </button>
          <button className="m-auto">
            <MenuIcon class="stroke-black dark:stroke-white" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
