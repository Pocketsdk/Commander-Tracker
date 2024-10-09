const NavBar = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <ul className="text-orange-500 flex space-x-4">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#decks">Decks</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
