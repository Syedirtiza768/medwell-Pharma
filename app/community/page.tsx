import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { CommunityForum } from "@/components/community-forum"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <CommunityForum />
      </main>
      <Footer />
    </div>
  )
}
