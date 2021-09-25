<template>
  <v-container>
    <v-card class="pa-3">
      <div class="authors mx-5">
         {{ authors }}
      </div>

      <div class='title mx-5 mt-1'>
        {{ title.toUpperCase() }}
      </div>

      <div class="source mx-5">
        {{ source }}
          <v-btn
            icon
            @click="openArticle(url)"
          >
            <span class="mdi mdi-file-document"></span>
          </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script src="./publication-info.js"></script>
<style lang="scss" scoped src="./publication-info.scss"></style>
