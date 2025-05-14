import BannerImage from "../assets/coffee-white.png";
import BgTexture from "../assets/coffee-texture.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="container flex min-h-[550px] items-center justify-center py-12 sm:py-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* image section */}
            <div data-aos="zoom-in">
              <img
                src={BannerImage}
                alt=""
                className="spin mx-auto w-full max-w-[430px] drop-shadow-xl"
              />
            </div>
            {/* text section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="font-cursive text-3xl font-bold sm:text-4xl"
              >
                Premium Blen Coffee
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm leading-5 tracking-wider text-gray-500"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="h-12 w-12 rounded-full bg-red-100 p-3 text-2xl shadow-sm" />
                    <span>Premium Coffee</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="h-12 w-12 rounded-full bg-orange-100 p-3 text-2xl shadow-sm" />
                    <span>Hot Coffee</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="0"
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="h-12 w-12 rounded-full bg-yellow-100 p-3 text-4xl shadow-sm" />
                    <span>Cold Coffee</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="space-y-3 border-l-4 border-primary/50 pl-6"
                >
                  <h4 className="font-cursive text-2xl font-semibold">
                    Tea Lover
                  </h4>
                  <p className="text-sm text-gray-500">
                    Much like writing code, brewing the perfect cup of tea
                    requires patience, precision, and a dash of passion to
                    create a comforting blend of flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
