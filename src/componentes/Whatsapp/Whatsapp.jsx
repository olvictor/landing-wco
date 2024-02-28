import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className='absolute bottom-0 right-0 bg-green-700 h-[50px] w-[50px] flex justify-center items-center rounded-full'>
        <FaWhatsapp fill='#fff' fontSize={40} />
    </div>
  )
}

export default Whatsapp