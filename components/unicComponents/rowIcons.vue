<template>
  <div class="container">
    <div class="box">
      <span> </span>
      <div class="content">
        <ul>
          <li>
            <img src="~/static/rowIcons/terapia-fisica.png" />
            <h3>siente el alivio y la belleza</h3>
          </li>
          <li>
            <img src="~/static/rowIcons/cambio-de-imagen.png" />
            <h3>mejora tu calidad de vida</h3>
          </li>
          <li>
            <img src="~/static/rowIcons/relajarse.png" />
            <h3>embellece tu cuerpo, cuida tu salud</h3>
          </li>
          <li>
            <img
              src="~/static/rowIcons/maquillaje.png"
              href="https://www.flaticon.es/iconos-gratis/ojos"
              title="ojos iconos"
            />
            <h3>recupera tu encanto</h3>
          </li>
          <li>
            <img src="~/static/rowIcons/masaje-corporal.png" />
            <h3>bienestar y belleza en armonia</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardText: {
      type: String,
      default: "card text",
    },
    urlImg: {
      type: String,
      default: require("@/static/cardsInfoPage/masaje.jpg"),
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
  width: calc(100% - 100px);
  min-height: calc(100vh - 280px);
  min-height: 300px;
}
.container .box {
  position: relative;
  /* width: 320px; */
  /* height: 420px; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 40px 30px;
  transition: 0.5s;
}
.container .box::before {
  content: "";
  position: absolute;
  top: 10%;
  /* left: -25px; */
  width: 105%;
  height: 80%;
  background: #ffffff;
  border-radius: 8px;
  /* transform: skewX(15deg); */
  transition: 0.5s;
}
.container .box::after {
  content: "";
  position: absolute;
  top: 10%;
  /* left: -25px; */
  width: 105%;
  height: 80%;
  background: #ffffff;
  border-radius: 8px;
  /* transform: skewX(15deg); */
  transition: 0.5s;
  filter: blur(15px);
  transition: 0.5s;
}
.container .box:nth-child(1):before,
.container .box:nth-child(1):after {
  background: linear-gradient(315deg, #db07e3, #00b7ff);
}
.container .box span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  pointer-events: none;
}

.container .box .content {
  position: relative;
  /* left: -25px; */
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: 0.5s;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* display: none; */
}

.container .box .content ul {
  display: flex;
}

.container .box .content ul li {
  list-style: none;
  margin: 0 40px;
  width: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.container .box .content h3 {
  font-size: 1.1em;
  color: #fff;
  text-align: center;
  margin-bottom: -5px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
}
.container .box .content img {
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .responsive-list li {
    flex-direction: column;
    text-align: center;
  }

  .responsive-list img {
    max-width: 80px; /* Adjust the max-width for smaller screens */
    margin-right: 0;
    margin-bottom: 10px;
  }
  .container .box .content ul {
    display: contents;
  }
  .container .box::before {
    top: 2.5%;
    height: 95%;
  }
  .container .box::after {
    top: 2.5%;
    height: 95%;
  }
}
@media screen and (max-width: 1124px) {
  .container .box .content ul li {
    margin: 0 30px;
  }
}
@media screen and (max-width: 980px) {
  .container .box .content ul li {
    margin: 0 20px;
  }
}
</style>
