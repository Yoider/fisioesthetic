<template>
  <v-row class="d-flex justify-center aling-center">
    <v-col cols="8" class="content">
        <v-row>
            <h2 class="" style="text-transform: uppercase;">
                atribución:
            </h2>
            <v-row>
                <p>los iconos que utilizamos han sido proporcionados por la siguiente pagina: </p>
                <a href="https://www.flaticon.es" style="color: black">  https://www.flaticon.es</a>
            </v-row>
        </v-row>
        <v-row class="d-flex aling-center" style="margin: 50px 0;">
            <ul>
                <li>
                    <img src="~/static/rowIcons/cambio-de-imagen.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/maquillaje" title="maquillaje iconos">Maquillaje iconos creados por Freepik - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/rowIcons/maquillaje.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/ojos" title="ojos iconos">Ojos iconos creados por Freepik - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/rowIcons/masaje-corporal.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/masaje" title="masaje iconos">Masaje iconos creados por kosonicon - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/rowIcons/relajarse.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/spa" title="spa iconos">Spa iconos creados por monkik - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/rowIcons/terapia-fisica.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/fisioterapia" title="fisioterapia iconos">Fisioterapia iconos creados por Freepik - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/toolbar/instagram.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/instagram" title="instagram iconos">Instagram iconos creados por edt.im - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/logotipo-de-instagram.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/logotipo-de-instagram" title="logotipo de instagram iconos">Logotipo de instagram iconos creados por Freepik - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/toolbar/tiktok.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/tik-tok" title="tik tok iconos">Tik tok iconos creados por Freepik - Flaticon</a>
                </li>
                <li>
                    <img src="~/static/tik-tok.png" >
                    <a class="text" href="https://www.flaticon.es/iconos-gratis/tik-tok" title="tik tok iconos">Tik tok iconos creados por Freepik - Flaticon</a>
                </li>
            </ul>
        </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.content img {
    height: 100px;
    margin: 10px;
}
.content .text {
    top: -50px;
    position: relative;

}
.content ul li {
    list-style: none;
}
</style>