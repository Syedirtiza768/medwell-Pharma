import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="relative h-8 w-32 mb-4">
              <Image src="/images/logo.png" alt="BraveEd Logo" fill className="object-contain" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Learning for Resilience and Strength</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/scholarships" className="text-muted-foreground hover:text-primary">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-muted-foreground hover:text-primary">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary">
                  Support Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Emergency</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-primary">
                  Crisis Hotline
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-muted-foreground hover:text-primary">
                  Legal Resources
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-primary">
                  Safety Planning
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BraveEd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
