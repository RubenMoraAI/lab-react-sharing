import { AiFillFire } from 'react-icons/ai'
import { WithProps } from '../../samples/WithProps'
import { WithHOC } from '../../samples/WithHOC'
import { WithRedux } from '../../samples/WithRedux'
import { WithContext } from '../../samples/WithContext'
import { WithRxjs } from '../../samples/WithRxjs'

export const sharingOptions = [
  { value: 'props', icon: <AiFillFire className="mr-2" /> },
  { value: 'HOC', icon: <AiFillFire className="mr-2" /> },
  { value: 'rxjs', icon: <AiFillFire className="mr-2" /> },
  { value: 'context', icon: <AiFillFire className="mr-2" /> },
  { value: 'redux', icon: <AiFillFire className="mr-2" /> }
]

export const componentsByShareOption = {
  props: <WithProps />,
  rxjs: <WithRxjs />,
  context: <WithContext />,
  redux: <WithRedux />,
  HOC: <WithHOC />
}
export type ComponentsByShareOptionKey = keyof typeof componentsByShareOption
