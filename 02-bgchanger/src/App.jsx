import { useState } from 'react'
import './App.css'
import ColorButton from './_components/colorButton'

function App () {
  const [bgcolor, setBgcolor] = useState('olive')

  return (
    <div
      className='w-full h-screen flex flex-col'
      style={{ backgroundColor: bgcolor }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 py-2 shadow-lg bg-white px-8 rounded-full'>
          <button
            onClick={() => setBgcolor('red')}
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setBgcolor('green')}
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setBgcolor('blue')}
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <ColorButton onClick={() => setBgcolor('red')} colorName='Red' />
          <ColorButton colorName='Black' />
          <ColorButton colorName='Purple' />
        </div>
      </div>
    </div>
  )
}

export default App

/* <p className='px-8 py-1 bg-red-500 rounded-full text-4xl'>Red</p>
        <p className='px-8 py-1 bg-red-500 rounded-full text-4xl'>Green</p>
        <p className='px-8 py-1 bg-red-500 rounded-full text-4xl'>Blue</p>
        <p className='px-8 py-1 bg-red-500 rounded-full text-4xl'>Yellow</p> */
