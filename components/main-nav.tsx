import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-32">
              <Image src="/images/logo.png" alt="BraveEd Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/scholarships" className="text-sm font-medium transition-colors hover:text-primary">
            Scholarships
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Support
          </Link>
          <Link href="/training" className="text-sm font-medium transition-colors hover:text-primary">
            Training
          </Link>
          <Link href="/support" className="text-sm font-medium transition-colors hover:text-primary">
            Legal Aid
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="How can I help you?"
              className="w-[200px] pl-8 md:w-[250px] lg:w-[300px]"
            />
          </div>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="relative h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-primary">JD</span>
              </div>
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
