import { Icon } from "@iconify/react";

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://www.facebook.com/p/Jc-Nutrition-100054320568896/">
        <Icon className="social-icon" icon="logos:facebook" />
      </a>
      <a href="https://www.instagram.com/jcsupstoremx/">
        <Icon className="social-icon" icon="skill-icons:instagram" />
      </a>
      <a href="#">
        <Icon className="social-icon" icon="logos:whatsapp-icon" />
      </a>
    </div>
  );
};

export default Socials;
