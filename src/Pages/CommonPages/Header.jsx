export default function Header() {
  return (
    <header>
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-xl">
            Cuisine corner <br />
            <span className="block  text-orange-700 text-2xl"> restaurant</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <a href="#" className="p-2 font-bold">
            Home
          </a>
          <a href="#" className="p-2 font-bold">
            Menu
          </a>
          <a href="#" className="p-2 font-bold">
            About
          </a>
          <a href="#" className="p-2 font-bold">
            Contact
          </a>
          <a href="#" className="p-2 font-bold">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
