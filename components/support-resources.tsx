import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, FileText, Globe, Heart, MessageSquare, Phone, Scale, Users } from "lucide-react"

export function SupportResources() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Legal Aid & Mental Health Support
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
          Access legal resources, mental health support, and crisis services in multiple languages.
        </p>
      </div>

      <div className="mb-8 rounded-lg bg-rose-50 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
              <Phone className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-rose-600">Crisis Hotline: 1-800-799-7233</h2>
              <p className="text-rose-600">Available 24/7 for immediate support and guidance.</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
            <Link href="/emergency">Get Emergency Help</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="legal" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="legal">Legal Resources</TabsTrigger>
          <TabsTrigger value="mental">Mental Health</TabsTrigger>
          <TabsTrigger value="multilingual">Multilingual Support</TabsTrigger>
        </TabsList>

        <TabsContent value="legal" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-rose-600" />
                  Legal Rights Education
                </CardTitle>
                <CardDescription>Understand your legal rights and options as a survivor.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {legalTopics.map((topic, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{topic.title}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                        <Button asChild variant="link" className="mt-2 p-0 h-auto">
                          <Link href={topic.link}>Learn More</Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                  <Link href="/legal-consultation">Schedule Legal Consultation</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-rose-600" />
                  Legal Document Assistance
                </CardTitle>
                <CardDescription>Get help with legal documents and procedures.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {legalDocuments.map((document, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="font-medium">{document.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{document.description}</p>
                      <div className="mt-2 flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={document.templateLink}>Download Template</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={document.guideLink}>View Guide</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mental" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-600" />
                  Mental Health Resources
                </CardTitle>
                <CardDescription>Access mental health support and counseling services.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentalHealthResources.map((resource, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                        <resource.icon className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <Button asChild variant="link" className="mt-1 p-0 h-auto">
                          <Link href={resource.link}>{resource.linkText}</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                  <Link href="/mental-health/schedule">Schedule a Counseling Session</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-rose-600" />
                  Self-Help Resources
                </CardTitle>
                <CardDescription>Access tools and guides for self-care and healing.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selfHelpResources.map((resource, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="font-medium">{resource.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{resource.description}</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="bg-rose-50 text-rose-600">
                          {resource.type}
                        </Badge>
                      </div>
                      <Button asChild variant="link" className="mt-1 p-0 h-auto">
                        <Link href={resource.link}>Access Resource</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="multilingual" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-rose-600" />
                Multilingual Support Services
              </CardTitle>
              <CardDescription>Access support in Urdu, Hindi, Arabic, and other languages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {languages.map((language, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <h3 className="font-medium">{language.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Support services available in {language.name}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-rose-600" />
                        <span className="text-sm">Chat Support: {language.chatAvailability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-rose-600" />
                        <span className="text-sm">Phone Support: {language.phoneAvailability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-rose-600" />
                        <span className="text-sm">
                          Documents Available: {language.documentsAvailable ? "Yes" : "Limited"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                        <Link href={`/support/${language.code}`}>Access {language.name} Support</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start">
              <p className="text-sm text-muted-foreground">
                Don't see your language? Contact us for additional language support options.
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/contact">Request Language Support</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Safety Planning</CardTitle>
            <CardDescription>Create a personalized safety plan for yourself and your loved ones.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A safety plan is a personalized, practical plan that can help you avoid dangerous situations and know the
              best way to react when you're in danger.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                  <span className="text-xs font-medium text-rose-600">1</span>
                </div>
                <span className="text-sm">Identify safe places to go in an emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                  <span className="text-xs font-medium text-rose-600">2</span>
                </div>
                <span className="text-sm">Create a list of emergency contacts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                  <span className="text-xs font-medium text-rose-600">3</span>
                </div>
                <span className="text-sm">Prepare an emergency bag with essential items</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                  <span className="text-xs font-medium text-rose-600">4</span>
                </div>
                <span className="text-sm">Establish a code word with trusted friends/family</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
              <Link href="/safety-planning">Create Your Safety Plan</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>
              Hear from survivors who have rebuilt their lives with legal and mental health support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {successStories.map((story, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback>{story.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.testimonial}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/success-stories">Read More Stories</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

const legalTopics = [
  {
    title: "Restraining Orders & Protection Orders",
    description:
      "Learn about the different types of protection orders available, how to obtain them, and what they cover.",
    link: "/legal/protection-orders",
  },
  {
    title: "Divorce & Separation",
    description:
      "Information about the legal process of divorce and separation, including division of assets and child custody.",
    link: "/legal/divorce-separation",
  },
  {
    title: "Housing Rights",
    description: "Understand your housing rights as a survivor, including breaking leases and safe housing options.",
    link: "/legal/housing-rights",
  },
  {
    title: "Immigration Issues",
    description: "Information for immigrant survivors, including VAWA self-petitions and U visas.",
    link: "/legal/immigration",
  },
  {
    title: "Financial & Employment Rights",
    description: "Learn about financial assistance, debt management, and workplace accommodations for survivors.",
    link: "/legal/financial-rights",
  },
]

const legalDocuments = [
  {
    title: "Protection Order Application",
    description: "Templates and guides for filing for a protection order in your jurisdiction.",
    templateLink: "/documents/protection-order-template",
    guideLink: "/guides/protection-order-guide",
  },
  {
    title: "Safety Plan Documentation",
    description: "Templates for creating a comprehensive safety plan for yourself and your children.",
    templateLink: "/documents/safety-plan-template",
    guideLink: "/guides/safety-plan-guide",
  },
  {
    title: "Custody & Visitation Documentation",
    description: "Templates for documenting custody arrangements and visitation schedules.",
    templateLink: "/documents/custody-template",
    guideLink: "/guides/custody-guide",
  },
]

const mentalHealthResources = [
  {
    title: "Individual Counseling",
    description:
      "One-on-one counseling sessions with trained professionals who specialize in trauma and domestic violence.",
    link: "/mental-health/counseling",
    linkText: "Learn More & Schedule",
    icon: Heart,
  },
  {
    title: "Support Groups",
    description:
      "Join virtual or in-person support groups facilitated by professionals and peers who understand your experiences.",
    link: "/mental-health/support-groups",
    linkText: "Find a Group",
    icon: Users,
  },
  {
    title: "Crisis Intervention",
    description: "Immediate support for those in crisis, including 24/7 hotlines and text services.",
    link: "/mental-health/crisis",
    linkText: "Access Crisis Support",
    icon: Phone,
  },
  {
    title: "Trauma-Informed Therapy",
    description: "Specialized therapy approaches designed for survivors of trauma and domestic violence.",
    link: "/mental-health/trauma-therapy",
    linkText: "Explore Therapy Options",
    icon: Heart,
  },
]

const selfHelpResources = [
  {
    title: "Healing from Trauma Workbook",
    description: "A self-paced workbook with exercises and reflections to support your healing journey.",
    type: "PDF Workbook",
    link: "/resources/trauma-workbook",
  },
  {
    title: "Mindfulness for Survivors",
    description: "Guided meditations and mindfulness practices specifically designed for survivors of trauma.",
    type: "Audio Series",
    link: "/resources/mindfulness-audio",
  },
  {
    title: "Building Resilience Course",
    description: "A comprehensive online course on building resilience and reclaiming your life after trauma.",
    type: "Online Course",
    link: "/resources/resilience-course",
  },
  {
    title: "Self-Care Toolkit",
    description: "Practical self-care strategies and tools for managing stress, anxiety, and trauma responses.",
    type: "Interactive Guide",
    link: "/resources/self-care-toolkit",
  },
]

const languages = [
  {
    name: "Urdu",
    code: "urdu",
    chatAvailability: "24/7",
    phoneAvailability: "9 AM - 9 PM EST",
    documentsAvailable: true,
  },
  {
    name: "Hindi",
    code: "hindi",
    chatAvailability: "24/7",
    phoneAvailability: "9 AM - 9 PM EST",
    documentsAvailable: true,
  },
  {
    name: "Arabic",
    code: "arabic",
    chatAvailability: "24/7",
    phoneAvailability: "9 AM - 9 PM EST",
    documentsAvailable: true,
  },
  {
    name: "Spanish",
    code: "spanish",
    chatAvailability: "24/7",
    phoneAvailability: "24/7",
    documentsAvailable: true,
  },
]

const successStories = [
  {
    name: "Fatima K.",
    avatar: "/placeholder.svg?height=40&width=40",
    testimonial:
      "The legal aid I received helped me secure a protection order and custody of my children. I'm now pursuing my education with peace of mind.",
  },
  {
    name: "Sophia M.",
    avatar: "/placeholder.svg?height=40&width=40",
    testimonial:
      "The counseling services helped me process my trauma and rebuild my confidence. I'm now mentoring other survivors and helping them on their journey.",
  },
  {
    name: "Leila J.",
    avatar: "/placeholder.svg?height=40&width=40",
    testimonial:
      "As a non-native English speaker, the multilingual support was crucial for me. I received help in my native language, which made all the difference.",
  },
]
