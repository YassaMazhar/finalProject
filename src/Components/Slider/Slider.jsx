
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import homeImage from "../../assets/home-slider-1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Slider() {
  return (
    <>
      <Swiper modules={[Pagination , Navigation]} slidesPerView={1} loop={true} pagination={{clickable: true}} navigation>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${homeImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay py-15 bg-gradient-to-r from-primary-400/80 to-primary-400/50">
              <div className="container space-y-4">
                <h2 className="text-3xl font-bold text-white">
                  Fresh Products delivered <br />
                  to your Door{" "}
                </h2>
                <p className="text-white text-lg">
                  Get 20% off your first order
                </p>
                <div className="space-x-3">
                  <button className="px-4 py-2 border border-white rounded-lg text-primary-400 bg-white ">
                    Shope now
                  </button>
                  <button className="px-4 py-2 border border-gray-100 rounded-lg text-white hover:bg-white hover:text-primary-400">
                    View Deals{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${homeImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay py-15 bg-gradient-to-r from-primary-400/80 to-primary-400/40">
              <div className="container space-y-4">
                <h2 className="text-3xl font-bold text-white">
                  Fresh Products delivered <br />
                  to your Door{" "}
                </h2>
                <p className="text-white text-lg">
                  Get 20% off your first order
                </p>
                <div className="space-x-3">
                  <button className="px-4 py-2 border border-white rounded-lg text-primary-400 bg-white ">
                    Shope now
                  </button>
                  <button className="px-4 py-2 border border-gray-100 rounded-lg text-white hover:bg-white hover:text-primary-400">
                    View Deals{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${homeImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay py-15 bg-gradient-to-r from-primary-400/80 to-primary-400/40">
              <div className="container space-y-4">
                <h2 className="text-3xl font-bold text-white">
                  Fresh Products delivered <br />
                  to your Door{" "}
                </h2>
                <p className="text-white text-lg">
                  Get 20% off your first order
                </p>
                <div className="space-x-3">
                  <button className="px-4 py-2 border border-white rounded-lg text-primary-400 bg-white ">
                    Shope now
                  </button>
                  <button className="px-4 py-2 border border-gray-100 rounded-lg text-white hover:bg-white hover:text-primary-400">
                    View Deals{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
