import { TitlePages } from '../../../.nuxt/components';
<template>
    <v-container>

        <v-row>
            <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
            <v-col>



                <v-card class="mt-10 pa-6" elevation="0" color="article">
                    <div class="text-h4 text-center mb-8 font-weight-light">Organismos y miembros vinculados a la labor
                        de la entidad</div>

                    <v-row>
                        <v-col cols="12" md="4" v-for="(i, index) in integrantes" :key="index">
                            <v-card elevation="3" class="mx-auto mt-4 overflow-visible" rounded="xl" min-height="320"
                                color="blue-grey-lighten-5">

                                <!-- >4 INICIO DE POPUP -->
                                <v-dialog max-width="400">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props" icon="mdi-plus" :color="page.color" position="absolute"
                                            location="top right" class="mt-n4 mr-n2" elevation="4"></v-btn>
                                    </template>


                                    <v-card>
                                        <div v-for="(e, index) in i.curriculum" :key="index">
                                            <v-card-title class="bluegreyt">
                                                {{ e.subtitulo }}
                                            </v-card-title>

                                            <v-card-text>
                                                <v-list>
                                                    <v-list-item v-for="(item, i) in e.lista" :key="i" dense>
                                                        <v-icon>mdi-fountain-pen-tip</v-icon> {{ item }}
                                                    </v-list-item>
                                                </v-list>

                                            </v-card-text>
                                        </div>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <!-- <v-btn color="primary" text @click="i.dialog = false">
                                                Cerrar
                                            </v-btn> -->
                                        </v-card-actions>

                                    </v-card>
                                </v-dialog>


                                <div class="pa-4">
                                    <v-row align="center">
                                        <v-col cols="6">
                                            <v-avatar size="120" elevation="2">
                                                <v-img :src="`/img/cc/${i.foto}`" alt="foto" cover></v-img>
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="6" class="d-flex justify-center">
                                            <v-img width="80" :src="`/img/${i.img}`"></v-img>
                                        </v-col>
                                    </v-row>

                                    <v-card-item class="mt-4">
                                        <v-card-title class="text-h6 font-weight-bold text-wrap">{{ i.nombre
                                        }}</v-card-title>
                                        <v-card-subtitle class="text-wrap mt-2" style="opacity: 1; line-height: 1.2;">
                                            {{ i.cargo }}
                                        </v-card-subtitle>
                                    </v-card-item>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>



            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const dialog = ref(false)
