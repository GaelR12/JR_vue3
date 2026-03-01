<script setup lang="ts">
import { useDisplay } from 'vuetify'
import logo from '@/assets/images/background removed jandr.png'

const { mdAndUp } = useDisplay()
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <v-app-bar app class="brand-bar" elevation="0" height="84">
    <RouterLink to="/" class="brand-link" aria-label="Go to home">
      <img :src="logo" alt="J and R logo" class="brand-logo">
    </RouterLink>

    <v-spacer></v-spacer>

    <div v-if="mdAndUp" class="desktop-nav">
      <v-btn
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        tag="RouterLink"
        variant="text"
        class="nav-btn"
      >
        {{ link.label }}
      </v-btn>
    </div>

    <v-menu v-else location="bottom end" offset="10">
      <template #activator="{ props }">
        <v-btn v-bind="props" class="menu-btn" variant="text">Menu</v-btn>
      </template>
      <v-list class="mobile-list" density="comfortable">
        <v-list-item
          v-for="link in navLinks"
          :key="`mobile-${link.to}`"
          :to="link.to"
          :title="link.label"
          rounded="lg"
          link
        ></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.brand-bar {
  padding: 0.35rem 0.9rem;
  border-bottom: 1px solid rgba(32, 135, 255, 0.2);
  background:
    radial-gradient(circle at 0% 0%, rgba(55, 183, 255, 0.16) 0%, transparent 50%),
    linear-gradient(115deg, rgba(255, 255, 255, 0.94), rgba(241, 248, 255, 0.95));
  backdrop-filter: blur(8px);
}

.brand-link {
  display: inline-flex;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.brand-link:hover {
  transform: translateY(-1px);
}

.brand-logo {
  width: 66px;
  height: 66px;
  object-fit: contain;
  filter: drop-shadow(0 8px 14px rgba(20, 73, 128, 0.2));
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem;
  border-radius: 999px;
  border: 1px solid rgba(32, 135, 255, 0.18);
  background: rgba(255, 255, 255, 0.75);
}

.nav-btn {
  font-weight: 700;
  letter-spacing: 0.15px;
  text-transform: none;
  border-radius: 999px;
  min-width: 84px;
  font-size: 0.87rem;
}

.menu-btn {
  border-radius: 999px;
  border: 1px solid rgba(32, 135, 255, 0.2);
  background: rgba(255, 255, 255, 0.75);
  text-transform: none;
  font-weight: 700;
}

.mobile-list {
  min-width: 180px;
}

@media (max-width: 960px) {
  .brand-bar {
    height: 74px !important;
    padding: 0.28rem 0.5rem;
  }

  .brand-logo {
    width: 56px;
    height: 56px;
  }
}
</style>
