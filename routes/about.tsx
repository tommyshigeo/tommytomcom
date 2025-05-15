// routes/about.tsx
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Tom Ryuzaki - Director</title>
        <meta name="description" content="The story, philosophy, and chaotic methods of director Tom Ryuzaki." />
      </Head>
      <Layout active="/about">
        <div class="max-w-3xl mx-auto animate-fadeIn">
          <h1 class="text-4xl font-bold mb-6 text-director-primary">About The Man, The Myth, The <span class="hover:animate-glitch inline-block">Mess</span></h1>
          <img
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1023&q=80" // Another photo of Tom, maybe more candid or "in action"
            alt="Tom Ryuzaki in his element"
            class="w-full h-72 object-cover rounded-lg mb-8 shadow-lg"
          />
          <div class="prose prose-lg prose-invert text-director-light/90 max-w-none">
            <p class="lead text-xl">
              They say every director has a vision. Mine's usually a bit fuzzy, probably pixelated, and definitely soundtracked by some obscure synth band. I'm Tom Ryuzaki, the guy who decided the world needed more beautifully broken art, and thus, <a href="https://trashbag.studio" target="_blank" class="text-brand-accent hover:underline">TRASHBAG STUDIO</a> was born.
            </p>
            <p>
              My filmmaking journey started like most: with a cheap camera, a bunch of equally unhinged friends, and zero budget. What I lacked in resources, I made up for in sheer, unadulterated audacity. And coffee. Lots of coffee.
            </p>
            <h2 class="text-2xl font-semibold text-director-primary mt-8 mb-3">The Ryuzaki Method™ (It's Not Trademarked)</h2>
            <p>
              My "method" is less a structured process and more a controlled demolition.
            </p>
            <ul class="list-disc list-inside space-y-1">
              <li><strong>Vibe First:</strong> If the vibe ain't right, the film ain't right. This is non-negotiable.</li>
              <li><strong>Embrace the Glitch:</strong> Perfection is boring. Happy accidents are where the magic happens. My AI buddy, Gemini, gets this. It helps me translate the chaos into something resembling a website, or even a film treatment.</li>
              <li><strong>Story Through Static:</strong> Sometimes the best stories are hidden in the noise, the subtext, the things left unsaid (or deliberately garbled).</li>
              <li><strong>Rule of Cool (and Weird):</strong> If it looks cool, sounds cool, or feels weirdly compelling, it's probably going in. Budget be damned (within reason... mostly).</li>
            </ul>
            <p class="mt-6">
              At TRASHBAG STUDIO, we're not just making movies, series, or games. We're crafting experiences. We're curating digital artifacts. We're throwing paint at the digital canvas and seeing what beautifully strange patterns emerge. Thanks for tuning in.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}