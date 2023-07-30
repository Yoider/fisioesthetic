<template>
  <div class="box" :style="{ '--color1': color1, '--color2': color2 }">
    <span> </span>
    <div class="content">
      <div class="image-container">
        <img :src="urlImg" />
      </div>
      <h2>{{ cardText }}</h2>
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
      default: "",
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
.box {
  position: relative;
  width: 320px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
}
.box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  background: #ffffff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}
.box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  background: #ffffff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(15px);
  transition: 0.5s;
}
.box:hover::before,
.box:hover::after {
  transform: skewX(0deg);
  left: 20px;
  width: calc(100% - 90px);
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
/* square one */
.container .box span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
.container .box:hover span::before {
  top: -50px;
  left: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

/* square two */
.container .box span::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation-delay: -1s;
}
.container .box:hover span::after {
  bottom: -50px;
  right: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.container .box .content {
  position: relative;
  left: -25px;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: 0.5s;
  color: #fff;

  /* display: none; */
}
.container .box:hover .content {
  left: -25px;
  padding: 40px 40px;
}
.container .box .content .image-container {
  display: flex;
  justify-content: center;
}
.container .box .content h2 {
  font-size: 1.7em;
  color: #8a2435;
  text-align: center;
  margin-bottom: -5px;
  text-transform: uppercase;
}
.container .box .content img {
  height: 240px;
  width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  border-radius: 8px;
}
.container .box:hover .content img {
  height: 245px;
  width: 205px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}
</style>
