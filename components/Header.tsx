// components/Header.tsx
interface NavItem {
    name: string;
    href: string;
  }
  
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Reel", href: "/reel" }, // Director's Reel
    { name: "Musings", href: "/musings" }, // Or "Blog", "Thoughts"
    { name: "Contact", href: "/contact" },
  ];
  
  export default function Header({ active }: { active?: string }) {
    return (
      <header class="bg-black/70 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4 py-5 flex justify-between items-center">
          <a href="/" class="text-2xl md:text-3xl font-bold group">
            <span class="text-director-primary group-hover:animate-glitch">TOM RYUZAKI</span>
            <span class="text-xs block text-director-light/70 group-hover:text-brand-accent transition-colors">Director // TRASHBAG Founder</span>
          </a>
          <nav>
            <ul class="flex space-x-4 md:space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    class={`text-md md:text-lg hover:text-director-primary transition-colors
                      ${item.href === active ? "text-director-primary font-semibold border-b-2 border-director-primary" : "text-director-light"}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }