'use client'

import { Law } from "@/components/law/types"

interface LawDetailsProps {
  law: Law
  showAttemptPenalties: boolean
}

export function LawDetails({ law, showAttemptPenalties }: LawDetailsProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{law.name}{showAttemptPenalties ? "（未遂）" : ""}</h2>
      <p className="mb-6 text-gray-600">{law.description}</p>
      <h3 className="text-xl font-semibold mb-3">刑罰</h3>
      <ul className="space-y-2">
        {(showAttemptPenalties && law.attemptPenalties ? law.attemptPenalties : law.penalties).map((penalty) => (
          <li key={penalty.id} className="flex items-center">
            {penalty.description}
          </li>
        ))}
      </ul>
      {showAttemptPenalties && !law.attemptPenalties && (
        <p className="mt-4 text-yellow-600">この法律には未遂罪の規定がありません。</p>
      )}
    </div>
  )
}