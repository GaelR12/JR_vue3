<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  // Handle form submission (e.g., send data to an API)
  console.log('Form Submitted:', {
    name: name.value,
    email: email.value,
    message: message.value,
  });

  // Reset the form fields
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <v-container>
    <!-- Page Header -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, please fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </v-col>
    </v-row>

    <!-- Contact Form -->
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            label="Message"
            required
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Send Message</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<style scoped>
h1,
h2 {
  color: var(--v-theme-primary);
}
</style>
