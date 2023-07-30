<template>
  <div class="box" :style="{ '--color1': color1, '--color2': color2 }">
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
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  transition: 0.5s;
}
.box::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 50%;
  transition: 0.5s;
}
.box::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 50%;
  transition: 0.5s;
  filter: blur(15px);
  transition: 0.5s;
}
.container .box:nth-child(1):before,
.container .box:nth-child(1):after {
  background: linear-gradient(315deg, var(--color1), var(--color2));
}

.container .box .content {
  position: relative;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: 0.5s;
  color: #fff;

  /* display: none; */
}
.container .box:hover .content {
  padding: 25px 25px;
}
.container .box .content img {
  height: 240px;
  width: 240px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  border-radius: 50%;
}
.container .box:hover .content img {
  height: 245px;
  width: 245px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}
</style>
