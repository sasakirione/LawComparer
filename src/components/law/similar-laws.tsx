'use client'

import { Law } from "@/components/law/types"

interface SimilarLawsProps {
  similarLaws: Law[]
  onSelectLaw: (law: Law) => void
  getImprisonmentPenalty: (law: Law) => string
}

export function SimilarLaws({ similarLaws, onSelectLaw, getImprisonmentPenalty }: SimilarLawsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">類似の法律</h3>
      <ul className="space-y-4">
        {similarLaws.map((law) => (
          <li
            key={law.id}
            className="cursor-pointer hover:bg-gray-100 p-3 rounded-md transition-colors duration-200"
            onClick={() => onSelectLaw(law)}
          >
            <span className="font-semibold">{law.name}</span>
            <br />
            <span className="text-sm text-gray-600">最高刑: {getImprisonmentPenalty(law)}</span>
          </li>
        ))}
        {similarLaws.length === 0 && (
          <li className="text-gray-500">類似の法律が見つかりませんでした</li>
        )}
      </ul>
    </div>
  )
}