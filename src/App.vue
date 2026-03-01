<script setup lang="ts">
import AppBar from './components/layout/AppBar.vue';
import FooterBar from './components/layout/FooterBar.vue';
</script>



<template>
  <v-app>
    <!-- Header -->
    <AppBar/>

    <!-- Main Layout -->
    <v-main>
      <v-container fluid class="app-shell pa-0">
        <!-- Content Area -->
        <v-row class="content-row my-5">
          <v-col cols="12" md="11" lg="10" xl="9">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <FooterBar />
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: #ffffff;
  min-height: 100vh;
}

.content-row {
  justify-content: center;
}

@media (max-width: 600px) {
  .content-row {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }
}

</style>
