import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../assets/coffee-footer.jpeg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="min-h-[400px] bg-black/40">
        <div className="container grid pb-20 pt-5 md:grid-cols-3">
          {/* company details */}
          <div className="px-4 py-8">
            <a
              href="#"
              className="font-cursive text-2xl font-semibold tracking-widest sm:text-3xl"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-full bg-[#3d2517] px-4 py-2 text-sm"
            >
              Visit out YouTube Channel
            </a>
          </div>
          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* first col links */}
            <div className="px-4 py-8">
              <h4 className="mb-3 text-xl font-semibold sm:text-left">
                Footer Links
              </h4>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block duration-200 hover:scale-105"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="px-4 py-8">
              <h4 className="mb-3 text-xl font-semibold sm:text-left">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block duration-200 hover:scale-105"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company details */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h4 className="mb-3 text-xl font-semibold sm:text-left">
                Address
              </h4>
              <div>
                <address className="mb-3">Noida, India</address>
                <p>+91 123456789</p>

                {/* social links */}
                <div className="mt-6 space-x-3">
                  <a href="#">
                    <FaFacebook className="inline-block text-3xl duration-200 hover:scale-105" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="inline-block text-3xl duration-200 hover:scale-105" />
                  </a>
                  <a href="#">
                    <FaInstagram className="inline-block text-3xl duration-200 hover:scale-105" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
