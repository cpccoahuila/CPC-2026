<template>
<v-footer 
class="pa-0 "
elevation="2"
>
    <v-card flat tile class="text-center" width="100%" color="#413e60">
        <v-card-text class="white--text ">
            <v-btn
            size="small"
            color="#413e60"
            elevation="0"
            v-for="(icon,i) in icons" :href="icon.to" :key="i" class="mx-4 white--text" icon>
                <v-icon size="25px" >
                    {{ icon.icon }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pa-0">

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text pa-2">
            {{ new Date().getFullYear() }} — <strong> Consejo de Participación Ciudadana del Sistema Anticorrupción del Estado de Coahuila de Zaragoza. </strong> 
        </v-card-text>
        <v-card-text class="white--text">
            <a href="https://cpccoahuila.github.io/" class="white--text">Historial de versiones antiguas</a>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [{
                icon: 'mdi-facebook',
                to: 'https://www.facebook.com/CPCCoahuila/'
            },
            {
                icon: 'mdi-twitter',
                to: 'https://twitter.com/CPCCoahuila'
            },
            {
                icon: 'mdi-youtube',
                to: 'https://www.youtube.com/@sistemaanticorrupciondeles8877'
            }
        ],
    }),
}
</script>