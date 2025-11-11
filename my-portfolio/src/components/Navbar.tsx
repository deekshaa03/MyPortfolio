interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const sections = ['home', 'about', 'projects', 'contact'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl">Your Name</div>
        <div className="space-x-6 hidden md:flex">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="hover:text-blue-500 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
