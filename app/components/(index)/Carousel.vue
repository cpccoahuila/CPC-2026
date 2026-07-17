<template>
  <div class="carousel-wrapper py-10 ">
    <v-card 
      v-if="items.length > 0" 
      class="glass-card mx-auto overflow-hidden"
      max-width="1200"
      elevation="0"
    >
      <v-carousel
        height="auto"
        hide-delimiter-background
        show-arrows="hover"
        cycle
        interval="5000"
        class="custom-carousel"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <div class="carousel-content">
            <a 
              v-if="item.to || item.doc" 
              :href="item.doc ? `/img/banners/${item.doc}` : item.to" 
              target="_blank"
              class="banner-link"
            >
              <v-img 
                :src="item.src.startsWith('http') ? item.src : `/img/banners/${item.src}`"
                cover
                class="banner-img"
                aspect-ratio="16/9"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </a>
            
            <v-img 
              v-else 
              :src="`/img/banners/${item.src}`" 
              cover
              aspect-ratio="16/9"
            ></v-img>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card       
    class="glass-card mt-10 mx-auto overflow-hidden"
   max-width="1200">
    <v-img :src="('/img/banners/triptico.jpg')"></v-img>
</v-card>
  </div>
</template>

<style scoped>
/* Estilos para lograr el diseño más elaborado */

.carousel-wrapper {
  /* Fondo sutil para que el vidrio resalte */
  background: radial-gradient(circle at top right, rgba(var(--v-theme-accent), 0.05), transparent);
}

.glass-card {
  /* Efecto de Vidrio */
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 24px !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;
  padding: 12px; /* Espacio para que se vea el borde de vidrio */
}

/* Transición suave para la imagen */
.banner-img {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  border-radius: 16px;
}

.banner-link:hover .banner-img {
  transform: scale(1.02); /* Efecto de zoom ligero al pasar el mouse */
}

/* Personalización de los botones del carrusel */
:deep(.v-window__controls) {
  padding: 0 20px;
}

:deep(.v-btn--icon.v-btn--density-default) {
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(4px);
  color: rgb(39, 45, 58) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Estilo para los indicadores (bolitas) de abajo */
:deep(.v-carousel__controls .v-btn) {
  color: rgb(var(--v-theme-accent)) !important;
  opacity: 0.5;
}

:deep(.v-carousel__controls .v-btn--active) {
  opacity: 1;
  transform: scale(1.2);
}
</style>



<script>
export default {
    data() {
        return {
            items: [

                // {
                //     src: "banner_unodc.png",
                //     doc: "calendario-ipo-sea-coahuila-2018.pdf"
                // },

                // {
                //     src: "banner_unodc.png",
                //     to: "https://www.google.com/"
                // },

                //{
                //    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/sRDd8z9PspdESwXQfrq7%2FAjUDSMlpSDk2ohWJ2Gwo%2Fbanner-pracc-mpales.PNG?alt=media&token=1db38e78-7979-4c5e-958b-e3cc56651206",
                //    to: "comunicados/prac-mpales"
                //},
                //{
                //    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FBanners%20p%C3%A1gina%20web%20(7).png?alt=media&token=2e8b175c-9c86-4578-8634-c4304a675da1",
                //    to: "https://paa.sesna.gob.mx/"
                // },


                //{
                //    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FWhatsApp%20Image%202025-06-18%20at%2016.39.39%20VERDE.jpeg?alt=media&token=e92b3156-15bb-4315-8c53-5426736e1aa0",
                //    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FConvocatoria%20participa%20Saltillo%202025%20VERDE.pdf?alt=media&token=e6508050-89e9-44a7-a45a-fb25cbab24cc"
                //},

                //{
                //    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FWhatsApp%20Image%202025-06-18%20at%2016.39.39%20ROSA.jpeg?alt=media&token=5dcc3f01-9316-4a27-9343-1e28366e6657",
                //    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FCOMISIONES%20SECTORIALES%20ROSA.pdf?alt=media&token=75f022f7-3b59-4367-b810-cd53e00f5750"
                //},

                

                // {
                //     src:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FBanners%20p%C3%A1gina%20web%20(11).png?alt=media&token=dd501d5d-4464-42ff-930a-81fce49eb347",
                //     to:"/"

                // },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FEstudiantes%20de%20nivel%20licenciatura%20del%20Estado%20de%20Coahuila%20de%20Zaragoza%20(1).png?alt=media&token=35af42b0-c9ac-4efa-986f-c6164331b326",
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FVnwWw7SEUUD2OK14B4p8%2FProyecto%20de%20Convocatoria%20con%20fechas%2016%20julio.pdf?alt=media&token=d0645c9b-453b-4db3-88dc-793e548165f0"
                },
                
                {
                     src:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FWhatsApp%20Image%202026-06-24%20at%2012.19.52.jpeg?alt=media&token=b0cd5dc0-748d-4088-8971-769aa517fac1",
                     to:"https://cps.seajal.org/convocatoria-buenas-practicas-municipales-2026"

                },
                 {
                    src:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FBanners%20p%C3%A1gina%20web%20(9).png?alt=media&token=5a787a8d-4754-463b-ab1e-92d6f0d093d8",
                    to:"https://documents.un.org/doc/undoc/ltd/g25/102/74/pdf/g2510274.pdf"

                },


                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FGira%20de%20capacitaci%C3%B3n%20(1).png?alt=media&token=9002d1fc-32b1-45c0-b72c-0d8ae2a19134",
                    to: "comunicados/capacitaciones"
                },

                //{
                //    src: "banner-iniciativa.jpg",
                //    doc: "Comunicado CPC.pdf"
                //},

                //{
                //     src: "banner_unodc.png",
                //},



            ],
        }
    },
}
</script>