function ErrorPage() {
  return (
    <div className="text-black flex flex-col justify-center items-center h-[100vh]">
      <h2 className="text-[5rem] font-bold">OOPS</h2>
      <h3 className="text-[1rem] font-bold">😔 Something went wrong</h3>
      <p>Check your internet connection and try again</p>
    </div>
  );
}

export default ErrorPage;
