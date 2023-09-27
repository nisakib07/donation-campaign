import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center mt-12 mb-28">
      <div>
        <img
          className="w-3/4 md:w-full"
          src="https://i.ibb.co/kSHWTxQ/Logo.png"
          alt=""
        />
      </div>
      <nav className="flex mt-12 md:mt-0 gap-4 md:gap-12">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ff444a] underline text-lg font-bold"
              : "text-lg"
          }>
          Home
        </NavLink>
        <NavLink
          to="/donations"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ff444a] underline text-lg font-bold"
              : "text-lg"
          }>
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ff444a] underline text-lg font-bold"
              : "text-lg"
          }>
          Statistics
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
