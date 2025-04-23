'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

// Import refactored components
import { SearchBar } from "@/components/law/search-bar"
import { LawList } from "@/components/law/law-list"
import { LawDetails } from "@/components/law/law-details"
import { SimilarLaws } from "@/components/law/similar-laws"

// Import types and utilities
import { Law, LawExplorerProps } from "@/components/law/types"
import { sampleLaws } from "@/components/law/sample-laws"
import { 
  getImprisonmentPenalty, 
  getSimilarLaws, 
  sortLawsByImprisonment 
} from "@/components/law/law-utils"

export function LawExplorer({ initialLaws = sampleLaws }: LawExplorerProps) {
  // State
  const [laws] = useState<Law[]>(initialLaws)
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [showAttemptPenalties, setShowAttemptPenalties] = useState(false)

  // Filter laws by search term
  const filteredLaws = laws.filter(law => 
    law.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Sort laws by imprisonment years
  const sortedLaws = sortLawsByImprisonment(filteredLaws, sortOrder, showAttemptPenalties)

  // Get similar laws to the selected law
  const similarLaws = getSimilarLaws(sortedLaws, selectedLaw, showAttemptPenalties)

  // Set the first law as selected if no law is selected
  useEffect(() => {
    if (sortedLaws.length > 0 && !selectedLaw) {
      setSelectedLaw(sortedLaws[0])
    }
  }, [sortedLaws, selectedLaw])

  // Event handlers
  const handleSearchChange = (term: string) => setSearchTerm(term)
  const handleSortOrderChange = () => setSortOrder(sortOrder === "desc" ? "asc" : "desc")
  const handleSelectLaw = (law: Law) => setSelectedLaw(law)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <Card className="container mx-auto max-w-6xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center mb-6">日本の法律と刑罰</CardTitle>
          <h3 className="text-center text-2xl p-3">あくまで床屋政談の参考だけに！本当に法律知識が必要な時は弁護士に！</h3>
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            sortOrder={sortOrder}
            onSortOrderChange={handleSortOrderChange}
          />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LawList 
              laws={sortedLaws} 
              selectedLawId={selectedLaw?.id || null} 
              onSelectLaw={handleSelectLaw} 
            />
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
                      <LawDetails 
                        law={selectedLaw} 
                        showAttemptPenalties={showAttemptPenalties} 
                      />
                    </TabsContent>
                    <TabsContent value="similar">
                      <SimilarLaws 
                        similarLaws={similarLaws} 
                        onSelectLaw={handleSelectLaw}
                        getImprisonmentPenalty={(law) => getImprisonmentPenalty(law, showAttemptPenalties)}
                      />
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
