import { TitlePages, Inscripcion } from '../../../.nuxt/components';
<template>
  <v-container>
    <v-row justify="center">
       <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />

        <v-col cols="12">


  <v-card class="mt-10 pa-5" color="article">
                    <v-row class="mt-5" v-for="(e, index) in page.presentacion" :key="index">
                        <v-col align="center" justify="center">
                            <v-card-title align-self="center" class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.titulo }}</div>
                            </v-card-title>

                        </v-col>
                        
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="9" sm="12" align-self="center">

                            <p align="center" class="text-justify">
                                {{ e.texto }}
                            </p>
                            <p align="center" class="text-h5">
                                {{ e.texto2 }}
                            </p>

                        </v-col>

                    </v-row>

                </v-card>

      </v-col>

   

      <Inscripcion />


      <v-col cols="12">
        <v-card border elevation="2" rounded="xl" class="mt-8">
          <v-card-title class="text-center pt-8">
            <div class="text-h4 font-weight-bold">Integrantes de la Red</div>
          </v-card-title>
          
          <v-card-text class="pa-8">
            <v-timeline side="end" align="start">
              <v-timeline-item
                v-for="(i, index) in integrantesRed"
                :key="index"
                :dot-color="index % 2 === 0 ? 'pink-darken-1' : 'pink-lighten-2'"
                size="small"
              >
                <v-card class="pa-2" variant="" :color="index % 2 === 0 ? '' : ''">
                  <div class="text-subtitle-1 ">{{ i }}</div>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-10 text-center">
        <p class="text-h4 mb-6 font-weight-black">ANTEPROYECTO:</p>
        <v-hover v-slot="{ isHovering, props }">
          <v-card 
            v-bind="props" 
            :elevation="isHovering ? 12 : 2" 
            class="mx-auto transition-swing"
            max-width="900"
            rounded="xl"
            :href="`/cpc/${anteproyecto}`"
          >
            <v-img src="/img/plan.jpg" cover></v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Usamos script setup para Nuxt 4
const page = {
  color: 'pink',
  title: 'Red Ciudadana',
  icon: 'mdi-webhook',
 presentacion: [{
                    titulo: 'Objetivo',
                    texto: 'De conformidad con la Ley del Sistema Anticorrupción de Coahuila, una de las principales atribuciones del CPC es la formación e impulso de la Red de Participación Ciudadana del Estado. En seguimiento a dicho mandato, en el mes abril de 2021, se presentó en el seno de dicho órgano colegiado un * ANTEPROYECTO encaminado a iniciar los esfuerzos de la formación de la Red.'
                },
                {
                    titulo: '',
                    texto: 'Con la intención de establecer claramente el “por qué”, “para qué” y “cómo” de la Red de Participación Ciudadana, durante los meses de mayo a agosto de 2021 se convocó a un conjunto de asociaciones, universidades, colegios y cámaras a realizar ejercicios participativos que permitieran formar en conjunto las primeras * LÍNEAS ESTRATÉGICAS de la Red.'
                },
                {
                    titulo: 'Misión',
                    texto: 'Ser un instrumento de participación que facilite involucrar a la ciudadanía en los asuntos de interés público, al impulsar proyectos que permitan reforzar las acciones de combate y prevención de la corrupción'
                },
                {
                    titulo: 'Visión',
                    texto: 'Ser una red ciudadana reconocida por su capacidad para incidir en las decisiones sobre asuntos públicos conservando su carácter ciudadano, apartidista y libre de intereses ajenos a su propósito'
                },
                {
                    titulo: '',
                    texto2: 'Esta es tu red: Ciudadana y Ciudadano Coahuilense, bienvenida, bienvenido.'
                },



                ]
};

const anteproyecto = 'lineas-estrategicas.pdf';


const integrantesRed = [
  'ANADE LAGUNA', 'ASOCIACIÓN CÍVICA DE LA LAGUNA', 'CANACINTRA COAHUILA SURESTE',
  'CANACINTRA TORREÓN', 'CANACO SALTILLO', 'CANACO TORREÓN',
  'CENTRO DE ATENCIÓN PARA LAS MUJERES', 'CENTRO DE ESTUDIOS SUPERIORES EN GESTIÓN PÚBLICA',
  'CIUDADANOS CONSTRUYENDO UN MEJOR GOBIERNO A.C.', 'COLEGIO DE ARQUITECTOS DE LA COMARCA LAGUNERA',
  'COLEGIO DE CONTADORES PÚBLICOS DE SALTILLO', 'CONSEJO CÍVICO DE LAS INSTITUCIONES LAGUNA',
  'COPARMEX COMISIÓN DE DEMOCRACIA', 'COPARMEX LAGUNA', 'COPARMEX MUJERES',
  'EL PODER DE UNO A.C.', 'FUNDACIÓN ELEGEBETE MAS A.C.', 'FUNDACIÓN MERCED',
  'INSTITUTO MEXICANO DE EJECUTIVOS DE FINANZAS', 'JÓVENES LÍDERES DE LA LAGUNA',
  'KAENA MUJERES CON VALOR', 'KYBERNUS COAHUILA', 'PARTICIPACIÓN CIUDADANA 29 LAGUNA A.C.',
  'UNIVERSIDAD AMERICANA DEL NORESTE', 'UNIVERSIDAD AUTÓNOMA DE LA LAGUNA',
  'UNIVERSIDAD CAROLINA', 'UNIVERSIDAD IBEROAMERICANA CENTRO DE EXTENSIÓN SALTILLO',
  'UNIVERSIDAD DEL VALLE DE MÉXICO CAMPUS SALTILLO'
];
</script>