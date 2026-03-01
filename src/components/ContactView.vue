<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/images/hvacLogoStar.png'

const name = ref('')
const email = ref('')
const message = ref('')
const confirmOpen = ref(false)
const confirmationCode = ref('')
const submittedAt = ref('')
const formRef = ref()

const requiredRule = (value: string) => {
  return !!value?.trim() || 'This field is required'
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const submitForm = async () => {
  const result = await formRef.value?.validate()
  if (!result?.valid) return

  const now = new Date()
  confirmationCode.value = `JR-${now.getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`
  submittedAt.value = formatDate(now)

  console.log('Form Submitted:', {
    name: name.value,
    email: email.value,
    message: message.value,
  })

  confirmOpen.value = true
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <v-container class="contact-page">
    <!-- Page Header -->
    <v-row class="mb-8 reveal-row">
      <v-col cols="12" class="section-panel hero-panel">
        <p class="eyebrow">J and R Heating and Air LLC</p>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, please fill out the form below and we'll get
          back to you as soon as possible.
        </p>
      </v-col>
    </v-row>

    <v-row class="reveal-row reveal-delay-1">
      <v-col cols="12" md="7">
        <!-- Contact Form -->
        <v-form ref="formRef" @submit.prevent="submitForm">
          <v-row class="section-panel form-shell">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                label="Name"
                variant="outlined"
                density="comfortable"
                :rules="[requiredRule]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                variant="outlined"
                density="comfortable"
                :rules="[requiredRule]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                label="Message"
                variant="outlined"
                rows="5"
                auto-grow
                :rules="[requiredRule]"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="form-actions">
              <v-btn class="contact-btn" type="submit" color="primary" size="large">Send Message</v-btn>
              <span class="form-note">Typical response time: within 1 business day</span>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="12" md="5">
        <div class="section-panel info-panel">
          <h2>Why Reach Out</h2>
          <div class="info-item">
            <strong>Fast Follow-Up</strong>
            <span>We review each request quickly and respond with clear next steps.</span>
          </div>
          <div class="info-item">
            <strong>Trusted Service</strong>
            <span>Experienced HVAC support for homes and businesses.</span>
          </div>
          <div class="info-item">
            <strong>Clear Communication</strong>
            <span>Simple answers and practical recommendations without pressure.</span>
          </div>
          <div class="badge-row">
            <span class="info-badge">Licensed & Insured</span>
            <span class="info-badge">Customer-Focused</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="confirmOpen" max-width="540">
      <v-card class="receipt-card" rounded="xl">
        <div class="receipt-top">
          <img :src="logo" alt="J and R logo" class="receipt-logo">
          <div class="receipt-brand">
            <strong>J and R Heating and Air LLC</strong>
            <span>Contact Receipt</span>
          </div>
        </div>

        <div class="receipt-divider"></div>

        <v-card-text class="receipt-body">
          <div class="receipt-row">
            <span>Confirmation</span>
            <strong>{{ confirmationCode }}</strong>
          </div>
          <div class="receipt-row">
            <span>Status</span>
            <strong>Message Received</strong>
          </div>
          <div class="receipt-row">
            <span>Submitted</span>
            <strong>{{ submittedAt }}</strong>
          </div>

          <div class="receipt-divider dashed"></div>

          <div class="receipt-note">
            Thank you for contacting us. We got your message and will follow up soon. Have a Blessed day!
          </div>
        </v-card-text>

        <v-card-actions class="receipt-actions">
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="flat" @click="confirmOpen = false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.contact-page {
  background:
    radial-gradient(circle at top right, rgba(35, 136, 255, 0.12) 0%, transparent 44%),
    radial-gradient(circle at bottom left, rgba(72, 196, 255, 0.16) 0%, transparent 42%),
    linear-gradient(180deg, #f7fbff 0%, #ffffff 55%, #f8fbff 100%);
  border-radius: 20px;
  padding: 1rem;
}

h1,
h2 {
  color: var(--v-theme-primary);
}

p {
  font-family: 'Lora', serif;
  color: #2f3f52;
}

.section-panel {
  background: rgba(255, 255, 255, 0.83);
  border: 1px solid rgba(45, 114, 184, 0.12);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  padding: 1.1rem;
}

.hero-panel {
  position: relative;
  overflow: hidden;
}

.hero-panel::after {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  right: -45px;
  top: -62px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(47, 154, 255, 0.24) 0%, rgba(47, 154, 255, 0) 70%);
}

.eyebrow {
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.75rem;
  margin-bottom: 0.2rem;
  color: #356ea7;
}

.form-shell {
  margin: 0;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.form-note {
  font-size: 0.85rem;
  color: #466484;
}

.contact-btn {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(15, 53, 92, 0.15);
}

.reveal-row {
  animation: riseIn 0.8s ease both;
}

.reveal-delay-1 {
  animation-delay: 0.12s;
}

.info-panel h2 {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.9rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.85rem;
}

.info-item strong {
  color: #224b76;
}

.info-item span {
  color: #445b75;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.55rem;
}

.info-badge {
  display: inline-block;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(35, 136, 255, 0.12);
  color: #215685;
  font-size: 0.8rem;
  font-weight: 600;
}

.receipt-card {
  background:
    linear-gradient(180deg, #ffffff, #f8fbff);
  border: 1px solid rgba(48, 122, 197, 0.22);
  box-shadow: 0 18px 36px rgba(18, 60, 104, 0.2);
}

.receipt-top {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.2rem 0.5rem;
}

.receipt-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.receipt-brand {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.receipt-brand strong {
  font-size: 1rem;
}

.receipt-brand span {
  font-size: 0.85rem;
  color: #45617f;
}

.receipt-body {
  font-family: 'Courier New', monospace;
}

.receipt-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.4rem;
}

.receipt-divider {
  height: 1px;
  margin: 0.4rem 1.2rem;
  background: linear-gradient(90deg, rgba(37, 124, 211, 0), rgba(37, 124, 211, 0.45), rgba(37, 124, 211, 0));
}

.receipt-divider.dashed {
  height: 0;
  border-top: 1px dashed rgba(53, 109, 167, 0.42);
  background: none;
  margin: 0.7rem 0;
}

.receipt-note {
  font-family: 'Lora', serif;
  color: #2f3f52;
}

.receipt-actions {
  padding: 0.3rem 1rem 1rem;
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
  .contact-page {
    padding: 0.65rem;
  }

  .form-actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.45rem;
  }

  .contact-btn {
    width: 100%;
  }

  .receipt-top {
    padding: 0.85rem 0.95rem 0.45rem;
  }

  .receipt-logo {
    width: 52px;
    height: 52px;
  }

  .receipt-brand strong {
    font-size: 0.9rem;
  }

  .receipt-row {
    font-size: 0.84rem;
  }

  .contact-btn:hover {
    transform: none;
    box-shadow: none;
  }
}
</style>
