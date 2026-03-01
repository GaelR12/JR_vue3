<script setup lang="ts">
import { ref } from 'vue'
import slide1 from '@/assets/images/JR03.jpg'
import slide2 from '@/assets/images/air-conditioner-global-warming-summer-science-technology-8010ce-1024.jpg'
import slide3 from '@/assets/images/JR01.jpg'
import heroSideImg from '@/assets/images/ACCommercials2.jpg'
import LogoStar from '@/assets/images/hvacLogoStar.png'

const services = [
  {
    title: 'Commercial Services',
    description: 'High-quality heating system installation for your home.',
  },
  {
    title: 'AC Maintenance',
    description: 'We Offer HVAC Solutions for Your Business.',
  },
  {
    title: 'Air Quality Testing',
    description: 'Improve the air quality of your living spaces.',
  },
  {
    title: 'Air Conditioning',
    description: 'AC Installation, Maintenance, and Repair.',
  },
  {
    title: 'Heating',
    description: 'Furnace Installation, Maintenance and Repairs.',
  },
  {
    title: 'Residential Services',
    description: 'Providing Your Family with Home Comfort Solutions.',
  },
]

const images = ref([slide1, slide2, slide3])
</script>

<template>
  <div class="home-page">
    <v-carousel
      class="hero-carousel reveal-row"
      hide-delimiter-background
      show-arrows="hover"
      cycle
      :interval="4000"
    >
      <v-carousel-item
        v-for="(image, i) in images"
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
      <v-row class="mb-10 align-center section-shell reveal-row">
        <v-col cols="12" md="7" class="section-panel">
          <h1 id="mavFont">J and R Heating and Air LLC</h1>
          <p>
            Providing reliable heating and air conditioning services for your home or business.
          </p>
          <v-btn color="primary" to="/services" tag="RouterLink">Explore Our Services</v-btn>
        </v-col>
        <v-col cols="12" md="5" class="side-image-col reveal-delay-1">
          <div class="side-image-frame">
            <v-img
              :src="heroSideImg"
              class="side-image"
              height="280"
              cover
              rounded="lg"
              alt="HVAC service installation"
            ></v-img>
          </div>
        </v-col>
      </v-row>


      <!-- About Us Section -->
      <v-row class="mb-10 section-shell reveal-row reveal-delay-1">
        <v-col cols="12" md="7" class="section-panel">
          <h2 id="mavFont" class="section-title">About Us</h2>
          <p>
            With years of experience, we are dedicated to providing top-notch heating, cooling,
            and air quality solutions.
          </p>
          <v-btn color="primary" to="/about" tag="RouterLink">Learn more</v-btn>
        </v-col>
        <v-col cols="12" md="5" class="side-image-col reveal-delay-2">
          <div class="side-image-frame ">
            <!-- <v-img
              :src="LogoStar"
              class="side-image about-logo-image"
              height="200"
              contain
              rounded="lg"
              alt="Company Logo Star"
            ></v-img> -->
          </div>
        </v-col>
      </v-row>

      <!-- Services Section -->
      <v-row class="mb-10 section-shell reveal-row reveal-delay-2">
        <v-col cols="12">
          <h2 id="mavFont" class="section-title">Our Services</h2>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="service in services"
          :key="service.title"
          class="reveal-card"
        >
          <v-card class="service-card" elevation="4" rounded="lg">
            <v-card-title>{{ service.title }}</v-card-title>
            <v-card-text>{{ service.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" to="/services" tag="RouterLink">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Contact Section -->
      <v-row justify="center" class="text-center reveal-row reveal-delay-3">
        <v-col cols="12" class="section-panel contact-panel">
          <h2 class="section-title" id="mavFont">Contact Us</h2>
          <p>If you have any questions or need assistance, reach out to us anytime!</p>
          <v-btn color="primary" to="/contact" tag="RouterLink">Get in Touch</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.home-page {
  background: radial-gradient(circle at top right, #f3f8ff 0%, #ffffff 45%, #f9fbff 100%);
  border-radius: 20px;
}

h1,
h2 {
  color: var(--v-theme-primary);
}

h1 {
  font-size: clamp(1.5rem, 3.6vw, 2.5rem);
  margin-bottom: 0.8rem;
}

p {
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.65;
  color: #2f3f52;
  margin-bottom: 1.1rem;
}

.hero-carousel {
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.carousel-image {
  height: clamp(260px, 58vh, 620px);
  object-fit: cover;
}

.section-shell {
  position: relative;
}

.section-panel {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(45, 114, 184, 0.12);
  backdrop-filter: blur(2px);
  border-radius: 16px;
  padding: 1.1rem;

}

.side-image-col {
  display: flex;
  align-items: center;
}

.side-image-frame {
  width: 100%;
  border: 1px solid rgba(45, 114, 184, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.35rem;
}

.side-image {
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.about-logo-image {
  max-width: 220px;
  margin: 0 auto;
}

.side-image:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 24px rgba(15, 53, 92, 0.16);
}

.side-image.about-logo-image:hover {
  transform: none;
  box-shadow: none;
}

.contact-panel {
  max-width: 780px;
}

.section-title {
  display: inline-block;
  font-size: clamp(1.3rem, 2.2vw, 2rem);
  margin-bottom: 0.6rem;
}

.section-title::after {
  content: '';
  display: block;
  width: 48px;
  height: 3px;
  margin-top: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, #2087ff 0%, #37b7ff 100%);
}

.service-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 28px rgba(15, 53, 92, 0.18);
  filter: saturate(1.03);
}

.reveal-row {
  animation: riseIn 0.8s ease both;
}

.reveal-delay-1 {
  animation-delay: 0.1s;
}

.reveal-delay-2 {
  animation-delay: 0.2s;
}

.reveal-delay-3 {
  animation-delay: 0.3s;
}

.reveal-card {
  animation: riseIn 0.8s ease both;
}

.reveal-card:nth-child(2) {
  animation-delay: 0.08s;
}

.reveal-card:nth-child(3) {
  animation-delay: 0.16s;
}

.reveal-card:nth-child(4) {
  animation-delay: 0.24s;
}

.reveal-card:nth-child(5) {
  animation-delay: 0.32s;
}

.reveal-card:nth-child(6) {
  animation-delay: 0.4s;
}

.reveal-card:nth-child(7) {
  animation-delay: 0.48s;
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

@media (max-width: 960px) {
  .home-page {
    border-radius: 16px;
  }

  .section-shell {
    margin-bottom: 1.2rem !important;
  }

  .section-panel {
    padding: 1rem;
  }

  .side-image-col {
    margin-top: 0.5rem;
  }
}

@media (max-width: 600px) {
  .home-page {
    border-radius: 14px;
  }

  .home-page :deep(.v-container) {
    padding-left: 12px;
    padding-right: 12px;
  }

  .hero-carousel {
    border-radius: 14px;
  }

  p {
    font-size: 0.95rem;
  }

  .section-panel :deep(.v-btn) {
    width: 100%;
  }

  .service-card:hover {
    transform: none;
  }

  .side-image:hover {
    transform: none;
    box-shadow: none;
  }
}
</style>
