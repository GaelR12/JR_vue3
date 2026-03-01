<script setup lang="ts">
const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <v-footer class="site-footer">
    <v-container class="py-8">
      <v-row class="footer-grid" align="start">
        <v-col cols="12" md="4" class="footer-col with-divider">
          <h3 class="footer-title">J and R Heating and Air LLC</h3>
          <p class="footer-text">
            Reliable heating, cooling, and air quality solutions with customer-first service.
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="footer-col with-divider">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink :to="link.to" class="footer-link">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="footer-col">
          <h4 class="footer-heading">Connect</h4>
          <p class="footer-text">Get in touch and we will respond.</p>
          <div class="footer-actions">
            <v-btn size="small" color="primary" to="/contact" tag="RouterLink">Get in Touch</v-btn>
          </div>
          <p class="footer-text">Follow us on our socials.</p>
          <v-btn
              icon
              class="social-btn"
              href="https://www.facebook.com/p/JR-Heating-and-Air-LLC-100064277435062/"
              target="_blank"
              aria-label="Facebook"
            >
              <v-icon icon="$Facebook" />
            </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-4 footer-divider"></v-divider>

      <v-row justify="space-between" align="center" class="footer-bottom">
        <v-col cols="12" md="7" class="py-1">
          <p class="footer-copy">&copy; 2026 J and R Heating and Air LLC. All Rights Reserved.</p>
        </v-col>
        <v-col cols="12" md="5" class="py-1 text-md-right">
          <p class="footer-copy">Serving homes and businesses with trusted HVAC support.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.site-footer {
  background:
    radial-gradient(circle at top right, rgba(36, 135, 255, 0.16) 0%, transparent 38%),
    linear-gradient(160deg, #f7fbff 0%, #eef6ff 100%);
  border-top: 1px solid rgba(38, 128, 210, 0.2);
  color: #1f3854;
}

.footer-title {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.45rem;
}

.footer-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer-text {
  font-family: 'Lora', serif;
  color: #36506d;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.35rem;
}

.footer-link {
  color: #1f4f80;
  text-decoration: none;
  font-weight: 600;
}

.footer-link:hover {
  color: #0e7be1;
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 0.55rem;
}

.social-btn {
  border: 1px solid rgba(36, 116, 196, 0.24);
  background: rgba(255, 255, 255, 0.72);
}

.social-btn:hover .v-icon {
  color: #1877f2;
}

.footer-divider {
  border-color: rgba(38, 112, 187, 0.22);
}

.footer-copy {
  margin: 0;
  font-size: 0.88rem;
  color: #395775;
}

.footer-col {
  position: relative;
}

@media (min-width: 960px) {
  .with-divider::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 0;
    width: 1px;
    height: calc(100% - 16px);
    background: linear-gradient(
      180deg,
      rgba(33, 106, 179, 0),
      rgba(33, 106, 179, 0.35),
      rgba(33, 106, 179, 0)
    );
  }

  .footer-bottom .v-col:first-child {
    position: relative;
  }

  .footer-bottom .v-col:first-child::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -1px;
    width: 1px;
    height: calc(100% - 8px);
    background: linear-gradient(
      180deg,
      rgba(33, 106, 179, 0),
      rgba(33, 106, 179, 0.35),
      rgba(33, 106, 179, 0)
    );
  }
}

@media (max-width: 960px) {
  .site-footer {
    text-align: center;
  }

  .footer-actions {
    justify-content: center;
  }

  .footer-links {
    justify-items: center;
  }

  .social-btn {
    margin-top: 0.2rem;
  }

  .footer-bottom {
    text-align: center;
  }
}
</style>
