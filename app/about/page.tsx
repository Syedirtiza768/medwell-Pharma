import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, GraduationCap, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About BraveEd</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
              Learning for Resilience and Strength
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-4 text-muted-foreground">
                BraveEd: Learning for Resilience and Strength is an AI-driven platform aimed at empowering survivors of
                domestic violence through education, career training, and support. Our mission is to help users find
                scholarships, study-abroad programs, personal training opportunities, and provide a supportive community
                to rebuild their lives.
              </p>
              <p className="text-muted-foreground">
                We believe that education and economic independence are powerful tools for survivors to rebuild their
                lives and achieve long-term stability and safety. By providing access to educational resources, career
                training, and a supportive community, we aim to empower survivors to create a brighter future for
                themselves and their families.
              </p>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Women empowerment through education"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">What We Offer</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle>Scholarship Opportunities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Over 35+ U.S.-based scholarships provide $200,000+ annually to support survivors of domestic
                    violence with tuition, job training, childcare, transportation, and emergency services, helping them
                    rebuild through education and independence.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Explore Scholarships <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Learning Academy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our Skill Academy offers training in Solar Sales, Videography, Photography, Public Speaking, Digital
                    Marketing, Search Engine Optimization, and Lead Generation. We also provide Test Prep Services for
                    SAT, GRE, and GMAT.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    View Courses <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle>Educational Counselling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We provide guidance presentations, materials on the college admissions process, webinars by
                    university representatives, and sessions for study abroad programs to help survivors navigate their
                    educational journey.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Get Guidance <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle>Industry Mentors Connect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We connect survivors with industry professionals who can provide career guidance and help them
                    secure employment opportunities after completing their training.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Meet Mentors <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Webinars</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Industry leaders, social workers, and educationalists provide motivational talks to guide survivors
                    towards getting back to school, learning a skill, securing high-paying jobs, and achieving economic
                    empowerment.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Join Webinars <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <CardTitle>Support Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our blog serves as a support group where women can meet, successful survivors can share their
                    stories, and provide psychological support and career guidance to others on their journey.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Join Community <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Our Founder</h2>
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Maryam Zahra Khan" />
                    <AvatarFallback className="bg-primary/10 text-primary">MZK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">Maryam Zahra Khan</CardTitle>
                    <CardDescription>Founder & Executive Director</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maryam Zahra Khan founded BraveEd with a vision to transform the lives of domestic violence survivors
                  through education and economic empowerment. As a former EducationUSA adviser with experience helping
                  students secure over $450,000 in funding, Maryam holds two Master's degrees in Marketing and Project
                  Management. Her personal experiences and professional expertise drive her passion for creating
                  pathways to independence for survivors.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Educational Advising
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Scholarship Guidance
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Program Management
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Survivor Advocacy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">Our Partners</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle>EsolarUS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    EsolarUS, founded by an IT professional who now runs a successful solar company, provides initial
                    investment and offers jobs as sales dealers to women survivors. An average solar sale can result in
                    a commission of $3,000-$8,000 depending on the system size.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle>Funkaar Studios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Funkaar Studios provides video recorded training sessions for Videography and Photography to
                    survivors and commits to hiring talent from the pool of women survivors. A single wedding's media
                    coverage can earn a survivor about $3,000 to $5,000.
                  </p>
                  <Button variant="link" className="mt-2 p-0 h-auto flex items-center gap-1 text-primary">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Join Our Mission</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mb-6">
              Whether you're a survivor seeking resources, a potential partner, or someone who wants to support our
              cause, we welcome you to join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
