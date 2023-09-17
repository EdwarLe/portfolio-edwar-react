import { useState } from "react";
import ContactMe from "./ContactMe";
import Fotter from "./Fotter";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const MainPage = ({ handleCloseContactForm, isContactModal, t }) => {
  return (
    <main className="w-[min(100%,_1024px)] mx-auto relative">
      <Home handleCloseContactForm={handleCloseContactForm} t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <ContactMe
        handleCloseContactForm={handleCloseContactForm}
        isContactModal={isContactModal}
        t={t}
      />
      <Fotter handleCloseContactForm={handleCloseContactForm} t={t} />
    </main>
  );
};
export default MainPage;
