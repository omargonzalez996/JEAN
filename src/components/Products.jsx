import React, { useState } from "react";

function Products() {
  const [activeBtn, setActiveBtn] = useState(1);
  return (
    <div className="producto-container">
      <div className="productos-titulo">
        <h2>
          <neg>Productos</neg> destacados
        </h2>
      </div>
      <div className="product-categories">
        <button
          onClick={() => setActiveBtn(1)}
          className={activeBtn === 1 ? "active" : ""}
        >
          Proteina
        </button>
        <button
          onClick={() => setActiveBtn(2)}
          className={activeBtn === 2 ? "active" : ""}
        >
          Creatina
        </button>
        <button
          onClick={() => setActiveBtn(3)}
          className={activeBtn === 3 ? "active" : ""}
        >
          Otros
        </button>
      </div>
      <div className="productos">
        <div className="producto">
          <div className="producto-img">
            <img
              src="https://gnc.com.mx/media/catalog/product/1/0/107206001-on-gold-standard-100-whey-choc-5-lbs.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&format=jpeg"
              alt="prod.jpg"
            />
          </div>
          <div className="producto-desc">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
