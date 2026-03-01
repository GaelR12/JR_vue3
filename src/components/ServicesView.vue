<script setup lang="ts">

import heatingImg from '@/assets/images/air-conditioner-global-warming-summer-science-technology-8010ce-1024.jpg'
import acImg from '@/assets/images/JR03.jpg'
import airImg from '@/assets/images/JR08.jpg'

const services = [
  {
    title: 'Heating Installation',
    description:
      'High-quality heating system installation for your home. Our experienced technicians ensure a seamless installation process with long-lasting performance.',
    image: heatingImg,
  },
  {
    title: 'AC Maintenance',
    description:
      'Keep your AC running efficiently throughout the year with our expert maintenance services. Prevent breakdowns and improve energy efficiency.',
    image: acImg,
  },
  {
    title: 'Air Quality Testing',
    description:
      'Ensure the air in your home or business is free from harmful contaminants. Our comprehensive air quality testing identifies potential issues quickly.',
    image: airImg,
  },
];
</script>

<template>
  <v-container class="services-page">
    <!-- Page Header -->
    <v-row class="mb-8 reveal-row">
      <v-col cols="12" class="section-card">
        <h1 align="center">Our Services</h1>
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
        class="mb-4 reveal-card"
      >
        <v-card elevation="5" rounded="lg" class="service-card">
          <v-img 
            :src="service.image"
            class="service-image"
            height="300"
            cover
          ></v-img>

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
.services-page {
  background: radial-gradient(circle at top right, #f0eded 0%, #ffffff 45%, #f0eded 100%);
  border-radius: 20px;
  padding: 1rem;
}

.reveal-row {
  animation: riseIn 0.8s ease both;
}

.reveal-card {
  animation: riseIn 0.8s ease both;
}

.reveal-card:nth-child(1) {
  animation-delay: 0.1s;
}

.reveal-card:nth-child(2) {
  animation-delay: 0.2s;
}

.reveal-card:nth-child(3) {
  animation-delay: 0.3s;
}

.section-card {
  transition: transform 0.28s ease, filter 0.28s ease;
}

.section-card:hover {
  transform: translateY(-4px);
  filter: saturate(1.04);
}

h1,
h2 {
  color: var(--v-theme-primary);
}

.services-page h1 {
  font-size: clamp(1.5rem, 3.3vw, 2.5rem);
}

.services-page p {
  font-size: 1rem;
  line-height: 1.6;
}

.service-card {
  transition: transform 0.28s ease, box-shadow 0.28s ease, filter 0.28s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 28px rgba(15, 53, 92, 0.18);
  filter: saturate(1.03);
}

.service-image {
  transition: transform 0.35s ease;
}

.service-card:hover .service-image {
  transform: scale(1.03);
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .services-page {
    padding: 0.65rem;
  }

  .services-page p {
    font-size: 0.95rem;
  }

  .services-page :deep(.v-card-title) {
    font-size: 1.05rem;
    line-height: 1.25;
  }

  .services-page :deep(.v-btn) {
    width: 100%;
  }

  .service-card:hover,
  .service-card:hover .service-image,
  .section-card:hover {
    transform: none;
  }
}

</style>
