import React from 'react'
import CONTACT from '../constants/Contact.jsx'

const ContactSection = () => {
  return (
    <section className='container mx-auto py-8 ' id='contact'>
      <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Contact Us</h2>
      <div className='text-neutral-400'>
        {CONTACT.map((detail) => (
          <p key={detail.key} className='my-2  pb-2 text-center text-2xl tracking-tighter lg:text-3xl'>
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  )
}

export default ContactSection