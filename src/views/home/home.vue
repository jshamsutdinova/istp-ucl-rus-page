<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="8">
        <abstract-text />
      </v-col>
      <v-col cols="12" md="4" lg="4">
        <div class='plots'>
          <img src="@/assets/plots/plot_1.png" alt="plot_1" class="pb-3">
          <img src="@/assets/plots/plot_2.png" alt="plot_2">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./home.js"></script>
<style lang="scss" scoped src="./home.scss"></style>
