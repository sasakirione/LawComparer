import { Law } from "./types"

export const sampleLaws: Law[] = [
  {
    id: 1,
    name: "窃盗罪",
    description: "他人の財物を窃取した者は、窃盗の罪とし、10年以下の懲役又は50万円以下の罰金に処する。",
    penalties: [
      { id: 1, description: "10年以下の懲役", imprisonmentYears: 5 },
      { id: 2, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ],
    attemptPenalties: [
      { id: 11, description: "5年以下の懲役", imprisonmentYears: 2.5 },
      { id: 12, description: "25万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 2,
    name: "詐欺罪",
    description: "人を欺いて財物を交付させた者は、詐欺の罪とし、10年以下の懲役に処する。",
    penalties: [
      { id: 3, description: "10年以下の懲役", imprisonmentYears: 5 }
    ],
    attemptPenalties: [
      { id: 13, description: "5年以下の懲役", imprisonmentYears: 2.5 }
    ]
  },
  {
    id: 3,
    name: "公務執行妨害罪",
    description: "公務員が職務を執行するに当たり、これに対して暴行又は脅迫を加えた者は、3年以下の懲役若しくは禁錮又は50万円以下の罰金に処する。",
    penalties: [
      { id: 4, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 5, description: "3年以下の禁錮", imprisonmentYears: 1.5 },
      { id: 6, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 4,
    name: "横領罪",
    description: "自己の占有する他人の物を横領した者は、5年以下の懲役に処する。",
    penalties: [
      { id: 7, description: "5年以下の懲役", imprisonmentYears: 2.5 }
    ]
  },
  {
    id: 5,
    name: "器物損壊罪",
    description: "他人の物を損壊し、又は傷害した者は、3年以下の懲役又は30万円以下の罰金若しくは科料に処する。",
    penalties: [
      { id: 8, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 9, description: "30万円以下の罰金", imprisonmentYears: 0 },
      { id: 10, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 6,
    name: "ガス等漏出致死",
    description: "ガス等漏出致死（刑法第118条第2項）は、ガス等を漏出させて人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 14, description: "3年以上の有期懲役", imprisonmentYears: 1.5 }
    ]
  },
  {
    id: 7,
    name: "往来妨害致死",
    description: "往来妨害致死（刑法第124条第2項）は、往来を妨害して人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 15, description: "3年以上の有期懲役", imprisonmentYears: 1.5 }
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
      { id: 20, description: "3年以上の有期懲役", imprisonmentYears: 1.5 }
    ]
  },
  {
    id: 11,
    name: "水道毒物等混入致死",
    description: "水道毒物等混入致死（刑法第146条後段）は、水道に毒物等を混入させて人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 21, description: "死刑", imprisonmentYears: 100 },
      { id: 22, description: "無期懲役", imprisonmentYears: 99 },
      { id: 23, description: "5年以上の懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 12,
    name: "強制わいせつ等致死",
    description: "強制わいせつ等致死（刑法第181条第1項）は、強制わいせつ等により人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 24, description: "無期懲役", imprisonmentYears: 99 },
      { id: 25, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 13,
    name: "強制性交等致死",
    description: "強制性交等致死（刑法第181条第2項）は、強制性交等により人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 26, description: "無期懲役", imprisonmentYears: 99 },
      { id: 27, description: "6年以上の懲役", imprisonmentYears: 13 }
    ]
  },
  {
    id: 14,
    name: "特別公務員職権濫用等致死",
    description: "特別公務員職権濫用等致死（刑法第196条）は、特別公務員が職権を濫用して人を死亡させた場合に適用される罪です。",
    penalties: [
      { id: 28, description: "3年以上の有期懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 15,
    name: "殺人",
    description: "殺人（刑法第199条）は、人を殺した場合に適用される罪です。",
    penalties: [
      { id: 29, description: "死刑", imprisonmentYears: 100 },
      { id: 30, description: "無期懲役", imprisonmentYears: 99 },
      { id: 31, description: "5年以上の懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 16,
    name: "傷害致死",
    description: "傷害致死（刑法第205条）は、人を傷害して死亡させた場合に適用される罪です。",
    penalties: [
      { id: 32, description: "3年以上の有期懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 17,
    name: "不同意堕胎致死",
    description: "不同意堕胎致死（刑法第216条）は、女子の同意を得ずに堕胎させて死亡させた場合に適用される罪です。",
    penalties: [
      { id: 33, description: "3年以上の有期懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 18,
    name: "遺棄等致死",
    description: "遺棄等致死（刑法第219条）は、人を遺棄等して死亡させた場合に適用される罪です。",
    penalties: [
      { id: 34, description: "3年以上の有期懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 19,
    name: "逮捕等致死",
    description: "逮捕等致死（刑法第221条）は、人を不法に逮捕等して死亡させた場合に適用される罪です。",
    penalties: [
      { id: 35, description: "3年以上の有期懲役", imprisonmentYears: 11.5 }
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
      { id: 40, description: "3年以上の有期懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 23,
    name: "自殺関与及び同意殺人",
    description: "自殺関与及び同意殺人（刑法第202条）は、人の自殺を幇助し、または同意を得て人を殺した場合に適用される罪です。",
    penalties: [
      { id: 41, description: "6月以上7年以下の懲役", imprisonmentYears: 3.75 },
      { id: 42, description: "6月以上7年以下の禁錮", imprisonmentYears: 3.75 }
    ]
  },
  {
    id: 24,
    name: "同意堕胎致死",
    description: "同意堕胎致死（刑法第213条後段）は、女子の同意を得て堕胎させて死亡させた場合に適用される罪です。",
    penalties: [
      { id: 43, description: "3月以上5年以下の懲役", imprisonmentYears: 2.6 }
    ]
  },
  {
    id: 25,
    name: "業務上堕胎致死",
    description: "業務上堕胎致死（刑法第214条後段）は、医師等が業務上堕胎させて死亡させた場合に適用される罪です。",
    penalties: [
      { id: 44, description: "6月以上7年以下の懲役", imprisonmentYears: 3.75 }
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
      { id: 48, description: "2年以上の懲役", imprisonmentYears: 11 }
    ]
  },
  {
    id: 28,
    name: "現住建造物等放火",
    description: "現住建造物等放火（刑法第108条）は、人が住居に使用する建造物等に放火した場合に適用される罪です。",
    penalties: [
      { id: 49, description: "死刑", imprisonmentYears: 100 },
      { id: 50, description: "無期懲役", imprisonmentYears: 99 },
      { id: 51, description: "5年以上の懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 29,
    name: "激発物破裂",
    description: "激発物破裂（刑法第117条第1項前段）は、火薬等の激発物を破裂させた場合に適用される罪です。",
    penalties: [
      { id: 52, description: "死刑", imprisonmentYears: 100 },
      { id: 53, description: "無期懲役", imprisonmentYears: 99 },
      { id: 54, description: "5年以上の懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 30,
    name: "現住建造物等浸害",
    description: "現住建造物等浸害（刑法第119条）は、現に人が住居に使用する建造物等を浸害した場合に適用される罪です。",
    penalties: [
      { id: 55, description: "死刑", imprisonmentYears: 100 },
      { id: 56, description: "無期懲役", imprisonmentYears: 99 },
      { id: 57, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 31,
    name: "汽車転覆等",
    description: "汽車転覆等（刑法第126条第1項・第2項）は、汽車等を転覆させた場合に適用される罪です。",
    penalties: [
      { id: 58, description: "無期懲役", imprisonmentYears: 99 },
      { id: 59, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 32,
    name: "往来危険による汽車転覆等",
    description: "往来危険による汽車転覆等（刑法第127条）は、往来を危険にして汽車等を転覆させた場合に適用される罪です。",
    penalties: [
      { id: 60, description: "無期懲役", imprisonmentYears: 99 },
      { id: 61, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 33,
    name: "通貨偽造及び行使等",
    description: "通貨偽造及び行使等（刑法第148条）は、通貨を偽造し、または偽造通貨を行使した場合に適用される罪です。",
    penalties: [
      { id: 62, description: "無期懲役", imprisonmentYears: 99 },
      { id: 63, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 34,
    name: "詔書偽造等",
    description: "詔書偽造等（刑法第154条）は、詔書を偽造した場合に適用される罪です。",
    penalties: [
      { id: 64, description: "無期懲役", imprisonmentYears: 99 },
      { id: 65, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 35,
    name: "虚偽詔書作成",
    description: "虚偽詔書作成（刑法第156条）は、虚偽の詔書を作成した場合に適用される罪です。",
    penalties: [
      { id: 66, description: "無期懲役", imprisonmentYears: 99 },
      { id: 67, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 36,
    name: "偽造詔書行使",
    description: "偽造詔書行使（刑法第158条第1項）は、偽造された詔書を行使した場合に適用される罪です。",
    penalties: [
      { id: 68, description: "無期懲役", imprisonmentYears: 99 },
      { id: 69, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 37,
    name: "強制わいせつ等致傷",
    description: "強制わいせつ等致傷（刑法第181条第1項）は、強制わいせつ等により人に傷害を負わせた場合に適用される罪です。",
    penalties: [
      { id: 70, description: "無期懲役", imprisonmentYears: 99 },
      { id: 71, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 38,
    name: "強制性交等致傷",
    description: "強制性交等致傷（刑法第181条第2項）は、強制性交等により人に傷害を負わせた場合に適用される罪です。",
    penalties: [
      { id: 72, description: "無期懲役", imprisonmentYears: 99 },
      { id: 73, description: "6年以上の懲役", imprisonmentYears: 13 }
    ]
  },
  {
    id: 39,
    name: "身の代金目的略取等",
    description: "身の代金目的略取等（刑法第225条の2）は、身の代金を得る目的で人を略取した場合に適用される罪です。",
    penalties: [
      { id: 74, description: "無期懲役", imprisonmentYears: 99 },
      { id: 75, description: "3年以上の懲役", imprisonmentYears: 11.5 }
    ]
  },
  {
    id: 40,
    name: "強盗致傷",
    description: "強盗致傷（刑法第240条前段）は、強盗が人に傷害を負わせた場合に適用される罪です。",
    penalties: [
      { id: 76, description: "無期懲役", imprisonmentYears: 99 },
      { id: 77, description: "6年以上の懲役", imprisonmentYears: 13 }
    ]
  },
  {
    id: 41,
    name: "強盗・強制性交等",
    description: "強盗・強制性交等（刑法第241条第1項）は、強盗が強制性交等をした場合に適用される罪です。",
    penalties: [
      { id: 78, description: "無期懲役", imprisonmentYears: 99 },
      { id: 79, description: "7年以上の懲役", imprisonmentYears: 13.5 }
    ]
  },
  {
    id: 42,
    name: "往来危険",
    description: "往来危険（刑法第125条）は、往来を危険にした場合に適用される罪です。",
    penalties: [
      { id: 80, description: "2年以上の有期懲役", imprisonmentYears: 11 }
    ]
  },
  {
    id: 43,
    name: "強制性交等",
    description: "強制性交等（刑法第177条）は、暴行または脅迫を用いて性交等をした場合に適用される罪です。",
    penalties: [
      { id: 81, description: "5年以上の有期懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 44,
    name: "建造物等以外放火",
    description: "建造物等以外放火（刑法第110条第1項）は、建造物等以外の物に放火した場合に適用される罪です。",
    penalties: [
      { id: 82, description: "1年以上10年以下の懲役", imprisonmentYears: 5.5 }
    ]
  },
  {
    id: 45,
    name: "有印公文書偽造",
    description: "有印公文書偽造（刑法第155条第1項）は、公務員が作成する文書を偽造した場合に適用される罪です。",
    penalties: [
      { id: 83, description: "1年以上10年以下の懲役", imprisonmentYears: 5.5 }
    ]
  },
  {
    id: 46,
    name: "強盗",
    description: "強盗（刑法第236条）は、暴行または脅迫を用いて財物を強取した場合に適用される罪です。",
    penalties: [
      { id: 84, description: "5年以上の有期懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 47,
    name: "事後強盗",
    description: "事後強盗（刑法第238条）は、窃盗が財物の取還を拒ぐために暴行または脅迫を用いた場合に適用される罪です。",
    penalties: [
      { id: 85, description: "5年以上の有期懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 48,
    name: "昏睡強盗",
    description: "昏睡強盗（刑法第239条）は、人を昏睡させて財物を盗んだ場合に適用される罪です。",
    penalties: [
      { id: 86, description: "5年以上の有期懲役", imprisonmentYears: 12.5 }
    ]
  },
  {
    id: 49,
    name: "傷害",
    description: "傷害（刑法第204条）は、人の身体を傷害した場合に適用される罪です。",
    penalties: [
      { id: 87, description: "15年以下の懲役", imprisonmentYears: 7.5 },
      { id: 88, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 50,
    name: "逮捕等致傷",
    description: "逮捕等致傷（刑法第221条）は、人を不法に逮捕等して傷害を負わせた場合に適用される罪です。",
    penalties: [
      { id: 89, description: "3月以上15年以下の懲役", imprisonmentYears: 7.6 }
    ]
  },
  {
    id: 51,
    name: "有印私文書偽造",
    description: "有印私文書偽造（刑法第159条第1項）は、権利、義務または事実証明に関する私文書を偽造した場合に適用される罪です。",
    penalties: [
      { id: 90, description: "3月以上5年以下の懲役", imprisonmentYears: 2.6 }
    ]
  },
  {
    id: 52,
    name: "私電磁的記録不正作出",
    description: "私電磁的記録不正作出（刑法第161条の2第1項）は、権利、義務または事実証明に関する電磁的記録を不正に作出した場合に適用される罪です。",
    penalties: [
      { id: 91, description: "5年以下の懲役", imprisonmentYears: 2.5 },
      { id: 92, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 53,
    name: "不正作出私電磁的記録供用",
    description: "不正作出私電磁的記録供用（刑法第161条の2第3項）は、不正に作出された電磁的記録を供用した場合に適用される罪です。",
    penalties: [
      { id: 93, description: "5年以下の懲役", imprisonmentYears: 2.5 },
      { id: 94, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 54,
    name: "支払用カード電磁的記録不正作出等",
    description: "支払用カード電磁的記録不正作出等（刑法第163条の2）は、支払用カードの電磁的記録を不正に作出した場合に適用される罪です。",
    penalties: [
      { id: 95, description: "10年以下の懲役", imprisonmentYears: 5 },
      { id: 96, description: "100万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 55,
    name: "虚偽告訴等",
    description: "虚偽告訴等（刑法第172条）は、人に刑事または懲戒の処分を受けさせる目的で虚偽の告訴等をした場合に適用される罪です。",
    penalties: [
      { id: 97, description: "3月以上10年以下の懲役", imprisonmentYears: 5.1 }
    ]
  },
  {
    id: 56,
    name: "強制わいせつ",
    description: "強制わいせつ（刑法第176条）は、暴行または脅迫を用いてわいせつな行為をした場合に適用される罪です。",
    penalties: [
      { id: 98, description: "6月以上10年以下の懲役", imprisonmentYears: 5.25 }
    ]
  },
  {
    id: 57,
    name: "業務上過失致死傷等",
    description: "業務上過失致死傷等（刑法第211条）は、業務上必要な注意を怠り、よって人を死傷させた場合に適用される罪です。",
    penalties: [
      { id: 99, description: "5年以下の懲役", imprisonmentYears: 2.5 },
      { id: 100, description: "5年以下の禁錮", imprisonmentYears: 2.5 },
      { id: 101, description: "100万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 58,
    name: "逮捕及び監禁",
    description: "逮捕及び監禁（刑法第220条）は、不法に人を逮捕または監禁した場合に適用される罪です。",
    penalties: [
      { id: 102, description: "3月以上7年以下の懲役", imprisonmentYears: 3.6 }
    ]
  },
  {
    id: 59,
    name: "詐欺",
    description: "詐欺（刑法第246条）は、人を欺いて財物を交付させた場合に適用される罪です。",
    penalties: [
      { id: 103, description: "10年以下の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 60,
    name: "電子計算機使用詐欺",
    description: "電子計算機使用詐欺（刑法第246条の2）は、電子計算機を使用して財産上不法の利益を得た場合に適用される罪です。",
    penalties: [
      { id: 104, description: "10年以下の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 61,
    name: "恐喝",
    description: "恐喝（刑法第249条）は、人を恐喝して財物を交付させた場合に適用される罪です。",
    penalties: [
      { id: 105, description: "10年以下の懲役", imprisonmentYears: 5 }
    ]
  },
  {
    id: 62,
    name: "横領",
    description: "横領（刑法第252条）は、自己の占有する他人の物を横領した場合に適用される罪です。",
    penalties: [
      { id: 106, description: "5年以下の懲役", imprisonmentYears: 2.5 }
    ]
  },
  {
    id: 63,
    name: "盗品等有償譲受け等",
    description: "盗品等有償譲受け等（刑法第256条第2項）は、盗品等であることを知って有償で譲り受けた場合に適用される罪です。",
    penalties: [
      { id: 107, description: "10年以下の懲役", imprisonmentYears: 5 },
      { id: 108, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 64,
    name: "公用文書等毀棄",
    description: "公用文書等毀棄（刑法第258条）は、公用に供する文書等を毀棄した場合に適用される罪です。",
    penalties: [
      { id: 109, description: "3月以上7年以下の懲役", imprisonmentYears: 3.6 }
    ]
  },
  {
    id: 65,
    name: "建造物等損壊",
    description: "建造物等損壊（刑法第260条前段）は、建造物等を損壊した場合に適用される罪です。",
    penalties: [
      { id: 110, description: "5年以下の懲役", imprisonmentYears: 2.5 }
    ]
  },
  {
    id: 66,
    name: "公務執行妨害及び職務強要",
    description: "公務執行妨害及び職務強要（刑法第95条）は、公務員の職務の執行を妨害し、または暴行・脅迫によりその職務を強要した場合に適用される罪です。",
    penalties: [
      { id: 111, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 112, description: "3年以下の禁錮", imprisonmentYears: 1.5 },
      { id: 113, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 67,
    name: "犯人蔵匿等",
    description: "犯人蔵匿等（刑法第103条）は、罪を犯した者を蔵匿または隠避させた場合に適用される罪です。",
    penalties: [
      { id: 114, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 115, description: "30万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 68,
    name: "証拠隠滅等",
    description: "証拠隠滅等（刑法第104条）は、他人の刑事事件に関する証拠を隠滅、偽造または変造した場合に適用される罪です。",
    penalties: [
      { id: 116, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 117, description: "30万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 69,
    name: "住居侵入等",
    description: "住居侵入等（刑法第130条）は、正当な理由なく人の住居等に侵入した場合に適用される罪です。",
    penalties: [
      { id: 118, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 119, description: "10万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 70,
    name: "不正指令電磁的記録作成等",
    description: "不正指令電磁的記録作成等（刑法第168条の2）は、コンピュータに不正な指令を与える電磁的記録を作成した場合に適用される罪です。",
    penalties: [
      { id: 120, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 121, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 71,
    name: "常習賭博",
    description: "常習賭博（刑法第186条第1項）は、常習として賭博をした場合に適用される罪です。",
    penalties: [
      { id: 122, description: "3年以下の懲役", imprisonmentYears: 1.5 }
    ]
  },
  {
    id: 72,
    name: "死体損壊等",
    description: "死体損壊等（刑法第190条）は、死体、遺骨、遺髪または棺に収めてある物を損壊、遺棄または領得した場合に適用される罪です。",
    penalties: [
      { id: 123, description: "3年以下の懲役", imprisonmentYears: 1.5 }
    ]
  },
  {
    id: 73,
    name: "強要",
    description: "強要（刑法第223条）は、暴行または脅迫を用いて人に義務のないことを行わせた場合に適用される罪です。",
    penalties: [
      { id: 124, description: "3年以下の懲役", imprisonmentYears: 1.5 }
    ]
  },
  {
    id: 74,
    name: "名誉毀損",
    description: "名誉毀損（刑法第230条）は、公然と事実を摘示し、人の名誉を毀損した場合に適用される罪です。",
    penalties: [
      { id: 125, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 126, description: "3年以下の禁錮", imprisonmentYears: 1.5 },
      { id: 127, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 75,
    name: "信用毀損及び業務妨害",
    description: "信用毀損及び業務妨害（刑法第233条）は、虚偽の風説を流布し、または偽計を用いて人の信用を毀損し、または業務を妨害した場合に適用される罪です。",
    penalties: [
      { id: 128, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 129, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 76,
    name: "威力業務妨害",
    description: "威力業務妨害（刑法第234条）は、威力を用いて人の業務を妨害した場合に適用される罪です。",
    penalties: [
      { id: 130, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 131, description: "50万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 77,
    name: "盗品等無償譲受け",
    description: "盗品等無償譲受け（刑法第256条第1項）は、盗品等であることを知って無償で譲り受けた場合に適用される罪です。",
    penalties: [
      { id: 132, description: "3年以下の懲役", imprisonmentYears: 1.5 }
    ]
  },
  {
    id: 78,
    name: "器物損壊等",
    description: "器物損壊等（刑法第261条）は、前条に規定する物以外の他人の物を損壊または傷害した場合に適用される罪です。",
    penalties: [
      { id: 133, description: "3年以下の懲役", imprisonmentYears: 1.5 },
      { id: 134, description: "30万円以下の罰金", imprisonmentYears: 0 },
      { id: 135, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 79,
    name: "不正指令電磁的記録取得等",
    description: "不正指令電磁的記録取得等（刑法第168条の3）は、不正な指令を与える電磁的記録を取得した場合に適用される罪です。",
    penalties: [
      { id: 136, description: "2年以下の懲役", imprisonmentYears: 1 },
      { id: 137, description: "30万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 80,
    name: "公然わいせつ",
    description: "公然わいせつ（刑法第174条）は、公然とわいせつな行為をした場合に適用される罪です。",
    penalties: [
      { id: 138, description: "6月以下の懲役", imprisonmentYears: 0.25 },
      { id: 139, description: "30万円以下の罰金", imprisonmentYears: 0 },
      { id: 140, description: "拘留", imprisonmentYears: 0.1 },
      { id: 141, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 81,
    name: "わいせつ物頒布等",
    description: "わいせつ物頒布等（刑法第175条）は、わいせつな文書、図画、電磁的記録等を頒布した場合に適用される罪です。",
    penalties: [
      { id: 142, description: "2年以下の懲役", imprisonmentYears: 1 },
      { id: 143, description: "250万円以下の罰金", imprisonmentYears: 0 },
      { id: 144, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 82,
    name: "暴行",
    description: "暴行（刑法第208条）は、暴行を加えた場合に適用される罪です。",
    penalties: [
      { id: 145, description: "2年以下の懲役", imprisonmentYears: 1 },
      { id: 146, description: "30万円以下の罰金", imprisonmentYears: 0 },
      { id: 147, description: "拘留", imprisonmentYears: 0.1 },
      { id: 148, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 83,
    name: "凶器準備集合",
    description: "凶器準備集合（刑法第208条の2第1項）は、団体の構成員が共同の目的で凶器を準備して集合した場合に適用される罪です。",
    penalties: [
      { id: 149, description: "2年以下の懲役", imprisonmentYears: 1 },
      { id: 150, description: "30万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 84,
    name: "過失傷害",
    description: "過失傷害（刑法第209条）は、過失により人を傷害した場合に適用される罪です。",
    penalties: [
      { id: 151, description: "30万円以下の罰金", imprisonmentYears: 0 },
      { id: 152, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 85,
    name: "脅迫",
    description: "脅迫（刑法第222条）は、生命、身体、自由、名誉または財産に対し害を加える旨を告知して人を脅迫した場合に適用される罪です。",
    penalties: [
      { id: 153, description: "2年以下の懲役", imprisonmentYears: 1 },
      { id: 154, description: "30万円以下の罰金", imprisonmentYears: 0 }
    ]
  },
  {
    id: 86,
    name: "侮辱",
    description: "侮辱（刑法第231条）は、事実を摘示しなくても、公然と人を侮辱した場合に適用される罪です。",
    penalties: [
      { id: 155, description: "拘留", imprisonmentYears: 0.1 },
      { id: 156, description: "科料", imprisonmentYears: 0 }
    ]
  },
  {
    id: 87,
    name: "遺失物等横領",
    description: "遺失物等横領（刑法第254条）は、遺失物、漂流物または埋蔵物を横領した場合に適用される罪です。",
    penalties: [
      { id: 157, description: "1年以下の懲役", imprisonmentYears: 0.5 },
      { id: 158, description: "10万円以下の罰金", imprisonmentYears: 0 },
      { id: 159, description: "科料", imprisonmentYears: 0 }
    ]
  }
]
