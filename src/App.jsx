import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Intercom from '@intercom/messenger-js-sdk';
import posthog from "posthog-js";
// import Services from "./components/Services";

function App() {
  Intercom({
    app_id: 'g8tbygyl',
  });
  posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, { api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only' })

    return (
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header/>
          <Hero/>
          <Benefits/>
          <Collaboration/>
          {/*<Services />*/}
          <Pricing/>
          <Roadmap/>
          <Footer/>
        </div>

        <ButtonGradient/>
      </>
  )
}

export default App;
