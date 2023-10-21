import React from 'react';
import Slider from "react-slick";
import CustomSlide from '../Components/CustomSlide';
import useFetchCarousel from '../hooks/useFetchCarousel';
import { HomeSliderSetting } from './common/sliderSetting';
 
function HomeCarousel() {
   
    const { slideShow } = useFetchCarousel();

    return (
            <div className="slider-img" style={{ marginTop: "55px"}} >
                <section className="grad1">
                <Slider {...HomeSliderSetting}>
                        {slideShow.map((item) => (
                         <CustomSlide item={item} key={item.id} />
                        ))}
                    </Slider>
                </section>
            </div>
  );
}

export default HomeCarousel;