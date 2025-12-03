import { useContext, useEffect } from "react";
import Button from "./ui/button";
import { ShopContext } from "../store/ShopContext";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const { nav, setNav } = useContext(ShopContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  return (
    <aside className="w-full fixed md:static flex md:w-80 justify-between items-center md:justify-start md:items-start  md:flex-col md:pb-10 bg-white shadow-md p-6">
      <h2 onClick={()=> navigate("/dashboard")} className="cursor-pointer text-lg md:text-2xl font-bold text-black md:mb-8">
        JOEL'S APP
      </h2>
      <ul className="w-[75%] hidden md:flex items-center md:items-start md:mb-60 justify-between md:gap-6 md:flex-col text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-black">Dashboard</li>
        <li className="cursor-pointer hover:text-black">Connected Accounts</li>
        <li className="cursor-pointer hover:text-black">Content Performance</li>
        <li className="cursor-pointer hover:text-black">Recommendations</li>
        <li className="cursor-pointer hover:text-black">Settings</li>
      </ul>

      <div
        className={`w-full h-full md:hidden bg-black/20 shadow-2xl fixed bottom-0 z-50 ${
          nav ? "left-0" : "-left-full"
        } text-gray-700 font-medium duration-500`}
      >
        <ul className="w-72 h-full bg-white flex flex-col gap-6 pt-10 px-2  ">
          <li className="cursor-pointer hover:text-blue-500">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-500">
            Connected Accounts
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            Content Performance
          </li>
          <li className="cursor-pointer hover:text-blue-500">Recommendations</li>
          <li className="cursor-pointer hover:text-blue-500">Settings</li>

          <li>
            <Button className="bg-red-600 mt-10 w-full cursor-pointer rounded-3xl py-1 px-2">
              logout
            </Button>
          </li>
        </ul>
      </div>

      <div className="md:hidden cursor-pointer z-50">
        <div
          onClick={() => setNav(!nav)}
          className="w-8 rounded-md flex gap-1 flex-col items-center justify-center bg-gray-700 p-2"
        >
          <div
            className={`w-full h-0.5 bg-white duration-500 ${
              nav ? "-rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-white duration-500 ${
              nav ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-white duration-500 ${
              nav ? "rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>
      <Button className="bg-red-600 w-full hidden md:block rounded-3xl py-1 px-2">
        logout
      </Button>
    </aside>
  );
};

export default SideNav;