const page = ref({
    color: 'blue-darken-4',
    title: 'Organismos',
    icon: 'mdi-account-group',
    presentacion: [{
        titulo: 'Funciones',
        texto: 'El Comité Coordinador del Sistema Anticorrupción del Estado de Coahuila de Zaragoza es la instancia responsable de establecer mecanismos de coordinación entre los integrantes del Sistema Estatal, y de éste con el Sistema Nacional, y tendrá bajo su encargo el diseño, promoción y evaluación de políticas públicas locales de prevención y combate a la corrupción.'
    },
    {
        titulo: 'Misión',
        texto: 'Somos un Órgano Rector que diseña, promociona y evalúa las políticas públicas integrales para la prevención y el combate a la corrupción, a través del establecimiento de mecanismos eficaces de coordinación y colaboración entre los integrantes del Sistema Estatal Anticorrupción alineado al Sistema Nacional.'
    },
    {
        titulo: 'Visión',
        texto: 'Ser un Órgano Rector garante en la adopción de medidas para el fortalecimiento Institucional en la prevención, detección y sanción, que permitan erradicar la opacidad, los actos ilícitos y de corrupción e incrementen la confianza de los ciudadanos respecto a las instituciones.'
    }

    ]
})
const integrantes = ref(
    [

        {

            nombre: 'ELIDÉ ALEJANDRINA ACOSTA REYES ',
            cargo: 'Secretaria Técnica del Sistema Estatal Anticorrupción',
            foto: 'st-ear.jpg',
            img: 'seac.png',
            web: 'https://www.seacoahuila.org.mx/',
            mail: 'elide.acosta@seacoahuila.org.mx',
            curriculum: [{
                subtitulo: 'Email',
                lista: ['elide.acosta@seacoahuila.org.mx']
            }]

        },
        {
            nombre: 'MIGUEL FELIPE MERY AYUP',
            dialog: false,
            cargo: 'Presidente del Tribunal Superior de Justicia y del Consejo de la Judicatura del Poder Judicial del Estado de Coahuila de Zaragoza.',
            foto: 'cc-pjecz-mfma.jpg',
            img: 'cc-pjecz.png',
            web: 'https://www.pjecz.gob.mx/',
            curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Maestría en Política Aplicada, Instituciones y Procesos Políticos. Instituto Universitario de Investigación Ortega y Gasset. 2007.',
                    'Licenciado en Derecho. Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila. 1996.',
                    'Diplomado en Gobernanza Local y Liderazgo Territorial. Fundación Ortega y Gasset. 2018',
                ]
            },
            {
                subtitulo: 'Experiencia Laboral',
                lista: [
                    'Noviembre 2019 a la fecha: Magistrado Presidente del Poder Judicial del Estado de Coahuila. Poder Judicial del Estado de Coahuila de Zaragoza.',
                    '2018 a octubre 2019: Magistrado Presidente de la Sala Regional. Poder Judicial del Estado de Coahuila de Zaragoza.',
                    '2014-2017: Primer Regidor de Torreón. Republicano Ayuntamiento de Torreón, Coahuila de Zaragoza.',
                    '2010-2013: Secretario del Republicano Ayuntamiento. Gobierno Municipal de Torreón, Coahuila de Zaragoza.',
                    '2009: Subsecretario de Desarrollo y Cooperación Política. Gobierno del Estado de Coahuila de Zaragoza.',
                    '2003-2005: Diputado Local. Congreso del Estado de Coahuila de Zaragoza.',
                    '2000-2002: Director General de Desarollo Social. Gobierno Municipal de Torreón, Coahuila de Zaragoza.',
                    '1996-1999: Secretario Particular Adjunto del Gobernador. Gobierno del Estado de Coahuila de Zaragoza',
                ]
            },
            {
                subtitulo: 'Logros y proyectos realizados',
                lista: [
                    'Autor del Libro "La Nueva Vía, hacia un modelo de ciudad". 2017.',
                    'Sistema de Normatividad Municipal. 2015.',
                    'Re-ingeniería administrativa del Gobierno Municipal. 2014.',
                    'Monitor de Cabildo. 2011-2012.'
                ]
            },

            {
                subtitulo: 'Actividades Académicas',
                lista: [
                    'Catedrático en la Maestría en Políticas Públicas',
                    'Catedrático en Derecho Constitucional en la UAdeC',
                    'Catedrático en Teoría del Estado en la UAdeC',
                    'Catedrático en Políticas Públicas en la UAdeC',
                    'Catedrático en Administración Pública en la UAdeC',
                    'Catedrático en Administración en la UAdeC',
                ]
            }
            ]
        },

        {
            nombre: 'MANUEL RAMÍREZ BRIONES',
            cargo: 'Auditor Superior del Estado de Coahuila de Zaragoza.',
            foto: 'cc-asec-as.png',
            img: 'cc-asec.png',
            web: 'https://www.asecoahuila.gob.mx/',
            curriculum: [{
                subtitulo: 'Datos Profesionales',
                lista: ['Contador Público (1981-1985), por la Universidad Autónoma de Coahuila, Torreón, Coahuila']
            },
            {
                subtitulo: 'Trayectoria Profesional',
                lista: [
                    'Auditor Especial de Planeación y Servicios Administrativos de la ASEC',
                    'Auditor de Planeación e Información de la ASEC',
                    'Auditor Especial de Cumplimiento Financiero de la ASEC',
                    'Auditor Especial de Desempeño de la ASEC',
                    'Encargado de la Dirección General de Evaluación y Seguimiento SEFIN',
                    'Director General de Impuestos SEFIN',
                    'Despacho de Asesoría a Entidades Gubernamentales como Socio Director',
                    'Director de Contabilidad del Municipio de Torreón',
                    'Jefe de Departamento de Contabilidad del Municipio de Torreón'
                ]
            },
            {
                subtitulo: 'Trayectoria Académica',
                lista: ['Catedrático de las materias Auditoría y Contabilidad (1992-1996) UAdeC',
                    'Auditor en la Contraloría General (Enero 1990 a enero 1996) UAdeC'
                ]
            },
            ]

        },

        {
            nombre: 'KARLA SAMPERIO FLORES',
            cargo: 'Titular de la Fiscalía Especializada en Delitos por Hechos de Corrupción.',
            foto: 'cc-fech-ksf.png',
            img: 'cc-fehc.png',
            web: 'https://sitio.fgecoahuila.gob.mx/',
            curriculum: [{
                subtitulo: 'Datos Profesionales',
                lista: []

            },



            ]

        },

        {
            nombre: 'ELMA MARISOL MARTÍNEZ GONZÁLEZ',
            cargo: 'Secretaria de Fiscalización y Rendición de Cuentas del Estado de Coahuila de Zaragoza.',
            foto: 'cc-sefirc-emmg.jpg',
            img: 'cc-sefirc.png',
            web: 'http://www.sefircoahuila.gob.mx/',
            curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Es licenciada en Derecho egresada de la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila, especializada en Derecho a la Información, Fiscalización y Combate a la Corrupción por la Universidad Interamericana de Derechos Humanos, con estudios de maestría en Impuestos por la Universidad Autónoma del Noreste.'
                ]
            },
            {
                subtitulo: 'Cuenta con diversos diplomados, tales como:',
                lista: [
                    'Normas Profesionales de Auditoría del Sistema Nacional de Fiscalización',
                    'Ley General de Responsabilidades Administrativas',
                    'Derecho Municipal.',
                    'Derecho Laboral Burocrático.',
                    'Seminario Nacional de Vinculación de los Sistemas Nacionales Anticorrupción, Fiscalización y Transparencia.'


                ]
            },
            {
                subtitulo: 'Otras Actividades Profesionales',
                lista: [

                    'Coordinadora Jurídica de la Tesorería y como Coordinadora de Responsabilidades y Asistencia Jurídica. Presidencia Municipal de Saltillo.',
                    'Subdirectora en la Coordinación de Asuntos Jurídicos. Auditoría Superior del Estado.',
                    'Directora de Seguimiento de Procedimientos. Secretaría de Fiscalización y Rendición de Cuentas.',
                    'Coordinadora y Facilitador Jurídico del “Proyecto de Modernización Normativa de la Secretaría de Seguridad Pública del Estado de Coahuila”. Secretaría de la Contraloría y Modernización Administrativa.',
                    'Asesor Jurídico en el Voluntariado de Coahuila y Abogado Defensor. Procuraduría de la Familia del Sistema DIF Coahuila.'
                ]
            },

            ]

        },

        {
            nombre: 'DULCE MARIA FUENTES MANCILLAS',
            cargo: 'Comisionada Presidente del Instituto Coahuilense de Acceso a la Información Pública.',
            foto: 'cc-icai-lgb.jpg',
            img: 'cc-ica.png',
            web: 'http://www.icai.org.mx/',
            curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Licenciatura en Derecho• noviembre del 2004 • Facultad de Jurisprudencia de la UAdeC.',
                    'Licenciatura en Educación Media en Ciencias Sociales• Agosto del 2004 • Escuela Normal Superior de Tamaulipas.',
                    'Maestría en Derecho Constitucional y Políticas Gubernamentales.'
                ]
            },
            {
                subtitulo: 'Experiencia',
                lista: [
                    'Comisionada • ICAI • 04 de agosto del 2023-Actual',
                    'Titular de la Unidad de Acceso a la Información •Municipio de Saltillo •2022-2023',
                    'Subsecretaria del Republicano Ayuntamiento • Municipio de Saltillo. • 2019-2021',
                    'Titular de la Unidad de Acceso a la Información •Municipio de Saltillo •2018-2019',
                    'Catedrática en la materia de Comunicación Política •Universidad La Salle •2017',
                    'Coordinadora de Comunicación Social •Secretaria de Fiscalización y Rendición de Cuentas del Gobierno del Estado de Coahuila •2013-2017'

                ]
            },
            {
                subtitulo: 'DIPLOMADOS Y CURSOS',
                lista: [
                    'Curso de Actualización en Materia Jurídica 2022 • Coordinación de Posgrado Facultad de Jurisprudencia de la UAdeC.',
                    'Curso de Gobierno Abierto 2022 • Programa de las Naciones Unidas para el Desarrollo Instituto Nacional de Transparencia, Acceso a la Información Y Protección de Datos Personales.',
                    'Curso ABC de la Ley General de Archivos 2022• Instituto Coahuilense de Acceso a la Información Púbica.',
                    'Curso Teórico Practico sobre el uso del Sistema de Portales de Obligaciones de Transparencia (SIPOT) •Instituto Nacional de Transparencia y Acceso a la Información en conjunto con el ICAI.',
                    'Curso Estrategias de Redes Sociales con Resultados de Negocio 2016 • INTELEKIA.',
                    'Seminario Marketing Político 2014 • Sufragio Consultores.',
                    'Diplomado en Comunicación Política 2012• Universidad Nacional Autónoma de México.',
                    'Seminario Internacional Temas Actuales del Derecho a la Información en Materia Electoral 2011• Instituto Electoral de Participación Ciudadana de Coahuila, Centro de Derechos Políticos de la Universidad Autónoma de Coahuila.',
                    'Diplomado Psicología y Genero en la Procuración de Justicia 2008• Facultad de Psicología de la Universidad Nacional Autónoma de México.',
                    'Seminario Internacional sobre Democracia y Gobernabilidad 2007• Facultad de Jurisprudencia de la UAdeC, Universidad de Barcelona y el Instituto Electora de Participación Ciudadana.',
                    'Curso Taller Jornada de Inducción Docente 2017• Universidad La Salle.',
                    'Curso Taller Negociación y Manejo de Conflictos 2008 • Universidad Iberoamericana de Torreón, Instituto de Administración Pública de Coahuila.',
                    'Curso taller Lenguaje Incluyente •secretaria de las Mujeres del Gobierno del Estado de Coahuila de Zaragoza.',
                    'Curso taller Violencia, Hostigamiento y Acoso Sexual Laboral, Hacia las mujeres 2011 • Instituto Coahuilense de las Mujeres.'
                ]
            },
            ]

        },
        {
            nombre: 'JESÚS GERARDO SOTOMAYOR HERNÁNDEZ',
            cargo: 'Magistrado Presidente del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
            foto: 'cc-tjacz.jpg',
            img: 'cc-tjacz.png',
            web: 'http://www.tjacoahuila.org/',
            curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Licenciado en Derecho Facultad de Derecho de la UADEC unidad Torreón.',
                    'Diplomado en Gestión Pública por la Universidad Iberoamericana de la Laguna.',
                    'Especialización en el Sistema Integral de Justicia Penal para Adolescentes.',
                ]
            },
            {
                subtitulo: 'Experiencia Laboral',
                lista: [
                    'Magistrado de la Sala Especializada en Materia de Responsabilidades Administrativas del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                    'Subsecretario de Asuntos Jurídicos en el Republicano Ayuntamiento de Torreón.',
                    'Director del Instituto de Investigaciones Jurídicas y Parlamentarias del Congreso del Estado de Coahuila.',
                    'Asesor en la Secretaría General de Gobierno del Estado de Coahuila.',
                    'Secretaria de Desarrollo Social en el Republicano Ayuntamiento de Torreón.',
                    'Secretario Abogado y Agente del Ministerio Público por Ministerio de Ley.Procuraduría General de Justicia del Estado de Coahuila Región Laguna',
                ]
            },
            {
                subtitulo: 'Actividades Académicas',
                lista: [
                    'Taller de Destrezas de Litigación en Juicios Orales(2019).',
                    'Taller de Prácticas Parlamentarias.',
                    'Taller de Juicio Oral Familiar',
                    'Curso de Contraloría Dinámica.',
                    'Curso sobre Tópicos Fiscales de la Actualidad',
                    'Curso Reformas Fiscales(2017)',
                    'Curso de Reducción de Pagos Provisionales.',
                    'Curso Amparo Administrativo',
                    'Curso Amparo Fiscal',
                    'Programa de Sensibilización y Capacitación dirigida a Abogados.',
                    'Taller de Juicio Oral en Materia Mercantil(2016)',
                    'Catedrático de la Preparatoria Venustiano Carranza en Materia de Lógica.',
                    'Catedrático de la Universidad La Salle en Materia Derecho Administrativo.',
                ]
            },
            {
                subtitulo: 'Otras Actividades en las que ha participado',
                lista: [
                    'Vocal en el Consejo Regional de la Abogacía.',
                    'Secretario en el Consejo Regional de la Abogacía.',
                    'Presidente del Colegio Regional de Abogados de la Laguna.',
                    'Secretario del Colegio Regional de Abogados de la Laguna.',
                    'Titular en el Bufete Jurídico Gratuito del Colegio Regional de la Laguna',
                ]
            },

            ]

        },

        // Termina integrantes
    ]
)


</script>

<style lang="scss" scoped></style>
