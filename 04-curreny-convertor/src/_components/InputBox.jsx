import React from 'react'
import { useId } from 'react'

function InputBox ({
  label,
  className = '',
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false
}) {
  const amountInputId = useId()

  return (
    <>
      <div
        className={`flex rounded-lg text-sm bg-white px-4 py-3 ${className}`}
      >
        <div className='w-1/2'>
          <label htmlFor={amountInputId} className='text-black/40 mb-2'>
            {label}
          </label>
          <input
            id={amountInputId}
            type='number'
            className='outline-none w-full py-2 bg-transparent'
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={e =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
          <p className='w-full text-black/40'>Currency Type</p>
          <select
            className='rounded-lg px-2 bg-gray-100 cursor-pointer outline-none'
            value={selectCurrency}
            onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.map(cur => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox
