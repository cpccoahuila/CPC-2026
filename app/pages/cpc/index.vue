<template>
    <v-container>
        <v-row justify="center">
            <title-pages :color="page.color" :title="page.title" :icon="page.icon" />

            <v-col cols="12">
                <v-divider class="mb-6"></v-divider>

                 <v-card class="mt-10 pa-6" elevation="0" color="article">
                    <div class="text-h4 text-center mb-8 font-weight-light">Miembros que integran el CPC</div>

                    <v-row>
                        <v-col cols="12" md="4" v-for="(i, index) in integrantes" :key="index">
                            <v-card elevation="3" class="mx-auto mt-4 overflow-visible" rounded="xl" min-height="320">

                                <v-dialog v-model="dialog[index]" max-width="1000">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props" icon="mdi-plus" :color="page.color" position="absolute"
                                            location="top right" class="mt-n4 mr-n2" elevation="4"></v-btn>
                                    </template>
                                    

                                    <v-card rounded="xl">
                                        
                                        <div class="text-center text-subtitle-1 mb-2 font-weight-bold">{{ i.nombre }}</div>
                                            
                                        <!--<v-card-title class="bg-grey-lighten-3 d-flex align-center">
                                            <v-icon class="mr-2">mdi-email-outline</v-icon> Curriculum
                                        </v-card-title>-->
                                         <v-divider></v-divider>
                                        <div v-for="(e, index) in i.curriculum" :key="index">
                                            <v-card-title class="bluegreyt">
                                                {{ e.subtitulo }}
                                            </v-card-title>

                                            <v-card-text>
                                                
                                                <v-list>
                                                    <v-list-item v-for="(item, i) in e.lista" :key="i" dense>
                                                        <v-icon>mdi-checkbox-multiple-blank-circle-outline</v-icon> {{ item }}
                                                    </v-list-item>
                                                </v-list>
                                                 

                                            </v-card-text>
                                        </div>

                                        <v-divider></v-divider>
                                        <!--<v-card-text class="pa-6 text-center">
                                            <div class="text-subtitle-1 mb-2 font-weight-bold">{{ i.nombre }}</div>
                                            <v-chip color="primary" variant="tonal" prepend-icon="mdi-email">
                                                {{ i.mail }}
                                            </v-chip>
                                        </v-card-text>-->
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn variant="text" @click="dialog[index] = false">Cerrar</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <div class="pa-4">
                                    <v-row align="center">
                                        <v-col cols="6">
                                            <v-avatar size="120" elevation="2">
                                                <v-img :src="`/img/cpc/${i.foto}`" alt="foto" cover></v-img>
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

                <v-card class="mt-5 pa-6 pa-md-10" elevation="2" rounded="lg" color="article">

                    <v-row v-for="(e, index) in page.presentacion" :key="index" class="mb-6">
                        <v-col cols="12">
                            <div class="text-h4 text-md-h3 text-center font-weight-bold mb-4"
                                :style="{ color: page.color }">
                                {{ e.titulo }}
                            </div>
                            <p class="text-body-1 text-justify px-md-12">
                                {{ e.texto }}
                            </p>
                            <v-divider v-if="index < page.presentacion.length - 1" class="mt-8"></v-divider>
                        </v-col>
                    </v-row>
                </v-card>

               

                <v-card class="mt-10 pa-6 pa-md-10" border elevation="1">
                    <div class="text-h4 text-center mb-10 font-weight-bold">Valores</div>
                    <v-row v-for="(e, index) in Valores" :key="index" align="center" class="mb-4">
                        <v-col cols="12" md="3" class="text-center text-md-right">
                            <span class="text-h6 font-weight-black" :style="{ color: page.color }">{{ e.valor }}</span>
                        </v-col>
                        <v-divider vertical class="d-none d-md-flex mx-4"></v-divider>
                        <v-col cols="12" md="8">
                            <p class="text-body-1">{{ e.texto }}</p>
                        </v-col>
                    </v-row>
                </v-card>

                <!----<v-card class="mt-10 pa-8 bg-grey-lighten-4" rounded="xl">
                    <v-row>
                        <v-col cols="12" md="6" class="text-center">
                            <div class="text-h5 mb-4">Planes</div>
                            <div class="d-flex flex-wrap justify-center gap-2">
                                <v-btn v-for="(e, i) in planes" :key="i" :href="`/planes/${e.src}`" target="_blank"
                                    variant="elevated" color="white" class="ma-1" rounded="pill">
                                    {{ e.year }}
                                </v-btn>
                            </div>
                        </v-col>

                        <v-col cols="12" md="6" class="text-center">
                            <div class="text-h5 mb-4">Informes</div>
                            <div class="d-flex flex-wrap justify-center gap-2">
                                <v-btn v-for="(e, i) in informes" :key="i" :href="`/informes/${e.src}`" target="_blank"
                                    variant="tonal" :color="page.color" class="ma-1" rounded="pill">
                                    {{ e.year }}
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>-->

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

