import Img2 from "../assets/coffee2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* header title */}
          <div data-aos="fade-up" className="mb-20 text-center">
            <h2 className="font-cursive text-4xl font-bold text-gray-800">
              Best Coffee For You
            </h2>
          </div>
          {/* service card section */}
          <div className="grid grid-cols-1 place-items-center gap-14 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="group relative max-w-[300px] rounded-2xl bg-white shadow-xl duration-200 hover:bg-primary hover:text-white"
                >
                  {/* image section */}
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="mx-auto block max-w-[200px] -translate-y-14 transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                    />
                  </div>
                  {/* text content */}
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold">{data.name}</h3>
                    <p className="line-clamp-2 text-sm text-gray-500 duration-300 group-hover:text-white">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
