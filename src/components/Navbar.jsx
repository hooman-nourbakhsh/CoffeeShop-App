import { FaCoffee } from "react-icons/fa";
import Logo from "../assets/coffee_logo.png";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex items-center justify-between gap-4">
          {/* logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href=""
              className="flex items-center justify-center gap-2 font-cursive text-2xl font-bold tracking-wider sm:text-3xl"
            >
              <img src={Logo} alt="" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          {/* links section */}
          <div
            className="flex items-center justify-between gap-4"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <ul className="hidden items-center gap-4 sm:flex">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block px-4 py-4 text-xl text-white/70 duration-200 hover:text-white"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-3 rounded-full bg-primary/70 px-4 py-2 duration-200 hover:scale-105">
              Order
              <FaCoffee className="cursor-pointer text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
