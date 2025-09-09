import React from 'react'

export default function Programs(){
  return (
    <div className='max-w-6xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold'>Programs</h2>
      <p className='mt-3 text-slate-600'>Programs for Children (3–12), Teens (12–25), Parents, Educators, and Adults.</p>
      <div className='mt-6 grid md:grid-cols-2 gap-6'>
        <div className='p-4 border rounded-md'>
          <h4 className='font-semibold'>Kids Club (Ages 3–16)</h4>
          <p className='text-sm mt-2'>Playful curriculum focusing on emotional, cognitive and behavioural growth.</p>
        </div>
        <div className='p-4 border rounded-md'>
          <h4 className='font-semibold'>Parenting Series</h4>
          <p className='text-sm mt-2'>Three-hour modules: parenting styles, emotional presence, practical tools.</p>
        </div>
      </div>
    </div>
  )
}
