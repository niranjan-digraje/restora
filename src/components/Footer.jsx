import React from 'react'
import SocialMedia from '../constants/SocialMedia'

const Footer = () => {
  return (
    <div className='mb-8 mt-8 '>
        <div className='border-b-2  border-neutral-700 mb-8'></div>
        <div className='flex felx-center items-center justify-center gap-8'>
            {SocialMedia.map((link,index) => (
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </a>
            ))}
        </div>
        <p className='mt-8 text-center tracking-tighter text-neutral-500'>
            &copy;compileTab. All right reserved
        </p>
    </div>
  )
}

export default Footer