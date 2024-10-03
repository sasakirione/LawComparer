'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SortAsc, SortDesc } from "lucide-react"

interface Penalty {
  id: number
  description: string
  imprisonmentYears: number
}

interface Law {
  id: number
  name: string
  description: string
  penalties: Penalty[]
  attemptPenalties?: Penalty[]
}

const sampleLaws: Law[] = [
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

export function LawExplorer() {
  const [laws] = useState<Law[]>(sampleLaws)
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [showAttemptPenalties, setShowAttemptPenalties] = useState(false)

  const filteredLaws = laws.filter(law => 
    law.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getMaxImprisonmentYears = (law: Law, isAttempt: boolean) => {
    const penalties = isAttempt && law.attemptPenalties ? law.attemptPenalties : law.penalties
    return Math.max(...penalties.map(p => p.imprisonmentYears))
  }

  const sortedLaws = [...filteredLaws].sort((a, b) => {
    const aMaxYears = getMaxImprisonmentYears(a, showAttemptPenalties)
    const bMaxYears = getMaxImprisonmentYears(b, showAttemptPenalties)
    return sortOrder === "desc" ? bMaxYears - aMaxYears : aMaxYears - bMaxYears
  })

  const similarLaws = selectedLaw 
    ? sortedLaws.filter(law => 
        law.id !== selectedLaw.id && 
        Math.abs(getMaxImprisonmentYears(law, showAttemptPenalties) - getMaxImprisonmentYears(selectedLaw, showAttemptPenalties)) <= 2
      )
    : []

  const getImprisonmentPenalty = (law: Law) => {
    const penalties = showAttemptPenalties && law.attemptPenalties ? law.attemptPenalties : law.penalties
    const maxImprisonmentPenalty = penalties.reduce((max, p) => p.imprisonmentYears > max.imprisonmentYears ? p : max)
    return maxImprisonmentPenalty.description
  }

  useEffect(() => {
    if (sortedLaws.length > 0 && !selectedLaw) {
      setSelectedLaw(sortedLaws[0])
    }
  }, [sortedLaws, selectedLaw])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <Card className="container mx-auto max-w-6xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center mb-6">日本の法律と刑罰</CardTitle>
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="法律を検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            >
              {sortOrder === "desc" ? <SortDesc /> : <SortAsc />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>法律一覧</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <AnimatePresence>
                    {sortedLaws.map((law) => (
                      <motion.div
                        key={law.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start mb-2 ${selectedLaw?.id === law.id ? "bg-primary/10" : ""}`}
                          onClick={() => setSelectedLaw(law)}
                        >
                          {law.name}
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent>
                {selectedLaw ? (
                  <Tabs defaultValue="details">
                    <div className="flex justify-between items-center mb-4">
                      <TabsList>
                        <TabsTrigger value="details">詳細</TabsTrigger>
                        <TabsTrigger value="similar">類似の法律</TabsTrigger>
                      </TabsList>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="attempt-mode"
                          checked={showAttemptPenalties}
                          onCheckedChange={setShowAttemptPenalties}
                        />
                        <label htmlFor="attempt-mode" className="text-sm font-medium">
                          未遂罪を表示
                        </label>
                      </div>
                    </div>
                    <TabsContent value="details">
                      <h2 className="text-2xl font-semibold mb-4">{selectedLaw.name}{showAttemptPenalties ? "（未遂）" : ""}</h2>
                      <p className="mb-6 text-gray-600">{selectedLaw.description}</p>
                      <h3 className="text-xl font-semibold mb-3">刑罰</h3>
                      <ul className="space-y-2">
                        {(showAttemptPenalties && selectedLaw.attemptPenalties ? selectedLaw.attemptPenalties : selectedLaw.penalties).map((penalty) => (
                          <li key={penalty.id} className="flex items-center">
                            {penalty.description}
                          </li>
                        ))}
                      </ul>
                      {showAttemptPenalties && !selectedLaw.attemptPenalties && (
                        <p className="mt-4 text-yellow-600">この法律には未遂罪の規定がありません。</p>
                      )}
                    </TabsContent>
                    <TabsContent value="similar">
                      <h3 className="text-xl font-semibold mb-4">類似の法律</h3>
                      <ul className="space-y-4">
                        {similarLaws.map((law) => (
                          <li
                            key={law.id}
                            className="cursor-pointer hover:bg-gray-100 p-3 rounded-md transition-colors duration-200"
                            onClick={() => setSelectedLaw(law)}
                          >
                            <span className="font-semibold">{law.name}</span>
                            <br />
                            <span className="text-sm text-gray-600">最高刑: {getImprisonmentPenalty(law)}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <p className="text-center text-gray-500">法律を選択してください</p>
                )}
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}