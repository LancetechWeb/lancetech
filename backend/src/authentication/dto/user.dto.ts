import { UserDTO } from "../index";

export const getUserResponseDTO = (user):UserDTO=>{
    const {id, email, isActive, firstName, lastName, rank, authorities, createdAt, updatedAt} = user

    return {id, email, isActive, firstName, lastName, rank, authorities, createdAt, updatedAt}
}