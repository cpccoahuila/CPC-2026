<template>
  <v-navigation-drawer
  v-model="props.drawerToggle"
  :rail="rail"
  permanent
  @click="rail = false"
  theme="dark"
  :color="colorNav"
  elevation="2"
  height="100%"
  
    >
    
    <v-list nav>
      
      <v-list-item 
      class="mb-3 menu-header"
      prepend-icon="mdi-view-quilt"
      title="Menú Principal"
      subtitle="Navegación"
      @click.stop="rail = !rail"
      rounded="xl"
      >
      <template v-slot:append>
            <v-icon size="small" v-if="!rail">mdi-chevron-left</v-icon>
        </template>
      </v-list-item>

      <v-divider class="mb-2"></v-divider>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :href="item.to"
        :title="item.title"
        :value="item.title"
        rounded="xl"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon 
            v-if="item.icon" 
            :color="item.color" 
            :icon="item.icon"
            class="mr-2"
          ></v-icon>

          <v-icon v-else-if="item.avatar" size="24" class="mr-2">
            <v-img :src="`/img/botonera/${item.avatar}`" alt="icono"  />
          </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const rail = ref<boolean>(false)
const drawer = ref<boolean>(false)
const { mdAndUp } = useDisplay()
const colorNav = '#383550'
const props = defineProps({
  drawerToggle: Boolean
})

const items = ref([
  {
    icon: 'mdi-home',
    title: 'Inicio',
    to: '/',
    color: 'deep-purple-lighten-2' 
  },
  {
    icon: 'mdi-magnify',
    title: 'Transparencia',
    to: '/transparencia',
    color: 'teal-lighten-1'
  },
  {
    avatar: 'cpclog.png', 
    title: 'Quiénes Somos',
    to: '/cpc',
    color: 'purple-lighten-2'
  },
  {
    icon: 'mdi-webhook',
    title: 'Red Ciudadana',
    to: '/redCiudadana',
    color: 'pink'
  },
  {
    icon: 'mdi-script-text',
    title: 'Sesiones de pleno',
    to: '/sesiones',
    color: ''
  },
  {
    icon: 'mdi-newspaper-variant-outline',
    title: 'Comunicados',
    to: '/comunicados',
    color: 'amber-darken-1'
  },
  {
    icon: 'mdi-briefcase-plus-outline',
    title: 'Convocatorias',
    to: '/convocatorias',
    color: 'blue-grey'
  },
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Sitios de Interés',
    to: '/sitios',
    color: 'light-blue'
  },
  {
    icon: 'mdi-chart-arc',
    title: 'Indicadores',
    to: '/indicadores',
    color: 'red-accent-1'
  },
  {
    icon: 'mdi-card-account-phone-outline',
    title: 'Contacto',
    to: '/contacto',
    color: ''
  }
])
</script>

<style scoped>
/* Estilo sutil para el botón de arriba para que resalte un poco más */
.menu-header {
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.3s;
}

.menu-header:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>