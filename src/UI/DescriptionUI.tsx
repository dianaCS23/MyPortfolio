import AboutMe from "../components/AboutMe";

const descriptionUI = () => {
  return (
    <div>
      <AboutMe
        description="Hi, I'm Diana Salguero, a passionate Software Engineer with over 1.5 years of experience building web and mobile applications. I enjoy tackling challenges, solving problems, and delivering solutions that make a difference. My expertise spans from frontend development to backend integration and automated testing, always with a focus on creating seamless and efficient user experiences"
        description2="Throughout my career, I have had the opportunity to:"
        qualities={[
          "Propose innovative solutions to optimize development workflows and enhance user satisfaction.",
          "Design intuitive interfaces for web and mobile applications using React and React Native.",
          "Explore new technologies like Cypress, Selenium, and CI/CD tools to automate testing and ensure software quality.",
          "Collaborate with teams to meet tight deadlines, solve complex problems, and deliver impactful results.",
        ]}
      />
    </div>
  );
};

export default descriptionUI;
