<template>
    <div>
        <v-card color="accent" class="mt-10" v-if="items.length != 0">
            <v-col cols="12">


                <v-carousel height="">

                    <v-carousel-item v-for="(item, i) in items" :key="i" dark>
                        <!-- Si existe documento y usamos href con requiere para acceder a el documento -->
                        <div v-if="item.doc">
                            <a :href="require('@/static/img/banners/' + item.doc)">
                                <v-img :src="require('@/static/img/banners/' + item.src)"></v-img>
                            </a>
                        </div>
                        <!-- Si existe link, href se lee directo del dato -->
                        <div v-if="item.to">
                            <a :href="item.to">
                                <v-img :src="item.src"></v-img>
                            </a>
                        </div>
                        <!-- Banner solo -->
                        <div v-if="!item.to && !item.doc">

                            <v-img :src="require('@/static/img/banners/' + item.src)"></v-img>

                        </div>

                    </v-carousel-item>
                </v-carousel>
            </v-col>

            <v-divider></v-divider>

        </v-card>
        <v-card class="mt-12">
            <v-img :src="('/img/banners/triptico.jpg')"></v-img>
        </v-card>
    </div>
</template>

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

                 {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(12).png?alt=media&token=58896c00-c693-4992-92cf-584acd3ec141",
                    to: "https://www.comisionseacoahuila.mx/procesos/2025/"
                },

                {
                    src:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FQjXLjUOpI86yFY7FTrPn%2FBanners%20p%C3%A1gina%20web%20(11).png?alt=media&token=dd501d5d-4464-42ff-930a-81fce49eb347",
                    to:"/"

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