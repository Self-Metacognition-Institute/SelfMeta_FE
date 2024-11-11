import React from 'react'
import SmButton from '../components/SmButton'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center p-10'>
        <div className='!flex items-center justify-between gap-3 w-1/2'>
            <SmButton text='Button' type='primary'/>
            <SmButton text='Button' />
            <SmButton text='Button' type='dashed'/>
            <SmButton text='Button' type='text'/>
            <SmButton text='Button' type='link'/>
        </div>
        <div className='w-full h-[2px] bg-slate-500 my-10' />
        <div className='!flex items-center justify-between gap-3 w-1/2'>
            <SmButton text='Button' type='primary' loading={true}/>
            <SmButton text='Button' loading/>
            <SmButton text='Button' type='dashed' loading/>
            <SmButton text='Button' type='text' loading/>
            <SmButton text='Button' type='link' loading/>
        </div>
        <div className='w-full h-[2px] bg-slate-500 my-10' />
        <div className='!flex items-center justify-between gap-3 w-1/2'>
            <SmButton text='Button' type='primary' disabled/>
            <SmButton text='Button' disabled/>
            <SmButton text='Button' type='dashed' disabled/>
            <SmButton text='Button' type='text' disabled/>
            <SmButton text='Button' type='link' disabled/>
        </div>
    </div>
  )
}

export default page