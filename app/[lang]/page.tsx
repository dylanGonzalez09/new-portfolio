import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} labels={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <Experience dict={dict.experience} />
        <Projects dict={dict.projects} />
        <Skills dict={dict.skills} />
        <Education dict={dict.education} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
