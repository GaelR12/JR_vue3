<script setup lang="ts">
import aboutImage from '@/assets/images/air-conditioner-global-warming-summer-science-technology-8010ce-1024.jpg'
import yellowTank from '@/assets/images/yellow_tank.jpg'
import soldering from '@/assets/images/dad_soldering.jpg'
</script>

<template>
  <v-container class="about-page">
    <!-- Page Header -->
    <v-row class="mb-10 reveal-row">
      <v-col cols="12" class="text-center section-card">
        <h1>About Us</h1>
        <p class="subtitle">
          Keeping your home comfortable, efficient, and safe year round.
        </p>
      </v-col>
    </v-row>

    <!-- Mission & Values -->
    <v-row class="mb-10 reveal-row">
      <v-col cols="12" md="6" class="section-card">
        <v-img
          :src="yellowTank"
          class="about-image"
          height="280"
          cover
          rounded="lg"
          alt="Our HVAC Team"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="section-card">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: deliver dependable HVAC services built on
          honesty, quality workmanship, and long-term comfort. Every home we
          serve is treated with care and respect.
        </p>
      </v-col>

      <v-col cols="12" md="6" class="section-card">
        <h2>Why Choose Us</h2>
        <p>
          We combine real-world experience with modern solutions to provide
          efficient, reliable heating and cooling systems. No shortcuts just
          results you can feel.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="section-card">
        <v-img
          :src="soldering"
          class="about-image"
          height="280"
          cover
          rounded="lg"
          alt="Our HVAC Team"
        ></v-img>
      </v-col>
    </v-row>

    <!-- Team Section -->
    <v-row class="mb-12 reveal-row">
      <v-col cols="12" md="6" class="section-card">
        <v-img
          :src="aboutImage"
          class="about-image"
          height="280"
          cover
          rounded="lg"
          alt="Our HVAC Team"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="section-card">
        <h2>Our Team</h2>
        <p>
          Our team is made up of skilled professionals who take pride in doing
          the job right. From your first call to final inspection, we focus on
          clear communication and dependable service.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-page {
  background: radial-gradient(circle at top right, #f0eded 0%, #ffffff 45%, #f0eded 100%);
  border-radius: 20px;
  padding: 1rem;
}

.reveal-row {
  animation: riseIn 0.8s ease both;
}

.reveal-row:nth-of-type(2) {
  animation-delay: 0.12s;
}

.reveal-row:nth-of-type(3) {
  animation-delay: 0.24s;
}

.section-card {
  transition: transform 0.28s ease, filter 0.28s ease;
}

.section-card:hover {
  transform: translateY(-4px);
  filter: saturate(1.04);
}

.about-page h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.35rem, 2.4vw, 2rem);
  letter-spacing: 0.2px;
  display: inline-block;
  position: relative;
  margin-bottom: 0.7rem;
}

.about-page h2::after {
  content: '';
  display: block;
  width: 46px;
  height: 3px;
  margin-top: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, #2087ff 0%, #37b7ff 100%);
}

.about-page p {
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #2f3f52;
}

.about-image {
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.about-image:hover {
  transform: scale(1.02);
  box-shadow: 0 16px 26px rgba(15, 53, 92, 0.17);
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
  .about-page {
    padding: 0.65rem;
  }

  .about-page :deep(.v-container) {
    padding-left: 10px;
    padding-right: 10px;
  }

  .about-page p {
    font-size: 0.95rem;
  }

  .about-image:hover,
  .section-card:hover {
    transform: none;
  }
}
</style>
