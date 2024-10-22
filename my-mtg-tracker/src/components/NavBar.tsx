const NavBar = ({ title = "My MTG Tracker" }) => {
  return (
    <nav className="bg-gray-700 p-4">
      <ul className="text-white flex items-center space-x-4">
        <li style={{ width: "10%", height: "10%" }}>
          <a href="/">
            <img src="src\assets\PDKLogo-cropped.png" />
          </a>
        </li>
        <li className="hover:text-orange-600">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-orange-600">
          <a href="#decks">Decks</a>
        </li>
        <li className="hover:text-orange-600">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
