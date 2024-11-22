import styles from "./ProfileCard.module.css";
import SocialLinks from "./SocialLinks";

type ProfileCardProps = {
  name: string;
  title: string;
  profilePicture: string;
  email: string;
  linkedin: string;
  github: string;
};

const ProfileCard = ({
  name,
  title,
  profilePicture,
  email,
  linkedin,
  github,
}: ProfileCardProps) => {
  return (
    <div className={styles.card}>
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className={styles.image}
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.title}>{title}</p>

      <SocialLinks email={email} linkedin={linkedin} github={github} />
    </div>
  );
};

export default ProfileCard;
