import AppStoreImg from "../assets/app_store.png";
import PlayStoreImg from "../assets/play_store.png";
import BgPng from "../assets/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <div style={backgroundStyle} className="py-14">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          <div data-aos="fade-up" className="mx-auto max-w-xl space-y-6">
            {/* text content */}
            <h3 className="pl-3 text-center text-2xl font-semibold text-white/90 sm:text-left sm:text-4xl">
              Coffee Cafe is available for Android and IOS
            </h3>
            {/* lego section */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start">
              <a href="">
                <img
                  src={AppStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="">
                <img
                  src={PlayStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
