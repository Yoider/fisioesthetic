<template>
  <section>
    <div class="container">
      <header>
        <h1 href="#" class="logo">Fisioestetic</h1>
        <ul>
          <li>
            <a
              href="/"
              :class="{ active: currentPage === '/' }"
              @click="setCurrentPage('/')"
              >Información</a
            >
          </li>
          <li>
            <a
              href="/fisioterapia"
              :class="{ active: currentPage === 'fisioterapia' }"
              @click="setCurrentPage('fisioterapia')"
              >Fisioterapia</a
            >
          </li>
          <li>
            <a
              href="/estetica"
              :class="{ active: currentPage === 'estetica' }"
              @click="setCurrentPage('estetica')"
              >Estética</a
            >
          </li>
        </ul>
      </header>
      <div class="content">
        <h2>{{ title }}</h2>
        <p>
          {{ text }}
        </p>
        <a href="#">Leer Más</a>
      </div>
      <div class="imgBx">
        <img class="fisio" src="~/static/toolbar/fisioterapia.png" />
        <img class="estetic" src="~/static/toolbar/estetica.png" />
      </div>
      <ul class="sci">
        <li>
          <a href="#"><img src="~/static/toolbar/tiktok.png" /></a>
        </li>
        <li>
          <a href="#"><img src="~/static/toolbar/instagram.png" /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "", // Variable to keep track of the current page
      title: "",
      text: "",
    };
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    // Get the current page URL and set the active class accordingly
    const currentPagePath = window.location.pathname;
    if (currentPagePath === "/" || currentPagePath.includes("index.html")) {
      this.currentPage = "/";
      this.title = "fisioesthetic";
      this.text =
        "Tu destino de salud y belleza. Resultados excepcionales en fisioterapia y tratamientos estéticos de vanguardia. Descubre la excelencia en bienestar con nuestros servicios personalizados. Líderes en fisioterapia y estética.";
    } else if (currentPagePath.includes("fisioterapia")) {
      this.currentPage = "fisioterapia";
      this.title = "fisioterapia";
      this.text =
        "Experimenta una fisioterapia excepcional en FisioEsthetic. Nuestro equipo de expertos te ofrece tratamientos personalizados y técnicas vanguardistas para mejorar tu bienestar. Recupera la movilidad y alivia el dolor con nuestra atención integral y profesional.";
    } else if (currentPagePath.includes("estetica")) {
      this.currentPage = "estetica";
      this.title = "estética";
      this.text =
        "Descubre una experiencia estética excepcional en FisioEsthetic. Resalta tu belleza natural con tratamientos vanguardistas y personalizados. ¡Sumérgete en nuestro paraíso de bienestar!";
    }
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
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("~/static/toolbar/backgroundToolbar.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 50px;
}
.container {
  position: relative;
  width: calc(100% - 100px);
  min-height: calc(100vh - 280px);
  min-height: 300px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}
/* toolbar */
header {
  top: -40px;
  position: absolute;
  right: 20px;
  left: 20px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}
/* name to the page */
header .logo {
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
}
/* sections from page (home, about, team) */
header ul {
  display: flex;
}
header ul li {
  list-style: none;
  margin: 0 10px;
}
header ul li a {
  color: #8a2435 !important;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 25px;
}

header ul li a:hover,
header ul li a.active {
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
/* description card with btn */
.content {
  transform: translateX(-100px);
  max-width: 550px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  margin: 20px 0;
  padding: 40px;
  padding-left: 60px;
}
.content h2 {
  font-size: 3em;
  color: #8a2435;
  text-transform: uppercase;
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
  width: 80%;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}
.imgBx .fisio {
  position: relative;
  right: 40px;
  bottom: -50px;
  z-index: 1;
}
.imgBx .estetic {
  position: relative;
  left: 110px;
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
