import React from 'react'

export default function TopBadge () {
  return (
    <div className='h-80 bg-[#40BFFF] flex justify-between items-center pl-14 pr-24 pt-18'>
      <div className='text-white text-left'>
        <h3 className='text-[1.7rem] font-medium'>Adidas Men Running <br /> Sneakers</h3>
        <p className='text-xs'>Performance and design. Taken right to the edge.</p>
        <button className='mt-4.5 text-[0.65rem] font-medium rounded-full'>
          <span className='underline decoration-white decoration-2'>SHOP N</span>OW
        </button>
      </div>

      <div className='flex-shrink-0'>
        <img src="shoe.png" alt="shoe" className='w-[250px] h-[200px] object-cover' />
      </div>
    </div>
  )
}
