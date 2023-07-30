<template>
  <div class="container">
    <div class="box" :style="{ '--color1': color1, '--color2': color2 }">
      <span> </span>
      <div class="content">
        <h3>{{ cardTitle }}</h3>
        <p>
          {{ cardText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: "",
    },
    cardText: {
      type: String,
      default: "card text",
    },
    color1: {
      type: String,
      default: "#db07e3", // Valor por defecto para color1
    },
    color2: {
      type: String,
      default: "#00b7ff", // Valor por defecto para color2
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
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
  width: calc(100% - 100px);
  max-width: 600px;
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
  top: 5%;
  /* left: -25px; */
  width: 105%;
  height: 90%;
  background: #ffffff;
  border-radius: 8px;
  /* transform: skewX(15deg); */
  transition: 0.5s;
}
.container .box::after {
  content: "";
  position: absolute;
  top: 5%;
  /* left: -25px; */
  width: 105%;
  height: 90%;
  background: #ffffff;
  border-radius: 8px;
  filter: blur(15px);
  transition: 0.5s;
}
.container .box:nth-child(1):before,
.container .box:nth-child(1):after {
  background: linear-gradient(315deg, var(--color1), var(--color2));
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

.container .box .content h3 {
  font-size: 2em;
  color: #ffffff;
  text-align: center;
  margin-bottom: -5px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 10px;
}
.container .box .content p {
  font-size: 1em;
  color: #ffffff;
  margin-bottom: -5px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .container {
    width: calc(100% - 10px);
  }
  .container .box .content h3 {
    font-size: 1.5em;
  }
  .container .box .content p {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 1270px) {
  .container {
    max-width: 500px;
  }
}
</style>
