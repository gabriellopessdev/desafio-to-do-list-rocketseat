import logo from '../assets/Logo.svg';

export function Header() {
    return (
        <header className="flex justify-center p-3 my-11">
            <img src={logo} alt="Logo To do List" className="h-12" />
        </header>
    );
}
