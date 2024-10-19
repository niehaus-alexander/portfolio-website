import survivalpets from "../assets/portfolio/survivalpets.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import recipe from "../assets/portfolio/recipe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: survivalpets,
      demoLink:
        "https://capstone-project-battle-pets-6l5c732ku-johannesbs-projects.vercel.app/",
      githubLink:
        "https://github.com/Braun-Johannes/Capstone-Project-BattlePets",
    },
    {
      id: 2,
      src: portfolio,
      demoLink: "https://niehaus-alexander.netlify.app/",
      githubLink: "https://github.com/niehaus-alexander/portfolio-website",
    },
    {
      id: 3,
      src: recipe,
      demoLink: "https://lazy-recipe.netlify.app/",
      githubLink: "https://github.com/niehaus-alexander/recipe-generator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
