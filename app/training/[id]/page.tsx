import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Calendar, CheckCircle, Clock, FileText, Play } from "lucide-react"
import { CoursePlaceholder } from "@/components/images/course-placeholder"
import Link from "next/link"

export default function CourseDetailPage({ params }) {
  // In a real app, you would fetch the course data based on the ID
  const courseId = params.id
  const course = courses.find((c) => c.id === courseId) || courses[0]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="mb-8 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{course.title}</h1>
              <p className="mt-2 text-muted-foreground">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-rose-50 text-rose-600">
                  {course.levelDisplay}
                </Badge>
                <Badge variant="outline" className="bg-rose-50 text-rose-600">
                  {course.durationDisplay}
                </Badge>
                <Badge variant="outline" className="bg-rose-50 text-rose-600">
                  {course.students}+ Students
                </Badge>
              </div>
            </div>
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
              <CoursePlaceholder title={course.title} category={course.category} />
            </div>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">What You'll Learn</h3>
                    <ul className="mt-2 space-y-2">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium">Course Details</h3>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Duration: {course.durationDisplay}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Start Date: Flexible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Modules: {course.modules.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Potential Earnings: {course.earnings}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Content</CardTitle>
                  <CardDescription>
                    {course.modules.length} modules • {course.totalLessons} lessons • {course.totalDuration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            <span>
                              Module {index + 1}: {module.title}
                            </span>
                            <Badge variant="outline" className="ml-2">
                              {module.lessons.length} lessons
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
                              >
                                <div className="flex items-center gap-2">
                                  <Play className="h-4 w-4 text-rose-600" />
                                  <span className="text-sm">{lesson.title}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt={course.instructor.name} />
                      <AvatarFallback>{course.instructor.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{course.instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{course.instructor.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{course.enrolled ? "Your Progress" : "Enroll in This Course"}</CardTitle>
                </CardHeader>
                <CardContent>
                  {course.enrolled ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Course Progress</span>
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div>
                        <h3 className="font-medium">Continue Learning</h3>
                        <p className="text-sm text-muted-foreground">
                          Your next lesson: Module 2, Lesson 3 - Advanced Techniques
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Course Benefits</h3>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                            <span className="text-sm text-muted-foreground">Flexible learning schedule</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                            <span className="text-sm text-muted-foreground">Certificate upon completion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                            <span className="text-sm text-muted-foreground">Job placement assistance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                            <span className="text-sm text-muted-foreground">Mentorship from industry experts</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {course.enrolled ? (
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">Continue Course</Button>
                  ) : (
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">Enroll Now (Free)</Button>
                  )}
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Job Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    After completing this course, you'll be qualified for these job opportunities:
                  </p>
                  <div className="space-y-2">
                    {course.jobOpportunities.map((job, index) => (
                      <div key={index} className="rounded-lg border p-3">
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-rose-600">{job.salary}</span>
                          <Badge variant="outline" className="bg-rose-50 text-rose-600">
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/job-placement">View All Opportunities</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.reviews.map((review, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt={review.name} />
                            <AvatarFallback>{review.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-sm font-medium">{review.name}</h3>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample course data
const courses = [
  {
    id: "1",
    title: "Professional Photography Certification",
    provider: "Funkaar Studios",
    description:
      "Learn professional photography skills with hands-on training and portfolio development. This comprehensive course covers everything from basic camera operations to advanced lighting techniques and post-processing.",
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
    learningOutcomes: [
      "Master camera settings and composition techniques",
      "Develop skills in natural and studio lighting",
      "Learn professional photo editing and retouching",
      "Build a professional portfolio of work",
      "Understand the business aspects of photography",
    ],
    totalLessons: 24,
    totalDuration: "36 hours",
    modules: [
      {
        title: "Photography Fundamentals",
        lessons: [
          { title: "Understanding Your Camera", duration: "45 min" },
          { title: "Exposure Triangle: ISO, Aperture, Shutter Speed", duration: "1 hr" },
          { title: "Composition Techniques", duration: "1 hr 15 min" },
          { title: "Working with Natural Light", duration: "1 hr" },
        ],
      },
      {
        title: "Advanced Photography Techniques",
        lessons: [
          { title: "Studio Lighting Setups", duration: "1 hr 30 min" },
          { title: "Portrait Photography", duration: "1 hr 15 min" },
          { title: "Event Photography", duration: "1 hr" },
          { title: "Product Photography", duration: "1 hr" },
        ],
      },
      {
        title: "Photo Editing and Post-Processing",
        lessons: [
          { title: "Introduction to Adobe Lightroom", duration: "1 hr" },
          { title: "Basic Photo Adjustments", duration: "1 hr" },
          { title: "Advanced Retouching Techniques", duration: "1 hr 30 min" },
          { title: "Creating Your Editing Style", duration: "1 hr" },
        ],
      },
      {
        title: "Building Your Photography Business",
        lessons: [
          { title: "Creating a Photography Portfolio", duration: "1 hr" },
          { title: "Pricing Your Services", duration: "45 min" },
          { title: "Marketing Your Photography Business", duration: "1 hr" },
          { title: "Client Communication and Management", duration: "1 hr" },
        ],
      },
    ],
    instructor: {
      name: "Sarah Johnson",
      initials: "SJ",
      title: "Professional Photographer & Educator",
      bio: "Sarah is an award-winning photographer with over 10 years of experience in wedding, portrait, and event photography. She has taught photography at various institutions and is passionate about helping new photographers develop their skills and build successful careers.",
    },
    jobOpportunities: [
      {
        title: "Wedding Photographer",
        description: "Capture memorable moments at weddings and special events.",
        salary: "$3,000-$5,000 per wedding",
        type: "Freelance",
      },
      {
        title: "Portrait Photographer",
        description: "Specialize in professional portrait photography for individuals and families.",
        salary: "$200-$500 per session",
        type: "Freelance/Studio",
      },
      {
        title: "Event Photographer",
        description: "Work with Funkaar Studios to cover corporate and social events.",
        salary: "$300-$800 per event",
        type: "Contract",
      },
    ],
    reviews: [
      {
        name: "Maria R.",
        initials: "MR",
        date: "3 months ago",
        comment:
          "This course completely transformed my photography skills. The instructor is excellent and the hands-on projects really helped me build my portfolio.",
      },
      {
        name: "Aisha K.",
        initials: "AK",
        date: "2 months ago",
        comment:
          "I started this course with zero photography experience and now I'm booking paid gigs! The business section was especially helpful for me.",
      },
    ],
  },
]
