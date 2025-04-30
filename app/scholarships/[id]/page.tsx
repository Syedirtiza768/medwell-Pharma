import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, CheckCircle, Clock, FileText, GraduationCap, Info } from "lucide-react"
import Link from "next/link"

export default function ScholarshipDetailPage({ params }) {
  // In a real app, you would fetch the scholarship data based on the ID
  const scholarshipId = params.id
  const scholarship = scholarships.find((s) => s.id === scholarshipId) || scholarships[0]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <Link href="/scholarships" className="text-sm text-muted-foreground hover:text-foreground">
                ← Back to Scholarships
              </Link>
              {scholarship.featured && <Badge className="bg-rose-600">Featured</Badge>}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{scholarship.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-rose-600" />
              <span className="text-muted-foreground">{scholarship.provider}</span>
            </div>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{scholarship.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Eligibility Requirements</h3>
                    <ul className="mt-2 space-y-2">
                      {scholarship.eligibility.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                          <span className="text-sm text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">Scholarship Details</h3>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Amount: {scholarship.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Deadline: {scholarship.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Field: {scholarship.fieldDisplay}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-rose-600" />
                        <span className="text-sm text-muted-foreground">Duration: {scholarship.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">Covered Expenses</h3>
                    <ul className="mt-2 space-y-2">
                      {scholarship.coveredExpenses.map((expense, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                          <span className="text-sm text-muted-foreground">{expense}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Required Documents</h3>
                    <ul className="mt-2 space-y-2">
                      {scholarship.requiredDocuments.map((document, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FileText className="mt-0.5 h-4 w-4 text-rose-600" />
                          <span className="text-sm text-muted-foreground">{document}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">Application Steps</h3>
                    <ol className="mt-2 space-y-2">
                      {scholarship.applicationSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">{index + 1}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scholarship.successStories.map((story, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt={story.name} />
                          <AvatarFallback>{story.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{story.name}</h3>
                          <p className="text-sm text-muted-foreground">{story.testimonial}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Apply Now</CardTitle>
                  <CardDescription>Submit your application for this scholarship</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-rose-600" />
                        <span className="text-sm font-medium">Application Deadline</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {scholarship.deadline} ({scholarship.daysRemaining} days remaining)
                      </p>
                    </div>

                    <Alert className="border-rose-200 bg-rose-50">
                      <Info className="h-4 w-4 text-rose-600" />
                      <AlertTitle className="text-rose-600">Important Note</AlertTitle>
                      <AlertDescription className="text-rose-600">
                        Make sure to gather all required documents before starting your application.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Start Application</Button>
                  <p className="text-xs text-muted-foreground">You can save your application and return to it later.</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Assistance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Need help with your application? Our team can provide guidance on:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                      <span className="text-sm text-muted-foreground">Essay writing and review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                      <span className="text-sm text-muted-foreground">Document preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                      <span className="text-sm text-muted-foreground">Interview preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                      <span className="text-sm text-muted-foreground">Application review</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Scholarships</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scholarship.similarScholarships.map((similar, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <h3 className="font-medium">{similar.title}</h3>
                        <p className="text-sm text-muted-foreground">{similar.provider}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-rose-600">{similar.amount}</span>
                          <Badge variant="outline" className="bg-rose-50 text-rose-600">
                            {similar.deadline}
                          </Badge>
                        </div>
                        <Button asChild variant="link" className="mt-2 h-auto p-0">
                          <Link href={`/scholarships/${similar.id}`}>View Details</Link>
                        </Button>
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

// Sample scholarship data
const scholarships = [
  {
    id: "1",
    title: "Women in STEM Scholarship",
    provider: "National Science Foundation",
    description: "Full scholarship for women pursuing degrees in science, technology, engineering, or mathematics.",
    fullDescription:
      "The Women in STEM Scholarship is designed to support and encourage women pursuing degrees in science, technology, engineering, or mathematics fields. This scholarship aims to address the gender gap in STEM fields by providing financial support to talented women who demonstrate academic excellence and a passion for their chosen field. Recipients will receive full tuition coverage and additional support for research opportunities and professional development.",
    amount: "$25,000",
    amountValue: 25000,
    deadline: "June 15, 2023",
    deadlineDate: "2023-06-15",
    daysRemaining: 45,
    country: "usa",
    field: "stem",
    fieldDisplay: "STEM",
    duration: "Renewable for up to 4 years",
    featured: true,
    saved: true,
    eligibility: [
      "Identify as a woman",
      "Pursuing a degree in science, technology, engineering, or mathematics",
      "Minimum GPA of 3.5",
      "Demonstrated financial need",
      "U.S. citizen or permanent resident",
      "Full-time enrollment at an accredited institution",
    ],
    coveredExpenses: [
      "Full tuition and fees",
      "Books and supplies allowance",
      "Research stipend",
      "Conference attendance funding",
      "Mentorship program participation",
    ],
    requiredDocuments: [
      "Completed application form",
      "Official transcripts",
      "Two letters of recommendation",
      "Personal statement (500-750 words)",
      "Essay on your STEM career goals (750-1000 words)",
      "Financial information (FAFSA or equivalent)",
      "Resume/CV highlighting relevant experience",
    ],
    applicationSteps: [
      "Create an account on the National Science Foundation scholarship portal",
      "Complete the online application form with personal and academic information",
      "Upload all required documents in PDF format",
      "Submit your application before the deadline",
      "If selected as a finalist, participate in a virtual interview",
      "Scholarship recipients will be notified within 6 weeks after the application deadline",
    ],
    successStories: [
      {
        name: "Jennifer Lee",
        initials: "JL",
        testimonial:
          "This scholarship changed my life. I was able to focus on my studies without financial stress and graduated with honors in Computer Science. I'm now working as a software engineer at a major tech company.",
      },
      {
        name: "Maria Rodriguez",
        initials: "MR",
        testimonial:
          "As a first-generation college student, this scholarship made it possible for me to pursue my dream of becoming a biomedical engineer. The mentorship component was especially valuable for my professional development.",
      },
    ],
    similarScholarships: [
      {
        id: "3",
        title: "Future Women Engineers Scholarship",
        provider: "Society of Women Engineers",
        amount: "$20,000",
        deadline: "July 30, 2023",
      },
      {
        id: "7",
        title: "Women in Technology Grant",
        provider: "Tech Industry Association",
        amount: "$15,000",
        deadline: "August 15, 2023",
      },
      {
        id: "9",
        title: "STEM Diversity Scholarship",
        provider: "National STEM Foundation",
        amount: "$18,000",
        deadline: "September 1, 2023",
      },
    ],
  },
]
