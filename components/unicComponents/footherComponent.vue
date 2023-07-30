<template>
  <section>
    <div class="container">
      <ul>
        <li>
          <a href="#"><img src="~/static/logotipo-de-instagram.png" /></a>
        </li>
        <li>
          <a href="#"><img src="~/static/tik-tok.png" /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  top: 40px;
  justify-content: center;
  /* align-items: center; */
  left: 0;
  display: flex;
  position: absolute;
  width: 100%;
  height: 10vh;
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  background: url("~/static/toolbar/backgroundToolbar.jpg");
}
.container {
  display: flex;
  justify-content: center;
}
ul {
  top: -50px;
  position: relative;
  display: flex;
  z-index: 2;
}
ul li {
  position: relative;
  list-style: none;
  margin: 10px;
}
ul li a {
  position: relative;
  width: 80px;
  height: 80px;
  display: inline-block;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: 0.5s;
  overflow: hidden;
}
ul li a:hover {
  transform: translateY(-20px);
}
ul li a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  transform: skewX(45deg) translateX(150px);
  transition: 0.5s;
}
ul li a:hover::before {
  transform: skewX(45deg) translateX(-150px);
}
ul li a img {
  width: 100%;
}
</style>

<!-- <template>
  <section>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <ul>
      
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  position: absolute;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ff4f8b, #dff1ff);
}
section::before {
  content: "";
  position: absolute;
  width: 100%;
  z-index: 1;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}
section .color {
  position: absolute;
  filter: blur(150px);
}
section .color:nth-child(1) {
  background: #ff359b;
  width: 300px;
  height: 300px;
  /* top: -350px; */
}
section .color:nth-child(2) {
  background: #00d2ff;
  width: 250px;
  height: 250px;
  bottom: -150px;
  left: 100px;
}
section .color:nth-child(3) {
  background: #fffd87;
  width: 150px;
  height: 150px;
  bottom: 50px;
  right: 0px;
}
ul {
  position: relative;
  display: flex;
  z-index: 2;
}
ul li {
  position: relative;
  list-style: none;
  margin: 10px;
}
ul li a {
  position: relative;
  width: 80px;
  height: 80px;
  display: inline-block;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: 0.5s;
  overflow: hidden;
}
ul li a:hover {
  transform: translateY(-20px);
}
ul li a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  transform: skewX(45deg) translateX(150px);
  transition: 0.5s;
}
ul li a:hover::before {
  transform: skewX(45deg) translateX(-150px);
}
ul li a img {
  width: 100%;
}
</style> -->
