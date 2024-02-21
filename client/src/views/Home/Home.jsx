import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.mainContainer}>
      <h1>Bienvenido a chiniBakery</h1>

      <p>
        ABOUT US: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        veritatis eveniet sapiente, illum nihil praesentium vitae perferendis,
        asperiores laudantium nobis velit quaerat tempora explicabo quas
        blanditiis. Totam dolorem cupiditate praesentium.
      </p>
    </div>
  );
}

export default Home;