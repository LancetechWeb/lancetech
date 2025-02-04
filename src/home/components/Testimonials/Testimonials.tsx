import loveSVG from '../../../assets/love.svg';
import { TestimonialsStyle } from '../../styles/HomeStyle';
import SlickCarousel from '../../../core/components/Carousel/SlickCarousel/SlickCarousel';

const Testimonials = () => {
  return (
    <TestimonialsStyle>
      <img src={loveSVG} alt="loveSVG" />

      <SlickCarousel />
    </TestimonialsStyle>
  );
};

export default Testimonials;
