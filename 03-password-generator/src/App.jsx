import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App () {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('dummyPassword')

  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ''
    let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numAllowed) {
      charSet += '0123456789'
    }
    if (charAllowed) {
      charSet += '!@#$%^&*-_=+[]{}~`'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * charSet.length + 1)
      pass += charSet.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numAllowed, charAllowed, passwordGen])

  return (
    <>
      <div className='my-10 flex flex-wrap justify-center'>
        <div className='w-full max-w-md mx-4 bg-red-500 px-4 py-3 rounded-xl'>
          <div className='flex justify-center pb-2 text-xl'>
            Password Generator
          </div>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 text-red-500 text-semibold'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              ref={passwordRef}
              readOnly
            />
            <button
              className='outline-none bg-gray-500 px-3 text-white shrink-0 hover:bg-gray-600'
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className='flex gap-x-2 text-sm'>
            <div className='flex items-center gap-x-2'>
              <input
                type='range'
                min={8}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={event => {
                  setLength(event.target.value)
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                defaultChecked={numAllowed}
                id='numberInput'
                onChange={() => {
                  setNumAllowed(prev => !prev)
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='charInput'
                onChange={() => {
                  setCharAllowed(prev => !prev)
                }}
              />
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
