<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12">
        <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" lg="11">
        <v-card variant="flat" class="rounded-xl border pa-4 pa-md-8">
          
          <v-row justify="center">
            <v-col cols="12" class="text-center mb-6">
              <h1 class="text-h4 text-md-h2 font-weight-bold text-grey-darken-3 mb-2">
                Información Pública
              </h1>
              <v-divider class="mx-auto border-opacity-50" color="primary" width="100" thickness="3"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col 
              v-for="(fraccion, i) in fracciones" 
              :key="i" 
              cols="12" 
              sm="6" 
              md="4" 
              lg="3"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  :elevation="isHovering ? 8 : 1"
                  :color="isHovering ? 'deep-purple-darken-3' : 'article'"
                  class="mx-auto transition-swing rounded-lg cursor-pointer d-flex flex-column align-center justify-center text-center pa-6 fill-height"
                  :to="'/transparencia/' + fraccion.to"
                  link
                >
                  <v-avatar
                    size="64"
                    :color="isHovering ? 'white' : 'blue-grey-lighten-5'"
                    class="mb-4"
                  >
                    <v-icon 
                      size="32" 
                      :color="isHovering ? 'primary' : 'blue-grey-darken-2'"
                    >
                      {{ fraccion.icon }}
                    </v-icon>
                  </v-avatar>

                  <div 
                    class="text-subtitle-1 font-weight-medium leading-tight"
                    :class="isHovering ? 'text-white' : 'text-grey-darken-3'"
                  >
                    {{ fraccion.titulo }}
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Nota: En Nuxt 3/4 no necesitas importar componentes manualmente si están en /components
// Pero mantengo la lógica de tu script original.
export default {
  name: 'TransparenciaPage',
  data() {
    return {
      page: {
        color: 'info',
        title: 'Transparencia',
        icon: 'mdi-magnify'
      },
      fracciones: [
        { titulo: 'Actas', to: 'CPC-1', icon: 'mdi-file-document-outline' },
        { titulo: 'Acuerdos', to: 'CPC-2', icon: 'mdi-handshake-outline' },
        { titulo: 'Calendario de sesiones', to: 'CPC-3', icon: 'mdi-calendar-month-outline' },
        { titulo: 'Contratos de prestación de servicios', to: 'CPC-4', icon: 'mdi-file-sign' },
        { titulo: 'Convenios de colaboración', to: 'CPC-5', icon: 'mdi-account-multiple-plus-outline' },
        { titulo: 'Declaraciones Patrimoniales', to: 'CPC-6', icon: 'mdi-account-search' },
        { titulo: 'Informes', to: 'CPC-7', icon: 'mdi-file-chart-outline' },
        { titulo: 'Marco Legal', to: 'CPC-8', icon: 'mdi-scale-balance' },
        { titulo: 'Planes', to: 'CPC-9', icon: 'mdi-chart-donut-variant' },
        { titulo: 'Programas', to: 'CPC-10', icon: 'mdi-notebook-outline' },
        { titulo: 'Viáticos', to: 'CPC-11', icon: 'mdi-plane-car' },
      ],
    }
  }
}
</script>

<style scoped>
.transition-swing {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.leading-tight {
  line-height: 1.25rem;
}
</style>