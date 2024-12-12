<script setup lang="ts">
import AppBar from './components/layout/AppBar.vue';
import FooterBar from './components/layout/FooterBar.vue';
</script>

<template>
  <v-app>
    <!-- Main Layout -->
    <v-main>
      <v-container fluid class="pa-0">
        <!-- Header -->
        <AppBar />

        <!-- Content Area -->
        <v-row class="my-5">
          <v-col cols="12" md="8" offset-md="2">
            <router-view />
          </v-col>
        </v-row>

        <!-- Footer -->
        <FooterBar />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
/* Global styles */
body {
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

.v-application {
  background-color: #ffffff; /* Set background color to white */
  min-height: 100vh;
}

.v-main {
  padding: 20px 0;
}

/* AppBar and Footer styling */
.AppBar {
  background-color: #1976D2; /* Blue color for header */
  color: white;
}

.FooterBar {
  background-color: #1976D2; /* Blue color for footer */
  color: white;
  padding: 10px 0;
}

.v-container {
  margin-top: 30px;
}

.v-row {
  display: flex;
  justify-content: center;
}

.v-col {
  padding-left: 15px;
  padding-right: 15px;
}

h1 {
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

v-main {
  background-color: #f9f9f9;
  padding-bottom: 50px;
}

/* Card styling */
.v-card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.v-btn {
  background-color: #1976D2;
  color: white;
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  background-color: #1565c0;
}

</style>
