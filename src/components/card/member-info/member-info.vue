<template>
  <v-card class="member-info">
    <v-card-title>
      {{ full_name }}
    </v-card-title>
    <v-card-subtitle>
      {{ institute }}
    </v-card-subtitle>
    <v-card-actions class="py-1 pl-4">
      <v-btn
        text
        @click="show = !show"
      >
        Научные интересы
        <v-spacer></v-spacer>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="interests">
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script src="./member-info.js"></script>
<style lang="scss" scoped src="./member-info.scss"></style>
