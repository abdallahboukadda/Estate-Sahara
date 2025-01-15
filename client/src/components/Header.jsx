import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Initialize theme based on localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  // Load search term from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);

  return (
    <header className="bg-gradient-to-r from-slate-200 to-slate-400 dark:from-gray-800 dark:to-gray-900 shadow-lg flex items-center justify-between flex-wrap py-4 lg:px-12">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 dark:border-gray-700 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 dark:text-gray-200 mr-16">
          <Link to="/">
            <h1 className="font-extrabold text-lg sm:text-2xl flex flex-wrap">
              <span className="text-gray-500 dark:text-gray-400">Estate</span>
              <span className="text-gray-800 dark:text-gray-200">Sahara</span>
            </h1>
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full lg:hidden"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-blue-700 dark:text-blue-300 lg:flex-grow">
          <Link to="/" className="hidden sm:inline text-slate-900 dark:text-white hover:underline mr-5">
            Home
          </Link>
          <Link to="/about" className="hidden sm:inline text-slate-900 dark:text-white hover:underline mr-2">
            About
          </Link>
        </div>
        <div className="relative mx-auto text-gray-600 dark:text-gray-300 lg:block hidden">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-inner flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-32 sm:w-72 text-slate-700 dark:text-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <FaSearch className="text-slate-700 dark:text-gray-200 ml-2" />
            </button>
          </form>
        </div>
        <div className="flex">
          <Link to="/sign-up" className="block text-md dark:text-white px-4 py-2 rounded ml-2 font-bold hover:underline lg:mt-0">
            Sign up
          </Link>
          <Link to="/sign-in" className="block text-md dark:text-white px-4 py-2 rounded ml-2 font-bold hover:underline lg:mt-0">
            Login
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-9 w-9 object-cover border-2 border-slate-700 dark:border-gray-200"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <p></p>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
