'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Law } from "@/components/law/types"

interface LawListProps {
  laws: Law[]
  selectedLawId: number | null
  onSelectLaw: (law: Law) => void
}

export function LawList({ laws, selectedLawId, onSelectLaw }: LawListProps) {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>法律一覧</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <AnimatePresence>
            {laws.map((law) => (
              <motion.div
                key={law.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start mb-2 ${selectedLawId === law.id ? "bg-primary/10" : ""}`}
                  onClick={() => onSelectLaw(law)}
                >
                  {law.name}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}