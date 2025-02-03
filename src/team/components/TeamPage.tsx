import { Box } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS';
import { teamList } from '../../home/components/__data__/team.data';
import TeamMemberDetails from './TeamMemberDetails';

const TeamPage = () => {

    const { DarkBlue3, MainBlue, LightBackground } = COLORS;
    const isEven = (num:number) => num%2===0;

  return (
   <Box sx={{pt:8}}>
        <h1 >
            Meet our <br /> amazing team
        </h1>
        <Box sx={{display:"flex", flexDirection:"column", gap:4}}>
            {teamList.map((member, index) => (
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:isEven(index) ? "row" : "row-reverse",
                        background:isEven(index)? LightBackground : `linear-gradient(to right, ${DarkBlue3}, ${MainBlue})`,
                        p:4,
                        height:"100vh",
                    }}
                >
                    <TeamMemberDetails member={member}/>
                </Box>
            ))}
        </Box>
   </Box>
  )
}

export default TeamPage