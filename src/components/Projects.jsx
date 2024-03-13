import ProjectUnit from "./ProjectUnit";

const Projects = ({ t }) => {
  return (
    <main>
      <h2 className="text-center text-3xl p-8" id="projects">
        {t("eng.titleProjects")}
      </h2>
      <section className="min-h-screen p-3 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 mb-8">
        <ProjectUnit 
        title={'Kaba Clubs E-commerce'}
        img={'bg-[url(/ecommerceKabaClubs.png)]'}
        info={'E-commerce for Kaba Clubs, where customers can make purchases of products curated by affiliated vendors of the Club.'}
        skill1={<i className="bx bxl-typescript"></i>}
        skill2={<i className="bx bxl-html5"></i>}
        skill3={<i className="bx bxl-css3"></i>}
        skill4={<i className="bx bxl-react"></i>}
        skill5={<i className="bx bxl-tailwind-css"></i>}
        skill6={''}/>
      
        <ProjectUnit
          title={"Pokedex"}
          img={"bg-[url(/pokedexApi.jpg)]"}
          gitHub={"https://github.com/EdwarLe/pokedex-api"}
          demo={"https://pokedex-api-e.netlify.app/"}
          info={
            "Look info about pokemons, their skills, attacks and all their stadistics."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />
        <ProjectUnit
          title={"CRUD"}
          img={"bg-[url(/CRUD.jpg)]"}
          gitHub={"https://github.com/EdwarLe/users-CRUD-API"}
          demo={"https://users-crud-api.netlify.app/"}
          info={
            "Create, read, update and delete users with this amazing web app."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />
        <ProjectUnit
          title={"Rick and Morty App"}
          img={"bg-[url(/rickAndMortyApp.jpg)]"}
          gitHub={"https://github.com/EdwarLe/rickAndMortyApi"}
          demo={"https://rick-and-morty-api-e.netlify.app/"}
          info={
            "Search every dimension in this web app and look all their characters, do you wanna know if there is alive?, you are in the right place."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />
        <ProjectUnit
          title={"Weather App"}
          img={"bg-[url(/weatherApp.jpg)]"}
          gitHub={"https://github.com/EdwarLe/weather-app"}
          demo={"https://weather-app-api-e.netlify.app/"}
          info={
            "Do you wanna know the weather in your zone? look this app. Hey you can check another places too."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />
        <ProjectUnit
          title={"Random Info Space"}
          img={"bg-[url(/randomSpaceInfo.jpg)]"}
          gitHub={"https://github.com/EdwarLe/infoCardRandomSpace"}
          demo={"https://card-random-info-space.netlify.app/"}
          info={
            "Do you wanna know about space?, try your luck in this app, click on button and read the random info that i have for you."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={""}
          skill6={""}
        />
        <ProjectUnit
          title={"E-commerce"}
          img={"bg-[url(/e-commerce.jpg)]"}
          gitHub={"https://github.com/EdwarLe/api-e-commerce"}
          demo={"https://api-e-commerce-v1.netlify.app/"}
          info={
            "This amazing page will provided you all that you need to select and buy products."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={""}
          skill5={""}
          skill6={""}
        />
        <ProjectUnit
          title={"Consume API"}
          img={"bg-[url(/apiConsume.jpg)]"}
          gitHub={"https://github.com/EdwarLe/API-exercise"}
          demo={"https://api-exercise-list-participants.netlify.app/"}
          info={"In this little page you can see API consume."}
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={""}
          skill5={""}
          skill6={""}
        />
        <ProjectUnit
          title={"Sort Items"}
          img={"bg-[url(/sortJs.jpg)]"}
          gitHub={"https://github.com/EdwarLe/sort-js"}
          demo={"https://sort-js-academlo.netlify.app/"}
          info={"In this page you can see about how to sort users."}
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={""}
          skill5={""}
          skill6={""}
        />
      </section>
    </main>
  );
};
export default Projects;
