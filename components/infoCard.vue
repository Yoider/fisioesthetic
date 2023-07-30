<template>
  <div class="container">
    <div class="imgBx">
      <img src="~/static/toolbar/estetic.jpg" />
    </div>
    <div class="content">
      <h2>FISIOESTETIC</h2>
      <p>
        Descubre la magia de la Micropigmentación. Resalta tus rasgos naturales
        y obtén un look impecable y duradero. Nuestros expertos te guiarán para
        conseguir el resultado perfecto. ¡Luce tu mejor versión con la
        Micropigmentación de FisioEsthetic!
      </p>
    </div>
  </div>
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
.container {
  position: relative;
  width: calc(100% - 100px);
  min-height: calc(100vh - 280px);
  min-height: 300px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 50px;
  margin: 100px 0;
}

/* description card with btn */
.content {
  transform: translateX(100px);
  max-width: 550px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 40px;
  padding-left: 60px;
}
.content h2 {
  font-size: 3em;
  color: #8a2435;
}
.content p {
  font-size: 1.2em;
  color: #8a2435;
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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
/* img */
.imgBx img {
  max-width: 360px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}
/* icons social media */
.sci {
  position: absolute;
  right: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sci li {
  list-style: none;
}
.sci li a {
  text-decoration: none;
  width: 50px;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 5px 0px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.sci li a img {
  transform: scale(0.6);
  transition: 0.5s;
  max-width: 50px;
  max-height: 50px;
}
.sci li:hover a img {
  transform: scale(0.6) rotate(360deg);
}

/* responsive  */
@media (max-width: 1200px) {
  .container {
    position: relative;
    width: calc(100% - 20px);
  }
}

@media (max-width: 992px) {
  section {
    padding: 50px 10px 10px;
  }
  .container {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
  .content {
    transform: translateX(0px);
    max-width: 100%;
    padding: 30px;
    margin-top: -40px !important;
  }
  header {
    position: relative;
    flex-direction: column;
    width: 100%;
    top: -60px;
    padding: 20px;
    right: 0;
    left: 0;
  }
  header ul {
    margin-top: 10px;
    flex-wrap: wrap;
  }
  header ul li {
    margin: 2px;
  }
  header ul li a {
    display: inline-block;
  }
  .imgBx {
    margin-bottom: 50px;
  }
  .content a {
    font-size: 1em;
    padding: 10px 20px;
  }
  .sci {
    position: relative;
    flex-direction: row;
    right: 0px;
    padding-left: 0px !important;
  }
  .sci li a {
    margin: 0 10px;
  }
}
@media (max-width: 600px) {
  .content h2 {
    font-size: 1.5em;
    color: #8a2435;
  }
  .content p {
    font-size: 1em;
    color: #8a2435;
  }
  .imgBx img {
    max-width: 250px;
  }
}
</style>
