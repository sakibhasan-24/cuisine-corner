import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";
export default function Category() {
  return (
    <div className="max-w-4xl mx-auto my-6">
      <SectionTitle title="Order Online" text="---From 11:00am to 10:00pm---" />
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="text-2xl font-bold text-center -mt-14">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-2xl font-bold text-center -mt-14">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-2xl font-bold text-center -mt-14">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-2xl font-bold text-center -mt-14">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h1 className="text-2xl font-bold text-center -mt-14">Salads</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
