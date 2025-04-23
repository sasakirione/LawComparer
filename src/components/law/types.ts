export interface Penalty {
  id: number
  description: string
  imprisonmentYears: number
}

export interface Law {
  id: number
  name: string
  description: string
  penalties: Penalty[]
  attemptPenalties?: Penalty[]
}

export interface LawExplorerProps {
  initialLaws?: Law[]
}