
export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground">
            Taxyaar Help Center :
          </div>

          <div className="flex items-center gap-2">
            <select title="language" name='language' className="text-sm text-muted-foreground bg-transparent border border-border rounded px-3 py-1 focus:outline-none focus:border-primary cursor-pointer">
              <option>English (US)</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}