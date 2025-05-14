import HeroImage from "../assets/coffee2.png";

const Home = () => {
  return (
    <div className="flex min-h-[550px] items-center justify-center bg-brandDark text-white sm:min-h-[600px]">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div className="order-2 flex flex-col justify-center gap-6 sm:order-1 md:gap-20">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl font-bold sm:text-6xl lg:text-7xl"
            >
              We serve the richest
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="font-cursive text-primary"
              >
                {" "}
                Coffee{" "}
              </span>
              in the city
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="rounded-full border-2 border-primary bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white duration-200 hover:scale-105">
                Coffee And Code
              </button>
            </div>
          </div>
          {/* image section */}
          <div
            data-aos="zoom-in"
            className="relative order-1 flex min-h-[450px] items-center justify-center sm:order-2"
          >
            <img
              src={HeroImage}
              alt=""
              className="spin mx-auto w-[300px] sm:w-[450px] sm:scale-110"
            />
            <div
              data-aos="fade-left"
              className="absolute left-10 top-10 rounded-xl bg-gradient-to-r from-primary to-secondary p-3 md:top-8 lg:top-5"
            >
              <h1>Hey Coder</h1>
            </div>

            <div
              data-aos="fade-right"
              className="absolute bottom-10 right-10 rounded-xl bg-gradient-to-r from-primary to-secondary p-3 md:bottom-8 lg:bottom-5"
            >
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
