<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterBar',
});
</script>

<template>
  <v-footer color="primary" dark>
    <v-container>
      <v-row justify="space-between" align="center">
        <p>&copy; 2024 HVAC Company | All Rights Reserved</p>
        <p>Follow Us: 
          <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
        </p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.v-footer {
  padding: 16px;
  font-size: 0.9rem;
}
</style>
