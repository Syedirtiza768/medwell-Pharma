import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { HomeDashboard } from "@/components/home-dashboard"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <HomeDashboard />
      </main>
      <Footer />
    </div>
  )
}
