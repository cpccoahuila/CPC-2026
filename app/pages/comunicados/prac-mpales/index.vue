<template>
    <v-container class="min-height-vh">

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{ page.title }}</div>

                </v-alert>

                <v-card aling="center" justify="center" class="mt-3 pa-10" color="article">

                    <v-row>
                        <v-col>

                            <v-col align="center" class="mb-5 text-xl-h">
                                
                                <v-img :width="750"
                                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/sRDd8z9PspdESwXQfrq7%2FAjUDSMlpSDk2ohWJ2Gwo%2FWhatsApp%20Image%202024-08-05%20at%2012.15.29.jpeg?alt=media&token=b34e97f2-417a-4f04-bd49-9d714d08fd6d"></v-img>
                                <br></br>
                            </v-col>
                            <v-col align="center" class="mb-5 text-xl-h">
                                <v-img :width="750"
                                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/sRDd8z9PspdESwXQfrq7%2FAjUDSMlpSDk2ohWJ2Gwo%2FWhatsApp%20Image%202024-07-15%20at%2014.12.09.jpeg?alt=media&token=7e210afd-7b94-4880-86f3-b95b963b1410"></v-img>
                            </v-col>


                            <v-col align="center" class="mb-5 text-xl-h">
                                Para más información consulta las bases: <a
                                    href="https://cps.seajal.org/premio-nacional-de-buenas-practicas-municipales/">https://cps.seajal.org/premio-nacional-de-buenas-practicas-municipales/</a>


                            </v-col>
                            <v-divider></v-divider>




                        </v-col>
                    </v-row>


                </v-card>




            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Capacitaciones',



    data() {
        return {
            page: {
                color: 'blue lighten-2',
                title: '1a Edición Premio Nacional Buenas Prácticas Municipales de Incidencia en el Control de la Corrupción',
                icon: 'mdi-comma-circle-outline'
            },


        }

    },

}
</script>

<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>