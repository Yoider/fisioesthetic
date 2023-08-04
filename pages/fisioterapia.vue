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
    <v-row>
      <v-col class="text-center">
        <h2>Te ofrecemos</h2>
        <v-row class="justify-center align-center d-flex">
          <CardTwo
            topCircleOne="370px"
            leftCircleOne="278px"
            rigthCircleTwo="222px"
            botCircleTwo="383px"
            color1="#ff00f98c"
            color2="#00bfffcf"
            titleCard="Tratamientos reductores y moldeantes"
            :urlImg="require('@/static/cardTwo/tratamientoRyM.jpeg')"
          />
          <CardTwo
            topCircleOne="0px"
            leftCircleOne="-40px"
            rigthCircleTwo="10px"
            botCircleTwo="-20px"
            color1="#ff00f98c"
            color2="#00bfffcf"
            titleCard="Presoterapia"
          />
          <CardTwo
            topCircleOne="300px"
            leftCircleOne="-45px"
            rigthCircleTwo="60px"
            botCircleTwo="380px"
            color1="#ff00f98c"
            color2="#00bfffcf"
            titleCard="Marcaje abdominal colombiano"
            :urlImg="require('@/static/cardTwo/marcaje.jpg')"
          />
          <CardTwo
            topCircleOne="300px"
            leftCircleOne="273px"
            rigthCircleTwo="205px"
            botCircleTwo="-50px"
            color1="#ff00f98c"
            color2="#00bfffcf"
            titleCard="Masaje terapéutico"
            :urlImg="require('@/static/cardTwo/masajetera.jpg')"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <imageSquares
        color1="#ff00f98c"
        color2="#00bfffcf"
        :urlImg="require('@/static/imageSquares/postoperatorio.jpeg')"
        imgTitle="drenaje postoperatorio"
      />

      <CardDesc
        color1="#ff00f98c"
        color2="#00bfffcf"
        cardTitle="siente el alivio y la belleza"
        cardText="
          El resultado exitoso de una cirugía estética depende en gran medida de
          los cuidados postoperatorios. Una buena alimentación, el uso de la
          faja y los masajes son fundamentales. En FisioEsthetic, recomendamos
          iniciar los masajes a partir del segundo o tercer día de la cirugía,
          aprovechando las incisiones abiertas para drenar el seroma
          externamente y prevenir su acumulación y fibrosis en ciertas áreas.
          Nuestros profesionales altamente capacitados facilitarán una pronta
          recuperación, acelerando la cicatrización y moldeando el resultado
          deseado"
      />
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <CardCircle
        color2="#ff00f98c"
        color1="#00bfffcf"
        :urlImg="require('@/static/cardTwo/tratamientoRyM.jpeg')"
      />
      <CardDesc
        color1="#ff00f98c"
        color2="#00bfffcf"
        cardTitle="Tratamientos reductores y moldeantes"
        cardText="En FisioEsthetic, combinamos diversas técnicas manuales y con
        aparatología para lograr reducir la grasa localizada, mejorar la
        celulitis y estilizar el cuerpo. Contamos con un amplio abanico de
        técnicas especializadas que nos permiten obtener los mejores resultados
        en cada tratamiento estético."
      />
      <p></p>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <CardCircle
        color1="#ff00f98c"
        color2="#00bfffcf"
        :urlImg="require('@/static/cardTwo/tratamientoRyM.jpeg')"
      />
      <CardDesc
        color2="#ff00f98c"
        color1="#00bfffcf"
        cardTitle="Presoterapia"
        cardText="Nuestro innovador tratamiento de presoterapia aplica presiones de aire
        estratégicamente en diferentes partes del cuerpo para favorecer el
        drenaje linfático. Esta técnica no solo promueve la oxigenación de los
        tejidos y recupera la elasticidad cutánea, sino que también facilita la
        regeneración tisular y elimina toxinas, reduciendo la hinchazón
        corporal. Con la presoterapia de FisioEsthetic, obtendrás resultados
        excepcionales en tu tratamiento estético."
      />
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <CardCircle
        color2="#ff00f98c"
        color1="#00bfffcf"
        :urlImg="require('@/static/cardTwo/marcaje.jpg')"
      />
      <CardDesc
        color1="#ff00f98c"
        color2="#00bfffcf"
        cardTitle="Marcaje abdominal Colombiano"
        cardText=" ¡Transforma tu cuerpo con el Marcaje Abdominal Colombiano! Técnicas
        moldeadoras únicas para una definición sin igual. Olvida la hinchazón y
        el estreñimiento con nuestro enfoque en la descongestión intestinal.
        Prepara tu cuerpo para tratamientos estéticos con nuestra técnica
        probada y efectiva. ¡Consigue la silueta deseada!"
      />
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "InspirePage",
};
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
