import React, { useCallback } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function HomePage() {
    const [value,setValue]=useState()

    const navigate = useNavigate();
    const handleRoomjoin = useCallback(()=>{
        navigate(`/room/${value}`)
        console.log("inside",value)
    },[navigate,value])
  return (
    <div>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='enter room code' />
        <button onClick={handleRoomjoin}>join</button>
    </div>
  )
}
