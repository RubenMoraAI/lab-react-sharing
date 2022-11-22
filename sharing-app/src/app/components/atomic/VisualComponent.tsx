'use client'

import { ReactNode } from 'react'

export interface VisualComponentProps {
  title: string
  description?: string
  amount?: string
  children?: ReactNode
}
export const VisualComponent = ({ title = 'Component', amount, description, children }: VisualComponentProps) => {
  return (
    <div className={'text-center component bg-slate-800 rounded-md text-white p-4 border border-slate-700 relative mt-4 '}>
      <span key={`${title}-${Math.random()}`} className="rerender absolute left-3 top-2 text-xs font-bold text-teal-50">
        Rendering
      </span>

      <div className="flex  flex-col justify-center w-full ">
        {description && <p className="text-justify mt-2 mb-1 font-thin">{description}</p>}
        <h2 className="mt-2 font-bold text-lg ">{title}</h2>
        {amount && <h3 className="font-thin text-md mb-2 text-indigo-400">{amount}</h3>}
      </div>
      {children}
    </div>
  )
}
export default VisualComponent
