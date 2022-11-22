'use client'
import { FaBtc } from 'react-icons/fa'
import { useAccountBox } from './hooks/useAccountBox'

interface AccountBoxProps {
  onClick: (amount: number) => void
}

export const AccountBox = ({ onClick }: AccountBoxProps) => {
  const { handleOnChange, handleClick, handleEnter, handleBlur, amount } = useAccountBox({ onClick })
  return (
    <div className="relative   ">
      <div className="absolute top-5 left-3">
        <FaBtc className=" text-gray-400 z-20 hover:text-gray-500" />
      </div>
      <input
        onKeyDown={e => handleEnter(e)}
        onChange={e => handleOnChange(e)}
        onBlur={e => handleBlur(e)}
        value={amount}
        type="number"
        className="h-14  w-full  px-8 bg-slate-800 hover:bg-slate-700  border border-slate-500 border-1 rounded-lg z-0 focus:shadow focus:outline-none"
        placeholder="Amount..."
      />
      <div className="absolute top-2 right-1">
        <button onClick={handleClick} className="h-10 mr-2 px-4   text-white rounded-r-md bg-indigo-700 hover:bg-indigo-800">
          Send
        </button>
      </div>
    </div>
  )
}
export default AccountBox
