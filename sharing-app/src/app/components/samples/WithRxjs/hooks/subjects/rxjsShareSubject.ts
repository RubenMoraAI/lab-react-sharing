import { SubjectManager } from '../../classes/subjectManager'

export interface RxjsAmounts {
  wallet: number
  exchange: number
}
export const rxjsShareSubject = new SubjectManager<RxjsAmounts>()
