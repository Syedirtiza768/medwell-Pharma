"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Briefcase, MessageSquare } from "lucide-react"
import { CoursePlaceholder } from "@/components/images/course-placeholder"

function CourseCard({ course }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-lg">{course.title}</CardTitle>
            <CardDescription>{course.provider}</CardDescription>
          </div>
          {course.featured && <Badge className="bg-rose-600">Featured</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
          <CoursePlaceholder title={course.title} category={course.category} />
        </div>
        <p className="text-sm text-muted-foreground">{course.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Duration:</span>
            <span>{course.durationDisplay}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Level:</span>
            <span>{course.levelDisplay}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Students:</span>
            <span>{course.students}+ enrolled</span>
          </div>
          {course.enrolled && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Progress:</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {course.enrolled ? (
          <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
            <Link href={`/training/${course.id}`}>Continue Learning</Link>
          </Button>
        ) : (
          <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
            <Link href={`/training/${course.id}`}>Enroll Now</Link>
          </Button>
        )}
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <span>Potential Earnings: {course.earnings}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export function TrainingPortal() {
  // Keep the rest of the component the same
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "all",
    duration: "all",
    level: "all",
  })

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = filters.category === "all" || course.category === filters.category
    const matchesDuration = filters.duration === "all" || course.duration === filters.duration
    const matchesLevel = filters.level === "all" || course.level === filters.level

    return matchesSearch && matchesCategory && matchesDuration && matchesLevel
  })

  return (
    <div className="container py-8 md:py-12">
      {/* Rest of the component remains the same */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skill Development & Job Placement
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
          Gain valuable skills and connect with employment opportunities to build your financial independence.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Search Courses</CardTitle>
            <CardDescription>Find training programs that match your interests and career goals.</CardDescription>
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
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="photography">Photography & Videography</SelectItem>
                  <SelectItem value="solar">Solar Sales</SelectItem>
                  <SelectItem value="marketing">Digital Marketing</SelectItem>
                  <SelectItem value="speaking">Public Speaking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="duration" className="text-sm font-medium">
                Duration
              </label>
              <Select value={filters.duration} onValueChange={(value) => setFilters({ ...filters, duration: value })}>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">Short (1-4 weeks)</SelectItem>
                  <SelectItem value="medium">Medium (1-3 months)</SelectItem>
                  <SelectItem value="long">Long (3+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="level" className="text-sm font-medium">
                Level
              </label>
              <Select value={filters.level} onValueChange={(value) => setFilters({ ...filters, level: value })}>
                <SelectTrigger id="level">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="popular">Most Popular</TabsTrigger>
          <TabsTrigger value="new">Newly Added</TabsTrigger>
          <TabsTrigger value="enrolled">My Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <Briefcase className="mb-2 h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">No courses found</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your search or filters to find more opportunities.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => course.students > 50)
              .sort((a, b) => b.students - a.students)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => {
                const addedDate = new Date(course.addedDate)
                const threeMonthsAgo = new Date()
                threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
                return addedDate > threeMonthsAgo
              })
              .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="enrolled" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => course.enrolled)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Job Placement Assistance</CardTitle>
            <CardDescription>Connect with employment opportunities after completing your training.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                <Briefcase className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium">Industry Mentors Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Get paired with industry professionals who can guide your career development and help you find
                  employment opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                <MessageSquare className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium">Interview Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Receive coaching on interview skills, resume building, and portfolio development to increase your
                  chances of success.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
              <Link href="/job-placement">Explore Job Opportunities</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>
              Hear from survivors who have rebuilt their lives through our training programs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="italic text-sm text-muted-foreground">
                "After completing the photography training, I started my own business and now earn enough to support my
                family. The skills I learned through BraveEd changed my life."
              </p>
              <p className="mt-2 text-sm font-medium">— Aisha K., Photography Business Owner</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="italic text-sm text-muted-foreground">
                "The solar sales training program gave me the confidence and skills to start a new career. I earned
                $5,000 in my first month and have been financially independent ever since."
              </p>
              <p className="mt-2 text-sm font-medium">— Maria R., Solar Sales Consultant</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/success-stories">Read More Stories</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Need Help Choosing?</CardTitle>
          <CardDescription>
            Our team can provide personalized guidance on selecting the right training program for your goals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
            <Link href="/training/consultation">Schedule a Career Consultation</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// Keep the courses data the same
const courses = [
  {
    id: "1",
    title: "Professional Photography Certification",
    provider: "Funkaar Studios",
    description: "Learn professional photography skills with hands-on training and portfolio development.",
    image: "/placeholder.svg?height=160&width=320",
    category: "photography",
    duration: "medium",
    durationDisplay: "3 months",
    level: "beginner",
    levelDisplay: "Beginner-Friendly",
    students: 120,
    earnings: "$3,000-$5,000 per event",
    featured: true,
    enrolled: true,
    progress: 75,
    addedDate: "2023-01-15",
  },
  {
    id: "2",
    title: "Solar Sales Training Program",
    provider: "EsolarUS",
    description:
      "Master the art of solar sales with comprehensive training on products, benefits, and sales techniques.",
    image: "/placeholder.svg?height=160&width=320",
    category: "solar",
    duration: "short",
    durationDisplay: "6 weeks",
    level: "beginner",
    levelDisplay: "Beginner-Friendly",
    students: 85,
    earnings: "$3,000-$8,000 per sale",
    featured: true,
    enrolled: false,
    progress: 0,
    addedDate: "2023-02-20",
  },
  {
    id: "3",
    title: "Digital Marketing Fundamentals",
    provider: "Marketing Academy",
    description: "Learn essential digital marketing skills including SEO, social media, and lead generation.",
    image: "/placeholder.svg?height=160&width=320",
    category: "marketing",
    duration: "medium",
    durationDisplay: "2 months",
    level: "beginner",
    levelDisplay: "Beginner-Friendly",
    students: 150,
    earnings: "$3,000-$5,000 monthly",
    featured: false,
    enrolled: true,
    progress: 30,
    addedDate: "2023-03-10",
  },
  {
    id: "4",
    title: "Advanced Videography Techniques",
    provider: "Funkaar Studios",
    description: "Take your videography skills to the next level with advanced techniques and storytelling.",
    image: "/placeholder.svg?height=160&width=320",
    category: "photography",
    duration: "medium",
    durationDisplay: "2 months",
    level: "intermediate",
    levelDisplay: "Intermediate",
    students: 65,
    earnings: "$4,000-$6,000 per event",
    featured: false,
    enrolled: false,
    progress: 0,
    addedDate: "2023-04-05",
  },
  {
    id: "5",
    title: "Public Speaking Mastery",
    provider: "Communication Institute",
    description: "Develop confidence and skills in public speaking for professional and personal growth.",
    image: "/placeholder.svg?height=160&width=320",
    category: "speaking",
    duration: "short",
    durationDisplay: "4 weeks",
    level: "beginner",
    levelDisplay: "Beginner-Friendly",
    students: 95,
    earnings: "$2,000-$5,000 per engagement",
    featured: false,
    enrolled: false,
    progress: 0,
    addedDate: "2023-05-12",
  },
  {
    id: "6",
    title: "Search Engine Optimization Specialist",
    provider: "Digital Growth Academy",
    description: "Become an SEO specialist and help businesses improve their online visibility and traffic.",
    image: "/placeholder.svg?height=160&width=320",
    category: "marketing",
    duration: "long",
    durationDisplay: "4 months",
    level: "intermediate",
    levelDisplay: "Intermediate",
    students: 70,
    earnings: "$3,500-$6,000 monthly",
    featured: false,
    enrolled: false,
    progress: 0,
    addedDate: "2023-06-18",
  },
  {
    id: "7",
    title: "Solar System Design Fundamentals",
    provider: "EsolarUS",
    description: "Learn the basics of solar system design to enhance your solar sales capabilities.",
    image: "/placeholder.svg?height=160&width=320",
    category: "solar",
    duration: "medium",
    durationDisplay: "2 months",
    level: "intermediate",
    levelDisplay: "Intermediate",
    students: 45,
    earnings: "$4,000-$10,000 per design",
    featured: false,
    enrolled: false,
    progress: 0,
    addedDate: "2023-07-25",
  },
  {
    id: "8",
    title: "Social Media Marketing Strategy",
    provider: "Marketing Academy",
    description: "Develop effective social media marketing strategies for businesses and personal brands.",
    image: "/placeholder.svg?height=160&width=320",
    category: "marketing",
    duration: "short",
    durationDisplay: "6 weeks",
    level: "beginner",
    levelDisplay: "Beginner-Friendly",
    students: 110,
    earnings: "$2,500-$4,500 monthly",
    featured: false,
    enrolled: false,
    progress: 0,
    addedDate: "2023-08-30",
  },
  {
    id: "9",
    title: "Wedding Photography Specialist",
    provider: "Funkaar Studios",
    description: "Specialize in wedding photography with techniques for capturing memorable moments.",
    image: "/placeholder.svg?height=160&width=320",
    category: "photography",
    duration: "medium",
    durationDisplay: "2 months",
    level: "intermediate",
    levelDisplay: "Intermediate",
    students: 55,
    earnings: "$3,000-$7,000 per wedding",
    featured: false,
    enrolled: false,
    progress: 0,
    addedDate: "2023-09-15",
  },
]
