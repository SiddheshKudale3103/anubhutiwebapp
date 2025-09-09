import React from 'react'

export default function Collaborations(){
  return (
    <div className='max-w-6xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold'>Collaborations & Tie-ups</h2>
      <p className='mt-3 text-slate-600'>Work with corporates, cafes, and community spaces to bring mental-health experiences to varied audiences.</p>
      <div className='mt-6 grid md:grid-cols-2 gap-6'>
        <div className='p-4 border rounded-md'>
          <h4 className='font-semibold'>For Corporates</h4>
          <p className='text-sm mt-2'>Micro-labs, half-day intensives, manager clinics, and wellbeing tracks.</p>
        </div>
        <div className='p-4 border rounded-md'>
          <h4 className='font-semibold'>Cafés & Community Spaces</h4>
          <p className='text-sm mt-2'>Chai & Chat circles, Canvas & Cocoa nights, journaling jams and pop-ups.</p>
        </div>
      </div>
    </div>
  )
}
