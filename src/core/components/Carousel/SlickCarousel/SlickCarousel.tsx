
import Cards from '../../Cards/Cards';
// import slick carousels
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickStyle } from '../../../styles/slickCarousel.styles';
import Slider from 'react-slick';
import { TestimonialList } from '../../../data/testimonials.data';
import { LeftBtn, RightBtn } from '../../Button/ButtonGroup';


const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: -0.3,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <RightBtn />,
    prevArrow: <LeftBtn />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2.2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2.2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 0.9,
          slidesToScroll: 1.4,
          initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1.6,
      //     slidesToScroll: 1.6,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 550,
      //   settings: {
      //     slidesToShow: 1.3,
      //     slidesToScroll: 1.3,
      //   },
      // },
      // {
      //   breakpoint: 450,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <SlickStyle>
      <div>
        <div>
          <h1>
            1,000+ customers are <br />
            loving Lancetech.
          </h1>
        </div>
      </div>

      <Slider {...settings}>
        {TestimonialList &&
          TestimonialList.map(results => <Cards cardImage={results.avatar} cardBody={results.testimony} handle={results.handle} />)}
      </Slider>
    </SlickStyle>
  );
};

export default SlickCarousel;
