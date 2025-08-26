function PageButton({ totalProducts, productsPerPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center items-center">
      {pageNumbers.map((pageNumber) => (
        <li className="my-8" key={pageNumber}>
          <button
            className="bg-[#fff] mx-2 text-[#1456ac] shadow-lg border-1 rounded-lg py-3 px-5"
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PageButton;
