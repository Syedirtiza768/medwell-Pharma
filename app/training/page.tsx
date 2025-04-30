import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { TrainingPortal } from "@/components/training-portal"

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <TrainingPortal />
      </main>
      <Footer />
    </div>
  )
}
