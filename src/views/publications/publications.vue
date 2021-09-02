<template>
  <v-container>
      <publication-info
        v-for="publication in publications"
        :key="publication.id"
        :authors="publication.authors"
        :title="publication.title"
        :source="publication.source"
        :url="publication.url"
      />
  </v-container>
</template>

<script src="./publications.js"></script>
<style lang="scss" scoped src="./publications.scss"></style>
