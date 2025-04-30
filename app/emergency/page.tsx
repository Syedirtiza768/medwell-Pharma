import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Phone, Shield, Home, FileText, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function EmergencyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <Alert className="mb-8 border-rose-600 bg-rose-50">
            <AlertTriangle className="h-5 w-5 text-rose-600" />
            <AlertTitle className="text-rose-600">Emergency Resources</AlertTitle>
            <AlertDescription className="text-rose-600">
              If you are in immediate danger, please call 911 or your local emergency number.
            </AlertDescription>
          </Alert>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card className="border-rose-200 bg-rose-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-rose-600">
                  <Phone className="h-5 w-5" />
                  Crisis Hotline
                </CardTitle>
                <CardDescription className="text-rose-600">24/7 support for crisis situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-rose-600">1-800-799-7233</h3>
                    <p className="text-rose-600">National Domestic Violence Hotline</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rose-600">1-866-331-9474</h3>
                    <p className="text-rose-600">Love Is Respect (for young people)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rose-600">Text START to 88788</h3>
                    <p className="text-rose-600">Crisis Text Line</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-rose-600">
                  These hotlines provide immediate support, safety planning, and referrals to local resources.
                </p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Exit</CardTitle>
                <CardDescription>Safety features for browsing this website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Quick Escape</h3>
                  <p className="text-sm text-muted-foreground">
                    Press the "Escape" key or click the button below to quickly leave this site and be redirected to a
                    neutral website.
                  </p>
                  <Button className="mt-2 bg-rose-600 hover:bg-rose-700">Quick Exit</Button>
                </div>
                <div>
                  <h3 className="font-medium">Incognito Browsing</h3>
                  <p className="text-sm text-muted-foreground">
                    Consider using private/incognito browsing mode to prevent your browsing history from being saved.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Clear History</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to clear your browsing history after visiting this site.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    How to Clear History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="safety" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="safety">Safety Planning</TabsTrigger>
              <TabsTrigger value="shelter">Emergency Shelter</TabsTrigger>
              <TabsTrigger value="legal">Legal Protection</TabsTrigger>
            </TabsList>

            <TabsContent value="safety" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose-600" />
                    Safety Planning
                  </CardTitle>
                  <CardDescription>Create a personalized safety plan for yourself and your loved ones.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">What is a Safety Plan?</h3>
                      <p className="text-sm text-muted-foreground">
                        A safety plan is a personalized, practical plan that can help you avoid dangerous situations and
                        know the best way to react when you're in danger.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Key Elements of a Safety Plan:</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {safetyPlanElements.map((element, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                                <span className="text-xs font-medium text-rose-600">{index + 1}</span>
                              </div>
                              <h4 className="font-medium">{element.title}</h4>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{element.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                    <Link href="/safety-planning">Create Your Safety Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="shelter" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-rose-600" />
                    Emergency Shelter
                  </CardTitle>
                  <CardDescription>Find safe housing options in your area.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Finding Emergency Shelter</h3>
                      <p className="text-sm text-muted-foreground">
                        If you need to leave your home immediately, there are resources available to help you find safe
                        shelter. Domestic violence shelters provide a safe place to stay, as well as support services
                        and assistance with long-term housing.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">How to Access Emergency Shelter:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">1</span>
                          </div>
                          <span>
                            Call the National Domestic Violence Hotline at 1-800-799-7233 for referrals to local
                            shelters.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">2</span>
                          </div>
                          <span>Contact your local domestic violence program directly.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">3</span>
                          </div>
                          <span>Use our shelter locator tool to find options in your area.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">4</span>
                          </div>
                          <span>In an emergency, call 911 and ask for assistance finding safe shelter.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium">What to Expect at a Shelter</h3>
                      <p className="text-sm text-muted-foreground">Domestic violence shelters typically provide:</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Safe, confidential housing</li>
                        <li>• Basic necessities (food, clothing, toiletries)</li>
                        <li>• Support groups and counseling</li>
                        <li>• Legal advocacy</li>
                        <li>• Children's programs</li>
                        <li>• Assistance with housing, employment, and education</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                    <Link href="/shelter-locator">Find Shelter Near You</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="legal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-rose-600" />
                    Legal Protection
                  </CardTitle>
                  <CardDescription>Information about protection orders and legal resources.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Protection Orders</h3>
                      <p className="text-sm text-muted-foreground">
                        A protection order (also called a restraining order or order of protection) is a legal document
                        issued by a court to protect you from abuse, harassment, or stalking. It can prohibit the abuser
                        from contacting you, coming near you, or possessing firearms.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Types of Protection Orders:</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {protectionOrderTypes.map((order, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{order.title}</h4>
                              <Badge variant="outline" className="bg-rose-50 text-rose-600">
                                {order.duration}
                              </Badge>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{order.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium">How to Get a Protection Order</h3>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">1</span>
                          </div>
                          <span>
                            Contact your local courthouse or domestic violence program for information specific to your
                            jurisdiction.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">2</span>
                          </div>
                          <span>
                            Fill out the necessary paperwork. Many courts have advocates who can help you with this
                            process.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">3</span>
                          </div>
                          <span>Attend a hearing where a judge will review your request.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-rose-600">4</span>
                          </div>
                          <span>If granted, ensure you keep a copy of the order with you at all times.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                    <Link href="/legal-resources">Access Legal Resources</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Multilingual Emergency Support</CardTitle>
              <CardDescription>Access emergency support in your preferred language.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {languages.map((language, index) => (
                  <Button key={index} variant="outline" className="h-auto py-4 justify-start">
                    <div className="text-left">
                      <h3 className="font-medium">{language.name}</h3>
                      <p className="text-sm text-muted-foreground">{language.hotline}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const safetyPlanElements = [
  {
    title: "Safe Places",
    description: "Identify safe places to go in an emergency, such as a friend's home, shelter, or public location.",
  },
  {
    title: "Emergency Contacts",
    description: "Create a list of emergency contacts, including friends, family, and professional resources.",
  },
  {
    title: "Emergency Bag",
    description: "Prepare an emergency bag with essential items like identification, medication, clothes, and cash.",
  },
  {
    title: "Code Word",
    description: "Establish a code word with trusted friends or family that signals you need help.",
  },
  {
    title: "Children's Safety",
    description: "Include specific plans for children, such as who to call and where to go.",
  },
  {
    title: "Documentation",
    description: "Secure important documents like birth certificates, social security cards, and financial records.",
  },
]

const protectionOrderTypes = [
  {
    title: "Emergency Protection Order",
    duration: "Short-term",
    description:
      "Issued quickly in emergency situations, typically lasting 7-14 days until a hearing for a longer-term order can be held.",
  },
  {
    title: "Temporary Protection Order",
    duration: "Weeks to months",
    description: "Issued after an initial hearing and remains in effect until a full hearing for a permanent order.",
  },
  {
    title: "Permanent Protection Order",
    duration: "Years or permanent",
    description:
      "Issued after a full hearing where both parties can present evidence. May last for several years or permanently.",
  },
  {
    title: "Civil Protection Order",
    duration: "Varies",
    description: "Addresses domestic violence situations between family or household members.",
  },
]

const languages = [
  {
    name: "Urdu",
    hotline: "1-800-XXX-XXXX",
  },
  {
    name: "Hindi",
    hotline: "1-800-XXX-XXXX",
  },
  {
    name: "Arabic",
    hotline: "1-800-XXX-XXXX",
  },
  {
    name: "Spanish",
    hotline: "1-800-XXX-XXXX",
  },
]