// En Nuxt 3/4 usamos <script setup> por estándar
const page = {
    color: 'purple',
    title: 'Quiénes Somos',
    icon: 'mdi-account-supervisor-circle-outline',
    presentacion: [
        {
            titulo: 'Misión',
            texto: 'Coordinar la participación de la ciudadanía, la academia y el sector privado e impulsar políticas públicas y acciones encaminadas a combatir la corrupción en concordancia con el sistema anticorrupción del estado de Coahuila.'
        },
        {
            titulo: 'Visión',
            texto: 'Ser la instancia que refleje la perspectiva ciudadana con respecto al combate a la corrupción garantizando su incidencia en la agenda pública y contribuyendo en la consolidación del sistema anticorrupción del estado de Coahuila.'
        }
    ]
};

const integrantes = [
    {
        nombre: 'Juan Carlos Guzmán Escobedo',
        cargo: 'Consejero Presidente ',
        foto: 'cpc-jcge.jpg',
        img: 'cc-cpc.png',
        mail: 'carlos.guzman@cpccoahuila.org.mx',
        curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Obtuvo el título de contador público auditor por la Universidad Metropolitana de Coahuila.',
                    'Cursó la maestría en planeación con acentuación en formulación y evaluación de proyectos por la Facultad de Economía de la Universidad Autónoma de Coahuila.',
                    'Además, cursó la especialidad en Derecho a la Información, Fiscalización y Combate a la Corrupción en la Academia Interamericana de Derechos Humanos de la Universidad Autónoma de Coahuila'
                ]
            },
            {
                subtitulo: 'Experiencia Profesional',
                lista: [
                    'El Maestro Guzmán se ha desempeñado tanto en el sector público como en el privado.',
                    'Contralor, subgerente de control y subgerente de servicios en varias sucursales del Banco Nacional de México.',
                    'Director de la Unidad Catastral del municipio de Acuña en dos administraciones.',
                    'Gerente y conductor de programas en reconocida estación de radio en Acuña, Coah.',
                    'Propietario de Guzmán Despacho Contable en Acuña, Coahuila.',
                    'Subdirector de Finanzas de los Servicios de Salud de Coahuila.',
                    'Director de administración de la Academia Interamericana de Derechos Humanos de la UAdeC.',
                    'Director General de Administración del Tribunal Electoral de Coahuila.',
                    'A partir de octubre del 2021 se desempeña como consejero de Participación Ciudadana del Sistema Anticorrupción del estado de Coahuila.'
                
                ]
            }
        ]
    },
    {
        nombre: 'Karla Ivonne Natividad González',
        cargo: 'Consejera',
        foto: 'cpc-king.png',
        img: 'cc-cpc.png',
        mail: 'karla.natividad@cpccoahuila.org.mx',
        curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Egresada de la carrera de Comercio Internacional por el ITESM Campus Saltillo y tiene una maestría en Administración Pública. Su negocio se llama Blwms, y tiene más de 15 años dirigiendola.',
                    
                ]
            },
            {
                subtitulo: 'Experiencia Profesional',
                lista: [
                    'Obtuvo el primer lugar del Premio Estatal de la Juventud y en 2014 el primer lugar del Premio Municipal de la Juventud, ambos en logro emprendedor.',
                    'Presidió la Comisión de Mujeres Empresarias de Coparmex Coahuila Sureste, espacio para fortalecer a la mujer empresaria y poder brindarle herramientas para su crecimiento.',
                    'Fue seleccionada para participar en la Exposición “Ellas Hacen Historia”, iniciativa del Senado de la República en conjunto con Facebook México e Instagram, donde se expuso la historia de 10 emprendedoras y de esta forma inspirar a más mujeres a emprender.',
                    'Formó parte del Consejo de la Asociación de Exatec.',
                    'Es cofundadora de Kaena, Mujeres con Valor, AC una asociación sin fines de lucro para buscar el crecimiento y desarrollo no solo personal sino profesional de todas las mujeres.',
                    'Participó en el proceso electoral 2023-2024, como Consejera Electoral Propietaria del 08 Consejo Distrital del Instituto Nacional Electoral en el Estado de Coahuila.',
                    'Actualmente es Vicepresidenta de Coparmex Coahuila Sureste, y forma parte del Consejo de la Comisión de Mujeres Empresarias y de la Comisión de Desarrollo Democrático, ambas de Coparmex.',
                    'En Marzo de este año obtuvo el nombramiento como Consejera del Consejo de Participación Ciudadana del Sistema Estatal Anticorrupcion, donde busca lograr el involucramiento de la sociedad en practicas comunes que coadyuven a la disminución de la desconfianza ciudadana en el sector publico y privado.'
                
                ]
            }
        ]
    },
    {
        nombre: 'Carlos Antonio Franco Flores',
        cargo: 'Consejero',
        foto: 'cpc-caff.png',
        img: 'cc-cpc.png',
        mail: 'carlos.franco@cpccoahuila.org.mx',
        curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Licenciado en Derecho por el Tecnológico de Monterrey, campus Monterrrey (2003), cuenta con un Master en Ciencias Jurídicas otorgado por la Universidad Pompeu Fabra de Barcelona, España (2009). ',
                    'Especialista en Derecho a la Información, Fiscalización y Combate a la Corrupción grado obtenido con mención honorífica por la Academia Interamericana de Derechos Humanos, Saltillo, Coahuila.',
                    
                ]
            },
            {
                subtitulo: 'Experiencia Profesional',
                lista: [
                    'Consejero de Participación Ciudadana del Sistema Estatal Anticorrupción del Estado de Coahuila de Zaragoza.',
                    'Ha colaborado en las áreas jurídicas de los Gobiernos Estatal de Coahuila y del Municipal de Saltillo, en las áreas de litigio constitucional, asuntos legislativos y regulación, así como consultoría externa',
                    'Asesor Parlamentario en las LXI y LXV Legislaturas de la Cámara de Diputados participando en las comisiones de Derechos Humanos, Presupuesto y Cuenta Pública, Transparencia y LXII, LXIII Legislaturas en la Cámara de Senadores en las comisiones de Atención a Grupos Vulnerables, Salud, Turismo, así como Mesa Directiva.',
                    'Se desempeñó como Subdirector de Ponencia en el Instituto Nacional de Transparencia y Acceso a la Información Pública y Protección de Datos Personales. Director General del Instituto Coahuilense de Acceso a la Información Pública.',
                    'En el sector privado formó parte de Estrategia Pública Consultores S.C. en la Ciudad de México en las áreas de infraestructura, energía y turismo. Es socio fundador de PALS Consultores S.C., consultoría especializada en el diseño de políticas públicas, asesoría legislativa, regulación y cumplimiento.',
                    
                
                ]
            }
        ]
    },
    {
        nombre: 'Diana Marisol Flores Rivera',
        cargo: 'Consejera',
        foto: 'cpc-dmfr.png',
        img: 'cc-cpc.png',
        mail: 'diana.flores@cpccoahuila.org.mx',
        curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Licenciada en Derecho, egresada de la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila, (2004) cuenta con una maestría en Derecho con acentuación en Sistema Penal Acusatorio cursada en la Facultad de Jurisprudencia (2015), además de una Especialidad en Psicología y Género en la Procuración de Justicia impartida por la UNAM y la FEVIM (2008); Docente Certificada por la Secretaría Técnica del Consejo de Coordinación para la Implementación del Sistema de Justicia Penal (SETEC) de la Secretaría de Gobernación (2017).',
                    'Ha participado en diversos Diplomados y talleres prácticos sobre Juicios Orales, Mediación Penal, Negociación, Justicia Restaurativa, Derechos Humanos, Transparencia y Enfoque de los Derechos de la Infancia. (2007 a la fecha).',
                    'Ha asistido a congresos nacionales e internacionales sobre Mediación y Justicia Juvenil Restaurativa en diversos estados de la Republica y países de Latinoamérica, donde ha participado en entrenamientos de reuniones restaurativas, además en seminarios de Juicios Orales y del Sistema de Justicia Penal Acusatorio. (2009- 2020).',
                ]
            },
            {
                subtitulo: 'Experiencia Profesional',
                lista: [
                    'Catedrática de la materia de Medios Alternos de Solución de Conflictos en la carrera de Licenciatura en Derecho en la Universidad Americana del Noreste Campus Saltillo (2009- 2012) e  instructora en la impartición de distintos talleres y cursos sobre Mediación Penal, Justicia Restaurativa y Cultura de la Legalidad dirigidos a Ministerios Públicos, Policías Estatales y Municipales, Estudiantes de Derecho, integrantes de Foros y Barras de Abogados, universitarios y padres de familia, entre otros, en las distintas regiones del Estado. (2009- 2020).',
                    'Ponente en Mesas de Trabajo y Foros de Mediación en Congresos Nacionales en la ciudad de México y en distintos Estados de la República como Oaxaca, Nuevo León y Baja California, así como en el Seminario de Buenas Prácticas de Justicia Restaurativa dirigido a Magistrados, Jueces y Fiscales de la ciudad de Bogotá, Colombia (2010- 2020).',
                    'Participó con propuestas de cambio a la Iniciativa de Ley Nacional de Mecanismos Alternativos de Solución de Controversias en el Senado de la Republica que hoy se encuentra vigente. (2014)',
                    'Disertante en la Casa de la Cultura Jurídica de la Suprema Corte de Justicia de la Nación en las ciudades de Saltillo y Torreón. (2012- 2018)',
                    'Directora del Programa Cultura de la Legalidad implementado en el Estado de Coahuila por el National Strategy Information Center de Washington D.C. (2009- 2013)',
                    'Miembro del Colegio de Mediadores de Coahuila A.C., miembro de la Mesa Directiva en la Asociación de Abogados del Estado de Coahuila e integrante del Capitulo Coahuila de la Asociación de Resolución de Conflictos, A.C. (ARCO). (2012 a la fecha)',
                    'Encargada de crear, implementar, supervisar y dirigir el Órgano de Mecanismos Alternativos de Solución de Controversias en Materia Penal en sede ministerial en el Estado de Coahuila. (2009- 2018)',
                    'Desde el ámbito privado, se desempeñó como Facilitadora de Dialogo entre Autoridades de los tres niveles de gobierno, servidores públicos y miembros de los distintos Colectivos de Familias de Personas Desaparecidas en el Estado de Coahuila, con el fin de crear una nueva ley orgánica y llevar a cabo la revisión de casos específicos, dentro de la Consultoría en Derecho, conformada por la Mtra. Susana Camacho Maciel y el Mtro. Omar Gómez Trejo de la Ciudad de México, así como por el Dr. Miguel Ángel Urbina Martínez de Guatemala. (2022- 2024)',
                    'Consultora Independiente en Derecho Penal y Asesora para el desarrollo de Proyectos de Resoluciones Administrativas por faltas cometidas por servidores públicos en la Fiscalía General del Estado de Coahuila. (2024 – 2025)',
                    'Actualmente se desempeña como Consejera del Consejo de Participación Ciudadana (CPC) del Sistema Estatal Anticorrupción del Estado de Coahuila de Zaragoza, habiendo sido seleccionada recientemente para el cargo de cinco años, siendo la primera Consejera seleccionada por unanimidad por parte del Comité de Selección, desde la existencia del Sistema Estatal. (Marzo de 2025 a la fecha)',

                
                ]
            }
        ]
    },
     {
        nombre: 'José Ignacio Carrillo Aguirre',
        cargo: 'Consejero',
        foto: 'cpc-jica.png',
        img: 'cc-cpc.png',
        mail: 'ignacio.carrillo@cpccoahuila.org.mx',
        curriculum: [{
                subtitulo: 'Formación Académica',
                lista: [
                    'Licenciado en Economía por Facultade de Economía en la Universidad Autónoma de Coahuila.',
                    
                ]
            },
            {
                subtitulo: 'Experiencia Profesional',
                lista: [
                    'Fue Director de Programas Asistenciales en el Dif Coahuila por 2 años, Subdirector de Modernización Administrativa en la Secretaria de la Contraloría y Modernización Administrativa de Coahuila por 2 años, posterior mente fue Director General de Evaluación y Seguimiento de Ingresos durante 4 años, así como Director General de Evaluación y Seguimiento de Egresos por 3 años en la Secretaria de Finanzas, también Director Ejecutivo de Administración en el Instituto Electora y de Participación Ciudadana de Coahuila durante 3 años, fue Director de Fiscalización a Partidos Políticos durante 5 así como Titular del Órgano Interno de control durante 7 años en el Instituto Estatal Electoral y de Participación ciudadana de Nuevo León.',
                    'Ha sido catedrático en diversas materias relacionadas a la Economía, finanzas y contabilidad en diversas universidades como lo son: Universidad del Valle de México, Universidad Autónoma del Noreste, Instituto Tecnológico de Saltillo, Facultad de Economía.',
                    'En la sociedad Civil ha participado como:',
                    'Secretario General y Tesorero en el Comité de Vinos de Coahuila. 2023 a la fecha.',
                    'Presidente de la Asociación Nacional de Contraloras y Contralores de México, A.C.  (ANCCIEM). 2023 – 2024.',
                    'Vicepresidente de la Asociación Nacional de Contraloras y Contralores de México, A.C. (ANCCIEM).  2022 – 2023.',
                    'Vicepresidente del Instituto Mexicano de Ejecutivos de Finanzas Coahuila. (IMEF). 2011- 2012.',
                    'Vocal del Instituto Mexicano de Ejecutivos de Finanzas Coahuila.  (IMEF). 2009- 2011.',
                    'Secretario General del Colegio de Economistas de Coahuila A. C.  2007 – 2013.',
                    'Actualmente se Desempeña como Consejero de Participación Ciudadana en el Sistema Estatal Anticorrupción.',
                ]
            }
        ]
    }
];

