import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin((nuxtApp) => {
  const config = {
      apiKey: "AIzaSyDIS5dpFmXD6qjmH51HrQ_UMmKWtRvKKxc",
    authDomain: "transparenciaseac.firebaseapp.com",
    projectId: "transparenciaseac",
    storageBucket: "transparenciaseac.appspot.com",
    messagingSenderId: "640440931494",
    appId: "1:640440931494:web:81e2d4d8a42d3422a0d067"
  }

  // 1. Inicializar App
  const app = initializeApp(config)

  // 2. Inicializar Firestore
  const db = getFirestore(app)

  // 3. Inyectar para usarlo en toda la app si es necesario, 
  // aunque recomendaremos importarlo directamente.
  return {
    provide: {
      db
    }
  }
})