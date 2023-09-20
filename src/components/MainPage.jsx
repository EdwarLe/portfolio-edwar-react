import { useState } from "react";
import ContactMe from "./ContactMe";
import Fotter from "./Fotter";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const MainPage = ({ handleCloseContactForm, isContactModal, t, language }) => {
  return (
    <main className="w-[min(100%,_1024px)] mx-auto relative">
      <Home handleCloseContactForm={handleCloseContactForm} t={t} language={language} />
      <Skills t={t} />
      <Projects t={t} />
      <ContactMe
        handleCloseContactForm={handleCloseContactForm}
        isContactModal={isContactModal}
        t={t}
      />
      <Fotter handleCloseContactForm={handleCloseContactForm} t={t} language={language}/>
    </main>
  );
};
export default MainPage;
