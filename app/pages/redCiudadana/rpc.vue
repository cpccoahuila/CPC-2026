<template>
  <v-container class="min-height-vh bg-grey-lighten-5 pb-10">
    <v-row justify="center" class="py-8">
      <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
    </v-row>

    <v-row justify="start">
      <v-col 
        v-for="(e, index) in sesiones" 
        :key="index"
        cols="12" sm="6" md="4"
        class="pa-4"
      >
        <v-card
          class="clean-card h-100 d-flex flex-column"
          color="article"
        >
          <v-card-item>
            <div class="d-flex align-center mb-2">
              <v-icon 
                :icon="e.documento ? 'mdi-file-pdf-box' : 'mdi-open-in-new'" 
                :color="e.documento ? 'red-lighten-1' : 'blue-lighten-1'"
                size="small"
                class="mr-2"
              ></v-icon>
              <span class="text-caption text-uppercase font-weight-bold text-grey-lighten-1 tracking-widest">
                {{ e.documento ? 'PDF' : 'Enlace' }}
              </span>
            </div>
            
            <v-card-title class="text-body-1 font-weight-bold text-grey-darken-3 text-wrap pb-2">
              {{ e.titulo }}
            </v-card-title>

            <v-card-text class="text-body-2 text-grey-darken-1 pa-0 line-height-relaxed">
              {{ e.texto }}
            </v-card-text>
          </v-card-item>

          <v-spacer></v-spacer>

          <v-card-actions class="pa-4">
            <v-btn
              :href="e.documento ? '/comunicados' + e.documento : e.to"
              :target="e.documento ? '_blank' : '_self'"
              block
              variant="tonal"
              :color="page.color"
              class="text-none font-weight-medium rounded-pill"
            >
              {{ e.link }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const page = {
  color: 'blue-grey-darken-3', // Color más sobrio y profesional
  title: 'Sesiones Red de Participación Ciudadana',
  icon: 'mdi-text-box-outline'
};

const sesiones = [
  {
    titulo: "Sesión de la Red de Participación Ciudadana - 5 de febrero",
    texto: "Acta de la sesión.",
    link: "Ver acta",
    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FZfJILfZiloUWpBwD3EmN%2FActa%20Red%20de%20Participaci%C3%B3n%20Ciudadana.pdf?alt=media&token=4c140d51-6221-47aa-90a8-08220d53ec93',
  },


];
</script>

<style scoped>
.min-height-vh {
  min-height: 100vh;
}

.clean-card {
  background: #ffffff !important;
  border: 1px solid #f0f0f0 !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.clean-card:hover {
  border-color: transparent !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06) !important;
  transform: translateY(-5px);
}

.tracking-widest {
  letter-spacing: 0.1em !important;
}

.line-height-relaxed {
  line-height: 1.6 !important;
}

/* Limita el título a 2 líneas para que las cards sean simétricas */
.text-wrap {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 3rem;
}
</style>