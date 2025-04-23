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
  },
  {
    id: 6,
    name: "ガス等漏出致死",
    description: "ガス等漏出致死（刑法第118条第2項）は、ガス等を漏出させて人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 14, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 7,
    name: "往来妨害致死",
    description: "往来妨害致死（刑法第124条第2項）は、往来を妨害して人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 15, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 8,
    name: "汽車転覆等致死",
    description: "汽車転覆等致死（刑法第126条第3項）は、汽車等を転覆させて人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 16, description: "死刑", imprisonmentYears: 100 },
      { id: 17, description: "無期懲役", imprisonmentYears: 99 }
    ]
  },
  {
    id: 9,
    name: "往来危険による汽車転覆等致死",
    description: "往来危険による汽車転覆等致死（刑法第127条）は、往来を危険にして汽車等を転覆させ人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 18, description: "死刑", imprisonmentYears: 100 },
      { id: 19, description: "無期懲役", imprisonmentYears: 99 }
    ]
  },
  {
    id: 10,
    name: "浄水汚染等致死",
    description: "浄水汚染等致死（刑法第145条）は、浄水を汚染させて人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 20, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 11,
    name: "水道毒物等混入致死",
    description: "水道毒物等混入致死（刑法第146条後段）は、水道に毒物等を混入させて人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 21, description: "死刑", imprisonmentYears: 100 },
      { id: 22, description: "無期懲役", imprisonmentYears: 99 },
      { id: 23, description: "5年以上の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 12,
    name: "強制わいせつ等致死",
    description: "強制わいせつ等致死（刑法第181条第1項）は、強制わいせつ等により人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 24, description: "無期懲役", imprisonmentYears: 99 },
      { id: 25, description: "3年以上の懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 13,
    name: "強制性交等致死",
    description: "強制性交等致死（刑法第181条第2項）は、強制性交等により人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 26, description: "無期懲役", imprisonmentYears: 99 },
      { id: 27, description: "6年以上の懲役", imprisonmentYears: 6 }
    ]
  },
  {
    id: 14,
    name: "特別公務員職権濫用等致死",
    description: "特別公務員職権濫用等致死（刑法第196条）は、特別公務員が職権を濫用して人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 28, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 15,
    name: "殺人",
    description: "殺人（刑法第199条）は、人を殺した場合に適用される罪です。",
    penalties: [
      { id: 29, description: "死刑", imprisonmentYears: 100 },
      { id: 30, description: "無期懲役", imprisonmentYears: 99 },
      { id: 31, description: "5年以上の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 16,
    name: "傷害致死",
    description: "傷害致死（刑法第205条）は、人を傷害して死亡させた場合に適用される罪です。",
    penalties: [
      { id: 32, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 17,
    name: "不同意堕胎致死",
    description: "不同意堕胎致死（刑法第216条）は、女子の同意を得ずに堕胎させて死亡させた場合に適用される罪です。",
    penalties: [
      { id: 33, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 18,
    name: "遺棄等致死",
    description: "遺棄等致死（刑法第219条）は、人を遺棄等して死亡させた場合に適用される罪です。",
    penalties: [
      { id: 34, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 19,
    name: "逮捕等致死",
    description: "逮捕等致死（刑法第221条）は、人を不法に逮捕等して死亡させた場合に適用される罪です。",
    penalties: [
      { id: 35, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 20,
    name: "強盗致死",
    description: "強盗致死（刑法第240条後段）は、強盗が人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 36, description: "死刑", imprisonmentYears: 100 },
      { id: 37, description: "無期懲役", imprisonmentYears: 99 }
    ]
  },
  {
    id: 21,
    name: "強盗・強制性交等致死",
    description: "強盗・強制性交等致死（刑法第241条第3項）は、強盗が強制性交等をして人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 38, description: "死刑", imprisonmentYears: 100 },
      { id: 39, description: "無期懲役", imprisonmentYears: 99 }
    ]
  },
  {
    id: 22,
    name: "建造物等損壊致死",
    description: "建造物等損壊致死（刑法第260条後段）は、建造物等を損壊して人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 40, description: "3年以上の有期懲役", imprisonmentYears: 3 }
    ]
  },
  {
    id: 23,
    name: "自殺関与及び同意殺人",
    description: "自殺関与及び同意殺人（刑法第202条）は、人の自殺を幇助し、または同意を得て人を殺した場合に適用される罪です。",
    penalties: [
      { id: 41, description: "6月以上7年以下の懲役", imprisonmentYears: 7 },
      { id: 42, description: "6月以上7年以下の禁錮", imprisonmentYears: 7 }
    ]
  },
  {
    id: 24,
    name: "同意堕胎致死",
    description: "同意堕胎致死（刑法第213条後段）は、女子の同意を得て堕胎させて死亡させた場合に適用される罪です。",
    penalties: [
      { id: 43, description: "3月以上5年以下の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 25,
    name: "業務上堕胎致死",
    description: "業務上堕胎致死（刑法第214条後段）は、医師等が業務上堕胎させて死亡させた場合に適用される罪です。",
    penalties: [
      { id: 44, description: "6月以上7年以下の懲役", imprisonmentYears: 7 }
    ]
  },
  {
    id: 26,
    name: "外患誘致",
    description: "外患誘致（刑法第81条）は、外国と通謀して日本に対し武力を行使させた場合に適用される罪です。",
    penalties: [
      { id: 45, description: "死刑", imprisonmentYears: 100 }
    ]
  },
  {
    id: 27,
    name: "外患援助",
    description: "外患援助（刑法第82条）は、敵国に軍事上の利益を与え、または日本に不利益を与えた場合に適用される罪です。",
    penalties: [
      { id: 46, description: "死刑", imprisonmentYears: 100 },
      { id: 47, description: "無期懲役", imprisonmentYears: 99 },
      { id: 48, description: "2年以上の懲役", imprisonmentYears: 2 }
    ]
  },
  {
    id: 28,
    name: "現住建造物等放火",
    description: "現住建造物等放火（刑法第108条）は、人が住居に使用する建造物等に放火した場合に適用される罪です。",
    penalties: [
      { id: 49, description: "死刑", imprisonmentYears: 100 },
      { id: 50, description: "無期懲役", imprisonmentYears: 99 },
      { id: 51, description: "5年以上の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 29,
    name: "激発物破裂",
    description: "激発物破裂（刑法第117条第1項前段）は、火薬等の激発物を破裂させた場合に適用される罪です。",
    penalties: [
      { id: 52, description: "死刑", imprisonmentYears: 100 },
      { id: 53, description: "無期懲役", imprisonmentYears: 99 },
      { id: 54, description: "5年以上の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 30,
    name: "現住建造物等浸害",
    description: "現住建造物等浸害（刑法第119条）は、現に人が住居に使用する建造物等を浸害した場合に適用される罪です。",
    penalties: [
      { id: 55, description: "死刑", imprisonmentYears: 100 },
      { id: 56, description: "無期懲役", imprisonmentYears: 99 },
      { id: 57, description: "3年以上の懲役", imprisonmentYears: 3 }
    ]
  }
]
