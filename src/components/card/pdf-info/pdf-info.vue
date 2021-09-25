<template>
  <v-card
    outlined
    height="100%"
    elevation="2"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline type">
          {{ type }}
        </div>
        <div class="name mb-2"
          @click="openFile(link)"
        >
            {{ title }}
        </div>
        <v-list-item-subtitle class="author">
          {{ main }} <b>{{ speaker }}</b> {{ authors }}
        </v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
  </v-card>
</template>

<script src="./pdf-info.js"></script>
<style lang="scss" src="./pdf-info.scss" scoped></style>