const dialog = ref(integrantes.map(() => false))

const Valores = [
    {
        valor: 'Honestidad:',
        texto: ' Implica actuar con rectitud y decoro en el desempeño de las facultades que la Ley otorga a quienes integran el CPC, correspondiendo con creces a la confianza otorgada.',
    },
    {
        valor: 'Congruencia:',
        texto: ' Conlleva la necesaria alineación de los actos individuales con las aspiraciones del CPC y del Sistema Anticorrupción.',
    },
    {
        valor: 'Dedicación:',
        texto: ' Refiere a la firme decisión de poner al servicio del CPC y del Sistema Anticorrupción, las competencias, conocimientos y habilidades de que dispone cada integrante y dedicando su tiempo efectivo a la implementación de acciones destinadas a prevenir actos de corrupción.',
    },
    {
        valor: 'Compromiso:',
        texto: ' Señala la férrea voluntad para no escatimar esfuerzos en el cumplimiento de las facultades y atribuciones que por Ley tienen quienes integran el CPC acorde a su conformación como grupo multidisciplinario.',
    },
    {
        valor: 'Empatía:',
        texto: ' Indica el esfuerzo indispensable que tienen que realizar quienes integran el CPC para comprender las distintas perspectivas ciudadanas con relación al fenómeno de la corrupción, sus causas, efectos y costos.',
    },
    {
        valor: 'Responsabilidad:',
        texto: ' Supone la madurez para reconocer las consecuencias de cada decisión tomada y cada acción realizada, así como también de las omisiones por parte de cada integrante del CPC.',
    },
    {
        valor: 'Solidaridad:',
        texto: ' Implica la disposición para colaborar de manera decidida con la labor del resto de los integrantes del CPC, de las entidades que conforman el Sistema Anticorrupción y de la sociedad en su conjunto.',
    },
    {
        valor: 'Integridad:',
        texto: ' Apunta a la necesidad de empatar la acción, individual y colectiva, con el discurso, con el fin de elevar la efectividad y la incidencia del CPC y del Sistema Anticorrupción al que pertenecen.',
    },
    {
        valor: 'Inclusión:',
        texto: ' Escuchamos todas las voces y respetamos las fortalezas y formas de pensamiento de los distintos grupos sociales y empresariales, así como la diversidad social, cultural y de género.',
    },
    {
        valor: 'Independencia:',
        texto: ' Implica la decidida voluntad para no dejarse influir por intereses ajenos a los propósitos del CPC y del Sistema Anticorrupción.',
    },
];

