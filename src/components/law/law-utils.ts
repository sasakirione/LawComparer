import { Law } from "./types"

export const getMaxImprisonmentYears = (law: Law, isAttempt: boolean): number => {
  const penalties = isAttempt && law.attemptPenalties ? law.attemptPenalties : law.penalties
  return Math.max(...penalties.map(p => p.imprisonmentYears))
}

export const getImprisonmentPenalty = (law: Law, showAttemptPenalties: boolean): string => {
  const penalties = showAttemptPenalties && law.attemptPenalties ? law.attemptPenalties : law.penalties
  const maxImprisonmentPenalty = penalties.reduce((max, p) => p.imprisonmentYears > max.imprisonmentYears ? p : max)
  return maxImprisonmentPenalty.description
}

export const getSimilarLaws = (
  laws: Law[], 
  selectedLaw: Law | null, 
  showAttemptPenalties: boolean
): Law[] => {
  if (!selectedLaw) return []
  
  return laws.filter(law => 
    law.id !== selectedLaw.id && 
    Math.abs(
      getMaxImprisonmentYears(law, showAttemptPenalties) - 
      getMaxImprisonmentYears(selectedLaw, showAttemptPenalties)
    ) <= 2
  )
}

export const sortLawsByImprisonment = (
  laws: Law[], 
  sortOrder: "asc" | "desc", 
  showAttemptPenalties: boolean
): Law[] => {
  return [...laws].sort((a, b) => {
    const aMaxYears = getMaxImprisonmentYears(a, showAttemptPenalties)
    const bMaxYears = getMaxImprisonmentYears(b, showAttemptPenalties)
    return sortOrder === "desc" ? bMaxYears - aMaxYears : aMaxYears - bMaxYears
  })
}