<template>
  <v-container class="min-height-vh bg-grey-lighten-5 pb-10">
    <v-row justify="center" class="py-8">
      <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
    </v-row>

    <v-row justify="start">
      <v-col v-for="(e, index) in comunicados" :key="index" cols="12" sm="6" md="4" class="pa-4">
        <v-card class="clean-card h-100 d-flex flex-column" color="article">
          <v-card-item>
            <div class="d-flex align-center mb-2">
              <v-icon :icon="e.documento ? 'mdi-file-pdf-box' : 'mdi-open-in-new'"
                :color="e.documento ? 'red-lighten-1' : 'blue-lighten-1'" size="small" class="mr-2"></v-icon>
              <span class="text-caption text-uppercase font-weight-bold text-grey-lighten-1 tracking-widest">
                {{ e.documento ? 'PDF' : 'Enlace' }}
              </span>
            </div>

            <v-card-title class="text-body-1 font-weight-bold text-grey-darken-3 text-wrap pb-2">
              {{ e.titulo }}
            </v-card-title>

            <v-card-text class="text-body-2 text-grey-darken-1 pa-0 line-height-relaxed">
              {{ e.texto }}
            </v-card-text>
          </v-card-item>

          <v-spacer></v-spacer>

          <v-card-actions class="pa-4">
            <v-btn :href="e.documento ? '/comunicados' + e.documento : e.to" :target="e.documento ? '_blank' : '_self'"
              block variant="tonal" :color="page.color" class="text-none font-weight-medium rounded-pill">
              {{ e.link }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const page = {
  color: 'blue-grey-darken-3', // Color más sobrio y profesional
  title: 'Comunicados',
  icon: 'mdi-text-box-outline'
};

const comunicados = [

  {
    titulo: "33. Comunicado SEPTIEMBRE 2026 - HUB KYBERNUS.pdf",
    texto: "Comunicado 33.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1OUVDh64XmDUSL4wz1-yO0BcAQxSVO8zX/view?usp=drive_link"
  },

  {
    titulo: "32. Comunicado JULIO 2026 Mesas de Trabajo Retos y Desafíos del Tribunal de Disciplina Judicial.pdf",
    texto: "Comunicado 32.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1sZ3rZ-dVmtap7P1AHLaz8iJOIqU26Al2/view?usp=drive_link"
  },
  {
    titulo: "31. Comunicado JUNIO 2026 reunión con Contralores Municipales CPC",
    texto: "Comunicado 31.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1fGFBGDfI7kIEE2kjrnKHWK59OqY2dEH2/view?usp=drive_link"
  },
  {
    titulo: "30. Comunicado MAYO 2026 Curso taller Ética Pública ASEC",
    texto: "Comunicado 30.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1YA6vt_sKvws7c-tWf0pDE1YOTcMN7XYl/view?usp=drive_link"
  },
  {
    titulo: "29. Comunicado MAYO 2026 Feria Internacional del Libro 2026",
    texto: "Comunicado 29.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1-w6FC-2ogD9mkp-baCnJv5QbWDmyLtPg/view?usp=drive_link"
  },
  {
    titulo: "28. Comunicado ABRIL 2026  Ley Archivos CPC",
    texto: "Comunicado 28.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1SYOW0WW8UEeHXzAwa8E0ka2r4PhqnJDv/view?usp=drive_link"
  },
  {
    titulo: "27. Comunicado MARZO 2026 Congreso Género y Fiscalías Anticorrupción",
    texto: "Comunicado 27.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1dQEzJOPi1g0fK_YzyJvdFt7lEqIEQUET/view?usp=drive_link"
  },
  {
    titulo: "26. Comunicado MARZO 2026 Capacitación a jovenes CNCI",
    texto: "Comunicado 26.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1KVgl8czxZtXgwdGHMLlgBSH9uAc_HJS1/view?usp=drive_link"
  },
  {
    titulo: "25. Comunicado MARZO 2026 Actividades 8 Marzo Día Internacional de la Mujer",
    texto: "Comunicado 25.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1DMdCsjWv1tFVCJJ07zCsSwMU1uEeQ1Bw/view?usp=drive_link"
  },
  {
    titulo: "24. Comunicado MARZO 2026 - Calendario capacitaciones PAA",
    texto: "Comunicado 24.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/17jNzzggp4Ut0WgEEFnbHH2T90xk2L4hG/view?usp=drive_link"
  },
  {
    titulo: "23. Comunicado MARZO 2026 - Invitado de la RPC - Fundación Merced",
    texto: "Comunicado 23.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1Q44ogHHo1qv3FYorwXcHCxPGcbcYs6nZ/view?usp=drive_link"
  },
  {
    titulo: "22. Comunicado Marzo Capacitación a nuevos integrantes RPC",
    texto: "Comunicado 22.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1-lURzRDoFjKCLm4Jp931t8rs2DOZQvJ0/view?usp=drive_link"
  },
  {
    titulo: "21. Comunicado FEBRERO 2026 - Invitado de la RPC - UANE",
    texto: "Comunicado 21.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1Qzj-oMsKba_b-8v7tTfpX0bsvr4gTNJF/view?usp=drive_link"
  },
  {
    titulo: "20. Comunicado FEBRERO 2026 Informe del Magistrado Presidente",
    texto: "Comunicado 20.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1_Qz79oIdZrW1xmCiNAbZPzlqZZwEw-gD/view?usp=drive_link"
  },
  {
    titulo: "19. Comunicado MARZO 2026 Reunión CANACINTRA MONCLOVA Y UNEA",
    texto: "Comunicado 19.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1zzazWJ5Nbf-4ecUYraLqp7GRdt8xtoAx/view?usp=drive_link"
  },
  {
    titulo: "18. Comunicado FEBRERO 2026 - Invitado de la RPC - UNEA",
    texto: "Comunicado 18.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1sC5ArPO-nyz92LqWF2fRkrGImRwgq3Eu/view?usp=drive_link"
  },
  {
    titulo: "17. Comunicado ENERO 2026 invitado de la RPC - CCI LAGUNA",
    texto: "Comunicado 17.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1Lv1UCbw-TSRSpol1MsaMOBb1xNriDQYc/view?usp=drive_link"
  },
  {
    titulo: "16. Comunicado FEBRERO 2026 Comité Ética de ASEC",
    texto: "Comunicado 16.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1A0IsSOIHJdnJocb2HbpA5pw5xGYIGJ1X/view?usp=drive_link"
  },
  {
    titulo: "15. Comunicado ENERO 2026 Adhesión a la RPC",
    texto: "Comunicado 15.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1OkUge-sjtFZTN_TxrfrL4sDSt-wfF3Gs/view?usp=drive_link"
  },
  {
    titulo: "14. Comunicado DICIEMBRE Pequeños Agentes de Cambio",
    texto: "Comunicado 14.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1oAca67Dn4xfn9UtSosamPMVmlpsd9Nmc/view?usp=drive_link"
  },
  {
    titulo: "13. Comunicado DICIEMBRE 2025 Taller de LSM y Lectoescritura Braille",
    texto: "Comunicado 13.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1VdegTpX9K9en5Nso4FqR2LX6O2ZpgFGI/view?usp=drive_link"
  },
  {
    titulo: "12. Comunicado DICIEMBRE 2025 Rally Karewa 5ta edición",
    texto: "Comunicado 12.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1_QOvBGUCl72QJR8dFPCKc87auCaddcbz/view?usp=drive_link"
  },
  {
    titulo: "11. Comunicado DICIEMBRE 2025 Gira Estatal RPC",
    texto: "Comunicado 11.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1PJDgGDRrLFXYDhb7cyMPEZihDpVIwVOd/view?usp=drive_link"
  },

  {
    titulo: "10. Comunicado DICIEMBRE  2025 TESTIGOS SOCIALES",
    texto: "Comunicado 10.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1RhMvkvAN_c5sbrzQtO6p_3ueFU5P32x-/view?usp=drive_link"
  },
  {
    titulo: "9. Comunicado DICIEMBRE 2025 - Invitado de la RPC - UANE",
    texto: "Comunicado 9.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1_zdhXd0u17el_uNpG90YCmGvEDrVMFpH/view?usp=drive_link"
  },
  {
    titulo: "8. Comunicado NOVIEMBRE 2025 Comida de la Amistad CANACOSERVYTUR Torreón",
    texto: "Comunicado 8.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1LhirXagtMUJ3Fla5OYNG-jZ3mWFg_7UO/view?usp=drive_link"
  },
  {
    titulo: "7. Comunicado NOVIEMBRE 2025 Invitado de la RPC - COPARMEX COAH SURESTE",
    texto: "Comunicado 7.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1jgFJ2bDUiGAUyNY3H76gb3WrpXia4jJN/view?usp=drive_link"
  },
  {
    titulo: "6. Comunicado NOVIEMBRE 2025 Conversatorio por Conmemoración del Voto de la Mujer",
    texto: "Comunicado 6.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1TjgsppTfHSWAHRZvLG2gr9Il4_amBej3/view?usp=drive_link"
  },
  {
    titulo: "4. Comunicado NOVIEMBRE 2025 CNCI Red CPC",
    texto: "Comunicado 4.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1PGOOMIW75VGZA0PwZHRjle6fe-9TDoT8/view?usp=drive_link"
  },
  {
    titulo: "3. Comunicado NOVIEMBRE 2025 Cambio lineamientos convocatoria RPC",
    texto: "Comunicado 3.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1w46S7ItCD0kP8DmIWhxRCQuVXvo3BieX/view?usp=drive_link"
  },
  {
    titulo: "2. Comunicado OCTUBRE 2025 Invitado de la RPC - KYBERNUS",
    texto: "Comunicado 2.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1QfhedLJ0U74Agw8ynGbqkOeiqjhWBha0/view?usp=drive_link"
  },
  {
    titulo: "1. Comunicado OCTUBRE 2025 Sesiones del CPC con Interprete en LSM",
    texto: "Comunicado 1.",
    link: "Ver comunicado",
    to: "https://drive.google.com/file/d/1678yuNuJVQ9IfB7ikHf3ySI6NotD89q6/view?usp=drive_link"
  },
  {
    titulo: "Pronunciamiento del Consejo de Participación Ciudadana",
    texto: "Pronunciamiento del Consejo de Participación Ciudadana.",
    link: "Ver comunicado",
    documento: "/Pronunciamiento.pdf"
  },


  {
    titulo: "Proyecto de Investigación: Educación y Sociedad",
    texto: "Educación y Sociedad con integridad, ética y valores.",
    link: "Ver comunicado",
    documento: "/Proyecto de Investigacion.pdf"
  },


  {
    titulo: "Boletín CPC 10",
    texto: "Boletín informativo correspondiente al periodo CPC/10/2023-24",
    link: "Ver comunicado",
    documento: "/Boletín 10 CPC 2023 2024.pdf"
  },
  {
    titulo: "Capacitación a municipios",
    texto: "Recursos sobre la Política Estatal Anticorrupción.",
    link: "Ir al sitio",
    to: "/comunicados/capacitaciones"
  },
  { titulo: "Boletín CPC 09", texto: "Boletín CPC/09/2023-24", link: "Ver comunicado", documento: "/Boletín 09 CPC 2023 2024.pdf" },
  { titulo: "Boletín CPC 08", texto: "Boletín CPC/08/2023-24", link: "Ver comunicado", documento: "/Boletín 08 CPC 2023 2024.pdf" },
];
</script>

<style scoped>
.min-height-vh {
  min-height: 100vh;
}

.clean-card {
  background: #ffffff !important;
  border: 1px solid #f0f0f0 !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.clean-card:hover {
  border-color: transparent !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06) !important;
  transform: translateY(-5px);
}

.tracking-widest {
  letter-spacing: 0.1em !important;
}

.line-height-relaxed {
  line-height: 1.6 !important;
}

/* Limita el título a 2 líneas para que las cards sean simétricas */
.text-wrap {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 3rem;
}
</style>