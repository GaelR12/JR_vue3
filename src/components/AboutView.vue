<!-- src/views/About.vue -->
<template>
    <v-container>
      <!-- Page Header -->
      <v-row class="mb-8">
        <v-col cols="12">
          <h1>About Us</h1>
          <p>
            At HVAC Company, we are committed to delivering exceptional heating, cooling, and air quality solutions.
            With years of industry experience, our team is dedicated to providing reliable and efficient services to
            ensure your comfort and satisfaction.
          </p>
        </v-col>
      </v-row>
  
      <!-- Our Mission and Values -->
      <v-row>
        <v-col cols="12" md="6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide top-notch HVAC services that not only meet, but exceed, our customers' expectations.
            We focus on quality, innovation, and integrity to ensure that every project is handled with utmost professionalism.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h2>Our Team</h2>
          <p>
            Our experienced team of technicians and support staff work together to deliver reliable solutions tailored
            to your unique needs. We believe that a well-maintained HVAC system is the key to a comfortable living or working
            environment.
          </p>
        </v-col>
      </v-row>
  
      <!-- Optional Image Section -->
      <v-row class="mt-8" justify="center">
        <v-col cols="12" md="8">
          <!-- Replace the src attribute with the path to your image -->
          <v-img src="/path/to/about-us-image.jpg" alt="Our Team" max-width="600" class="mx-auto"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  // Add any necessary script logic here
  </script>
  
  <style scoped>
  h1,
  h2 {
    color: var(--v-theme-primary);
  }
  </style>
  