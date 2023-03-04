import { useEffect, useState } from "react";
import { Logo } from "./Icons";

function Header({ children }) {
  const [dark, setDark] = useState(false);
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
  }`;

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="dark:bg-black">
      <div className="py-6 px-7 dark:bg-black md:max-w-6xl m-auto">
        <style>{css}</style>
        <nav className="flex gap-8 justify-between">
          <div className="flex my-auto w-32 md:w-36">
            <Logo />
          </div>
          <div className="hidden gap-3 w-full md:flex [&>p]:m-auto [&>p]:text-gray-500 [&>p]:font-semibold dark:[&>p]:text-white">
            {children}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium pb-1 md:block md:whitespace-nowrap dark:text-white">
              {dark ? "Light" : "Dark"} Mode
            </p>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDark(!dark)}
                id="checkBox"
              />
              <span className="slider"></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
