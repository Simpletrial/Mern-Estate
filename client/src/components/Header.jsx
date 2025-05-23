import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  console.log('Avatar URL:', currentUser?.avatar);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Left: Logo */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Style</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form onSubmit={handleSubmit} className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
          <button>
          <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline"><b>Home</b></li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline"><b>About</b></li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <li className="flex items-center">
              <img
                className="rounded-full h-9 w-9 object-cover border border-slate-400"
                src={currentUser?.avatar || currentUser?.photoURL || 'default-avatar-url'} 
                alt="profile"/>
            </li>                       
            ) : (
              <li className="text-slate-700 hover:underline"><b>Sign in</b></li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}