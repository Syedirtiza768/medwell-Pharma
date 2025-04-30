"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, Filter, GraduationCap } from "lucide-react"

export function ScholarshipPortal() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    country: "all",
    field: "all",
    amount: "all",
  })

  // Filter scholarships based on search query and filters
  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCountry = filters.country === "all" || scholarship.country === filters.country
    const matchesField = filters.field === "all" || scholarship.field === filters.field
    const matchesAmount =
      filters.amount === "all" ||
      (filters.amount === "under10k" && scholarship.amountValue < 10000) ||
      (filters.amount === "10k-25k" && scholarship.amountValue >= 10000 && scholarship.amountValue <= 25000) ||
      (filters.amount === "over25k" && scholarship.amountValue > 25000)

    return matchesSearch && matchesCountry && matchesField && matchesAmount
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Scholarships for Survivors</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
          Access over 35+ U.S.-based scholarships providing $200,000+ annually to support survivors of domestic
          violence.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Search Scholarships</CardTitle>
            <CardDescription>Find scholarships that match your educational goals and needs.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by keyword, provider, or description"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={filters.country} onValueChange={(value) => setFilters({ ...filters, country: value })}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Select value={filters.field} onValueChange={(value) => setFilters({ ...filters, field: value })}>
                <SelectTrigger id="field">
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fields</SelectItem>
                  <SelectItem value="stem">STEM</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="arts">Arts & Humanities</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Scholarship Amount</Label>
              <Select value={filters.amount} onValueChange={(value) => setFilters({ ...filters, amount: value })}>
                <SelectTrigger id="amount">
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Amounts</SelectItem>
                  <SelectItem value="under10k">Under $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="over25k">Over $25,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <GraduationCap className="mb-2 h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">No scholarships found</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your search or filters to find more opportunities.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScholarships
              .filter((scholarship) => scholarship.featured)
              .map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScholarships
              .filter((scholarship) => {
                const deadline = new Date(scholarship.deadlineDate)
                const now = new Date()
                const oneMonthFromNow = new Date()
                oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)
                return deadline > now && deadline <= oneMonthFromNow
              })
              .map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScholarships
              .filter((scholarship) => scholarship.saved)
              .map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Our team can provide personalized guidance on scholarship applications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
              <GraduationCap className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <h3 className="font-medium">Scholarship Application Assistance</h3>
              <p className="text-sm text-muted-foreground">
                Get help with essays, recommendations, and application materials.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function ScholarshipCard({ scholarship }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-lg">{scholarship.title}</CardTitle>
            <CardDescription>{scholarship.provider}</CardDescription>
          </div>
          {scholarship.featured && <Badge className="bg-rose-600">Featured</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{scholarship.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Amount:</span>
            <span>{scholarship.amount}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Deadline:</span>
            <span>{scholarship.deadline}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Field:</span>
            <span>{scholarship.fieldDisplay}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
          <Link href={`/scholarships/${scholarship.id}`}>Apply Now</Link>
        </Button>
        <div className="flex items-center space-x-2">
          <Checkbox id={`save-${scholarship.id}`} defaultChecked={scholarship.saved} />
          <Label htmlFor={`save-${scholarship.id}`} className="text-sm">
            Save for later
          </Label>
        </div>
      </CardFooter>
    </Card>
  )
}

const scholarships = [
  {
    id: "1",
    title: "Women in STEM Scholarship",
    provider: "National Science Foundation",
    description: "Full scholarship for women pursuing degrees in science, technology, engineering, or mathematics.",
    amount: "$25,000",
    amountValue: 25000,
    deadline: "June 15, 2023",
    deadlineDate: "2023-06-15",
    country: "usa",
    field: "stem",
    fieldDisplay: "STEM",
    featured: true,
    saved: true,
  },
  {
    id: "2",
    title: "Survivor's Educational Grant",
    provider: "Hope Foundation",
    description: "Financial assistance for survivors of domestic violence to pursue higher education.",
    amount: "$15,000",
    amountValue: 15000,
    deadline: "July 30, 2023",
    deadlineDate: "2023-07-30",
    country: "usa",
    field: "all",
    fieldDisplay: "Any Field",
    featured: true,
    saved: false,
  },
  {
    id: "3",
    title: "Business Leadership Scholarship",
    provider: "Women's Business Alliance",
    description: "Scholarship for women pursuing business degrees with leadership potential.",
    amount: "$20,000",
    amountValue: 20000,
    deadline: "August 15, 2023",
    deadlineDate: "2023-08-15",
    country: "usa",
    field: "business",
    fieldDisplay: "Business",
    featured: false,
    saved: true,
  },
  {
    id: "4",
    title: "Healthcare Heroes Scholarship",
    provider: "National Healthcare Association",
    description: "Scholarship for students pursuing careers in healthcare and nursing.",
    amount: "$18,000",
    amountValue: 18000,
    deadline: "September 1, 2023",
    deadlineDate: "2023-09-01",
    country: "usa",
    field: "healthcare",
    fieldDisplay: "Healthcare",
    featured: false,
    saved: false,
  },
  {
    id: "5",
    title: "Creative Arts Fellowship",
    provider: "Arts Foundation",
    description: "Fellowship for students pursuing degrees in visual arts, music, or performing arts.",
    amount: "$12,000",
    amountValue: 12000,
    deadline: "October 15, 2023",
    deadlineDate: "2023-10-15",
    country: "usa",
    field: "arts",
    fieldDisplay: "Arts & Humanities",
    featured: false,
    saved: false,
  },
  {
    id: "6",
    title: "Future Educators Scholarship",
    provider: "Education Trust",
    description: "Scholarship for students pursuing careers in education and teaching.",
    amount: "$15,000",
    amountValue: 15000,
    deadline: "November 30, 2023",
    deadlineDate: "2023-11-30",
    country: "usa",
    field: "education",
    fieldDisplay: "Education",
    featured: false,
    saved: false,
  },
  {
    id: "7",
    title: "International Women's Scholarship",
    provider: "Global Education Fund",
    description: "Scholarship for international women students pursuing education in the United States.",
    amount: "$30,000",
    amountValue: 30000,
    deadline: "December 15, 2023",
    deadlineDate: "2023-12-15",
    country: "usa",
    field: "all",
    fieldDisplay: "Any Field",
    featured: true,
    saved: false,
  },
  {
    id: "8",
    title: "Technology Innovation Scholarship",
    provider: "Tech Industry Association",
    description: "Scholarship for students pursuing degrees in computer science and technology innovation.",
    amount: "$22,000",
    amountValue: 22000,
    deadline: "January 15, 2024",
    deadlineDate: "2024-01-15",
    country: "usa",
    field: "stem",
    fieldDisplay: "STEM",
    featured: false,
    saved: false,
  },
  {
    id: "9",
    title: "Community Leadership Scholarship",
    provider: "Community Foundation",
    description: "Scholarship for students who have demonstrated leadership in their communities.",
    amount: "$8,000",
    amountValue: 8000,
    deadline: "February 28, 2024",
    deadlineDate: "2024-02-28",
    country: "usa",
    field: "all",
    fieldDisplay: "Any Field",
    featured: false,
    saved: true,
  },
]
