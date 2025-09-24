import { Link } from "react-router-dom";

function ListContainer({ data, title }) {
  return (
    <div className="text-center px-4 xl:px-20">
      <div className="bg-[#eff7ff] rounded-md p-6 my-6">
        <h3 className="text-[#1456ac] text-[1.6rem] font-semibold">{title}</h3>
        <p className="text-[#1456ac] text-[1rem] font-medium">
          Find your favorite {title.toLowerCase()}
        </p>
      </div>

      <div className="text-[0.85rem] text-center font-extralight grid grid-cols-2 gap-5 xl:grid-cols-6">
        {data.map((item) => (
          <Link key={item.title} to={item.link}>
            <span className="bg-[#fff] h-[10.3rem] flex flex-col justify-center items-center p-4 shadow-sm rounded-md">
              <span className="block w-[40%] mx-auto my-2">
                <img src={item.icon} alt={item.title} />
              </span>
              <p>{item.title}</p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
