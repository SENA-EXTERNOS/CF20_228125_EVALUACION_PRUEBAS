<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evaluación de programas mediante pruebas
    .bg_8
      .row.mb-5.d-none.d-lg-block
        .col-lg-12.d-none.d-lg-block
          .bloque-texto-g.color-secundario.p-3.p-sm-3.p-md-4.mb-5
            .bloque-texto-g__img.m-left(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              strong 
                p <strong>Antes de continuar, es importante recordar qué es una prueba de <em>software</em></strong>.
                <br>
                <br>
                ul.lista-ul--color.mb-0
                  li 
                    span.lista-ul__vineta
                    | Es una actividad realizada para evaluar la calidad del producto y mejorarla, identificando sus defectos y problemas. 
                  li 
                    span.lista-ul__vineta
                    | Es la verificación dinámica del comportamiento de un programa contra el comportamiento esperado, empleando un conjunto finito de casos de prueba que han sido seleccionados de manera adecuada.

    .row.justify-content-center.bg_9.d-block.d-lg-none(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-3.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            strong 
              p <strong>Antes de continuar, es importante recordar qué es una prueba de <em>software</em></strong>.
              <br>
              <br>
              ul.lista-ul--color.mb-0
                li 
                  span.lista-ul__vineta
                  | Es una actividad realizada para evaluar la calidad del producto y mejorarla, identificando sus defectos y problemas. 
                li 
                  span.lista-ul__vineta
                  | Es la verificación dinámica del comportamiento de un programa contra el comportamiento esperado, empleando un conjunto finito de casos de prueba que han sido seleccionados de manera adecuada.

    p.mb-5 Ahora, según la norma ISO/IEC/IEEE 24765:2010, se debe tener en cuenta lo siguiente:

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema_2/img_2.svg', alt='Texto que describa la imagen')
              
            h2.text-center Verificación
            p.text-center Proceso de evaluación de un sistema o componente para determinar si el producto, de una determinada fase de desarrollo, satisface las condiciones impuestas al inicio de la fase.

          
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema_2/img_3.svg', alt='Texto que describa la imagen')
              
            h2.text-center Validación
            p.text-center Proceso de evaluación de un sistema o componente, durante o al final del proceso de desarrollo, para determinar cuándo se satisfacen los requerimientos especificados.

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Siguiendo las anteriores definiciones, reflexione sobre la siguiente pregunta:
          p.mb-0 ¿Qué es un proceso de pruebas y para qué implementarlo?

    p Muchas empresas de desarrollo de <em>software</em> tienen una tendencia a pensar que el proceso de las pruebas de <em>software</em> se debe realizar en la última etapa para consolidar la calidad de su producto. Esa tendencia debe dejarse atrás, las pruebas tienen que estar alineadas al proceso de desarrollo y ser implementadas en diferentes fases.

    p.mb-5 Resulta clave recordar la importancia de realizar un proceso de pruebas que incluya:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_4.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .p-4
            p.text-center Revisión de los requerimientos.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_5.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .p-4
            p.text-center Realización de análisis documentales.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_6.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .py-4.px-5
            p.text-center Identificación de defectos.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_7.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .p-4
            p.text-center Pruebas funcionales y no funcionales.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_8.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .p-4
            p.text-center Pruebas dinámicas y estáticas.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_9.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .py-4.px-5
            p.text-center Pruebas de integración.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_10.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .p-4
            p.text-center Informes de confianza en el nivel de calidad.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_11.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .p-4
            p.text-center Información para la toma de decisiones.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_12.svg' alt='AvatarTop')
        .tarjeta.bg_1
          .py-4.px-5
            p.text-center Planes de mejora continua.
    .bg_8
      .bloque-texto-g.color-secundario.p-3.p-sm-3.p-md-4.mb-5
        .bloque-texto-g__img.m-left(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_13.png')})`}"
        )
        .bloque-texto-g__texto.p-4.text-small
          p Las actividades de un proceso de pruebas deben cumplir con las siguientes características: planificar y controlar, seleccionar las condiciones de la prueba, diseñar y ejecutar casos de prueba, comprobar los resultados, evaluar los criterios de resultados, elaborar informes del proceso, y de la aplicación objeto de las pruebas, incluyendo bitácoras de experiencia. 
          <br>
          <br>
          p Es importante que, en el proceso, se elabore un plan y una matriz de pruebas con las cuales, al momento de ejecutarlas, se pueda dictaminar si el caso funciona adecuadamente, estableciéndolo, así, una ‘conformidad’. En el evento que un caso de prueba, al ejecutar el producto <em>software</em>, no funcione de forma adecuada, se relacionará como una ‘no conformidad’. 

    .fondo-2.p-5.mb-5
      .row.align-items-center
        .col-lg-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema_2/img_15.png', alt='Texto que describa la imagen')
        .col-lg-8
          p A estas métricas se le define un nivel, o puntuación, según la clasificación, las técnicas y la matriz utilizada. Las métricas ayudan a estimar los tiempos, esfuerzos y las asignaciones, además, determinan, también, los niveles de riesgo, lo que permite que el equipo de desarrollo ajuste los flujos de actividades y optimice los recursos y el talento de los equipos de desarrollo.
          p Siguiendo todo lo anterior, la implementación de un proceso de pruebas brinda las pautas tanto para definir objetivos, analizar y viabilizar los requerimientos, como para diseñar, detallar, programar, implementar y asegurar la calidad de un producto de desarrollo <em>software</em>.

    .fondo-3.p-5.mb-5
      p.mb-5 En los últimos años, se han propuesto una serie de principios que permiten establecer unas pautas comunes para que las empresas de desarrollo de <em>software</em> conozcan y se adapten a sus procesos de pruebas. Estos principios son:

      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img.img-a(src='@/assets/curso/temas/tema_2/img_17.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="50%" y="33%" numero="+")
          .h5.mb-2 Las pruebas demuestran la presencia de defectos
          p.mb-0 Las pruebas son herramientas que permiten identificar la presencia de defectos, sin embargo, no garantizan que no se encuentren defectos ocultos en el <em>software</em>, y, el hecho que no se identifiquen, no es evidencia de que el <em>software</em> esté totalmente correcto.

        .tarjeta.color-acento-contenido.p-3(x="58%" y="40%" numero="+")
          .h5.mb-2 Las pruebas exhaustivas no existen
          p.mb-0 Probar todo el aplicativo de extremo a extremo, con todas las entradas de datos y condiciones, es algo imposible. Así, en lugar de tratar de conseguir ese tipo de pruebas, se debe realizar un análisis de los riesgos para establecer prioridades y tomar decisiones adecuadas en la utilización del talento humano y de los recursos, centralizando los esfuerzos en las pruebas.

        .tarjeta.color-acento-contenido.p-3(x="59%" y="55%" numero="+")
          .h5.mb-2 Pruebas tempranas
          p.mb-0 Identificar los defectos en etapas tempranas ahorrará a la empresa todo tipo de recursos. Cuanto más rápido se identifiquen los defectos, más aumentará la eficiencia. 

        .tarjeta.color-acento-contenido.p-3(x="55%" y="67%" numero="+")
          .h5.mb-2 Agrupación de defectos
          p.mb-0 Las pruebas deben concentrarse de manera proporcional. Por lo general, la mayoría de los fallos operativos, se concentran en un número reducido de módulos.

        .tarjeta.color-acento-contenido.p-3(x="45%" y="67%" numero="+")
          .h5.mb-2 Paradoja del pesticida
          p.mb-0 Si se repite la misma prueba una y otra vez, la misma serie de casos de prueba dejará de encontrar nuevos defectos. Es importante tanto revisar los casos de prueba periódicamente como escribir nuevos casos de prueba con el objetivo de encontrar más defectos.

        .tarjeta.color-acento-contenido.p-3(x="40%" y="55%" numero="+")
          .h5.mb-2 Las pruebas dependen del contexto
          p.mb-0 Las pruebas dependerán del contexto en el cual se ejecuten, por ejemplo, aquella prueba creada para un sistema crítico de seguridad, como el financiero, requerirá un mayor número de pruebas en comparación con otras de un nivel de complejidad menor, o menos críticos.

        .tarjeta.color-acento-contenido.p-3(x="41%" y="40%" numero="+")
          .h5.mb-2 Falacia de ausencia de errores
          p.mb-0 La detección y corrección de los defectos no sirven de nada si el sistema no cumple con los requerimientos o con las necesidades del usuario. Estos principios, nombrados en diferentes textos y artículos, son una guía para tener en cuenta todo el proceso de pruebas de calidad de <em>software</em>. El equipo de trabajo debe procurar que se cumplan y debe tenerlos presentes en cada actuación y ejecución de herramientas, o técnicas, para garantizar la calidad de un producto <em>software</em>.

    .fondo-4.p-5.mb-5
      p Por otra parte, existe un modelo V para la ejecución de pruebas de <em>software</em>, el cual muestra la serie de pruebas que se pueden desarrollar.
      p.mb-5 Entre esas pruebas se encuentran:

      .row.align-items-center
        .col-lg-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema_2/img_19.png', alt='Texto que describa la imagen')
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Pruebas de componentes")
              p.mb-0 Tienen por objeto localizar defectos y comprobar el funcionamiento de módulos <em>software</em>, programas, objetos, clases, etc., que puedan probarse por separado, es decir, de aquellos elementos a los que pueda realizarse una comprobación independiente al resto del sistema en función del contexto. El diseño de casos de pruebas es requisito esencial de los componentes, del diseño de detalle en los casos de uso y del código del módulo o del componente.
            div(titulo="Pruebas de integración")
              p Se encargan de probar las interfaces entre los componentes o módulos, por ejemplo, el componente de validación de usuario con el sistema operativo, el sistema de archivos en integración con el hardware, etc. En el diseño de casos de prueba, es el diseño de <em>software</em>, arquitectura, flujos de trabajo, casos de uso y se deben tener en cuenta los objetos de prueba típicos: 

              p.mb-0 1.  Base de datos de subsistemas.
              p.mb-0 2.  Infraestructura.
              p.mb-0 3.  Interfaces.
              p.mb-0 4.  Configuración del sistema.
              p.mb-0 5.  Datos de configuración.

            div(titulo="Pruebas de sistema")
              p Hacen referencia al sistema como un todo, elaborando un plan de pruebas de forma clara y bien estructurada. En el diseño de casos de prueba son los requisitos del usuario, requisitos del sistema, casos de uso, procesos de negocio, informes de análisis de riesgo, y se deben tener en cuenta los objetos de prueba típicos: 

              p.mb-0 1.  Procesos de negocio en sistema completamente integrado.
              p.mb-0 2.  Procesos operativos y de mantenimiento.
              p.mb-0 3.  Procedimientos de usuario.
              p.mb-0 4.  Formularios.
              p.mb-0 5.  Informes.
              p.mb-0 6.  Datos de configuración.

            div(titulo="Pruebas de aceptación")
              p Se enfocan en la aceptación de los criterios previstos en un contrato de desarrollo de <em>software</em>, acordado entre la empresa de <em>software</em> y el cliente. 

            div(titulo="Pruebas de <em>backup</em>/restauración")
              p Se incluye la recuperación de desastres, la gestión de usuarios, la tarea de mantenimiento, la carga de datos, las tareas de migración, las comprobaciones periódicas de vulnerabilidades de seguridad, las pruebas de aceptación contractual y normativa y las pruebas alfa y beta. Es importante, para aplicar el modelo V, tener claro, por parte de los probadores o tester, las definiciones de equivocación, defecto o falta y falla. 

              p Siguiendo la norma ISO/ IEC/ IEEE 24765: 2010, estos conceptos se definen así: 

              ul.lista-ul.mb-0
                li 
                  span.lista-ul__vineta Equivocación <em>(mistake)</em>: acción del ser humano que produce un resultado incorrecto. 
                li 
                  span.lista-ul__vineta Defecto o falta <em>(fault)</em>: paso, proceso o definición de dato incorrecto en un programa de computadora. El resultado de una equivocación origina, potencialmente, una falla. 
                li 
                  span.lista-ul__vineta Falla <em>(failure)</em>: resultado incorrecto.

    .fondo-3.p-5.mb-5
      p Las pruebas tienen una clasificación. 

      p.mb-5 A continuación, se presenta cada una de las clases.

      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img.img-a(src='@/assets/curso/temas/tema_2/img_20.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="13%" y="61%" numero="+")
          .h5.mb-2 Pruebas funcionales
          p.mb-0 Pueden llevarse a cabo en todos los niveles de prueba, se basan en funciones, prestaciones e interoperabilidad con sistemas específicos. Es importante mencionar que se orientan, en el comportamiento externo de un producto o aplicativo <em>software</em>, a las pruebas de caja negra.
        .tarjeta.color-acento-contenido.p-3(x="44%" y="61%" numero="+")
          .h5.mb-2 Pruebas no funcionales
          p.mb-0 Se refiere a las pruebas necesarias para medir las características de los sistemas y <em>software</em>s que puedan cuantificarse según una escala variable. Se debe tener en cuenta que se orientan hacia el comportamiento externo del <em>software</em> y, en la mayoría de los casos, utilizan técnicas de diseño de pruebas de caja negra.
        .tarjeta.color-acento-contenido.p-3(x="76%" y="61%" numero="+")
          .h5.mb-2 Pruebas estructurales
          p Pueden realizarse en todos los niveles de prueba. Son las más idóneas, después de las técnicas basadas en la especificación, para medir la exhaustividad de las pruebas a través de la evaluación de la cobertura de un tipo de estructura. 
          p.mb-0 Para todo proceso de pruebas, se debe tener clara la diferencia al clasificar los tipos de pruebas, esto contribuye a un análisis sólido del plan de pruebas y a estructurar los casos de pruebas y la creación de la respectiva matriz. Así mismo, se tributa, además, a la eficiencia en el proceso de calidad del producto <em>software</em>.

    .fondo-2.p-5.mb-5
      h3.mb-5 Escenario de prueba
      .row.align-items-center
        .col-lg-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema_2/img_21.png', alt='Texto que describa la imagen')
        .col-lg-8
          p Ahora, para entender cómo se realiza una evaluación de un <em>software</em> o un programa mediante pruebas, se va a plantear, a continuación, un escenario de pruebas hipotético.
          p Aprendiz, es la única persona encargada de hacer las pruebas. Se va a probar un módulo de <em>software</em> y se tiene asignado un presupuesto para cumplir con dicho proceso. Los plazos que se tienen para el periodo de pruebas del proyecto son cuatro semanas, un mes, y los escenarios totales de prueba son 200. 


    h4.mb-5 Escenario 1:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4.fondo-5(titulo="Semana 1")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema_2/img_22.png', alt='Texto que describa la imagen')
        
          .col-md-6
            p En el desarrollo se detecta la falencia <em>showstopper/severity</em> 1 el día 1. Las pruebas se detienen por 3 días. De esta manera, ninguna otra prueba se puede ejecutar porque se encontró un error de gravedad 1, que debe solucionarse antes de continuar. 
            p.mb-0 Después de perder 3 días, el bloqueador se resuelve y continúa con su ejecución. Al terminar la semana, se completan 20 escenarios de pruebas con hitos importantes encontrados en los defectos con alta prioridad.

      .py-3.py-md-4.fondo-5(titulo="Semana 2")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema_2/img_24.png', alt='Texto que describa la imagen')
        
          .col-md-6
            p Continúa la prueba del módulo de <em>software</em> con más énfasis en el hallazgo de defectos. Se encuentran algunos defectos más de ‘Severidad 1’, ‘Severidad 2’ y ‘Severidad 3’ durante la segunda semana. Al final de la semana, se pueden cubrir 70 escenarios.  

      .py-3.py-md-4.fondo-5(titulo="Semana 3")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema_2/img_25.png', alt='Texto que describa la imagen')
        
          .col-md-6
            p Al comienzo de la tercera semana, todos los defectos de alta prioridad ya se han resuelto, por tanto, aparte de los escenarios pendientes, se deben probar todos los ajustes realizados que se han podido modificar gracias a las pruebas.
            p Continuando con un buen progreso, se cubren 120 escenarios con defectos adicionales. En este momento, todos los defectos de alta prioridad ya se encuentran y se notifican, por lo que, ahora, solo le quedan defectos de ‘Severidad 3’ por encontrar.

      .py-3.py-md-4.fondo-5(titulo="Semana 4")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema_2/img_26.png', alt='Texto que describa la imagen')
        
          .col-md-6
            p En esta semana, es necesario volver a probar la mayoría de los defectos abiertos y los 80 escenarios restantes. Con esto, al final de la semana 4, se pueden completar hasta 180 escenarios con todos los defectos de prioridad alta y media, corregidos y vueltos a probar.

    p.mb-5 La siguiente tabla presenta las actividades de prueba realizadas y el resultado final por semana del escenario 1.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-up")
          h5 Figura 1. 
          | #[i Actividades de prueba y resultado final escenario 1]
        img(src='@/assets/curso/temas/tema_2/img_27.svg', alt='Texto que describa la imagen')

    .row.align-items-evenly.justify-content-center.d-flex.mb-5(data-aos="zoom-in-left")
      .col-lg-5.d-flex.d-none.d-lg-block
        .bg_4.p-5
          img.img-b(src='@/assets/curso/temas/tema_2/img_28.png', alt='Texto que describa la imagen')
      .col-lg-7.d-flex.d-none.d-lg-block
        .bg_2.p-4
          .bg_3.p-4.mb-4.mgr_left.text-white
            p.mb-0 ¿Se debería finalizar o parar en este punto? En estos momentos, se han agotado varios factores como el tiempo de prueba, los informes de defectos y sus soluciones. Sin embargo, ¿es seguro terminar las pruebas? Realmente no, dadas las siguientes razones:
          ul.lista-ul--color.mb-0
            li 
              span.lista-ul__vineta
              | Los escenarios no se ejecutan por completo.
            li 
              span.lista-ul__vineta
              | Pocos flujos que, ni siquiera, se prueban una vez.
            li 
              span.lista-ul__vineta
              | Todos los escenarios cubiertos se ejecutan una sola vez.
            li 
              span.lista-ul__vineta
              p.mb-0 El <em>software</em> todavía tiene defectos.
            li 
              span.lista-ul__vineta
              | La regresión no está cubierta.

    .row.justify-content-center.d-block.d-lg-none(data-aos="zoom-in-left")
      .col-lg-12
        .row
          .col-lg-12.bg_2.p-5
            .bg_3.p-4.mb-3.text-white
              p ¿Se debería finalizar o parar en este punto? En estos momentos, se han agotado varios factores como el tiempo de prueba, los informes de defectos y sus soluciones. Sin embargo, ¿es seguro terminar las pruebas? Realmente no, dadas las siguientes razones:
            ul.lista-ul--color.mb-0
              li 
                span.lista-ul__vineta
                | Los escenarios no se ejecutan por completo.
              li 
                span.lista-ul__vineta
                | Pocos flujos que, ni siquiera, se prueban una vez.
              li 
                span.lista-ul__vineta
                | Todos los escenarios cubiertos se ejecutan una sola vez.
              li 
                span.lista-ul__vineta
                | El <em>software</em> todavía tiene defectos.
              li 
                span.lista-ul__vineta
                | La regresión no está cubierta.
        .bg_4.p-5
          img.img-a(src='@/assets/curso/temas/tema_2/img_28.png', alt='Texto que describa la imagen')

    h4.mb-5 Escenario 2:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4.fondo-6(titulo="Semana 1")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Encuentra un defecto de ‘Severidad 1’ el día 1. La prueba completa se bloquea durante 3 días. Por este motivo, no se podrá ejecutar ninguno de los escenarios hasta que se resuelva el defecto de gravedad 1. Luego de perder 3 días, el bloqueador se resuelve y continúa la ejecución.
            p Al final de la semana, se completan 20 escenarios con algunos defectos más. Esta semana sigue siendo la misma que el escenario 1.
          .col-md-4
            img(src='@/assets/curso/temas/tema_2/img_29.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.fondo-5(titulo="Semana 2")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Se encuentran algunos defectos más de ‘Severidad 1’, ‘Severidad 2’ y ‘Severidad 3’ durante la segunda semana. No obstante, el enfoque es cubrir más escenarios para suplir el retraso de la semana 1. Al final de la semana, se cubren 120 escenarios.
          .col-md-4
            img(src='@/assets/curso/temas/tema_2/img_30.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.fondo-5(titulo="Semana 3")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Al comienzo de la semana 3, se resuelven todos los defectos abiertos, por lo que, junto con la ejecución de los escenarios pendientes, se deben volver a probar todos los defectos que se encuentran en un depósito de prueba. Continuando con un buen progreso hasta el final de la semana, el número de escenarios completados se convierte en 200, con defectos adicionales. Ahora, solo debe informarse los defectos de ‘Severidad 2’ y ‘Severidad 3’.
          .col-md-4
            img(src='@/assets/curso/temas/tema_2/img_31.png', alt='Texto que describa la imagen')

    p.mb-5 La siguiente tabla presenta las actividades de prueba realizadas y el resultado final por semana del escenario 2.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-up")
          h5 Figura 2. 
          | #[i Actividades de prueba y resultado final escenario 2]
        img(src='@/assets/curso/temas/tema_2/img_32.svg', alt='Texto que describa la imagen')    

    .row.align-items-evenly.justify-content-center.d-flex.mb-5(data-aos="zoom-in-right")
      .col-lg-5.d-flex.d-none.d-lg-block
        .bg_6.p-5
          img.img-c(src='@/assets/curso/temas/tema_2/img_33.png', alt='Texto que describa la imagen')
      .col-lg-7.d-flex.d-none.d-lg-block
        .bg_3.p-4
          .bg_5.p-4.mb-4.mgr_left
            p.mb-0 
              strong Aprendiz, en este momento se debe preguntar, ¿en este punto se debe detener la prueba? Se cubrieron todos los escenarios en su totalidad, incluso, se cubrieron algunos defectos abiertos. No obstante, realmente no es viable detenerse debido a las siguientes razones:
          ul.lista-ul--color.mb-0
            li 
              span.lista-ul__vineta
              | Todos los escenarios se ejecutan solo una vez.
            li 
              span.lista-ul__vineta
              p.mb-0.text-white El <em>software</em> todavía tiene muchos defectos importantes.
            li 
              span.lista-ul__vineta
              | La regresión no está cubierta.


    .row.justify-content-center.d-block.d-lg-none(data-aos="zoom-in-left")
      .col-lg-12
        .row
          .col-lg-12.bg_3.p-5
            .bg_5.p-4.mb-3
              p.mb-0 strong Aprendiz, en este momento se debe preguntar, ¿en este punto se debe detener la prueba? Se cubrieron todos los escenarios en su totalidad, incluso, se cubrieron algunos defectos abiertos. No obstante, realmente no es viable detenerse debido a las siguientes razones:
            ul.lista-ul--color.mb-0
              li 
                span.lista-ul__vineta
                | Todos los escenarios se ejecutan solo una vez.
              li 
                span.lista-ul__vineta
                | El <em>software</em> todavía tiene muchos defectos importantes.
              li 
                span.lista-ul__vineta
                | La regresión no está cubierta.
        .bg_6.p-5
          img.img-a(src='@/assets/curso/temas/tema_2/img_33.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Se puede ver que la calidad se ve comprometida en ambos escenarios. El mejor enfoque sería encontrar un punto donde todos los factores del escenario 1 y el escenario 2 estén cubiertos, sin que la calidad se vea comprometida. Para lograrlo, se tendrán que definir ciertos criterios al inicio de las pruebas. Estos criterios se denominan criterios de finalización o de salida, siendo la respuesta a cuándo dejar de realizar pruebas.

    p.mb-5 Los criterios de finalización o de salida, son el conjunto de condiciones o actividades que se deben cumplir para concluir las pruebas. 

    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_2/img_34.svg' alt='AvatarTop')
          .tarjeta.bg_7
            .p-4
              p.text-center.mb-0 Se evalúan al final del ciclo de prueba y se definen en el plan de prueba. 

      .col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_2/img_35.svg' alt='AvatarTop')
          .tarjeta.bg_7
            .p-4
              p.text-center.mb-0 Definen cuántas pruebas son suficientes y cuándo se pueden declarar completas las actividades de prueba.

    p Idealmente, los criterios de salida se definen combinando varios factores y, por lo tanto, son únicos en todos los proyectos. Dependen de los requisitos de cada proyecto y, así, deben definirse durante la planificación de pruebas al inicio del proyecto. Los parámetros definidos en él deben cuantificarse tanto como sea posible.

    p.mb-5 A continuación, se presentan algunos consejos que se deben considerar al definir los criterios de salida en caso de pruebas funcionales o de un sistema que combine algunos o todos los factores, mientras se decide dónde dejar de probar según las necesidades de cada proyecto. 

    .fondo-4.p-5.mb-5
      p.mb-5 Es así que las pruebas se pueden detener cuando:

      .row.align-items-center
        .col-lg-8.mb-4.mb-md-0
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Requisitos")
              p.mb-0 Se alcanza el 100 % de cobertura de requisitos.
            div(titulo="Defectos")
              ul.lista-ul--color.mb-0
                li 
                  span.lista-ul__vineta
                  | Se alcanza el recuento de defectos definidos o deseados.
                li 
                  span.lista-ul__vineta
                  p.mb-0 Todos los defectos o bloqueadores de <em>showstopper</em> están corregidos y ningún defecto conocido crítico, con ‘Severidad 1’ está en estado abierto.
                li 
                  span.lista-ul__vineta
                  | Todos los defectos de alta prioridad se identifican y solucionan.
                li 
                  span.lista-ul__vineta
                  | La tasa de defectos cae por debajo de la tasa aceptable definida.
                li 
                  span.lista-ul__vineta
                  | Muy pocos defectos de prioridad media están abiertos y tienen una solución alternativa.
                li 
                  span.lista-ul__vineta
                  p.mb-0 Muy pocos defectos abiertos de baja prioridad no afectan el uso del <em>software</em>.
                li 
                  span.lista-ul__vineta
                  | Todos los defectos de alta prioridad se vuelven a probar, se cierran y los escenarios de regresión correspondientes se ejecutan con éxito.

            div(titulo="Cobertura de prueba")
              ul.lista-ul--color.mb-0
                li 
                  span.lista-ul__vineta
                  | La cobertura de la prueba debe alcanzarse en un 95%.
                li 
                  span.lista-ul__vineta
                  p La tasa de aprobación del caso de prueba debe ser del 95 %. Esto se puede calcular por fórmula: <b>(No total de TC aprobadas / Número total de TC) * 100.</b>
                li 
                  span.lista-ul__vineta
                  | Se pasan todos los casos de prueba críticos.
                li 
                  span.lista-ul__vineta
                  | 5% de los casos de prueba pueden fallar, pero los casos de prueba fallidos son de baja prioridad.
                li 
                  span.lista-ul__vineta
                  | Se logra una cobertura funcional completa.
                li 
                  span.lista-ul__vineta
                  | Todos los flujos principales, funcionales/comerciales, se ejecutan con éxito con varias entradas y funcionan bien.
            div(titulo="Plazos")
              p.mb-0 Se alcanza la fecha límite del proyecto o la fecha límite de finalización de la prueba.
        .col-lg-4
          img.img-a(src='@/assets/curso/temas/tema_2/img_36.png', alt='Texto que describa la imagen')
        

      .row.align-items-center
        .col-lg-4.mb-4.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_2/img_37.png', alt='Texto que describa la imagen')
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Documentos de prueba")
              p.mb-0 Todos los documentos de prueba, o entregables, se preparan, revisan y publican.
            div(titulo="Presupuesto")
              p.mb-0 El presupuesto de prueba completo está agotado.
            div(titulo="Reuniones <em>Go/No Go</em>")
              p.mb-0 Se ha realizado la reunión con las partes interesadas y se decide si el proyecto debe pasar a producción o no.

    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_38.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para concluir, es importante dejar un resumen o unos tips sobre la ejecución de pruebas y cuándo detenerse, para ello se plantearán algunas preguntas de respuesta SÍ - NO.
        <br>
        <br>
        p.mb-0 Si obtiene la mayoría de las respuestas como SI, significa que puede dejar de realizar la prueba en este punto. Si la mayoría de las respuestas son NO, significa que debe verificar lo que falta en las pruebas. Esto puede ayudar en encontrar un defecto de producción que se escapa. 

    .fondo-4.p-5.mb-5
      .row.mb-3
        .col-lg-7.mb-4.mb-md-0
          ul.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | ¿Se ejecutan todos los casos de prueba al menos una vez?
            li 
              i.fas.fa-angle-right
              | ¿La tasa de aprobación de casos de prueba es la definida?
            li 
              i.fas.fa-angle-right
              | ¿Se alcanza una cobertura de prueba completa?
            li 
              i.fas.fa-angle-right
              | ¿Se ejecutan todos los flujos funcionales/comerciales al menos una vez?
            li 
              i.fas.fa-angle-right
              | ¿Se alcanza el recuento de defectos decidido?
            li 
              i.fas.fa-angle-right
              | ¿Se corrigen y cierran todos los defectos importantes de alta prioridad?

        .col-lg-4(data-aos="flip-left")
          img.img-a(src='@/assets/curso/temas/tema_2/img_39.png', alt='Texto que describa la imagen')

      .row.mb-3
        .col-lg-4.mb-4.mb-md-0(data-aos="flip-right")
          img.img-a(src='@/assets/curso/temas/tema_2/img_40.png', alt='Texto que describa la imagen')
        .col-lg-7
          ul.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | ¿Se han vuelto a probar y se han cerrado todos los defectos?
            li 
              i.fas.fa-angle-right
              | ¿Se ha realizado una regresión para todos los defectos abiertos?
            li 
              i.fas.fa-angle-right
              | ¿Ha agotado el presupuesto de prueba?
            li 
              i.fas.fa-angle-right
              | ¿Ha llegado la hora de finalización de la prueba?
            li 
              i.fas.fa-angle-right
              | ¿Se revisan y publican todos los entregables de prueba?

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello, diríjase al menú principal, allí encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros recursos.



</template>

<script>
export default {
  name: 'Tema2',
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
