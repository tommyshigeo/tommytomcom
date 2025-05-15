// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Ryuzaki - Director & Founder</title>
        <meta name="description" content="Tom Ryuzaki, director and founder of TRASHBAG STUDIO. Exploring the art of the unconventional." />
      </Head>
      <Layout active="/">
        {/* Hero Section */}
        <section
          class="min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-center text-center md:text-left relative -mt-8 -mx-4 py-10 px-4 md:px-10 bg-director-dark"
          // style="background-image: url('/path/to/tom_hero_bg.jpg'); background-size: cover; background-position: center;" // Optional BG image
        >
          <div class="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div> {/* Optional overlay if using BG image */}
          <div class="md:w-1/2 relative z-10 mb-8 md:mb-0 md:pr-10 animate-fadeIn">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" // REPLACE with a cool photo of Tom
              alt="Tom Ryuzaki"
              class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto md:mx-0 mb-6 shadow-2xl border-4 border-director-primary/50"
            />
            <h1 class="text-4xl md:text-6xl font-bold mb-3">
              <span class="text-director-light hover:animate-glitch inline-block">TOM</span>{" "}
              <span class="text-director-primary hover:animate-glitch inline-block">RYUZAKI</span>
            </h1>
            <p class="text-xl md:text-2xl text-director-light/80 mb-6">
              Director. Founder of <a href="https://trashbag.studio" target="_blank" class="text-brand-accent hover:underline">TRASHBAG STUDIO</a>.
              <br /> Weaver of weird. Seeker of static.
            </p>
            <a
              href="/reel"
              class="bg-director-primary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              View Director's Reel
            </a>
          </div>
          <div class="md:w-1/2 relative z-10 animate-slideInUp" style="animation-delay: 0.2s;">
            {/* Could be a short "Director's Statement" or latest project highlight */}
            <div class="bg-black/50 p-6 rounded-lg shadow-xl border border-gray-700">
              <h2 class="text-2xl font-semibold text-director-primary mb-3">From The Director's Chair:</h2>
              <p class="text-director-light/90">
                "My process? Pure vibes, a dash of chaos, and a whole lotta coffee.
                Gemini translates my brain-static into code. We're making art here, not spreadsheets.
                TRASHBAG STUDIO is where the beautiful digital refuse comes to life. Stick around, it gets weirder."
              </p>
              <a href="/about" class="mt-4 inline-block text-director-primary hover:underline">More about my 'process' →</a>
            </div>
          </div>
        </section>

        {/* Featured Work Snippet (Optional) */}
        <section class="py-16">
          <h2 class="text-3xl font-bold text-center mb-10 text-director-primary">
            Selected Signals
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            {/* Example Project Card - Link to TRASHBAG site or his reel item */}
            <div class="bg-gray-800/50 p-5 rounded-lg shadow-xl hover:shadow-director-primary/30 transition-shadow border border-gray-700">
              <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Project Title" class="w-full h-40 object-cover rounded-md mb-3"/>
              <h3 class="text-xl font-semibold mb-1 text-director-light">Project: Midnight Transmission</h3>
              <p class="text-sm text-director-light/70 mb-2">Role: Director, Writer</p>
              <a href="https://trashbag.studio/films/midnight-transmission" target="_blank" class="text-director-primary hover:underline text-sm">View on TRASHBAG →</a>
            </div>
            {/* Add 1-2 more */}
          </div>
        </section>
      </Layout>
    </>
  );
}