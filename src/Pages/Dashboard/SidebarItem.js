import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const SidebarItem = () => {
    const [open,setOpen]=useState(false)
  return (
    <div className='py-2 px-1 text-xl block hover:bg-[#3591ca] h-auto'>
        <div className='flex justify-around items-center'>
            <span className='inline-block'>Master Entry</span>
            <FontAwesomeIcon className='cursor-pointer' icon={faChevronDown}></FontAwesomeIcon>
        </div>
        <div className='pt-2 h-0 overflow-hidden'>
<h2>sidebar content</h2>
        </div>
    </div>
  )
}

export default SidebarItem