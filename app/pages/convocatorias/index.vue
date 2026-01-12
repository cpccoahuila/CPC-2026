<template>
  <v-container class="min-height-vh pb-12">
    <v-row justify="center">
      <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
    </v-row>

    <v-row justify="center" class="mt-6">
      <v-col cols="12" lg="10">
        <v-card elevation="3" rounded="xl" class="overflow-hidden">
          <v-sheet color="blue-grey-darken-3" class="pa-8 text-white text-center">
            <h1 class="text-h4 font-weight-bold mb-2">Proceso de Selección 2022</h1>
            <p class="text-subtitle-1">Terna para Candidatas a Titular de la Secretaría Técnica</p>
          </v-sheet>

          <v-card-text class="pa-6 pa-md-10">
            <v-row>
              <v-col cols="12" md="6">
                <div class="d-flex align-center mb-4">
                  <v-icon color="blue-grey" class="mr-2">mdi-folder-open</v-icon>
                  <h2 class="text-h6 font-weight-bold">Documentación</h2>
                </div>
                <v-list border rounded="lg">
                  <v-list-item :href="'/cpc/' + metodologia" target="_blank" prepend-icon="mdi-file-pdf-box" title="Metodología 2022" link></v-list-item>
                  <v-divider></v-divider>
                  <v-list-item :href="'/cpc/' + convocatoria" target="_blank" prepend-icon="mdi-file-pdf-box" title="Convocatoria 2022" link></v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" md="6">
                <div class="d-flex align-center mb-4">
                  <v-icon color="blue-grey" class="mr-2">mdi-download-box</v-icon>
                  <h2 class="text-h6 font-weight-bold">Formatos Descargables</h2>
                </div>
                <v-list border rounded="lg">
                  <v-list-item :href="'/cpc/' + acreditacion" prepend-icon="mdi-file-word" title="Acreditación de Experiencia" link></v-list-item>
                  <v-divider></v-divider>
                  <v-list-item :href="'/cpc/' + declaracion" prepend-icon="mdi-file-excel" title="Declaración de Intereses" link></v-list-item>
                </v-list>
              </v-col>
            </v-row>

            <v-divider class="my-10"></v-divider>

            <div class="text-center mb-8">
              <v-chip color="success" variant="flat" class="mb-4">Fase de Valoración Documental Acreditada</v-chip>
              <h2 class="text-h5 font-weight-bold">Candidatas Seleccionadas</h2>
            </div>

            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-hover v-for="(name, i) in ['Larissa Estefanía Esparza Fuentes', 'Elidé Alejandrina Acosta Reyes', 'Amparo Ruiz Montes']" :key="i">
                  <template v-slot:default="{ isHovering, props }">
                    <v-card v-bind="props" :elevation="isHovering ? 4 : 1" class="mb-3 pa-4 d-flex align-center" border rounded="lg">
                      <v-avatar color="blue-grey-lighten-4" class="mr-4 text-blue-grey-darken-3 font-weight-bold">{{ i + 1 }}</v-avatar>
                      <span class="text-body-1 font-weight-medium">{{ name }}</span>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>

            <v-alert
              type="info"
              variant="tonal"
              color="blue-grey"
              class="mt-10"
              icon="mdi-calendar-clock"
              rounded="lg"
            >
              <template v-slot:title>
                <span class="font-weight-bold">Aviso de Entrevistas</span>
              </template>
              De acuerdo con la Convocatoria, las aspirantes seleccionadas deberán presentarse el <strong>1 de diciembre</strong> en las instalaciones de la Secretaría Ejecutiva (Blvd. Luis Donaldo Colosio, No. 703, piso 3, Fracc. Valle Real).
            </v-alert>

            <v-card variant="outlined" class="mt-8 pa-4 border-dashed rounded-xl">
               <v-img
                src="/cpc/calificaciones.png"
                class="mx-auto rounded-lg"
                max-width="800"
                alt="Tabla de Calificaciones"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>

            <v-row class="mt-8" justify="center">
              <v-col cols="12" md="10">
                <v-expansion-panels variant="inset">
                  <v-expansion-panel title="Ver Significado de Iniciales (Evaluadores)" collapse-icon="mdi-account-group">
                    <v-expansion-panel-text>
                      <v-list density="compact">
                        <v-list-item v-for="(item, i) in evaluadores" :key="i" :title="item"></v-list-item>
                      </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const page = {
  color: 'blue-grey-darken-1',
  title: 'Convocatorias',
  icon: 'mdi-file-certificate-outline'
};

const metodologia = 'comision-proyecto-metodologia.pdf';
const convocatoria = 'convocatoria-2022.pdf';
const acreditacion = 'formato-para-acreditacion-experiencia.docx';
const declaracion = 'declaracion-de-intereses-funcionarios-y-personas-de-interes-publico.xlsx';

const evaluadores = [
  "JPV. Jafia Pacheco Valtierra",
  "MFCA. Miguel Francisco Crespo Alvarado",
  "YGMM. Yolanda Guadalupe Montes Martínez",
  "JCGE. Juan Carlos Guzmán Escobedo",
  "KSF. Karla Samperio Flores"
];
</script>

<style scoped>
.min-height-vh {
  min-height: 80vh;
}
.border-dashed {
  border: 2px dashed #cfd8dc !important;
}
</style>