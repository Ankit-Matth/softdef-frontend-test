import React from 'react'
import Image from 'next/image'

export default function TopBadge () {
  return (
    <div className='h-80 bg-[#40BFFF] flex flex-col md:flex-row justify-between items-center pl-8 pr-12 pt-8 lg:pl-14 lg:pr-24 lg:pt-18'>
      <div className='text-white text-left mb-2 lg:mb-0'>
        <h3 className='text-[1.2rem] lg:text-[1.7rem] font-medium'>Adidas Men Running <br /> Sneakers</h3>
        <p className='text-[0.5rem] lg:text-xs'>Performance and design. Taken right to the edge.</p>
        <button className='mt-3 text-[0.4rem] lg:text-[0.65rem] font-medium rounded-full'>
          <span className='underline decoration-white decoration-2'>SHOP N</span>OW
        </button>
      </div>

      <div className='flex-shrink-0'>
        <Image
          src="/shoe.png" 
          alt="shoe" 
          width={250}
          height={200}
          className='w-[180px] lg:w-[250px] h-[150px] lg:h-[200px] object-cover' 
        />
      </div>
    </div>
  )
}
