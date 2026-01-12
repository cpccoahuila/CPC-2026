<template>
       <v-col cols="12">
                <v-alert 
                :color="color" 
                :icon="icon"
                class="mx-auto text-justify" border="top" 
                variant="outlined"
                colored-border elevation="2"
                prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-sm-h3 text-h5">{{ (title) }}</div>

                </v-alert>
            </v-col>
</template>

<script setup lang="ts">

defineProps<{
  title: string;
  color: string;
  icon: string;
}>();
   
</script>

<style lang="scss" scoped>

</style>