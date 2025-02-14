import { Box } from "@mui/material"
import useIDBImages from "../../../core/hooks/useIDBImages";
import { IDBStores } from "../../../utils/indexedDB/types/indexedDB.types";
import { TeamListType } from "../../types/home.types";


const TeamMember = ({member, onlyImage}:{member:TeamListType, onlyImage?:boolean}) => {

    // get image
  const image = useIDBImages(member.memberImgUrl, IDBStores.MISC_IMAGES, member.imageId);

  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      {/* <Box sx={{height:"20rem", border:"2px solid orange"}}> */}
        <img src={image} alt="img" style={{height:"20rem"}}/>
      {/* </Box> */}
        
      {!onlyImage && 
        <div className="nameAndTitle">
          <div className="memberName">{member.memberName}</div>
          <div className="memberTitle">{member.memberTitle}</div>
        </div>
      }
    </Box>
  )
}

export default TeamMember