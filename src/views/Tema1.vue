<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alcance de pruebas

    p.mb-5 Primero, es necesario definir qué es una prueba de #[i software] y cuál es su alcance. Observe el siguiente video para adentrarse en estas preguntas.

    figure(data-aos="zoom-out").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p En una prueba de <em>software</em> se buscan varios objetivos.

    p.mb-5 A continuación, se presenta cada uno de los objetivos. 

    .fondo-1.p-5.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_2.svg' alt='AvatarTop')
          p.text-center Conocer la calidad de los productos, no solo de los productos finales, también, de los productos intermedios que se van obteniendo en cada <em>Sprint</em>, o avance, según la metodología de desarrollo empleada.

        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_3.svg' alt='AvatarTop')
          p.text-center Evitar el pago de un producto que no cumpla con criterios de calidad mínimos. Esto debe estar pactado desde el inicio del proyecto en los acuerdos de nivel de servicio <em>(SLA)</em> registrados.

        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_4.svg' alt='AvatarTop')
          p.text-center Disminuir el evento de soporte excesivo, es decir, que al entregarse el producto, este, constantemente, de soporte a los usuarios por fallas o malos funcionamientos. Las pruebas, precisamente, sirven para minimizar los riesgos y los eventos de falla cuando se pasa a producción.

        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_5.svg' alt='AvatarTop')
          p.text-center Tener un registro completo y bien documentado de las fallas, lo que permite un continuo mejoramiento en el proceso, además de conocer, de antemano, cómo solucionar el problema presentado.

    p.mb-5 Al hablar de condiciones y criterios de finalización de las pruebas, se refiere a aquellos tópicos, o requerimientos establecidos en las pruebas, que, al cumplirse, ayuden a tomar la decisión de finalizar las pruebas.
    p Es importante tener presente los siguientes conceptos. 

    .fondo-1.p-5.mb-5
      .row(data-aos="zoom-in")
        .col-lg-8.mb-4.mb-md-0
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Fallas")
              p Varias falencias o imprevistos pueden detenerse al encontrar todas las fallas. Así, es posible conocer cuáles serán todas las posibles fallas o cuándo se encuentran.
              p.mb-0 No obstante, la mayor parte del <em>software</em> es complejo y tiene un alcance de prueba enorme. No es imposible encontrar todos los defectos en el <em>software</em>, pero llevará una eternidad. Incluso, después de encontrar muchos errores en el <em>software</em>, nadie puede garantizar que esté libre de defectos, es decir, no existe una situación en la que se pueda afirmar que se han completado las pruebas, que se han encontrado todos los defectos en el <em>software</em>, o que no tenga más errores.
            div(titulo="Propósito de las pruebas")
              p El propósito de las pruebas no es encontrar todos y cada uno de los defectos del <em>software</em>, su intención es demostrar que el programa funciona según lo previsto, bien al romperlo, o al encontrar una desviación entre su comportamiento actual y el comportamiento esperado.
              p.mb-0 Hay defectos ilimitados en el <em>software</em> y, por tanto, no es práctico probarlo hasta que se encuentren todos los defectos, aunque nunca se puede saber cuál es el último. La verdad es que no se puede depender de encontrar todos los defectos en el <em>software</em> para concluir las pruebas.

            div(titulo="Ciclos de pruebas")
              p Los ciclos de pruebas continuarán hasta que se tome una decisión sobre cuándo y dónde detenerse. Sin embargo, es complicado tomar la decisión de dejar de realizar pruebas, o de definir si detenerse cuando se encuentran todos los defectos es el criterio para pararlas pruebas, o sobre qué otra base se debe definir. El enfoque más común para detenerse es cuando se agota el tiempo o el presupuesto, o cuando se ejecutan todos los escenarios de prueba.
              p.mb-0 Así, se deben tener criterios de salida para saber cuándo detener las pruebas, pero ¿cuáles serán los factores importantes que se deben tener en cuenta para concluir las pruebas? Esta decisión se puede tomar, principalmente, por tiempo, presupuesto o porque ya se cumplió el alcance de las pruebas.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema_1/img_6.png', alt='Texto que describa la imagen')






      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
