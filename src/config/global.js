export default {
  global: {
    componenteFormativo: 'Evaluación de pruebas',
    descripcionCurso:
      'Se abordarán tanto los temas relacionados con pruebas, sus criterios de aceptación y finalización, como algunos conceptos claves, por ejemplo, tipos y clasificación. Dada su importancia en el desarrollo de <em>software</em>, el componente permitirá un entendimiento global de cómo poder manejar la temática en un proyecto de <em>software</em>. Igualmente, se enfatiza en la necesidad de que, antes de lanzar un producto, se deben cumplir estándares de calidad que garanticen un correcto funcionamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Alcance de pruebas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación de programas mediante pruebas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Alcance de pruebas',
      referencia:
        'Quality-Stream. (2021). <em>Tipos y Niveles de Pruebas de Software</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hSxXuRxA9mo',
    },
    {
      tema: 'Alcance de pruebas',
      referencia:
        'Quality-Stream. (2021). <em>Cómo crear un Plan de Pruebas de Software – Norma ISO 29119</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0anZpU5W0Z8',
    },
    {
      tema: 'Evaluación de programas mediante pruebas',
      referencia:
        'OpenWebinars. (2019). <em>Tipos de Pruebas de Software</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dJTcfuSMwFE',
    },
    {
      tema: 'Evaluación de programas mediante pruebas',
      referencia:
        'Quality-Stream. (2021). <em>Cómo reportar defectos – Paso a paso</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kYeiqPbG5Vg',
    },
  ],
  glosario: [
    {
      termino: '<em>Block</em>',
      significado:
        'indica que los elementos estarán organizados en una línea vertical uno abajo del otro. De esa forma los interpreta el navegador.',
    },
    {
      termino: '<em>CSS</em>',
      significado:
        'siglas en inglés que, en español, significan hoja de estilos en cascada. Complementa las páginas web dando estilo y forma.',
    },
    {
      termino: '<em>Inline</em>',
      significado:
        'indica que los elementos estarán organizados en una línea horizontal uno al lado del otro. De esa forma los interpreta el navegador.',
    },
    {
      termino: 'Parámetro',
      significado: 'especifica el tipo de dato que recibirá un método.',
    },
    {
      termino: 'Pruebas de aceptación',
      significado:
        'se enfocan en la aceptación de los criterios previstos en un contrato de desarrollo de <em>software</em> acordado, previamente, entre la empresa de <em>software</em> y el cliente.',
    },
    {
      termino: 'Pruebas de componentes',
      significado:
        'tienen por objeto localizar defectos y comprobar el funcionamiento de módulos <em>software</em>, programas, objetos, clases, etc., que puedan probarse por separado.',
    },
    {
      termino: 'Pruebas de integración',
      significado:
        'se encargan de probar las interfaces entre los componentes o módulos.',
    },
    {
      termino: 'Pruebas de <em>software</em>',
      significado:
        'se refiere al proceso de evaluar y verificar que un producto, o aplicación de <em>software</em>, realiza lo que se supone que debe hacer.',
    },
    {
      termino: '<em>Responsive</em>',
      significado:
        'propiedad que indica que la página se adapta a todas las pantallas de los diferentes dispositivos donde se ejecute.',
    },
    {
      termino: '<em>Testers</em>',
      significado: 'encargados de probar los <em>software</em>.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
    {
      referencia:
        'International Standard. (2015). <em>ISO/IEC/IEEE24765:2010 Systems and software engineering – Vocabulary</em>.',
      link: 'https://www.cse.msu.edu/~cse435/Handouts/Standards/IEEE24765.pdf',
    },

    {
      referencia:
        'Manrique, J. (s.f.). <em>Pruebas de Software</em>. Cibertec.',
      link: 'https://www.academia.edu/8813345/Pruebas_de_Software',
    },

    {
      referencia:
        'Zuluaga, L. & Bedoya, Y. (2018). <em>Desarrollo de un manual sobre pruebas de software durante el ciclo de desarrollo e implementación</em> [Tesis de pregrado, Universidad Tecnológica de Pereira]. Repositorio Institucional UTP.',
      link:
        'https://repositorio.utp.edu.co/server/api/core/bitstreams/0e705442-9ab0-41a3-aa02-80c241bbf9a3/content',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
