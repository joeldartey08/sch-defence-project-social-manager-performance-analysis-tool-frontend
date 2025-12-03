import Button from "./ui/button";

const SideNav = () => {
  return (
    <aside className="w-80 flex md:flex-col md:pb-10 bg-white shadow-md p-6">
      <h2 className="text-2xl font-bold italic text-black mb-8">JOEL'S APP</h2>
      <ul className="w-[75%] flex items-center md:items-start md:mb-60 justify-between md:gap-6 md:flex-col text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-black">Dashboard</li>
        <li className="cursor-pointer hover:text-black">Connected Accounts</li>
        <li className="cursor-pointer hover:text-black">Content Performance</li>
        <li className="cursor-pointer hover:text-black">Recommendations</li>
        <li className="cursor-pointer hover:text-black">Settings</li>
      </ul>
      <Button className="bg-red-600 rounded-3xl py-1 px-2 ">logout</Button>
    </aside>
  );
};

export default SideNav;
