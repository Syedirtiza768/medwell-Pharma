import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { SupportResources } from "@/components/support-resources"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <SupportResources />
      </main>
      <Footer />
    </div>
  )
}
