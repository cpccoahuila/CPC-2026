<template>
         <v-col cols="12">
        <v-card border elevation="2" rounded="xl">
          <v-card-title class="text-center pa-6">
            <div class="text-h5 font-weight-bold">
              <v-icon size="large" class="mr-2">mdi-webhook</v-icon>Redes Ciudadanas
            </div>
          </v-card-title>
          
          <v-divider></v-divider>

          <v-card-text class="pa-8">
            <v-row class="text-center">
              <!-- <v-col cols="12" md="4">
                <v-icon color="pink" size="40">mdi-calendar-clock</v-icon>
                <p class="text-h6 mt-2">Cronograma 2022</p>
                <p class="text-body-2 mb-4">Programa de trabajo enfocado en la formación y formalización de la Red.</p>
                <v-btn color="pink" variant="flat" :href="`/cpc/${cronograma}`" rounded="pill">Ver Cronograma</v-btn>
              </v-col> -->

             

              <v-col cols="12" md="4">
                <v-icon color="pink" size="40">mdi-file-check-outline</v-icon>
                <p class="text-h6 mt-2">Lineamientos</p>
                <p class="text-body-2 mb-4">Bases estratégicas establecidas por el primer grupo de integrantes.</p>
                <v-btn color="pink" variant="flat" :href="`/cpc/${lineamientos}`" rounded="pill">Leer más</v-btn>
              </v-col>

               <v-col cols="12" md="4">
                <v-icon color="pink" size="40">mdi-bullhorn-variant-outline</v-icon>
                <p class="text-h6 mt-2">Sesiones de la Red de Participación Ciudadana</p>
                <p class="text-body-2 mb-4">Consulta las actas de las sesiones de la Red de Participación Ciudadana.</p>
                <v-btn color="pink" variant="flat" :href="`/redCiudadana/rpc`" rounded="pill">Ver más</v-btn>
              </v-col>

            </v-row>
          </v-card-text>

          <v-card color="pink-lighten-5" class="ma-6 pa-6" rounded="lg" elevation="0">
            <div class="text-h5 text-center mb-4 font-weight-bold">Registro para OSC</div>
            <p class="text-body-1 text-justify mb-6">
              La Red de Participación Ciudadana Anticorrupción está integrada por organismos e individuos interesados en consolidar la participación ciudadana. ¡Te invitamos a formar parte!
            </p>
            <v-btn block size="large" color="pink" elevation="4" href="https://forms.gle/bSVMAxGydghpYWUx5">
              Registrese Aquí
            </v-btn>
          </v-card>
        </v-card>
      </v-col>
</template>

<script setup>
const cronograma = 'cronograma-2022.pdf';
const convocatoria = 'convocatoria-2022.pdf';
const lineamientos = 'lineamientos.pdf';
</script>

<style lang="scss" scoped>

</style>