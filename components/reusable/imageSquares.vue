<template>
  <div class="box">
    <span
      :style="{
        '--color1': color1,
        '--color2': color2,
      }"
    ></span>
    <div class="content">
      <img :src="urlImg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  position: relative;
  width: 500px;
  height: 615px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
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
  top: 10px;
  left: 10px;
  width: 150px;
  height: 150px;
  border-radius: 10%;
  background: linear-gradient(315deg, var(--color1), var(--color2));
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
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 200px;
  border-radius: 10%;
  background: linear-gradient(315deg, var(--color1), var(--color2));
  opacity: 1;
  transition: 0.5s;
  animation: animate 4s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  animation-delay: -1s;
}

.box .content {
  position: relative;
  width: 85%;
  height: 85%;
  z-index: 1;
  transition: 0.5s;
  backdrop-filter: blur(10px);
}
.container .box .content img {
  height: 100%;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  border-radius: 5%;
}
</style>
