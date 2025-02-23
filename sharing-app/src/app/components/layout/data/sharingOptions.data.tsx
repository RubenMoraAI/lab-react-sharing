import { WithProps } from '../../samples/WithProps'
import { WithHOC } from '../../samples/WithHOC'
import { WithRedux } from '../../samples/WithRedux'
import { WithContext } from '../../samples/WithContext'
import { WithRxjs } from '../../samples/WithRxjs'
import WithStateLifting from '../../samples/WithStateLifting'
import WithZustand from '../../samples/WithZustand'

export const sharingOptions = [{ value: 'props' }, { value: 'HOC' }, { value: 'rxjs' },{ value: 'State Lifting' }, { value: 'context' }, { value: 'redux' },  { value: 'Zustand' }]

export const componentsByShareOption = {
  props: <WithProps />,
  rxjs: <WithRxjs />,
  'State Lifting': <WithStateLifting />,
  context: <WithContext />,
  redux: <WithRedux />,
  HOC: <WithHOC />,
  Zustand: <WithZustand />
}
export type ComponentsByShareOptionKey = keyof typeof componentsByShareOption
