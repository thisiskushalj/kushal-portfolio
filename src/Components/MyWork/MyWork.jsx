import React, { useRef, useState, useEffect } from 'react';
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
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  if (
    swiperInstance &&
    swiperInstance.params &&
    swiperInstance.params.navigation &&
    prevRef.current &&
    nextRef.current
  ) {
    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;

    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }
}, [swiperInstance]);

  return (
    <div id="projects" className="mywork">
      <div className="title-box">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" className="title-pattern" />
      </div>

      <div className="carousel-row">
        <div
          className={`custom-nav-btn ${currentSlide === 0 ? 'disabled' : ''}`}
          ref={prevRef}
        >
          ❮
        </div>

        <Swiper
          className="mywork-carousel"
          modules={[Navigation]}
          spaceBetween={30}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {mywork_data.map((work, index) => (
            <SwiperSlide key={index}>
              <a
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-slide"
              >
                <img
                  src={work.w_img}
                  alt={`work-${index}`}
                  className="carousel-img"
                />
                <div className="hover-overlay">
                  <p>{work.w_name}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`custom-nav-btn ${
            currentSlide === mywork_data.length - 1 ? 'disabled' : ''
          }`}
          ref={nextRef}
        >
          ❯
        </div>
      </div>
    </div>
  );
};

export default MyWork;