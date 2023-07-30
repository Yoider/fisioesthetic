<template>
  <v-row justify="center" align="center">
    <!-- <v-col cols="12" sm="8" md="6"> -->
    <v-col>
      <v-col class="d-flex justify-center align-center">
        <RowIcons />
      </v-col>
      <v-row class="d-flex justify-center align-center">
        <Card
          color1="#ff00f98c"
          color2="#00bfffcf"
          :urlImg="require('@/static/cardsInfoPage/masaje.jpg')"
          cardText="masaje relajante"
        />
        <CardDesc
          color1="#ff00f98c"
          color2="#00bfffcf"
          cardTitle="siente el alivio y la belleza"
          cardText="Sumérgete
        en un oasis de relajación absoluta con nuestro exquisito 'Masaje
        Relajante'. Diseñado para calmar tus sentidos y liberar las tensiones
        acumuladas, este tratamiento te transportará a un estado de serenidad
        profunda. Utilizamos técnicas especializadas de masaje, combinando
        movimientos suaves y fluidos con una presión adecuada para aliviar las
        molestias musculares y promover una relajación profunda."
        />
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <Card
          color1="#ff00f98c"
          color2="#00bfffcf"
          :urlImg="require('@/static/cardsInfoPage/drenaje.jpg')"
          cardText="drenajes linfáticos"
        />
        <CardDesc
          color1="#ff00f98c"
          color2="#00bfffcf"
          cardTitle="drenajes linfáticos"
          cardText="¡Descubre el poder del drenaje linfático y revitaliza tu cuerpo desde
          adentro! En nuestro centro de fisioterapia y estética, te ofrecemos
          tratamientos especializados en drenajes linfáticos, diseñados para
          liberar tu sistema linfático y brindarte una sensación de ligereza y
          bienestar incomparables. Se utiliza técnicas para estimular el flujo
          linfático y eliminar las toxinas acumuladas en tu cuerpo. Mediante
          movimientos suaves y rítmicos, desbloqueamos los ganglios linfáticos y
          promovemos la eliminación de líquidos retenidos, reduciendo la
          hinchazón y la celulitis."
        />
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <Card
          color1="#ff00f98c"
          color2="#00bfffcf"
          :urlImg="require('@/static/cardsInfoPage/depilacion.jpeg')"
          cardText="depilación laser"
        />
        <CardDesc
          color1="#ff00f98c"
          color2="#00bfffcf"
          cardTitle="depilación laser"
          cardText="¡Dile adiós al vello no deseado de forma definitiva y descubre la
          libertad de una piel suave y sin preocupaciones con nuestra depilación
          láser de última generación! En nuestro centro de estética, ofrecemos
          un revolucionario tratamiento de depilación láser que utiliza
          tecnología de vanguardia para brindarte resultados excepcionales.
          Olvídate de los métodos tradicionales de depilación, como la cera o la
          maquinilla de afeitar, y déjate cautivar por los beneficios duraderos
          de la depilación láser."
        />
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <Card
          color1="#ff00f98c"
          color2="#00bfffcf"
          :urlImg="require('@/static/cardsInfoPage/tratamiento.jpg')"
          cardText="tratamientos faciales"
        />
        <CardDesc
          color1="#ff00f98c"
          color2="#00bfffcf"
          cardTitle="tratamientos faciales"
          cardText="¡Despierta la belleza que hay en ti con nuestro exclusivo Tratamiento
          Facial! Permítenos cuidar de tu piel de manera personalizada y
          brindarte una experiencia única y rejuvenecedora. Nos dedicamos a
          proporcionarte resultados visibles y duraderos. Comenzaremos con una
          evaluación minuciosa de tu tipo de piel y necesidades específicas,
          para diseñar un tratamiento facial a medida que se adapte
          perfectamente a ti."
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
