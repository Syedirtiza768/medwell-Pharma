"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Users, Heart, Flag, Send, GraduationCap } from "lucide-react"

export function CommunityForum() {
  const [activeChat, setActiveChat] = useState("general")
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      console.log(`Sending message to ${activeChat}: ${message}`)
      setMessage("")
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Peer Support Community</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
          Connect with other survivors in a safe, moderated environment for mutual support and encouragement.
        </p>
      </div>

      <Tabs defaultValue="chat" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chat">Chat Rooms</TabsTrigger>
          <TabsTrigger value="discussion">Discussion Board</TabsTrigger>
          <TabsTrigger value="resources">Resource Library</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
            <Card>
              <CardHeader>
                <CardTitle>Chat Rooms</CardTitle>
                <CardDescription>Join conversations with other community members.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="grid">
                  {chatRooms.map((room) => (
                    <button
                      key={room.id}
                      className={`flex items-center justify-between border-b p-3 text-left text-sm hover:bg-muted ${activeChat === room.id ? "bg-muted" : ""}`}
                      onClick={() => setActiveChat(room.id)}
                    >
                      <div className="flex items-center gap-2">
                        <room.icon className="h-4 w-4 text-rose-600" />
                        <span>{room.name}</span>
                      </div>
                      {room.unread > 0 && <Badge className="bg-rose-600">{room.unread}</Badge>}
                    </button>
                  ))}
                </nav>
              </CardContent>
              <CardFooter className="p-3">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/community/create-room">Create Room</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>{chatRooms.find((room) => room.id === activeChat)?.name || "Chat Room"}</CardTitle>
                  <Badge variant="outline" className="bg-rose-50 text-rose-600">
                    {chatRooms.find((room) => room.id === activeChat)?.members || 0} members
                  </Badge>
                </div>
                <CardDescription>{chatRooms.find((room) => room.id === activeChat)?.description || ""}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] overflow-y-auto p-4">
                  {messages
                    .filter((msg) => msg.roomId === activeChat)
                    .map((msg, index) => (
                      <div key={index} className="mb-4 flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={msg.avatar} alt={msg.author} />
                          <AvatarFallback>{msg.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{msg.author}</span>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm">{msg.content}</p>
                          <div className="mt-1 flex gap-2">
                            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                              <Heart className="h-3 w-3" />
                              <span>{msg.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                              <Flag className="h-3 w-3" />
                              <span>Report</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
              <CardFooter className="border-t p-3">
                <div className="flex w-full items-center gap-2">
                  <Textarea
                    placeholder="Type your message here..."
                    className="min-h-[60px] flex-1 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button
                    size="icon"
                    className="h-[60px] w-[60px] bg-rose-600 hover:bg-rose-700"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  <p>
                    This chat is moderated. Please be respectful and supportive.
                    <Button variant="link" className="h-auto p-0 text-xs" asChild>
                      <Link href="/community/guidelines"> View Community Guidelines</Link>
                    </Button>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="discussion" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Discussion Board</CardTitle>
              <CardDescription>Share your experiences and insights with the community.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discussionTopics.map((topic, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-2">
                          <Avatar className="mt-1 h-8 w-8">
                            <AvatarImage src={topic.authorAvatar} alt={topic.author} />
                            <AvatarFallback>{topic.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{topic.title}</CardTitle>
                            <CardDescription>
                              Posted by {topic.author} • {topic.date}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-rose-50 text-rose-600">
                          {topic.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">{topic.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                          <Heart className="h-4 w-4" />
                          <span>{topic.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>{topic.comments}</span>
                        </button>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/community/discussion/${topic.id}`}>View Discussion</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                <Link href="/community/create-topic">Start New Discussion</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Resource Library</CardTitle>
              <CardDescription>Access helpful resources shared by the community and experts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base">{resource.title}</CardTitle>
                        <Badge variant="outline" className="bg-rose-50 text-rose-600">
                          {resource.type}
                        </Badge>
                      </div>
                      <CardDescription>
                        Shared by {resource.contributor} • {resource.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={resource.link}>Access Resource</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                <Link href="/community/share-resource">Share a Resource</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Support</CardTitle>
          <CardDescription>
            If you're in immediate danger or need urgent help, please use these resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-rose-50 p-4">
            <h3 className="font-medium text-rose-600">Crisis Hotline: 1-800-799-7233</h3>
            <p className="mt-1 text-sm text-rose-600">Available 24/7 for immediate support and guidance.</p>
            <Button asChild className="mt-2 bg-rose-600 hover:bg-rose-700">
              <Link href="/emergency">Get Emergency Help</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const chatRooms = [
  {
    id: "general",
    name: "General Support",
    description: "A safe space for general discussion and support.",
    icon: Users,
    unread: 3,
    members: 156,
  },
  {
    id: "education",
    name: "Education & Career",
    description: "Discuss educational opportunities and career development.",
    icon: GraduationCap,
    unread: 0,
    members: 89,
  },
  {
    id: "healing",
    name: "Healing Journey",
    description: "Share your healing journey and support others on theirs.",
    icon: Heart,
    unread: 5,
    members: 112,
  },
]

const messages = [
  {
    roomId: "general",
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Hello everyone! I'm new here and looking forward to connecting with this supportive community.",
    time: "10:30 AM",
    likes: 5,
  },
  {
    roomId: "general",
    author: "Maria Rodriguez",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Welcome, Sarah! We're glad you're here. This community has been incredibly supportive for me during my journey.",
    time: "10:32 AM",
    likes: 3,
  },
  {
    roomId: "general",
    author: "Aisha Khan",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Has anyone applied for the Women in STEM scholarship? I'm working on my application and would love some advice.",
    time: "10:45 AM",
    likes: 2,
  },
  {
    roomId: "general",
    author: "Jennifer Lee",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "I applied last year and received it! Happy to share my experience and review your application if you'd like.",
    time: "10:48 AM",
    likes: 7,
  },
  {
    roomId: "education",
    author: "Emily Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "I just got accepted into the nursing program! The educational counseling from BraveEd was incredibly helpful.",
    time: "9:15 AM",
    likes: 12,
  },
  {
    roomId: "healing",
    author: "Sophia Martinez",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Today marks one year since I started my healing journey. I'm grateful for this community and the support I've received.",
    time: "11:20 AM",
    likes: 15,
  },
]

const discussionTopics = [
  {
    id: "1",
    title: "Finding Strength Through Education",
    author: "Sarah Johnson",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    date: "2 days ago",
    content:
      "I wanted to share how pursuing education has been a key part of my healing journey. When I first left my abusive situation, I felt lost and without purpose. Enrolling in college gave me something positive to focus on and helped me rebuild my confidence...",
    category: "Success Story",
    likes: 28,
    comments: 12,
  },
  {
    id: "2",
    title: "Tips for Balancing School and Self-Care",
    author: "Maria Rodriguez",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    date: "5 days ago",
    content:
      "As survivors, we often push ourselves too hard in our quest for independence. I've learned some strategies for balancing my educational goals with necessary self-care practices that I'd like to share...",
    category: "Advice",
    likes: 19,
    comments: 8,
  },
  {
    id: "3",
    title: "How to Prepare for a Scholarship Interview",
    author: "Jennifer Lee",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    date: "1 week ago",
    content:
      "I recently went through several scholarship interviews and wanted to share some tips that helped me secure funding for my education. Preparation was key, and I found that practicing with a friend made a huge difference...",
    category: "Resources",
    likes: 32,
    comments: 15,
  },
]

const resources = [
  {
    title: "Financial Independence Guide",
    contributor: "Emily Wilson",
    date: "3 weeks ago",
    description:
      "A comprehensive guide to building financial independence, including budgeting templates, savings strategies, and resources for financial assistance.",
    type: "PDF Guide",
    link: "/resources/financial-independence-guide",
  },
  {
    title: "Scholarship Application Checklist",
    contributor: "Jennifer Lee",
    date: "1 month ago",
    description:
      "A step-by-step checklist to help you prepare and submit strong scholarship applications, including tips for essays and recommendations.",
    type: "Checklist",
    link: "/resources/scholarship-checklist",
  },
  {
    title: "Self-Care for Students Webinar Recording",
    contributor: "Dr. Sophia Martinez",
    date: "2 months ago",
    description:
      "A recorded webinar discussing strategies for maintaining mental health and practicing self-care while pursuing educational goals.",
    type: "Video",
    link: "/resources/self-care-webinar",
  },
]
