import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img className="w-1/5" src="https://i.ibb.co/4SYR8X0/404.jpg" alt="" />

      <Link to="/">
        <button className="bg-emerald-600 p-4 rounded-2xl text-white font-bold">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
