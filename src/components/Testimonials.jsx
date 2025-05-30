import Slider from "react-slick";
import Img101 from "../assets/101.jpeg";
import Img102 from "../assets/102.jpeg";
import Img103 from "../assets/103.jpeg";
import Img104 from "../assets/104.jpeg";

const TestimonialsData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: `${Img101}`,
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: `${Img102}`,
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: `${Img103}`,
  },
  {
    id: 4,
    name: "Satya narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: `${Img104}`,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10 py-14">
      <div className="container">
        {/* header section */}
        <div data-aos="fade-up" className="mb-10 text-center">
          <h2 className="font-cursive text-4xl font-bold text-gray-800">
            Testimonials
          </h2>
        </div>
        {/* testimonal section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="relative mx-4 flex flex-col gap-4 rounded-xl bg-primary/10 px-6 py-8 shadow-lg">
                    {/* Image section */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="h-20 w-20 rounded-full"
                      />
                    </div>
                    {/* content section */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="font-cursive text-xl font-bold text-black/60">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="absolute right-0 top-0 font-serif text-9xl text-black/20">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
