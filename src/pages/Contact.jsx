import React from 'react'

export default function Contact(){
  return (
    <div className='max-w-3xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold'>Contact</h2>
      <p className='mt-2 text-slate-600'>Enquiries: anubhutihealingspace@gmail.com · 95117 43719</p>
      <form className='mt-6 space-y-4' onSubmit={(e)=>{ e.preventDefault(); alert('Thank you — form submission stub.'); }}>
        <div>
          <label className='block text-sm font-medium'>Name</label>
          <input required className='w-full mt-1 p-2 border rounded-md' />
        </div>
        <div>
          <label className='block text-sm font-medium'>Email</label>
          <input type='email' required className='w-full mt-1 p-2 border rounded-md' />
        </div>
        <div>
          <label className='block text-sm font-medium'>Message</label>
          <textarea required className='w-full mt-1 p-2 border rounded-md' rows='4' />
        </div>
        <div>
          <button className='px-4 py-2 bg-indigo-600 text-white rounded-md'>Send Enquiry</button>
        </div>
      </form>
    </div>
  )
}
