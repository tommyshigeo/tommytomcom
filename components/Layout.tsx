// components/Layout.tsx
import { ComponentChildren } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type LayoutProps = {
  children: ComponentChildren;
  active?: string;
};

export default function Layout({ children, active }: LayoutProps) {
  return (
    <div class="flex flex-col min-h-screen bg-director-dark text-director-light font-sans"> {/* Ensure font-sans is applied if you defined it */}
      <Header active={active} />
      <main class="flex-grow container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}