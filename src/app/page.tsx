import dynamic from "next/dynamic";

const Navbar = dynamic(() =>  import ("./components/layouts/Navbar"), {loading: () => <p>Loading...</p>});
const LandingSection = dynamic(() => import ("./components/sections/LandingSection"), {loading: () => <p>Loading...</p>});
const ProjectsSection = dynamic(() => import ("./components/sections/ProjectsSection"), {loading: () => <p>Loading...</p>});
const SkillSection = dynamic(() => import ("./components/sections/SkillSection"), {loading: () => <p>Loading...</p>});
const AboutSection = dynamic(() => import ("./components/sections/AboutSection"), {loading: () => <p>Loading...</p>});
const ExperienceSection = dynamic(() => import ("./components/sections/ExperienceSection"), {loading: () => <p>Loading...</p>});
const Footer = dynamic(() => import ("./components/layouts/Footer"), {loading: () => <p>Loading...</p>});

export default function Home() {

  return (
    <main className="w-full h-screen bg-white"> 

      <Navbar/>

      <LandingSection/>

      <ProjectsSection/>

      <SkillSection/>

      <AboutSection/>

      <ExperienceSection/>

      {/* <EducationSection/> */}

      <Footer/>

      {/* <div className="h-screen bg-emerald-400"></div> */}

    </main>
  );
}
