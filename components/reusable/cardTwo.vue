<template>
  <div class="box">
    <span
      :style="{
        '--color1': color1,
        '--color2': color2,
        '--t-circle-one': topCircleOne,
        '--l-circle-one': leftCircleOne,
        '--b-circle-two': botCircleTwo,
        '--r-circle-two': rigthCircleTwo,
      }"
    ></span>
    <div class="content">
      <div class="image-container">
        <img :src="urlImg" />
      </div>
      <div class="content-text">
        <h2>{{ titleCard }}</h2>
      </div>
      <!-- <a href="#">Leer Más</a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleCard: {
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
    topCircleOne: {
      type: String,
      default: "",
    },
    leftCircleOne: {
      type: String,
      default: "",
    },
    botCircleTwo: {
      type: String,
      default: "",
    },
    rigthCircleTwo: {
      type: String,
      default: "",
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
  margin: 60px 40px;
  transition: 0.5s;
}
.box .content span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
}
/* square one */
.container .box span::before {
  content: "";
  position: absolute;
  top: var(--t-circle-one);
  left: var(--l-circle-one);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(315deg, var(--color1), var(--color2));
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  opacity: 1;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
/* .container .box:hover span::before {
  top: -50px;
  left: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
} */

/* circle two */
.box span::after {
  content: "";
  position: absolute;
  bottom: var(--b-circle-two);
  right: var(--r-circle-two);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(315deg, var(--color1), var(--color2));
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  opacity: 1;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  animation-delay: -1s;
}

.box .content {
  position: relative;
  left: -25px;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  z-index: 1;
  transition: 0.5s;
  backdrop-filter: blur(10px);
}
.container .box:hover .content {
  left: -25px;
  padding: 22px 42px;
}
.container .box .content .image-container {
  display: flex;
  justify-content: center;
}
.container .box .content .content-text {
  min-width: 237px;
  min-height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .box .content .content-text h2 {
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
  height: 242px;
  width: 202px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}
.content a {
  display: inline-block;
  padding: 15px 30px;
  background: #fff;
  color: #8a2435;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
}
.content a:hover {
  padding: 17px 33px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
@media (max-width: 600px) {
  .box {
    height: 400px;
    width: 260px;
    margin: 50px 0px;
  }
  .box .content {
    left: 0px;
    padding: 10px 0;
  }
  .container .box:hover .content {
    left: 0!important;
    height: 400px;
    width: 260px;
    padding: 15px 0;
  }
}
</style>
