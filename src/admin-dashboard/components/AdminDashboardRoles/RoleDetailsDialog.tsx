import { Dialog, DialogContent } from '@mui/material'
import RoleDetails from '../../../roles/components/RoleDetails';

const RoleDetailsDialog = ({
        open, 
        setOpen, 
        roleId
    }:{
        open:boolean; 
        setOpen:(value:boolean)=>void; 
        roleId:string
}) => {
    const handleClose = () => setOpen(false);

  return (
    <Dialog onClose={handleClose} open={open}>
        <DialogContent sx={{ width:"fit-content", display:"flex", justifyContent:"center", maxHeight:"80vh", overflowY:"auto"}}>
            <RoleDetails id={roleId}/>
        </DialogContent>
    </Dialog>
  )
}

export default RoleDetailsDialog