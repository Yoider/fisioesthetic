<template>
  <v-row>
    <v-row class="my-10">
      <v-col class="text-center">
        <h2>¿Quienes somos?</h2>
        <p>
          En FisioEsthetic, contamos con profesionales altamente cualificados
          con más de 20 años de experiencia en fisioterapia y estética. Nuestra
          misión es ofrecer tratamientos profesionales y personalizados,
          adaptados a las necesidades individuales de cada cliente. Unificamos
          salud, belleza y bienestar para brindarte una experiencia única.
          Descubre el equilibrio perfecto con nuestros servicios especializados
          en fisioterapia y estética.
        </p>
      </v-col>
    </v-row>
    <v-row
      class="justify-center align-center d-flex"
      style="margin: 50px 0 !important"
    >
      <imageSquares
        color1="#ff00f98c"
        color2="#00bfffcf"
        :urlImg="require('@/static/imageSquares/micro.jpg')"
      />
      <CardDesc
        color1="#ff00f98c"
        color2="#00bfffcf"
        cardTitle="Micropigmentación"
        cardText="
        Descubre la perfección duradera con la Micropigmentación. Resalta tus
        rasgos naturales y olvídate del maquillaje diario. Nuestros expertos en
        estética te brindarán un tratamiento seguro y personalizado para realzar
        tu belleza con resultados naturales y duraderos. ¡Despierta cada día
        sintiéndote impecable y confiada!"
      />
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <cardFour
        cardText="Explora los tratamientos estéticos de vanguardia que ofrecemos para realzar tu belleza natural."
        color1="#ff00f98c"
        color2="#00bfffcf"
        :urlImg="require('@/static/cardFour/pestana.png')"
      />
      <cardFour
        cardText="Descubre cómo nuestros servicios personalizados en estética pueden hacer que te sientas radiante por dentro y por fuera."
        color2="#ff00f98c"
        color1="#00bfffcf"
        :urlImg="require('@/static/cardFour/tratamiento-de-belleza.png')"
      />
      <cardFour
        cardText="Confía en nuestros expertos en estética para obtener resultados sorprendentes y sentirte más seguro/a de ti mismo/a."
        color1="#ff00f98c"
        color2="#00bfffcf"
        :urlImg="require('@/static/cardFour/cambio-de-img.png')"
      />
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <infoCard />
    </v-row>
    <v-row class="my-10">
      <v-col class="text-center">
        <h2>SERVICIOS DE ESTÉTICA</h2>
      </v-col>
      <v-row class="justify-center align-center d-flex">
        <CardTwo
          topCircleOne="370px"
          leftCircleOne="278px"
          rigthCircleTwo="222px"
          botCircleTwo="383px"
          color1="#ff00f98c"
          color2="#00bfffcf"
          titleCard="Depilación laser"
          :urlImg="require('@/static/cardTwo/laser.jpeg')"
        />
        <CardTwo
          topCircleOne="0px"
          leftCircleOne="-40px"
          rigthCircleTwo="10px"
          botCircleTwo="-20px"
          color1="#ff00f98c"
          color2="#00bfffcf"
          titleCard="Micro-pigmentación"
          :urlImg="require('@/static/cardTwo/microPig.jpg')"
        />
        <CardTwo
          topCircleOne="300px"
          leftCircleOne="-45px"
          rigthCircleTwo="60px"
          botCircleTwo="380px"
          color1="#ff00f98c"
          color2="#00bfffcf"
          titleCard="Para-medicales"
          :urlImg="require('@/static/cardTwo/paramedicales.jpeg')"
        />
      </v-row>
    </v-row>
    
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
h2 {
  font-size: 2em;
  color: #8a2435;
  text-align: center;
  text-transform: uppercase;
  margin: 10px;
}
p {
  font-size: 1.1em;
  color: #8a2435;
  text-align: center;
  margin: 20px;
}
</style>
