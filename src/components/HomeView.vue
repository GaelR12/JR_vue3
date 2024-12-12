<script setup lang="ts">
const services = [
  { title: 'Heating Installation', description: 'High-quality heating system installation for your home.' },
  { title: 'AC Maintenance', description: 'Ensure your AC runs efficiently year-round.' },
  { title: 'Air Quality Testing', description: 'Improve the air quality of your living spaces.' },
];
</script>

<template>
  <v-container>
    <!-- Hero Section -->
    <v-row class="mb-10 align-center">
      <v-col cols="12" md="6">
        <h1>Welcome to HVAC Company</h1>
        <p>Providing reliable heating and air conditioning services for your home or business.</p>
        <v-btn color="primary" to="/services" tag="RouterLink">Explore Our Services</v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <!-- <img src="/path/to/hero-image.jpg" alt="HVAC services" class="img-fluid"> -->
      </v-col>
    </v-row>

    <!-- About Us Section -->
    <v-row class="mb-10">
      <v-col cols="12" md="6">
        <h2>About Us</h2>
        <p>With years of experience, we are dedicated to providing top-notch heating, cooling, and air quality solutions.</p>
      </v-col>
      <v-col cols="12" md="6">
        <!-- <img src="/path/to/about-us-image.jpg" alt="Our team" class="img-fluid"> -->
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row class="mb-10">
      <h2>Our Services</h2>
      <v-col cols="12" sm="6" md="4" v-for="service in services" :key="service.title">
        <v-card>
          <v-card-title>{{ service.title }}</v-card-title>
          <v-card-text>{{ service.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/services" tag="RouterLink">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Contact Section -->
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, reach out to us anytime!</p>
        <v-btn color="primary" to="/contact" tag="RouterLink">Get in Touch</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1, h2 {
  color: var(--v-theme-primary);
}
.img-fluid {
  max-width: 100%;
  border-radius: 8px;
}
</style>
