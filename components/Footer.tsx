// components/Footer.tsx
export default function Footer() {
    return (
      <footer class="bg-black py-8 text-center text-gray-500 border-t border-gray-800 mt-16">
        <div class="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Tom Ryuzaki. All frames considered.</p>
          <p class="text-xs mt-1">Visionary at <a href="https://trashbag.studio" target="_blank" rel="noopener noreferrer" class="hover:text-brand-accent underline">TRASHBAG STUDIO</a></p>
          <div class="mt-3">
            <a href="#" class="hover:text-director-primary px-2">X (Personal)</a>
            <a href="#" class="hover:text-director-primary px-2">Vimeo</a>
            <a href="#" class="hover:text-director-primary px-2">LinkedIn</a>
          </div>
          <p class="text-xs mt-4 opacity-70">
            This site was vibe-coded into existence by Tom & Gemini. No actual code was harmed (much).
          </p>
        </div>
      </footer>
    );
  }