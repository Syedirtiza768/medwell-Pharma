import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProfileDashboard } from "@/components/profile-dashboard"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <ProfileDashboard />
      </main>
      <Footer />
    </div>
  )
}
