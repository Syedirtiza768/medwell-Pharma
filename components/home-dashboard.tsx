import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { BookOpen, Briefcase, GraduationCap, MessageSquare, Users } from "lucide-react"
import { AIChatbot } from "@/components/ai-chatbot"
import { HeroImage } from "@/components/images/hero-image"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

export function HomeDashboard() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-12 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary">Brave</span>
              <span className="text-secondary">Ed</span>: Learning for Resilience and Strength
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Empowering survivors of domestic violence through education, career training, and support.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/scholarships">Explore Scholarships</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/training">Start Training</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Success Stories</h2>
          <Link href="/stories" className="text-sm font-medium text-primary hover:underline">
            View all stories
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium text-primary">{story.initials}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <CardDescription>{story.location}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{story.testimonial}</p>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {story.achievement}
                    </Badge>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </section>

      {/* Services Tabs */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Our Services</h2>
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="legal">Legal Aid</TabsTrigger>
          </TabsList>
          <TabsContent value="education" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Educational Opportunities
                </CardTitle>
                <CardDescription>
                  Access to scholarships, study abroad programs, and educational counseling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {educationServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/scholarships">Explore Scholarships</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="training" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Skill Development
                </CardTitle>
                <CardDescription>Career training and job placement assistance.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {trainingServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/training">Explore Training Programs</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="support" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Community Support
                </CardTitle>
                <CardDescription>Peer support groups and community resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {supportServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/community">Join Our Community</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="legal" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Legal & Mental Health
                </CardTitle>
                <CardDescription>Legal aid and mental health resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {legalServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/support">Access Support Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* AI Chatbot */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Need Help?</h2>
        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              AI Assistant
            </CardTitle>
            <CardDescription>
              Our AI assistant is here to help you navigate resources and answer your questions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AIChatbot />
          </CardContent>
        </Card>
      </section>

      {/* Newsletter Subscription */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Stay Connected</h2>
        <NewsletterSubscription />
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Quick Links</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link href="/about">
            <Card className="h-full transition-colors hover:bg-primary/5 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Learn about our mission and the team behind BraveEd.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/contact">
            <Card className="h-full transition-colors hover:bg-primary/5 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Get in touch with our team for personalized assistance.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/faq">
            <Card className="h-full transition-colors hover:bg-primary/5 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Find answers to frequently asked questions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}

const successStories = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    location: "California, USA",
    testimonial:
      "BraveEd helped me secure a full scholarship to complete my nursing degree. I'm now working at a hospital and financially independent.",
    achievement: "Nursing Degree",
  },
  {
    name: "Maria Rodriguez",
    initials: "MR",
    location: "Texas, USA",
    testimonial:
      "After completing the solar sales training, I earned $5,000 in my first month. BraveEd changed my life and gave me hope for the future.",
    achievement: "Solar Sales",
  },
  {
    name: "Aisha Khan",
    initials: "AK",
    location: "New York, USA",
    testimonial:
      "The photography training and mentorship program helped me start my own business. I'm now financially stable and helping my children through college.",
    achievement: "Photography Business",
  },
  {
    name: "Jennifer Lee",
    initials: "JL",
    location: "Washington, USA",
    testimonial:
      "BraveEd's legal resources helped me navigate a difficult situation. The community support was invaluable during my journey to independence.",
    achievement: "Legal Support",
  },
]

const educationServices = [
  {
    title: "Scholarship Matching",
    description: "AI-powered matching to over 35+ U.S.-based scholarships providing $200,000+ annually.",
  },
  {
    title: "Study Abroad Programs",
    description: "Guidance and support for international education opportunities.",
  },
  {
    title: "Educational Counseling",
    description: "Personalized guidance on college admissions and academic pathways.",
  },
  {
    title: "Test Preparation",
    description: "Resources and courses for SAT, GRE, and GMAT preparation.",
  },
]

const trainingServices = [
  {
    title: "Solar Sales Training",
    description: "Learn to sell solar systems with potential commissions of $3,000-$8,000 per sale.",
  },
  {
    title: "Videography & Photography",
    description: "Professional training with potential earnings of $3,000-$5,000 per event.",
  },
  {
    title: "Digital Marketing",
    description: "Learn in-demand skills in SEO, social media, and lead generation.",
  },
  {
    title: "Job Placement Assistance",
    description: "Connections with industry mentors and employment opportunities.",
  },
]

const supportServices = [
  {
    title: "Peer Support Groups",
    description: "Connect with other survivors in a safe, moderated environment.",
  },
  {
    title: "Success Stories Blog",
    description: "Inspirational stories from survivors who have rebuilt their lives.",
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from survivors who have successfully rebuilt their lives.",
  },
  {
    title: "Webinars & Workshops",
    description: "Regular sessions with industry leaders, social workers, and educators.",
  },
]

const legalServices = [
  {
    title: "Legal Rights Education",
    description: "Information about your legal rights and options in multiple languages.",
  },
  {
    title: "Mental Health Resources",
    description: "Access to certified counselors and self-help resources.",
  },
  {
    title: "Crisis Support",
    description: "24/7 emergency support and safety planning assistance.",
  },
  {
    title: "Multilingual Services",
    description: "Support in Urdu, Hindi, Arabic, and other languages.",
  },
]
