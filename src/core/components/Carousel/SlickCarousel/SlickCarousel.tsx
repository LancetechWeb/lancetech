
// import Cards from '../../Cards/Cards';
// import slick carousels
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickStyle } from '../../../styles/slickCarousel.styles';
// import Slider from 'react-slick';
// import { TestimonialList } from '../../../data/testimonials.data';
// import { LeftBtn, RightBtn } from '../../Button/ButtonGroup';
import { Box } from '@mui/material';

const SlickCarousel = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3.3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   initialSlide: -0.3,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   nextArrow: <RightBtn />,
  //   prevArrow: <LeftBtn />,
  //   responsive: [
  //     {
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 4,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 2.6,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1300,
  //       settings: {
  //         slidesToShow: 2.4,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 2.2,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 2.1,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2.1,
  //         slidesToScroll: 2.2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 990,
  //       settings: {
  //         slidesToShow: 2.4,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2.1,
  //         slidesToScroll: 2.2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 1.8,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 1.6,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 650,
  //       settings: {
  //         slidesToShow: 1.2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 0.9,
  //         slidesToScroll: 1.4,
  //         initialSlide: 2,
  //       },
  //     },
  //     // {
  //     //   breakpoint: 600,
  //     //   settings: {
  //     //     slidesToShow: 1.6,
  //     //     slidesToScroll: 1.6,
  //     //     initialSlide: 2,
  //     //   },
  //     // },
  //     // {
  //     //   breakpoint: 550,
  //     //   settings: {
  //     //     slidesToShow: 1.3,
  //     //     slidesToScroll: 1.3,
  //     //   },
  //     // },
  //     // {
  //     //   breakpoint: 450,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //   },
  //     // },
  //   ],
  // };

  return (
    <Box>

    <SlickStyle>
      <div>
        <div>
          <h1>
            1,000+ customers are <br />
            loving Lancetech.
          </h1>
        </div>
      </div>

        <p style={{lineHeight: "32px"}}>
          At Lancetech, we don’t just build tech solutions—we build lasting partnerships. Our clients trust us to deliver innovative, reliable, and scalable products that transform their businesses. From startups to established enterprises, we’ve helped organizations streamline operations, enhance user experiences, and achieve their digital goals with confidence.

          Join a growing list of businesses that rely on Lancetech to power their success. Your vision, our expertise—let’s build the future together. 
        </p>

      {/* <Slider {...settings}>
        {TestimonialList &&
          TestimonialList.map(results => <Cards cardImage={results.avatar} cardBody={results.testimony} handle={results.handle} />)}
      </Slider> */}
    </SlickStyle>
  </Box>

  );
};

export default SlickCarousel;
