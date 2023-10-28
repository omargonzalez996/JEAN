import { Icon } from "@iconify/react";

function Perks() {
  return (
    <div className="perks-container">
      <div className="perk-cont">
        <div className="perk-icon">
          <Icon className="perk-iconify" icon="mdi:truck" color="#ffef03" />
        </div>
        <div className="perk-desc">
          <p>Hacemos envíos a todo el país</p>
        </div>
      </div>
      <div className="perk-cont">
        <div className="perk-icon">
          <Icon className="perk-iconify" icon="map:gym" color="#ffef03" />
        </div>
        <div className="perk-desc">
          <p>Calidad gramo por gramo en suplementos</p>
        </div>
      </div>
      <div className="perk-cont">
        <div className="perk-icon">
          <Icon
            className="perk-iconify"
            icon="solar:health-bold"
            color="#ffef03"
          />
        </div>
        <div className="perk-desc">
          <p>Todo para tu estilo de vida saludable.</p>
        </div>
      </div>
      <div className="perk-cont">
        <div className="perk-icon">
          <Icon className="perk-iconify" icon="fa6-solid:jar" color="#ffef03" />
        </div>
        <div className="perk-desc">
          <p>Las mejores marcas de suplementos</p>
        </div>
      </div>
    </div>
  );
}

export default Perks;
