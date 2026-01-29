<template>
  <v-container class="min-height-vh">
    <v-row justify="center">
      <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12">
        <v-card class="pa-4 pa-md-6" elevation="2" rounded="xl">
          <div class="d-flex align-center mb-6">
            <v-icon color="red" class="mr-2" size="large">mdi-youtube-tv</v-icon>
            <span class="text-h5 font-weight-bold">Canal Multimedia</span>
          </div>

          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="h-100">
                <v-card-title class="text-subtitle-1 font-weight-bold text-center bg-grey-lighten-4">
                  Sesiones Grabadas
                </v-card-title>
                <div class="video-container">
                  <iframe src="https://www.youtube.com/embed/videoseries?list=PLDdlhleuW9zck5BEwLLfTx4YIoD1SaWkN"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card variant="outlined" class="h-100">
                <v-card-title class="text-subtitle-1 font-weight-bold text-center bg-red-lighten-5 text-red">
                  <v-icon size="small" class="mr-1">mdi-broadcast</v-icon> En Vivo
                </v-card-title>
                <div class="video-container">
                  <iframe src="https://www.youtube.com/embed/live_stream?channel=UCgzKc9c1F9ntPAi34XNfy4A"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <div class="text-h5 mb-4 font-weight-bold ml-2 border-start-4 pl-3" :style="{ borderColor: page.color }">
          Histórico de Sesiones
        </div>

        <v-expansion-panels variant="separate">
          <v-expansion-panel v-for="(grupo, i) in sesiones" :key="i" class="mb-2" elevation="1">
            <v-expansion-panel-title class="py-3">
              <div class="d-flex align-center w-100">
                <v-avatar color="grey-lighten-4" class="mr-3" rounded="0">
                  <v-icon :color="page.color">mdi-calendar-month</v-icon>
                </v-avatar>

                <div>
                  <div class="text-subtitle-1 font-weight-bold">{{ grupo.year }}</div>
                  <div class="text-caption text-grey">{{ grupo.data.length }} registros disponibles</div>
                </div>
              </div>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <v-table density="compact" hover>
                <thead>
                  <tr>
                    <th class="text-left text-uppercase text-caption font-weight-bold text-grey-darken-1">
                      Nombre de la Sesión
                    </th>
                    <th class="text-center text-uppercase text-caption font-weight-bold text-grey-darken-1" width="120">
                      Video
                    </th>
                    <th class="text-center text-uppercase text-caption font-weight-bold text-grey-darken-1" width="120">
                      Orden del día
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(sesion, k) in grupo.data" :key="k">
                    <td class="font-weight-medium text-body-2 py-3 text-grey-darken-3">
                      {{ sesion.nombre }}
                    </td>

                    <td class="text-center">
                      <v-tooltip location="top" v-if="sesion.link">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" :href="sesion.link" target="_blank" icon="mdi-youtube" variant="text"
                            color="red-darken-1" density="comfortable"></v-btn>
                        </template>
                        <span>Ver grabación en YouTube</span>
                      </v-tooltip>

                      <v-tooltip location="top" v-else>
                        <template v-slot:activator="{ props }">
                          <v-icon v-bind="props" color="grey-lighten-2" icon="mdi-video-off-outline"></v-icon>
                        </template>
                        <span>Grabación no disponible</span>
                      </v-tooltip>
                    </td>

                    <td class="text-center">
                      <v-tooltip location="top" v-if="sesion.ordenDelDia && sesion.ordenDelDia !== '/sesiones'">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" :href="sesion.ordenDelDia" target="_blank"
                            icon="mdi-file-document-check-outline" variant="text" color="primary"
                            density="comfortable"></v-btn>
                        </template>
                        <span>Descargar Orden del día</span>
                      </v-tooltip>

                      <v-tooltip location="top" v-else>
                        <template v-slot:activator="{ props }">
                          <v-icon v-bind="props" color="grey-lighten-2" icon="mdi-file-remove-outline"></v-icon>
                        </template>
                        <span>Documento no disponible</span>
                      </v-tooltip>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Asegúrate de importar tu componente TitlePages correctamente según tu estructura de Nuxt/Vue
