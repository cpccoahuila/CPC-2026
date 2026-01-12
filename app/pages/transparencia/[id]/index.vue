<template>
  <v-container class="min-height-vh py-8">
    
    <v-row v-if="loading" justify="center">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <div class="mt-4 text-grey">Cargando información...</div>
      </v-col>
    </v-row>

    <v-row v-else-if="Data">
      <v-col cols="12">
        <div class="text-center mb-6">
          <h1 class="text-h4 text-md-h3 text-xl-h2 font-weight-bold text-grey-darken-3 mb-2">
            {{ Data.titulo }}
          </h1>
          
          <div class="d-flex align-center justify-center font-weight-bold text-subtitle-1 text-grey-darken-2 my-4">
            <v-icon color="orange-darken-3" class="mr-2">mdi-calendar-clock</v-icon>
            Fecha de Actualización: {{ Data.actualizacion }}
          </div>

          <div class="text-justify mx-auto" style="max-width: 900px;">
            <p v-for="(e, i) in Data.descripcion" :key="i" class="mb-3 text-body-1">
              {{ e.valor }}
            </p>
          </div>
          
          <v-divider class="my-6 border-opacity-50" color="primary"></v-divider>
        </div>
      </v-col>

      <v-col 
        cols="12" 
        v-for="(e, i) in Data.secciones" 
        :key="i"
        class="mb-4"
      >
        <v-card 
          elevation="2" 
          class="rounded-lg border px-4 py-6"
          variant="flat"
        >
          <div class="text-center mb-4">
            <h2 class="text-h5 text-md-h4 font-weight-medium text-blue-grey-darken-3">
              {{ e.subtitulo }}
            </h2>
            <div v-if="e.descripcion" class="text-subtitle-1 text-grey-darken-1 mt-2">
              {{ e.descripcion }}
            </div>
            <v-divider class="mt-4 mx-auto" width="60"></v-divider>
          </div>

          <div v-if="e.documentos && e.documentos.length > 0" class="mt-4">
            <v-list density="compact" class="bg-transparent">
              
              <div v-for="(doc, j) in e.documentos" :key="j">
                
                <div v-if="doc.descripcion" class="text-subtitle-2 font-weight-bold text-teal mb-1 ml-4 d-flex align-center">
                  <v-icon size="small" start class="mr-1">mdi-tooltip-text-outline</v-icon>
                  {{ doc.descripcion }}
                </div>

                <v-list-item
                  :href="doc.url"
                  target="_blank"
                  rounded="lg"
                  color="primary"
                  class="mb-2"
                  link
                >
                  <template v-slot:prepend>
                    <v-icon color="grey-darken-2" icon="mdi-circle-medium"></v-icon>
                  </template>

                  <v-list-item-title class="text-body-1 text-wrap py-1">
                    {{ doc.nombre }}
                  </v-list-item-title>
                  
                  <template v-slot:append>
                    <!-- <v-icon size="small" color="grey-lighten-1">mdi-open-in-new</v-icon> -->
                  </template>
                </v-list-item>
              </div>

            </v-list>
          </div>
          
          <div v-else class="text-center text-caption text-grey font-italic">
            Sin documentos adjuntos
          </div>
        </v-card>
      </v-col> 
    </v-row>
    
    <v-row v-else>
       <v-col class="text-center text-h5 mt-10">
         No se encontró información para este módulo.
       </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// Importamos las funciones Modulares de Firebase
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  getDoc, 
  doc 
} from 'firebase/firestore'; 

// Acceso al plugin que creamos (o podrías importar 'db' desde un archivo utils si prefieres)
const { $db } = useNuxtApp();
const route = useRoute();

// Variables reactivas
const loading = ref(true);
const Data = ref(null);
const parametro = route.params.id; // Obtenemos el ID de la URL

// Función principal
const moduloByFraccion = async (articulo) => {
  loading.value = true;
  try {
    if (!articulo) return;

    const [art, fra] = articulo.split('-');
    
    // 1. Buscar el Módulo
    const modulosRef = collection($db, 'modulos');
    const q = query(modulosRef, where('articulo', '==', art), where('fraccion', '==', fra.toString()));
    const modsSnapshot = await getDocs(q);

    if (modsSnapshot.empty) {
      Data.value = null;
      loading.value = false;
      return;
    }

    const moduloDoc = modsSnapshot.docs[0];
    const moduloData = { id: moduloDoc.id, ...moduloDoc.data() };

    // 2. Buscar Secciones (Ordenadas)
    const seccionesRef = collection($db, `modulos/${moduloDoc.id}/secciones`);
    const qSecciones = query(seccionesRef, orderBy('uid', 'asc'));
    const seccionesSnapshot = await getDocs(qSecciones);

    // 3. Buscar Documentos por Sección (CORREGIDO con Promise.all)
    // Usamos map para crear un array de promesas
    const seccionesPromesas = seccionesSnapshot.docs.map(async (secDoc) => {
      const docsRef = collection($db, `modulos/${moduloDoc.id}/secciones/${secDoc.id}/documentos`);
      const qDocs = query(docsRef, orderBy('uid', 'asc'));
      const docsSnapshot = await getDocs(qDocs);

      const documentos = docsSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      
      return {
        id: secDoc.id,
        ...secDoc.data(),
        documentos: documentos
      };
    });

    // Esperamos a que todas las secciones carguen sus documentos
    const seccionesCompletas = await Promise.all(seccionesPromesas);

    // 4. Obtener datos del encargado (opcional, igual que en tu original)
    let encNombre = '', encCargo = '';
    if (moduloData.encargado) {
      try {
        const dptoSnap = await getDoc(doc($db, 'departamentos', moduloData.encargado));
        if (dptoSnap.exists()) {
            const userID = dptoSnap.data().titular;
            const userSnap = await getDoc(doc($db, 'usuarios', userID));
            if (userSnap.exists()) {
                encNombre = userSnap.data().nombre;
                encCargo = userSnap.data().cargo + ' de ' + dptoSnap.data().nombre;
            }
        }
      } catch (err) {
        console.error("Error cargando encargado", err);
      }
    }

    // 5. Construir el objeto final
    Data.value = {
      ...moduloData,
      encargado: { nombre: encNombre, cargo: encCargo },
      secciones: seccionesCompletas
    };

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  moduloByFraccion(parametro);
});
</script>

<style scoped>
.min-height-vh {
  min-height: 70vh;
}
</style>