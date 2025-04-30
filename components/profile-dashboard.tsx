import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, BookOpen, Briefcase, Calendar, GraduationCap, MessageSquare, Settings, Users } from "lucide-react"
import { ProfilePlaceholder } from "@/components/images/profile-placeholder"

export function ProfileDashboard() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Doe" />
                  <AvatarFallback className="text-lg">
                    <ProfilePlaceholder initials="JD" size={96} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl">Jane Doe</CardTitle>
                <CardDescription>California, USA</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center space-x-2">
                <Badge variant="outline" className="bg-rose-50 text-rose-600">
                  Student
                </Badge>
                <Badge variant="outline" className="bg-rose-50 text-rose-600">
                  Photography
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/profile/edit">Edit Profile</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Navigation</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="grid">
                <Link href="/profile" className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted">
                  <Users className="h-4 w-4 text-rose-600" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/profile/scholarships"
                  className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted"
                >
                  <GraduationCap className="h-4 w-4 text-rose-600" />
                  <span>My Scholarships</span>
                </Link>
                <Link href="/profile/courses" className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted">
                  <BookOpen className="h-4 w-4 text-rose-600" />
                  <span>My Courses</span>
                </Link>
                <Link href="/profile/jobs" className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted">
                  <Briefcase className="h-4 w-4 text-rose-600" />
                  <span>Job Opportunities</span>
                </Link>
                <Link href="/profile/calendar" className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted">
                  <Calendar className="h-4 w-4 text-rose-600" />
                  <span>My Calendar</span>
                </Link>
                <Link href="/profile/messages" className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted">
                  <MessageSquare className="h-4 w-4 text-rose-600" />
                  <span>Messages</span>
                </Link>
                <Link
                  href="/profile/notifications"
                  className="flex items-center gap-2 border-b p-3 text-sm hover:bg-muted"
                >
                  <Bell className="h-4 w-4 text-rose-600" />
                  <span>Notifications</span>
                </Link>
                <Link href="/profile/settings" className="flex items-center gap-2 p-3 text-sm hover:bg-muted">
                  <Settings className="h-4 w-4 text-rose-600" />
                  <span>Settings</span>
                </Link>
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Emergency Support</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                <Link href="/emergency">Get Help Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
              <CardDescription>Track your educational and training progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Education</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Training</span>
                  <span className="text-sm text-muted-foreground">50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Support</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended for You</CardTitle>
              <CardDescription>Personalized recommendations based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="scholarships">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
                  <TabsTrigger value="training">Training</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>
                <TabsContent value="scholarships" className="mt-4 space-y-4">
                  {recommendedScholarships.map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription>{item.provider}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="mt-2 text-sm font-medium">Amount: {item.amount}</p>
                        <p className="text-sm text-muted-foreground">Deadline: {item.deadline}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                          <Link href={`/scholarships/${item.id}`}>Apply Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="training" className="mt-4 space-y-4">
                  {recommendedTraining.map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription>{item.provider}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="mt-2 text-sm font-medium">Duration: {item.duration}</p>
                        <p className="text-sm text-muted-foreground">Potential Earnings: {item.earnings}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                          <Link href={`/training/${item.id}`}>Enroll Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="support" className="mt-4 space-y-4">
                  {recommendedSupport.map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription>{item.type}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                          <Link href={`/support/${item.id}`}>Join Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Webinars, workshops, and community events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-rose-100 text-rose-600">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date} • {event.time}
                      </p>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="pt-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/events/${event.id}`}>Add to Calendar</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/events">View All Events</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

const recommendedScholarships = [
  {
    id: "1",
    title: "Women in STEM Scholarship",
    provider: "National Science Foundation",
    description: "Full scholarship for women pursuing degrees in science, technology, engineering, or mathematics.",
    amount: "$25,000",
    deadline: "June 15, 2023",
  },
  {
    id: "2",
    title: "Survivor's Educational Grant",
    provider: "Hope Foundation",
    description: "Financial assistance for survivors of domestic violence to pursue higher education.",
    amount: "$15,000",
    deadline: "July 30, 2023",
  },
]

const recommendedTraining = [
  {
    id: "1",
    title: "Professional Photography Certification",
    provider: "Funkaar Studios",
    description: "Comprehensive training in professional photography with hands-on experience.",
    duration: "3 months",
    earnings: "$3,000-$5,000 per event",
  },
  {
    id: "2",
    title: "Solar Sales Training Program",
    provider: "EsolarUS",
    description: "Learn to sell solar systems with potential for high commission earnings.",
    duration: "6 weeks",
    earnings: "$3,000-$8,000 per sale",
  },
]

const recommendedSupport = [
  {
    id: "1",
    title: "Survivors' Support Circle",
    type: "Weekly Group Session",
    description: "Connect with other survivors in a safe, moderated environment for mutual support and encouragement.",
  },
  {
    id: "2",
    title: "Career Mentorship Program",
    type: "One-on-One Mentoring",
    description: "Get paired with a successful professional who can guide your career development.",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "Financial Independence Workshop",
    date: "May 15, 2023",
    time: "2:00 PM - 4:00 PM",
    description: "Learn essential financial literacy skills to build economic independence.",
  },
  {
    id: "2",
    title: "University Admissions Webinar",
    date: "May 20, 2023",
    time: "1:00 PM - 3:00 PM",
    description: "Representatives from top universities discuss the admissions process and available support.",
  },
  {
    id: "3",
    title: "Photography Career Panel",
    date: "May 25, 2023",
    time: "5:00 PM - 7:00 PM",
    description: "Successful photographers share their journeys and answer questions about the industry.",
  },
]
