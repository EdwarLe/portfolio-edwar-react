import ProjectUnit from "./ProjectUnit";

const Projects = () => {
  return (
    <section className="min-h-screen p-3 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
      <ProjectUnit
        title={"Pokedex"}
        img={"bg-[url(/pokedexApi.jpg)]"}
        gitHub={"https://github.com/EdwarLe/pokedex-api"}
        demo={"https://pokedex-api-e.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={<i className='bx bxl-react' ></i>}
        skill5={<i className='bx bxl-tailwind-css' ></i>}
        skill6={""}
      />
      <ProjectUnit
        title={"CRUD"}
        img={"bg-[url(/CRUD.jpg)]"}
        gitHub={"https://github.com/EdwarLe/users-CRUD-API"}
        demo={"https://users-crud-api.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={<i className='bx bxl-react' ></i>}
        skill5={<i className='bx bxl-tailwind-css' ></i>}
        skill6={""}
      />
      <ProjectUnit
        title={"Rick and Morty App"}
        img={"bg-[url(/rickAndMortyApp.jpg)]"}
        gitHub={"https://github.com/EdwarLe/rickAndMortyApi"}
        demo={"https://previsualicer-rick-and-morty-api.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={<i className='bx bxl-react' ></i>}
        skill5={<i className='bx bxl-tailwind-css' ></i>}
        skill6={""}
      />
      <ProjectUnit
        title={"Weather App"}
        img={"bg-[url(/weatherApp.jpg)]"}
        gitHub={"https://github.com/EdwarLe/weather-app"}
        demo={"https://weather-app-api-e.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={<i className='bx bxl-react' ></i>}
        skill5={<i className='bx bxl-tailwind-css' ></i>}
        skill6={""}
      />
      <ProjectUnit
        title={"Random Info Space"}
        img={"bg-[url(/randomSpaceInfo.jpg)]"}
        gitHub={"https://github.com/EdwarLe/infoCardRandomSpace"}
        demo={"https://card-random-info-space.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={<i className='bx bxl-react' ></i>}
        skill5={""}
        skill6={""}
      />
      <ProjectUnit
        title={"E-commerce"}
        img={"bg-[url(/e-commerce.jpg)]"}
        gitHub={"https://github.com/EdwarLe/api-e-commerce"}
        demo={"https://api-e-commerce-v1.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={""}
        skill5={""}
        skill6={""}
      />
      <ProjectUnit
        title={"Consume API"}
        img={"bg-[url(/apiConsume.jpg)]"}
        gitHub={"https://github.com/EdwarLe/API-exercise"}
        demo={"https://api-exercise-list-participants.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={""}
        skill5={""}
        skill6={""}
      />
      <ProjectUnit
        title={"Sort Items"}
        img={"bg-[url(/sortJs.jpg)]"}
        gitHub={"https://github.com/EdwarLe/sort-js"}
        demo={"https://sort-js-academlo.netlify.app/"}
        skill1={<i className='bx bxl-javascript'></i>}
        skill2={<i className='bx bxl-html5' ></i>}
        skill3={<i className='bx bxl-css3' ></i>}
        skill4={""}
        skill5={""}
        skill6={""}
      />
    </section>
  );
};
export default Projects;
