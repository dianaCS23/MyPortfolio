import ProfileCard from "../components/ProfileCrd";

const UIComponent = () => {
  return (
    <div>
      <div>
        <ProfileCard
          name="Diana Cuellar"
          title="Frontend Developer"
          profilePicture="./public/profile.png"
          email="diana.lcuellars@gmail.com"
          linkedin="https://www.linkedin.com/in/diana-cuellar/"
          github="https://github.com/dianaCS23"
        />
      </div>
    </div>
  );
};

export default UIComponent;
