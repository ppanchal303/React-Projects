import { useState } from 'react'
import './App.css'
import { InputBox } from './_components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App () {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * Number(currencyInfo[to]))
  }

  // console.log(amount)

  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg)`
        }}
      >
        <div className='w-full max-w-md mx-auto border-2 border-gray-200 bg-gray-500/50 backdrop-blur-sm p-6 rounded-xl '>
          <form
            onSubmit={e => {
              e.preventDefault()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                className='text-md'
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={currency => setFrom(currency)}
                onAmountChange={amount => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                className='text-md'
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                selectCurrency={to}
                amountDisable
                value={convertedAmount}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              onClick={convert}
            >
              Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
