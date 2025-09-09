import React from 'react'

const services = [
  {title: 'Individual Counselling', desc: 'Online/offline psychotherapy for children, teens, and adults.'},
  {title: 'Group Workshops', desc: 'Play-based, therapy-informed workshops for schools and communities.'},
  {title: 'Mindfulness & Expressive Therapies', desc: 'Art, movement, and narrative approaches to healing.'},
  {title: 'Assessments & Research Support', desc: 'Psychological assessments and program evaluation.'},
]

export default function Services(){
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        <h3 className='text-xl font-bold'>Services</h3>
        <p className='text-slate-600 mt-2'>Programs and support for children, teens, parents, educators, and organizations.</p>
        <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map(s=> (
            <div key={s.title} className='p-4 border rounded-md bg-slate-50'>
              <h4 className='font-semibold'>{s.title}</h4>
              <p className='text-sm mt-2 text-slate-600'>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
