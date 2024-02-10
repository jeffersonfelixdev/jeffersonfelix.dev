import { ChevronRight } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { XLogoIcon } from './icons/x-logo-icon'

export function Header() {
  return (
    <header className="bg-zinc-50 dark:bg-zinc-950 py-3 sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <ChevronRight size={32} className="text-purple-400" />
          <div>
            <h1 className="font-mono text-lg font-semibold leading-none">
              Jefferson Felix
            </h1>
            <span className="font-mono text-xs font-light text-zinc-400 dark:text-zinc-600">
              Software Developer
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link
            className="hidden sm:block"
            href="https://instagram.com/jeffersonsfelix"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <InstagramLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link
            className="hidden sm:block"
            href="https://twitter.com/felixjefferson"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <XLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/jsfelix" target="_blank">
            <Button variant="ghost" size="icon">
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link href="https://github.com/jsfelix" target="_blank">
            <Button variant="ghost" size="icon">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
