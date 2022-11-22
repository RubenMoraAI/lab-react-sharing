import { useShareOptionContext } from '@src/context'
import React, { useId } from 'react'
import { sharingOptions } from './data/sharingOptions.data'

export const SharingSelector = () => {
  const { shareOptionContextValue, setShareOptionContextValue } = useShareOptionContext()
  const id = useId()
  return (
    <div className="w-full flex justify-center rounded-md shadow-sm" role="group">
      {sharingOptions.map(({ icon, value }, index: number) => (
        <button key={`${id}-${index}`} onClick={() => setShareOptionContextValue(value)} type="button" className={shareOptionContextValue === value ? 'btn-outline-pushed' : 'btn-outline'}>
          {icon}
          <span className="first-letter:uppercase">{value}</span>
        </button>
      ))}
    </div>
  )
}

export default SharingSelector
