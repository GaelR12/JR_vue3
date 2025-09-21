<script setup lang="ts">
import { ref } from "vue";
import slide1 from "/Users/gaelrueda/Desktop/HVAC2/JR_vue3/src/assets/images/JR03.jpg";
import slide2 from "/src/assets/images/air-conditioner-global-warming-summer-science-technology-8010ce-1024.jpg";
import slide3 from "/src/assets/images/JR01.jpg";
import { describe } from "node:test";

const services = [
  { title: 'Commercial Services', description: 'High-quality heating system installation for your home.' },
  { title: 'AC Maintenance', description: 'We Offer HVAC Solutions for Your Business.' },
  { title: 'Air Quality Testing', description: 'Improve the air quality of your living spaces.' },
  { title: 'Air Conditioning', description: 'AC Installation, Maintenance, and Repair.'},
  { title: 'Heating', description: 'Furnace Installation, Maintenance and Repairs.'},
  { title: 'Residential Services', description: 'Providing Your Family with Home Comfort Solutions.'},
];


const images = ref([slide1, slide2,slide3]);

</script>

<template>

  <v-carousel
        hide-delimiter-background
        show-arrows="hover"
        cycle
        :interval="4000" 
        >
        <v-carousel-item
        v-for ="(image, i) in images"
        :key="i"
        >
        <v-img
        :src="image"
        class="carousel-image"
        cover
        ></v-img>
        </v-carousel-item>
      </v-carousel>
  <v-container>
    <!-- Hero Section -->
    <v-row class="mb-10 align-center">
      <v-col cols="12" md="6">
        <h1 id="mavFont">J and R Heating and Air LLC</h1>
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
        <h2 id="mavFont" class="snowflake">About Us</h2>
        <p>With years of experience, we are dedicated to providing top-notch heating, cooling, and air quality solutions.</p>
      </v-col>
      <v-col cols="12" md="6">
        <!-- <img src="/path/to/about-us-image.jpg" alt="Our team" class="img-fluid"> -->
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row class="mb-10">
      <!-- Header in its own column -->
      <v-col cols="12">
        <h2 id="mavFont" class="snowflake">Our Services</h2>
      </v-col>
      <!-- Service Cards -->
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
        <h2 class="snowflake" id="mavFont">Contact Us</h2>
        <p>If you have any questions or need assistance, reach out to us anytime!</p>
        <v-btn color="primary" to="/contact" tag="RouterLink">Get in Touch</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1,
h2 {
  color: var(--v-theme-primary);
}

.img-fluid {
  max-width: 100%;
  border-radius: 8px;
}

/* carousel styling  */
.carousel-image {
  height: 600px;
  object-fit: cover;
}

.snowflake::after {
  content: "❄";
  font-size: 1.2em;
  margin-left: 6px;
  color: #00bfff;
}

</style>
