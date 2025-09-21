<script setup lang="ts">
const services = [
  {
    title: 'Heating Installation',
    description:
      'High-quality heating system installation for your home. Our experienced technicians ensure a seamless installation process with long-lasting performance.',
  },
  {
    title: 'AC Maintenance',
    description:
      'Keep your AC running efficiently throughout the year with our expert maintenance services. Prevent breakdowns and improve energy efficiency.',
  },
  {
    title: 'Air Quality Testing',
    description:
      'Ensure the air in your home or business is free from harmful contaminants. Our comprehensive air quality testing identifies potential issues quickly.',
  },
];
</script>

<template>
  <v-container>
    <!-- Page Header -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h1>Our Services</h1>
        <p>
          We offer a variety of HVAC services to keep your home or business comfortable and safe.
          Browse through our services and feel free to get in touch for more information.
        </p>
      </v-col>
    </v-row>

    <!-- Service Cards -->
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="service in services"
        :key="service.title"
        class="mb-4"
      >
        <v-card>
          <v-card-title>{{ service.title }}</v-card-title>
          <v-card-text>{{ service.description }}</v-card-text>
          <v-card-actions>
            <!-- You might link to a dedicated service details page or to the contact page -->
            <v-btn color="primary" to="/contact" tag="RouterLink">Get in Touch</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1,
h2 {
  color: var(--v-theme-primary);
}
</style>
