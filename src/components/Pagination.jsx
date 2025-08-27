function Pagination({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`${totalPages <= 1 ? "hidden" : "block"} w-[80%] m-auto`}>
      <ul className="flex justify-center items-center">
        {pageNumbers.map((pageNumber) => (
          <li className="my-8" key={pageNumber}>
            <button
              className={`${
                currentPage === pageNumber
                  ? "bg-[#1456ac] text-[#fff]"
                  : "bg-[#fff]"
              } text-[#1456ac] shadow-lg border-1 rounded-lg mx-1.5 py-1.5 px-3`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
