import React, { useRef, useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MyWork = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div id="projects" className="mywork">
      <div className="title-box">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" className="title-pattern" />
      </div>

      <div className="carousel-row">
        <div className={`custom-nav-btn ${currentSlide === 0 ? 'disabled' : ''}`} ref={prevRef}>❮</div>

        <Swiper
          className="mywork-carousel"
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {mywork_data.map((work, index) => (
            <SwiperSlide key={index}>
              <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="project-slide">
                <img src={work.w_img} alt={`work-${index}`} className="carousel-img" />
                <div className="hover-overlay">
                  <p>{work.w_name}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`custom-nav-btn ${currentSlide === mywork_data.length - 1 ? 'disabled' : ''}`} ref={nextRef}>❯</div>
      </div>
    </div>
  );
};

export default MyWork;