const NavBar = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <ul className="text-orange-500 flex space-x-4">
        <li className="hover:text-black">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-black">
          <a href="#decks">Decks</a>
        </li>
        <li className="hover:text-black">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
