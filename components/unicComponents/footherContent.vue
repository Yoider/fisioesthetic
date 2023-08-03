<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <div class="cont">
        <div class="box">
          <div class="content d-flex">
              <v-icon large color="#8a2435">mdi-map-marker</v-icon>
            <p>
              Calle Real 10 Castilleja de la cuesta - Sevilla <br>
              Código postal 41950
            </p>
          </div>
        </div>
      </div>
    </v-col>
    <v-col class="d-flex align-center justify-center">
      <div class="cont">
        <div class="box" >
          <div class="content">
            <v-row class="d-flex align-center">
              <v-icon color="#8a2435">mdi-phone</v-icon>
            <p>
              +34 663 63 02 59
            </p>
            </v-row>
            <v-row class="d-flex align-center">
              <v-icon color="#8a2435">mdi-phone</v-icon>
            <p>
              +34 622 88 68 78
            </p>
            </v-row>
          </div>
        </div>
      </div>
    </v-col>
    <v-col class="d-flex align-center justify-center">
      <div class="cont">
        <div class="box" >
          <div class="content">
            <v-col>
              <v-row>
                <a href="https://www.iubenda.com/privacy-policy/16238940" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Política de Privacidad ">Política de Privacidad</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
              </v-row>
              <v-row>
                <a href="https://www.iubenda.com/privacy-policy/16238940/cookie-policy" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Política de Cookies ">Política de Cookies</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
              </v-row>
            </v-col>
          </div>
        </div>
      </div>
    </v-col>
    
  </v-row>
</template>
  
  <script>
  export default {

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
  .cont {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 25px;
  }
  .cont .box {
    position: relative;
    /* min-width: 400px; */
    /* height: 420px; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* margin: 40px 30px; */
    transition: 0.5s;
  }
  
  .cont .box .content {
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
    width: 330px;
    height: 120px;
    /* display: none; */
  }
  
  .cont .box .content p {
    font-size: 1em;
    color: #8a2435 !important;
    margin-bottom: -5px;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 600px){
    .content .box {
      min-width: 280px;
    }
  }
  @media screen and (max-width: 768px) {
    .cont {
      width: calc(100% - 10px);
    }
    .cont .box .content h3 {
      font-size: 1.5em;
    }
    .cont .box .content p {
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 1270px) {
    .cont {
      max-width: 500px;
    }
  }
  </style>
  