// import TitlePages from '@/components/TitlePages.vue'

const page = {
  color: 'purple', // Cambié a purple para coincidir con tu diseño anterior (#4c2882)
  title: 'Sesiones CPC',
  icon: 'mdi-gavel' // Icono más representativo de sesiones/leyes
};

const sesiones = [
  {
    year: 'Sesiones Ordinarias 2026',
    data: [
      {
        link: 'https://youtu.be/0KUFWMmSNso',
        nombre: 'Cuarta Sesión Ordinaria ',
        ordenDelDia: '/sesiones'
      },



    ]


  },
  {
    year: 'Sesiones Ordinarias 2025',
    data: [
{
        link: 'https://youtu.be/4lwUS0AmEsY',
        nombre: 'Tercera Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/e_iho7JHwMg',
        nombre: 'Segunda Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/LArRngWTpec',
        nombre: 'Sesión Extraordinaria',
        ordenDelDia: '/sesiones'
      },
       {
        link: 'https://youtu.be/uW_GIUDTo60',
        nombre: 'Primera Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/mx-jaOLYvoE',
        nombre: 'Séptima Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/LqJBgHwbl7I',
        nombre: 'Sexta Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/EuAyiJvTsUM',
        nombre: 'Quinta Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },

      {
        link: 'https://youtu.be/dspX_5T8TLY',
        nombre: 'Cuarta Sesión Ordinaria',
        ordenDelDia: '/sesiones'
      },


    ]


  },
  {
    year: 'Sesiones Ordinarias 2024',
    data: [
      {
        link: 'https://youtu.be/-_OKRGY3iFk',
        nombre: 'Sesión Ordinaria - 1 de febrero',
        ordenDelDia: '/sesiones'
      },

      {
        link: 'https://youtu.be/eIjgrMIh7YA',
        nombre: 'Sesión Ordinaria - 11 de enero',
        ordenDelDia: '/sesiones'
      },

    ]


  },
  {
    year: 'Sesiones Ordinarias 2023',
    data: [
      {
        link: 'https://youtu.be/ylW570V3ZkY',
        nombre: 'Sesión Ordinaria - 1 de diciembre',
        ordenDelDia: '/sesiones'
      },

      {
        link: 'https://youtu.be/mTpC92B4Tbk',
        nombre: 'Sesión Ordinaria - 2 de noviembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/RqPYMMzQybo',
        nombre: 'Sesión Ordinaria - 12 de octubre',
        ordenDelDia: 'https://drive.google.com/file/d/1XAA0-lp5io9jyxeShHRooR0c5q1D8gDQ/view?usp=sharing'
      },

      {
        link: 'https://youtu.be/CdMmALt4MME?si=hqC4KR5iVw1xRVVx',
        nombre: 'Sesión Ordinaria - 26 de septiembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/jgdSGqJqey0?si=rZZzhTRYQOHezs8p',
        nombre: 'Sesión Ordinaria - 3 de agosto',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/EwUuIDY5_Cs?si=SaQWtXAz62rB0lIH',
        nombre: 'Sesión Ordinaria - 6 de julio',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/YaTs934W_gw?si=OLeD6D-EbJc7nhXq',
        nombre: 'Sesión Ordinaria - 1 de junio',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/eiaG7j_uSN4?si=9gJllRKiQT-pSCVv',
        nombre: 'Sesión Ordinaria - 4 de mayo',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/F6EfYhca5Co?si=a48xnUdb0XxUG4w1',
        nombre: 'Sesión Ordinaria - 10 de abril',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/yE9u2PyFDwk?si=eMFiXFlym4mQ-wee',
        nombre: 'Sesión Ordinaria - 2 de marzo',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/Rl71o5oqCEA?si=nSgkjlHX-VuuG99A',
        nombre: 'Sesión Ordinaria - 2 de febrero',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/SUQOq-7UNr4?si=5wnvZGdMRnOscqLZ',
        nombre: 'Sesión Ordinaria - 6 de enero',
        ordenDelDia: '/sesiones'
      },
    ]


  },

  {
    year: 'Sesiones Ordinarias 2022',
    data: [
      {
        link: 'https://youtu.be/VtpFldjLkrU?si=Xp3Mzk4K4GyV80sM',
        nombre: 'Sesión Ordinaria - 1 de diciembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://www.youtube.com/live/XVsj8IqyEMs?si=t9JkoiBeNpWxcJCJ',
        nombre: 'Sesión Ordinaria - 3 de noviembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://www.youtube.com/live/XVsj8IqyEMs?si=t9JkoiBeNpWxcJCJ',
        nombre: 'Sesión Ordinaria - 24 de octubre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://www.youtube.com/live/VA4SUoXuWL0?si=fXn5CXbpf1Vz2arj',
        nombre: 'Sesión Ordinaria - 23 de septiembre',
        ordenDelDia: 'https://drive.google.com/file/d/1FcmZt2jbZlIjHig3GS4g62lRqqx8B3O2/view?usp=sharing'
      },
      {
        link: 'https://www.youtube.com/live/9ljCoEhYHD4?si=ZzCBR_EKnOxRwJwR',
        nombre: 'Sesión Ordinaria - 30 de agosto',
        ordenDelDia: 'https://drive.google.com/file/d/1idxNCcAWCenzl2R12xI3QBj72L9vCGxM/view?usp=sharing'
      },
      {
        link: 'https://fb.watch/nqBAShzAGN/',
        nombre: 'Sesión Ordinaria - 08 de agosto',
        ordenDelDia: 'https://drive.google.com/file/d/1la5TtnBB12joY8ZZ0yhu8Dp5ABGTRbsX/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/k0m_-FQkl1A',
        nombre: 'Sesión Ordinaria - 08 de julio',
        ordenDelDia: 'https://drive.google.com/file/d/190nxoDaeBeu9lmWT38pzsqBUd71UQB4f/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/1Cx1aU5zdLY',
        nombre: 'Sesión Ordinaria - 28 de junio',
        ordenDelDia: 'https://drive.google.com/file/d/1YSMRt_kOhykXqSSNfUnHjlzcZvfvCgQo/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/WKWHlAbsRDw',
        nombre: 'Sesión Ordinaria - 10 de junio',
        ordenDelDia: 'https://drive.google.com/file/d/1fMJqdVW8g14Fi5WbTKgEWqFXopgzqVhQ/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/D71d_B0dtAQ',
        nombre: 'Sesión Ordinaria - 27 de mayo',
        ordenDelDia: 'https://drive.google.com/file/d/1G2wsM0a6wEHzSZrCa9sxgEOq5oDObLDl/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/G4boBKOKT7M',
        nombre: 'Sesión Ordinaria - 13 de mayo',
        ordenDelDia: 'https://drive.google.com/file/d/1dl5fPS3d6Ru4AyW_LY5KsMvI0UgUi07L/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/w0H6ev1Ew9Q',
        nombre: 'Sesión Ordinaria - 22 de abril',
        ordenDelDia: 'https://drive.google.com/file/d/1r4s8dsBW21XW3vZZjv1thlhArf9A0t38/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/uK4PguVEADk',
        nombre: 'Sesión Ordinaria - 8 de abril',
        ordenDelDia: 'https://drive.google.com/file/d/1Bh6Pmrhlfz6OC6jYPJS5g2CZccZXqRAU/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/PQ9XjTuBJYo',
        nombre: 'Sesión Ordinaria - 25 de marzo',
        ordenDelDia: 'https://drive.google.com/file/d/1NACD1ZXKbXw2odt-_uPmTIrDeeBrfJZy/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/ybSxO3RaE90',
        nombre: 'Sesión Ordinaria - 11 de marzo',
        ordenDelDia: 'https://drive.google.com/file/d/1A8ZK_JPs33wknrX_lyuMLAMjSxLxiYK1/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/dv6wZmi550E',
        nombre: 'Sesión Ordinaria - 25 de febrero',
        ordenDelDia: 'https://drive.google.com/file/d/11D7DoJ994IIEmO81bqm7SNtvAjLGOJ_K/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/U645wRXFLQ4',
        nombre: 'Sesión Ordinaria - 11 de febrero',
        ordenDelDia: 'https://drive.google.com/file/d/1VMJrg1iok_JlvFbfkCzuo-GIS0TqQTX7/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/Bv-j2QaQfpY',
        nombre: 'Sesión Ordinaria - 28 de enero',
        ordenDelDia: 'https://drive.google.com/file/d/12XBTAsdt42GFHiZ67Jx3a4IlArso1K-E/view?usp=sharing'
      },
      {
        link: 'https://fb.watch/aOIFBr8sCH/',
        nombre: 'Sesión Ordinaria - 14 de enero',
        ordenDelDia: 'https://drive.google.com/file/d/1haHN6sMUJra3vx9r3Y552nfy1vyezH0e/view?usp=sharing'
      },

    ]


  },

  {
    year: 'Sesiones Ordinarias 2021',
    data: [
      {
        link: 'https://youtu.be/ViCBDKiO1GI',
        nombre: 'Sesión Ordiaria - 10 de diciembre',
        ordenDelDia: 'https://drive.google.com/file/d/1ZyL4AhvMQ77cdTvBuOCu4ZYJ0661OKAC/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/91DswnykLWs',
        nombre: 'Sesión Ordinaria - 26 de noviembre',
        ordenDelDia: 'https://drive.google.com/file/d/1jcEXasoWZdfyBptsr936p-i-Hv2T8xFx/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/C7YfF2pXhXU',
        nombre: 'Sesión Ordinaria - 12 de noviembre',
        ordenDelDia: 'https://drive.google.com/file/d/1KjNzhJpEcTl7kfZ6jwsxtAIRtrPh0kfL/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/QpS-WlwH6-A',
        nombre: 'Sesión Ordinaria - 29 de octubre',
        ordenDelDia: 'https://drive.google.com/file/d/10EIkxnmKo_x4Rcjqh1_IaDZRYxXdMUgv/view?usp=sharing'
      },
      {
        link: 'https://youtu.be/WoZAkF_Rrtk',
        nombre: 'Sesión Ordinaria - 15 de octubre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://fb.watch/8w7erX9_rZ',
        nombre: 'Sesión Ordinaria - 5 de octubre',
        ordenDelDia: '/sesiones'
      },
    ]
  },

  {
    year: 'Sesiones Extraordinarias 2023',
    data: [
      {
        link: 'https://youtu.be/ggpEhzEcVmY',
        nombre: 'Sesión Ordiaria - 17 de octubre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/diTV9DHn-NI?si=RgiFpGnqHrffIKo1',
        nombre: 'Sesión Ordiaria - 10 de diciembre',
        ordenDelDia: '/sesiones'
      },

    ]
  },


  {
    year: 'Sesiones Extraordinarias 2022',
    data: [
      {
        link: 'https://youtu.be/VyxVsk1ONps?si=Qsd5QfV-Ga-4IiMj',
        nombre: 'Sesión Extraordinaria - 5 de diciembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/RliW79qO7DU?si=IIkDaaiRDWjdkHUN',
        nombre: 'Sesión Extraordinaria - 8 de noviembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/EokMSuUpvBE?si=tzepxVPJYG944kH1',
        nombre: 'Sesión Extraordinaria - 4  de noviembre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/ZNgQ_RYCnj8?si=3CEYkfeoRTGQnBZQ',
        nombre: 'Sesión Extraordinaria - 28  de octubre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://www.youtube.com/live/CH2v_2IzNEc?si=G2sBZyreEWbuJEYi',
        nombre: 'Sesión Extraordinaria - 24  de octubre',
        ordenDelDia: '/sesiones'
      },
      {
        link: 'https://youtu.be/gYne5VMBxJQ?si=IrN8l5MZycb8FpcX',
        nombre: 'Sesión Extraordinaria - 1 de octubre',
        ordenDelDia: '/sesiones'
      },
    ]


  }
]
</script>

<style scoped>
.min-height-vh {
  min-height: 80vh;
}

/* Truco CSS moderno para Videos Responsivos (Aspect Ratio 16:9) 
  Esto reemplaza a las clases de Bootstrap y asegura que no se deforme
*/
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  background: #000;
  border-radius: 0 0 4px 4px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.border-start-4 {
  border-left: 4px solid;
}
</style>