import { Law } from "./types"

export const sampleLaws: Law[] = [
  {
    id: 1,
    name: "窃盗罪",
    description: "他人の財物を窃取した者は、窃盗の罪とし、10年以下の懲役又は50万円以下の罰金に処する。",
    penalties: [
      { id: 1, description: "10年以下の懲役", imprisonmentYears: 10 },
      { id: 2, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ],
    attemptPenalties: [
      { id: 11, description: "5年以下の懲役", imprisonmentYears: 5 },
      { id: 12, description: "25万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 2,
    name: "詐欺罪",
    description: "人を欺いて財物を交付させた者は、詐欺の罪とし、10年以下の懲役に処する。",
    penalties: [
      { id: 3, description: "10年以下の懲役", imprisonmentYears: 10 }
    ],
    attemptPenalties: [
      { id: 13, description: "5年以下の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 3,
    name: "公務執行妨害罪",
    description: "公務員が職務を執行するに当たり、これに対して暴行又は脅迫を加えた者は、3年以下の懲役若しくは禁錮又は50万円以下の罰金に処する。",
    penalties: [
      { id: 4, description: "3年以下の懲役", imprisonmentYears: 3 },
      { id: 5, description: "3年以下の禁錮", imprisonmentYears: 3 },
      { id: 6, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 4,
    name: "横領罪",
    description: "自己の占有する他人の物を横領した者は、5年以下の懲役に処する。",
    penalties: [
      { id: 7, description: "5年以下の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 5,
    name: "器物損壊罪",
    description: "他人の物を損壊し、又は傷害した者は、3年以下の懲役又は30万円以下の罰金若しくは科料に処する。",
    penalties: [
      { id: 8, description: "3年以下の懲役", imprisonmentYears: 3 },
      { id: 9, description: "30万円以下の罰金", imprisonmentYears: 0 },
      { id: 10, description: "科料", imprisonmentYears: 0 }
    ]
  }
]