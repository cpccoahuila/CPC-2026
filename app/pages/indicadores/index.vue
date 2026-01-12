<template>
  <v-container class="min-height-vh pb-10">
    <v-row justify="center">
      <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
    </v-row>

    <v-row class="mt-8">
      <v-col 
        v-for="(item, index) in indicadores" 
        :key="index"
        cols="12" 
        sm="6" 
        md="4" 
        lg="3"
      >
        <v-card
          class="h-100 d-flex flex-column hover-card"
          elevation="2"
          rounded="lg"
          variant="flat"
          border
        >
          <v-card-item class="bg-grey-lighten-4">
            <template v-slot:prepend>
              <v-icon color="green-darken-2" size="large">mdi-file-pdf-box</v-icon>
            </template>
            <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">
              {{ item.titulo }}
            </v-card-title>
          </v-card-item>

          <v-divider></v-divider>

          <v-card-text class="flex-grow-1">
            <p class="text-body-2 text-grey-darken-1">
              {{ item.texto || 'Consulta el informe detallado correspondiente al periodo 2023.' }}
            </p>
          </v-card-text>

          <v-card-actions class="pa-4 pt-0">
            <v-btn
              block
              color="green-darken-1"
              variant="tonal"
              prepend-icon="mdi-eye-outline"
              :href="'/indicadores' + item.documento"
              target="_blank"
              class="text-none"
            >
              {{ item.link }} Documento
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Nota: En Nuxt 3/4 es mejor usar <script setup>
const page = {
  color: 'green-darken-2',
  title: 'Indicadores y Estadísticas',
  icon: 'mdi-chart-box-outline'
};

const indicadores = [
  {
    titulo: "Corporación Latinobarómetro, Informe 2023",
    texto: "Estudio de opinión pública que aplica anualmente alrededor de 20.000 entrevistas en 18 países de América Latina.",
    link: "Ver",
    documento: "/latinobarometro-informe-2023.pdf"
  },
  {
    titulo: "Transparencia Internacional",
    texto: "Índice de Percepción de la Corrupción y niveles de integridad en el sector público.",
    link: "Ver",
    documento: "/transparencia-internacional.pdf"
  },
  {
    titulo: "Coahuila ENVIPE 2023",
    texto: "Encuesta Nacional de Victimización y Percepción sobre Seguridad Pública (INEGI).",
    link: "Ver",
    documento: "/coahuila-envipe-2023.pdf"
  },
  {
    titulo: "IMCO 2023",
    texto: "Índice de Competitividad Estatal: análisis de la capacidad de las entidades para generar talento e inversión.",
    link: "Ver",
    documento: "/imco-2023.pdf"
  }
];
</script>

<style scoped>
.min-height-vh {
  min-height: 70vh;
}

/* Efecto sutil de elevación */
.hover-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  border-color: #2e7d32 !important; /* green-darken-3 */
}

/* Asegura que los títulos no se corten de forma fea */
.text-wrap {
  white-space: normal !important;
  line-height: 1.2;
}
</style>