'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SortAsc, SortDesc } from "lucide-react"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  sortOrder: "asc" | "desc"
  onSortOrderChange: () => void
}

export function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  sortOrder, 
  onSortOrderChange 
}: SearchBarProps) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative flex-grow">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="法律を検索..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={onSortOrderChange}
        title={sortOrder === "desc" ? "降順に並べ替え" : "昇順に並べ替え"}
      >
        {sortOrder === "desc" ? <SortDesc /> : <SortAsc />}
      </Button>
    </div>
  )
}