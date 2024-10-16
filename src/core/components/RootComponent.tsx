import React from 'react'
import { Outlet, useBlocker } from 'react-router-dom'
import { setPreviousPage } from '../reducers/coreSlice'
import { useDispatch } from 'react-redux'

const RootComponent = () => {
    const dispatch = useDispatch()

  // set previous page path
  useBlocker(({currentLocation, nextLocation})=>{
    dispatch(setPreviousPage(currentLocation.pathname))

    return false
  })

  return (
    <Outlet/>
  )
}

export default RootComponent