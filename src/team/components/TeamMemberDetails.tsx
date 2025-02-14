import { TeamListType } from '../../home/types/home.types';
import useIDBImages from '../../core/hooks/useIDBImages';
import { IDBStores } from '../../utils/indexedDB/types/indexedDB.types';
import { Box, Typography } from '@mui/material';

const TeamMemberDetails = ({member}:{member:TeamListType}) => {

    const { memberImgUrl, imageId, memberName, memberTitle } = member;
        
   // get image
   const image = useIDBImages(memberImgUrl, IDBStores.MISC_IMAGES, imageId);

  return (
    <>
        <Box
            sx={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: '15rem',
                width: '15rem',
                alignItems: 'center',
                borderRadius: '5px',
                // filter: 'grayscale(100%)'
                /* overflow: "hidden"; */
            }}
        />    

        <Typography> {memberName} {memberTitle}   </Typography>          
    </>
  )
}

export default TeamMemberDetails