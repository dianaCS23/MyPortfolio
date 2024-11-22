type SocialLinksProps = {
  email: string;
  linkedin: string;
  github: string;
};

const SocialLinks = ({ email, linkedin, github }: SocialLinksProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {/* Ícono de correo */}
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Correo"
          style={{ width: "30px", height: "30px" }}
        />
      </a>

      {/* Ícono de LinkedIn */}
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
          alt="LinkedIn"
          style={{ width: "30px", height: "30px" }}
        />
      </a>

      {/* Ícono de GitHub */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          style={{ width: "30px", height: "30px" }}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
