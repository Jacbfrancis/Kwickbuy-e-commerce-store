import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center flex flex-col justify-center items-center h-[100vh] px-4">
      <div className="bg-[#fff] p-6 rounded-xl shadow-md xl:px-28">
        <h2 className="text-[1.4rem] font-bold">404 - Page Not Found</h2>
        <p className="mt-2 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="bg-[#1456ac] text-[#fff] rounded-3xl px-5 py-3"
          onClick={() => navigate("/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
