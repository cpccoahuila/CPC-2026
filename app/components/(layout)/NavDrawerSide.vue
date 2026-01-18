<template>
  <v-navigation-drawer
  v-model="props.drawerToggle"
  :rail="rail"
  permanent
  @click="rail = rail"
  theme="dark"
  :color="colorNav"
  elevation="2"
  height="100%"
  style="position: fixed;"
  
    >
    
    <v-list nav>
      
      <v-list-item 
      v-if="mdAndUp"
      class="mb-3 menu-header"
      :prepend-icon='!rail ? "mdi-view-quilt" : "mdi-menu-close" '
      title="Minimizar Menú"
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
        :to="item.to"
        :title="item.title"
        :value="item.title"
        rounded="lg"
        color="primary"
        @click="toggleDrawer"
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
const {  mdAndUp } = useDisplay()
const colorNav = '#383550'
const emit = defineEmits(['toggle-drawer'])
const props = defineProps({
  drawerToggle: Boolean
})

const toggleDrawer = () => {
  if (!rail.value) {
 emit('toggle-drawer')
  }
 
}
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