//const informes = [
//    {
//        year: '2021-2022',
//        src: 'cpc-coahuila-informe-resultados-2021-2022.pdf'
//    },
//    {
//        year: '2020-2021',
//        src: 'cpc-coahuila-informe-resultados-2020-2021.pdf'
//    },
//    {
//        year: '2019-2020',
//        src: 'cpc-coahuila-informe-resultados-2019-2020.pdf'
//    },
//    {
//        year: '2018-2019',
//        src: 'cpc-coahuila-informe-resultados-2018-2019.pdf'
//    },

//];

//const planes = [
//    {
//        year: 'Plan de Comunicación',
//        src: 'plan-de-comunicacion-cpc.pdf'
//    },
//    {
//        year: '2023',
//        src: 'programa-anual-cpc-23.pdf'
//    },
//    {
//        year: '2022',
//        src: 'programa-anual-cpc-22.pdf'
//    },
//    {
//        year: '2020',
//        src: 'plan-de-trabajo-cpc-2020.pdf'
//    },
//    {
//        year: '2019',
//        src: 'plan-de-trabajo-cpc-2019.pdf'
//    },
//    {
//        year: '2018',
//        src: 'plan-de-trabajo-cpc-2018.pdf'
//    },

//];
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}

.text-justify {
    text-justify: inter-word;
}
</style>