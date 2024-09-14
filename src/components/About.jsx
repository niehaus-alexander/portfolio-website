const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          After completing my Bachelor's degree in Economics with a focus on
          Econometrics and Causal Analysis, I decided to pursue a career in
          software development. Through a threemonth web development bootcamp
          and intensive self-study, I learned to develop websites using React
          and other modern technologies. My goal is to become a top-notch
          full-stack developer, as I love continuously learning new things. In
          my free time, I work on personal projects and deepen my knowledge in
          backend technologies like Java and Spring.
        </p>
      </div>
    </div>
  );
};

export default About;
