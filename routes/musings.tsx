// routes/musings.tsx
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

const musings = [
  {
    id: "1",
    title: "On the Beauty of Broken Code & B-Movies",
    date: "2023-10-26",
    excerpt: "There's an art to imperfection. The unexpected jag, the happy accident, the film grain that tells you this was *made*, not manufactured...",
    link: "/musings/broken-code-b-movies" // This would be a future dynamic route
  },
  {
    id: "2",
    title: "Why My AI is My Best Co-Writer (Sometimes)",
    date: "2023-09-15",
    excerpt: "People ask if I'm scared of AI taking over filmmaking. Honestly? Gemini just helps me get the weird stuff out of my head faster. It's a collaborator, not a replacement...",
    link: "/musings/ai-co-writer"
  },
  {
    id: "3",
    title: "Finding Stories in the Static",
    date: "2023-08-01",
    excerpt: "The world is loud. Full of signals. Sometimes, the most interesting narratives are found in the interference, the noise between stations, the flicker of a dying CRT...",
    link: "/musings/stories-in-static"
  }
];

export default function MusingsPage() {
  return (
    <>
      <Head>
        <title>Musings - Tom Ryuzaki</title>
        <meta name="description" content="Thoughts, ideas, and creative static from director Tom Ryuzaki." />
      </Head>
      <Layout active="/musings">
        <div class="max-w-3xl mx-auto animate-fadeIn">
          <h1 class="text-4xl font-bold mb-10 text-center text-director-primary">Director's Static (Musings)</h1>
          <div class="space-y-12">
            {musings.map((musing, index) => (
              <article key={musing.id} class="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <h2 class="text-2xl font-semibold mb-2 text-director-primary hover:text-director-primary/80 transition-colors">
                  <a href={musing.link}>{musing.title}</a> {/* For now, links won't work until you build out dynamic routes */}
                </h2>
                <p class="text-xs text-director-light/60 mb-3">{musing.date}</p>
                <p class="text-director-light/90 mb-4">{musing.excerpt}</p>
                <a href={musing.link} class="text-director-primary hover:underline">Read More (Soon...) →</a>
              </article>
            ))}
          </div>
          <p class="text-center text-director-light/70 mt-12 italic">
            (Full articles coming whenever Gemini and I sync up our brainwaves again.)
          </p>
        </div>
      </Layout>
    </>
  );
}