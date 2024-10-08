import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import { Icon, Box,  } from '@mui/material';
import Button from '../../../core/styles/Button';
import { OurCultureStyle } from '../../styles/OurCultureStyle';
import { COLORS } from '../../../core/styles/COLORS';

const OurCulture = ({ toRoles }:{toRoles:()=>void}) => {
  return (
    <OurCultureStyle>
      <Box sx={{ m: 'auto' }}>
        <h2>Our Culture</h2>
        <div className="cultureMid">
          <div className="cultureMidLeft">
            <div className="cultureMidLeftSub">
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
            </div>
            <div className="cultureMidLeftSub">
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
            </div>
            <Button onClick={toRoles}>See Open Roles</Button>
          </div>
          <div className="ourCultureImg" />
        </div>
      </Box>
    </OurCultureStyle>
  );
};

export default OurCulture;
