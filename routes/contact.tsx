// routes/contact.tsx
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
// import ContactForm from "../islands/ContactForm.tsx"; // If you build an interactive form

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Tom Ryuzaki</title>
        <meta name="description" content="Get in touch with director Tom Ryuzaki for projects, collaborations, or just to share some weird ideas." />
      </Head>
      <Layout active="/contact">
        <div class="max-w-2xl mx-auto text-center animate-fadeIn">
          <h1 class="text-4xl font-bold mb-6 text-director-primary">Send A Signal</h1>
          <p class="text-xl text-director-light/80 mb-10">
            Got a project? A question? A sufficiently strange idea that might just work?
            Drop me a line. Or find me lurking on the interwebs.
          </p>

          <div class="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700 mb-10">
            <h2 class="text-2xl font-semibold text-director-light mb-4">Direct Transmission:</h2>
            <a
              href="mailto:tom.ryuzaki@trashbag.studio?subject=Project%20Inquiry%20-%20Tom%20Ryuzaki"
              class="inline-block bg-director-primary text-white font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-80 transition-colors shadow-md mb-4"
            >
              tom.ryuzaki@trashbag.studio
            </a>
            <p class="text-sm text-director-light/70">
              (For professional inquiries, collaborations, or existential musings.)
            </p>
          </div>

          {/* <ContactForm /> */} {/* Placeholder for a future interactive form island */}

          <div class="mt-12">
            <h3 class="text-xl font-semibold text-director-light mb-3">Find Me In The Static:</h3>
            <div class="flex justify-center space-x-6">
              <a href="#" class="text-director-light/80 hover:text-director-primary transition-colors text-2xl" title="X / Twitter"> {/* Replace with actual SVG icons later */}
                X
              </a>
              <a href="#" class="text-director-light/80 hover:text-director-primary transition-colors text-2xl" title="Vimeo">
                V
              </a>
              <a href="#" class="text-director-light/80 hover:text-director-primary transition-colors text-2xl" title="LinkedIn">
                Li
              </a>
               <a href="https://trashbag.studio" target="_blank" class="text-director-light/80 hover:text-brand-accent transition-colors text-2xl" title="TRASHBAG STUDIO">
                🗑️
              </a>
            </div>
          </div>
           <p class="text-xs text-director-light/50 mt-16">
            Gemini insists I put this here: "Responses may be delayed due to creative interference or excessive coffee consumption."
          </p>
        </div>
      </Layout>
    </>
  );
}