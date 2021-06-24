import React from 'react';
import '../styles/LandingPage.css';
import NurseTyping from '../images/nurse-typing.jpg';
import NursePhone from '../images/nurse-phone.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import '../styles/LandingSwiper.css';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

function LandingPage() {
  return (
    <div>
      <section className='landing-header'>
        <h2>
          Skip the paper and pen- create and manage patient reports on your
          phone and/or computer
        </h2>
        <div className='landing-images'>
          <img src={NurseTyping} alt='nurse typing on laptop' />
          <img src={NursePhone} alt='nurse looking at smartphone' />
        </div>
      </section>
      <>
        <Swiper navigation={true} className='mySwiper'>
          <SwiperSlide>
            <div className='feature'>
              <h3>Keep all your patient reports in one place</h3>
              <p>Easily access all of your reports from the home page</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='feature'>
              <h3>Quick access to patient info</h3>
              <p>Switch between reports with one click on the desired tab</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='feature'>
              <h3>Manage your reports neatly</h3>
              <p>
                Create, edit and delete reports without smudging ink with
                crossed out info
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className='feature'>
              <h3>Designed by a nurse for nurses</h3>
              <p>
                Created to help ease the stress of keeping track of your
                "brains" so you can take better care of your patients
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default LandingPage;
