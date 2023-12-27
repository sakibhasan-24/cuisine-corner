import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { PiChatCircleTextThin } from "react-icons/pi";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`reviews.json`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SectionTitle title={"TESTIMONIALS"} text={"What Our Client Say"} />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-center justify-center flex-col w-1/2 mx-auto">
              <PiChatCircleTextThin className="font-bold text-7xl" />
              <Rating
                className="flex items-center justify-center"
                value={review.rating}
                style={{ maxWidth: 180 }}
                readOnly
              />
              <p className="my-6">{review.details}</p>
              <h3 className="font-bold text-3xl  text-orange-500">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
