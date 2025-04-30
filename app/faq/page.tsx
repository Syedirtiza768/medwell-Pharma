import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
              Find answers to common questions about BraveEd's services and resources.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search FAQs</CardTitle>
              <CardDescription>Looking for something specific? Search our FAQ database.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for answers..." className="pl-8" />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Questions</CardTitle>
                  <CardDescription>Basic information about BraveEd and our services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {generalFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scholarships" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Questions</CardTitle>
                  <CardDescription>Information about scholarship opportunities and applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {scholarshipFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Training Program Questions</CardTitle>
                  <CardDescription>
                    Information about our skill development and career training programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {trainingFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Support Resource Questions</CardTitle>
                  <CardDescription>
                    Information about legal aid, mental health support, and community resources.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {supportFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Questions</CardTitle>
                  <CardDescription>Information about using the BraveEd platform and technical support.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {technicalFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Still Have Questions?</CardTitle>
              <CardDescription>Can't find the answer you're looking for? Contact our support team.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row">
              <Button className="flex-1 bg-rose-600 hover:bg-rose-700">Contact Support</Button>
              <Button variant="outline" className="flex-1">
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const generalFAQs = [
  {
    question: "What is BraveEd?",
    answer:
      "BraveEd: Learning for Resilience and Strength is an AI-driven platform aimed at empowering survivors of domestic violence through education, career training, and support. We help users find scholarships, study-abroad programs, personal training opportunities, and provide a supportive community to rebuild their lives.",
  },
  {
    question: "Who can use BraveEd's services?",
    answer:
      "Our services are primarily designed for survivors of domestic violence who are seeking educational and career opportunities to rebuild their lives. However, we welcome anyone who has experienced trauma or hardship and is looking for resources to support their educational and career goals.",
  },
  {
    question: "Are BraveEd's services free?",
    answer:
      "Yes, all of our core services are provided free of charge to survivors of domestic violence. This includes educational counseling, scholarship matching, and support resources. Some specialized training programs may have associated costs, but we work to secure funding and scholarships to cover these expenses whenever possible.",
  },
  {
    question: "How do I get started with BraveEd?",
    answer:
      "To get started, simply create an account on our platform. Once registered, you can complete your profile, which will help us provide personalized recommendations for scholarships, training programs, and support resources that match your needs and goals.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. We take privacy and security very seriously, especially given the sensitive nature of our users' situations. All personal information is encrypted and protected according to industry standards. We never share your information with third parties without your explicit consent.",
  },
]

const scholarshipFAQs = [
  {
    question: "What types of scholarships are available through BraveEd?",
    answer:
      "BraveEd connects users with over 35+ U.S.-based scholarships providing $200,000+ annually to support survivors of domestic violence. These scholarships can cover tuition, job training, childcare, transportation, and emergency services, helping survivors rebuild through education and independence.",
  },
  {
    question: "How do I apply for scholarships?",
    answer:
      "You can browse available scholarships in our Scholarship Portal and apply directly through our platform. Each scholarship has its own application requirements and deadlines, which are clearly listed. We also offer application assistance if you need help with essays, recommendations, or other application materials.",
  },
  {
    question: "What are the eligibility requirements for scholarships?",
    answer:
      "Eligibility requirements vary by scholarship. Some are specifically for survivors of domestic violence, while others may have additional criteria related to field of study, geographic location, or financial need. Our platform helps match you with scholarships for which you're eligible based on your profile information.",
  },
  {
    question: "Can I apply for multiple scholarships?",
    answer:
      "Yes, we encourage users to apply for all scholarships for which they're eligible. There's no limit to the number of applications you can submit through our platform.",
  },
  {
    question: "How can I get help with my scholarship application?",
    answer:
      "We offer scholarship application assistance, including help with essays, recommendations, and application materials. You can schedule a consultation with our educational advisers who can provide personalized guidance throughout the application process.",
  },
]

const trainingFAQs = [
  {
    question: "What training programs does BraveEd offer?",
    answer:
      "Our Skill Academy offers training in Solar Sales, Videography, Photography, Public Speaking, Digital Marketing, Search Engine Optimization, and Lead Generation. We also provide Test Prep Services for SAT, GRE, and GMAT to help users prepare for higher education.",
  },
  {
    question: "How long do the training programs take to complete?",
    answer:
      "Program duration varies depending on the skill and level of expertise. Some programs can be completed in as little as 4-6 weeks, while others may take 2-3 months. Each program listing includes specific information about duration and time commitment.",
  },
  {
    question: "Are the training programs online or in-person?",
    answer:
      "We offer both online and in-person training options, depending on the program and your location. Many of our programs are fully online to provide maximum flexibility for users who may have work or family commitments.",
  },
  {
    question: "What job opportunities are available after completing a training program?",
    answer:
      "Through our industry partnerships, we connect program graduates with job opportunities in their field of training. For example, solar sales training can lead to positions with EsolarUS with potential commissions of $3,000-$8,000 per sale, while photography training can lead to opportunities with Funkaar Studios with earnings of $3,000-$5,000 per event.",
  },
  {
    question: "Do I need any prior experience or equipment for the training programs?",
    answer:
      "Most of our programs are designed for beginners and don't require prior experience. For programs like photography or videography, we work with our partners to provide access to necessary equipment during training. Some programs may require basic computer skills or internet access.",
  },
]

const supportFAQs = [
  {
    question: "What types of support resources does BraveEd offer?",
    answer:
      "BraveEd offers a range of support resources, including legal aid, mental health support, peer support communities, and multilingual services. We provide guidance on legal rights, access to counseling services, and a safe community space for survivors to connect and share experiences.",
  },
  {
    question: "How can I access mental health support through BraveEd?",
    answer:
      "We offer access to mental health resources including individual counseling, support groups, crisis intervention, and trauma-informed therapy. You can browse available resources in our Support Resources section and request services directly through our platform.",
  },
  {
    question: "What legal resources are available?",
    answer:
      "Our legal resources include information on restraining orders, divorce and separation, housing rights, immigration issues, and financial rights. We also provide templates for legal documents and can connect users with legal professionals who specialize in domestic violence cases.",
  },
  {
    question: "Are multilingual services available?",
    answer:
      "Yes, we offer support in Urdu, Hindi, Arabic, and Spanish, with plans to expand to additional languages. Our multilingual services include chat support, phone support, and translated documents to ensure that language is not a barrier to accessing help.",
  },
  {
    question: "How do I join the peer support community?",
    answer:
      "You can access our peer support community through the Community Forum section of our platform. There, you can join chat rooms, participate in discussion boards, and access the resource library. All community spaces are moderated to ensure a safe and supportive environment.",
  },
]

const technicalFAQs = [
  {
    question: "How do I create an account on BraveEd?",
    answer:
      "To create an account, click on the 'Sign Up' button in the top right corner of our homepage. You'll need to provide a valid email address and create a password. For security reasons, we recommend using a strong, unique password that you don't use for other accounts.",
  },
  {
    question: "Is the BraveEd platform secure?",
    answer:
      "Yes, we take security very seriously. Our platform uses encryption to protect your data, and we follow industry best practices for data security. We also offer features like two-factor authentication for additional account security.",
  },
  {
    question: "Can I use BraveEd on my mobile device?",
    answer:
      "Yes, BraveEd is fully responsive and can be accessed on smartphones and tablets. We're also developing a dedicated mobile app for iOS and Android devices to provide an even better mobile experience.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "If you forget your password, click on the 'Forgot Password' link on the login page. You'll be prompted to enter your email address, and we'll send you instructions for resetting your password.",
  },
  {
    question: "How do I get technical support if I'm having issues with the platform?",
    answer:
      "For technical support, you can contact our support team through the 'Contact Us' page or by emailing support@braveed.org. Please provide as much detail as possible about the issue you're experiencing, including any error messages and the device/browser you're using.",
  },
]
