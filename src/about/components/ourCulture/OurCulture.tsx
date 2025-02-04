import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import { Icon, Box,  } from '@mui/material';
import Button from '../../../core/styles/Button';
import { OurCultureStyle } from '../../styles/OurCultureStyle';
import { COLORS } from '../../../core/styles/COLORS';
import useIDBImages from '../../../core/hooks/useIDBImages';
import { MiscImagesIds } from '../../../core/types/core.types';
import { IDBStores } from '../../../utils/indexedDB/types/indexedDB.types';
import { getVariable } from '../../../utils/misc/env.misc';

const OurCulture = ({ toRoles }:{toRoles:()=>void}) => {

      // get image
      const cultureImgURL = `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.OUR_CULTURE}`;
      const ourCultureImage = useIDBImages(cultureImgURL, IDBStores.MISC_IMAGES, MiscImagesIds.OUR_CULTURE);
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
                <p>We adapt to change quickly, providing flexibility in how we work to meet evolving needs.</p>
              </div>
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Inovative</h4>
                <p>We embrace new ideas, tackling challenges with fresh solutions to stay ahead in technology.</p>
              </div>
            </div>
            <div className="cultureMidLeftSub">
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Collaborative</h4>
                <p>Teamwork is key to our success; we combine strengths to achieve the best results.                </p>
              </div>
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Integrity</h4>
                <p>We act with honesty and transparency, building trust within the company and with clients. </p>
              </div>
            </div>
            <Button onClick={toRoles}>See Open Roles</Button>
          </div>

          <Box className="ourCultureImg" 
            sx={{
                backgroundImage: `url(${ourCultureImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: '5px',
                width: "50%",
                border: '2px solid'
            }}
        />
        </div>
      </Box>
    </OurCultureStyle>
  );
};

export default OurCulture;
