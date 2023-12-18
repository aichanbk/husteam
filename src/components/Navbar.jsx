import { useContext } from "react";
import { FaGamepad, FaGithub, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FirestoreContext } from "../context/FirestoreContext";
import { AuthContext } from "../context/AuthContext";
import logger from "../utils/logger";

const Navbar = () => {
  const { state: firestoreState } = useContext(FirestoreContext);
  const { user, dispatch } = useContext(AuthContext);
  logger.debug(user);
  

  const handleOnChange = (e) => {
    if (!dispatch) {
      return;
    }
    const { value } = e.target;
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload: value });
    dispatch({ type: "FILTER_BY_SEARCH_QUERY", payload: value });
  };

  return (
    <div className="modified-navbar px-0 flex-wrap justify-between text-white">
      <div className="">
        <Link
          to="/"
          className="flex p-3 active:scale-95 transition ease-in-out order-first md:order-first"
        >
          {/* <FaGamepad className="self-center mr-2 " /> */}
          <div className="flex justify-center items-center ml-10">
            <img src="/logo-navbar.svg" alt="logo" className="w-20 h-20" />
            <h1 className="font-bold text-3xl pd pl-3">HUSTeam</h1>
          </div>
        </Link>
        <div className="text-white/50 hover:text-white transition-colors ease-in-out duration-300 ml-5 mt-2" >
            <Link to="/games" className="" data-test-id="browse">
              Store
            </Link>
        </div>
        <div className="text-white/50 hover:text-white transition-colors ease-in-out duration-300 ml-5 mt-2" >
            <Link to="/library" className="">
              My Library
            </Link>
        </div>
        <div className="text-white/50 hover:text-white transition-colors ease-in-out duration-300 ml-5 mt-2" >
            <Link to="/forum" className="">
              Forum
            </Link>
        </div>
      </div>
      <div className="w-full md:w-[22rem] lg:w-[40rem] order-last md:order-1 justify-center" >
        <input
          type="text"
          placeholder="Search games..."
          className="input input-ghost bg-zinc-800 border-0 focus:border-0 focus:ring-0 focus:bg-[#343438] text-sm transition-all ease-in-out duration-200 w-full md:w-3/6 focus:w-full input-sm"
          onChange={(e) => handleOnChange(e)}
        />
        <div className="ml-3 text-zinc-400 hover:text-white active:scale-90 transition ease-in-out cursor-pointer">
          <FaSearch />
        </div>
      </div>
      <div className="flex-none md:order-last ">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle mt-3 mr-3"
          htmlFor="my-drawer"
          data-test-id="drawer"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm badge-success indicator-item">
              {!firestoreState.isLoading && firestoreState.cartItems
                ? firestoreState.cartItems.data().games.length
                : 0}
            </span>
          </div>
        </label>
        <div>
        <ul className="flex items-center py-8 pb-4 gap-7 text-sm font-medium">
          {!user ? (
            <>
              <li className="text-white hover:text-white transition-colors ease-in-out duration-200">
                <Link to="/auth/login" data-test-id="login">
                  Login
                </Link>
              </li>
              <li className="text-white hover:text-white transition-colors ease-in-out duration-200">
                <Link to="/auth/signup" data-test-id="sign-up">
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li
                className="text-white/50 hover:text-white transition-colors ease-in-out duration-200"
                onClick={() => {
                  dispatch({ type: "logout" });
                }}
              >
                <Link to="/auth/login" data-test-id="logout">
                  Logout
                </Link>
              </li>
              <span className="text-white">{user.email}</span>
            </>
          )}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
