import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-row  p-4 justify-evenly max-w-screen-lg mx-auto h-full ">
        <Link to={"/Datenschutz"} className="hover:scale-110 duration-300">
          Datenschutz
        </Link>
        <Link to={"/Impressum"} className="hover:scale-110 duration-300">
          Impressum
        </Link>
      </div>
    </div>
  );
};

export default Footer;
