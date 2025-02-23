import React, { useId } from 'react'
import { sharingOptions } from './data/sharingOptions.data'
import { useShareOptionContext } from '@src/context/ShareOption.context'

export const SharingSelector = () => {
  const { shareOptionContextValue, setShareOptionContextValue } = useShareOptionContext()
  const id = useId()
  return (
    <div className="w-full flex justify-center rounded-md shadow-sm" role="group">
      {sharingOptions.map(({ value }, index: number) => {
        const className = `capitalize ${shareOptionContextValue === value ? 'btn-outline-pushed' : 'btn-outline'}`
 
        return (
          <button key={`${id}-${index}`} onClick={() => setShareOptionContextValue(value)} type="button" className={className}>
            <span>{value}</span>
          </button>
        )
      })}
    </div>
  )
}

export default SharingSelector
