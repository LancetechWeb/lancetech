// import { useMediaQuery } from '@mui/material';
import TeamStyle from '../../styles/team.styles';
import { teamList } from '../__data__/team.data';
import TeamMember from './TeamMember';
// import ThinArrow from '../../../assets/ThinArrow.svg';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Team = () => {
  // const isMobile = useMediaQuery("(max-width:800px)");
  // const navigate = useNavigate();

  // const [teamButtonFocus, setTeamButtonFocus] = useState(false);

  return (
    <TeamStyle>
      <div className="teamWrapper">
          <h1 className="teamTitle">
            Meet our <br /> amazing team
          </h1>
        <hr />
        <div className="teamGallery">
          {teamList.map(member => (
            <TeamMember member={member}/>
          ))}
        </div>
        <hr />
        {/* <Button 
          variant={`${isMobile ? 'outlined' :'text'}`} 
          onMouseEnter={()=>setTeamButtonFocus(true)} 
          onMouseLeave={()=>setTeamButtonFocus(false)} 
          disableFocusRipple
          disableTouchRipple
          sx={{
            py:2,
            mt:2, 
            width:isMobile ? "100%" : 150, 
            border:'1px solid black', 
            textTransform:"none", 
            color:"black", 
            background:"none"
          }}
          onClick={()=>navigate('/team')}
        >            
           {!teamButtonFocus && <img src={ThinArrow} alt="ThinArrow" />}
           {teamButtonFocus && <Typography> View Team </Typography> }
        </Button> */}

      </div>
    </TeamStyle>
  );
};

export default Team;
