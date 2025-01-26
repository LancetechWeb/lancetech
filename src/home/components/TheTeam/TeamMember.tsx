import { Box } from "@mui/material"
import useIDBImages from "../../../core/hooks/useIDBImages";
import { IDBStores } from "../../../utils/indexedDB/types/indexedDB.types";
import { TeamListType } from "../../types/home.types";


const TeamMember = ({member}:{member:TeamListType}) => {

    // get image
  const image = useIDBImages(member.memberImg, IDBStores.MISC_IMAGES, member.imageId);

  return (
    <div>
        <Box className="teamMember" 
            sx={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: '15rem',
                alignItems: 'center',
                borderRadius: '5px'
                /* overflow: "hidden"; */
            }}
        />
        <div className="nameAndTitle">
        <div className="memberName">{member.memberName}</div>
        <div className="memberTitle">{member.memberTitle}</div>
        </div>
    </div>
  )
}

export default TeamMember