export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 py-6 border-t border-border/50 text-zinc-500">
      <div className="container">
        &copy;{new Date().getFullYear()} Jefferson Felix. All rights reserved.
      </div>
    </footer>
  )
}
