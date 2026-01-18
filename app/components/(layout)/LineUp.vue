<template>
  <div v-if="!mobile">
    <v-card class="pa-1" color="#f0f0f0" elevation="0">
      <v-row 
        justify="center" 
        align="center" 
        :class="smAndDown ? 'ga-3' : 'ga-8'"
        no-gutters
      >
        <v-col 
          v-for="(i, index) in cc" 
          :key="index"
          cols="auto"
          class="d-flex justify-center align-center pa-2" 
        >
          <a :href="i.web" target="_blank" rel="noopener noreferrer" class="logo-link">
            <v-img 
              :width="mobile ? (Number(i.size) * 0.3) : (Number(i.size) - 10)" 
              :src="`/img/${i.img}`" 
              :lazy-src="`/img/${i.img}`"
              alt="Logotipo institucional"
              class="logo-img"
            ></v-img>
          </a>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

// Extraemos 'mobile' de useDisplay para saber si la pantalla es pequeña
const { mobile, smAndDown} = useDisplay()

const cc = [
  { img: 'ASEC.png', web: 'https://www.asecoahuila.gob.mx/', size: '160' },
  { img: 'cc-fehc.png', web: 'https://sitio.fgecoahuila.gob.mx/', size: '145' },
  { img: 'cc-sefirc.png', web: 'http://www.sefircoahuila.gob.mx/', size: '180' },
  { img: 'cc-pjecz.png', web: 'https://www.pjecz.gob.mx/', size: '170' },
  { img: 'cc-tjacz.png', web: 'http://www.tjacoahuila.org/', size: '130' },
  { img: 'cpc-color.png', web: 'https://www.cpccoahuila.org.mx/', size: '130' },
  { img: 'seac.png', web: '#', size: '110' }
];
</script>

<style lang="scss" scoped>
.logo-link {
  text-decoration: none;
  display: block;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
}

.logo-img {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.05));
}
</style>