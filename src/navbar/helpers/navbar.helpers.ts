import { User } from "../../core/types/core.state.types";

export const getUserInitials = (user:User):string|undefined => {
   const firstInitial = user.firstName.split("").shift()

   if(firstInitial) return `${firstInitial}. ${user.lastName}`

   return undefined
}