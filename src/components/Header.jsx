import Logo from "./Logo";

function Header() {
    return <header className="p-5">
        <nav>
            <div>
                <Logo class="fill-black dark:fill-white" />
            </div>
            <div></div>
            <div></div>
        </nav>
    </header>
}

export default Header;
