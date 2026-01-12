import { TitlePages } from '../../../.nuxt/components';
<template>
    <v-container>

        <v-row>

       
            <TitlePages color="cyan-darken-3" title="Contacto" icon="mdi-card-account-phone-outline"/>
            <v-col cols="12">

                <div v-for="(e, i) in page.contactos" :key="i">

                    <v-card class="mt-8" color="article">
                        <v-row>

                            <v-col align="center" cols='6' justify="center" align-self="center">
                                <v-img width="300"  :lazy-src="('img/' + e.icon)"
                                    :src="('img/' + e.icon)"></v-img>
                            </v-col>

                            <v-col cols="6">

                                <div class="mb-5 text-xl-h4 text-md-h5 ">{{ e.dependencia }}</div>
                                <div class="mb-5 text-subtitle-2 font-weight-bold" v-for="(i, index) in e.datos"
                                    :key="index"> {{ i }}</div>
                               

                                <div class="media mb-4">
                                    <div class="w-25 mr-2">
                                    </div>
                                    <div class="media-body align-self-end">
                                        <h5 class="mt-0">Juan Carlos Guzmán Escobedo</h5>
                                        <a
                                            href="mailto:carlos.guzman@cpccoahuila.org.mx">carlos.guzman@cpccoahuila.org.mx</a>
                                    </div>
                                </div>

                                <div class="media mb-4">
                                    <div class="w-25 mr-2">
                                    </div>
                                    <div class="media-body align-self-end">
                                        <h5 class="mt-0">Karla Ivonne Natividad González</h5>
                                        <a
                                            href="mailto:karla.natividad@cpccoahuila.org.mx">karla.natividad@cpccoahuila.org.mx</a>
                                    </div>
                                </div>

                                <div class="media mb-4">
                                    <div class="w-25 mr-2">
                                    </div>
                                    <div class="media-body align-self-end">
                                        <h5 class="mt-0">Carlos Antonio Franco Flores</h5>
                                        <a
                                            href="mailto:carlos.franco@cpccoahuila.org.mx">carlos.franco@cpccoahuila.org.mx</a>
                                    </div>
                                </div>

                                <div class="media mb-4">
                                    <div class="w-25 mr-2">
                                    </div>
                                    <div class="media-body align-self-end">
                                        <h5 class="mt-0">Diana Marisol Flores Rivera</h5>
                                        <a
                                            href="mailto:diana.flores@cpccoahuila.org.mx">diana.flores@cpccoahuila.org.mx</a>
                                    </div>
                                </div>

                            </v-col>

                        </v-row>

                    </v-card>

                </div>

            </v-col>
            <!-- <v-col cols="12">
                <v-card>
                    <v-card-title class="justify-center mb-4">
                        <v-icon x-large :color="page.color">mdi-email-edit-outline</v-icon>
                        <div class=" text-xl-h3 text-md-h4"> Buzón de contacto y acceso a la información</div>
                    </v-card-title>

                    <v-col align="center" justify="center" class="pa-8">
                        <v-btn block large>Acceder</v-btn>

                    </v-col>

                </v-card>

            </v-col> -->
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: 'sei',
    data() {
        return {
            page: {
                color: 'cyan-darken-3',
                title: 'Contacto',
                icon: 'mdi-card-account-phone-outline',
                contactos: [

                    {
                        dependencia: 'Consejo de Participación Ciudadana',
                        icon: 'cc-cpc.png',
                        datos: [
                            'Teléfono: (844) 688 2178',
                            'Página Web: https://www.cpccoahuila.org.mx',
                            'CONSEJEROS',

                        ]
                    }


                ]
            }
        }

    }
}
</script>

<style lang="scss" scoped></style>
