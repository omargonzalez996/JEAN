import { Icon } from "@iconify/react";

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="">
        <Icon icon="ic:baseline-facebook" width={50} color="#202020" />
      </a>
      <a href="https://www.instagram.com/jcsupstoremx/">
        <Icon icon="mdi:instagram" color="#202020" width="50" />
      </a>
      <a href="#">
      <Icon icon="ic:baseline-whatsapp" color="#202020" width="50" />
      </a>
    </div>
  );
};

export default Socials;
