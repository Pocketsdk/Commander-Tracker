import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <ul className="text-white flex space-x-4 items-center">
        <li className="size-20 content-center">
          <Link to="/">
            <img src="src\assets\PDKLogo-cropped.png" />
          </Link>
        </li>
        <li className="hover:text-orange-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-600">
          <Link to="decks">Decks</Link>
        </li>
        <li className="hover:text-orange-600">
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
