import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ScholarshipPortal } from "@/components/scholarship-portal"

export default function ScholarshipsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <ScholarshipPortal />
      </main>
      <Footer />
    </div>
  )
}
