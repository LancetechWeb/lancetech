import { useNavigate } from "react-router-dom";
import TorusImage from '../../assets/Torus.svg';
import { AboutStyle } from "../styles/AboutStyle";
import Button from "../../core/styles/Button";
import OurCulture from "./ourCulture/OurCulture";
import OurTeams from "./ourTeams/OurTeams";



const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/roles');
  };
  return (
    <AboutStyle>
      <div className="AboutTitle">
        <h1>
          We help businesses scale <br /> <span> online</span>
        </h1>
        <Button onClick={handleNavigate}> See Open Roles</Button>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <img src={TorusImage} alt="torusImage" className="headerImg torusImg2" />
      </div>
      <OurCulture toRoles={handleNavigate} />
      <OurTeams />
    </AboutStyle>
  );
};

export default About;
