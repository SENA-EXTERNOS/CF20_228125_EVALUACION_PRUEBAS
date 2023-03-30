<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Aprendiz, bienvenido a este componente formativo donde, a continuación, aprenderá sobre las pruebas, tanto sus criterios de aceptación y finalización, como también algunos conceptos claves sobre tipos y clasificación. Este material, le permitirá obtener un entendimiento global sobre cómo manejar esta temática, en un proyecto de #[i software.]

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure(data-aos="zoom-out")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9z4aCRYC4N8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
