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
    <div class="content">
      <footherContent />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
section {
  top: 40px;
  justify-content: center;
  /* align-items: center; */
  left: 0;
  display: flex; 
  height: 220px;
  position: absolute;
  width: 100%;
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  background: url("~/static/toolbar/backgroundToolbar.jpg");
}
.container {
  display: flex;
  justify-content: center;
}
.content {
  top: 30px;
  width: 100%;
  position: absolute;
}
.content a {
  text-transform: uppercase;
  color: #8a2435 !important;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 25px;
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
@media screen and (max-width: 989px) {
  section {
    min-height: 340px;
  }
}
@media screen and (max-width: 659px) {
  section {
    min-height: 500px;
  }
}

</style>