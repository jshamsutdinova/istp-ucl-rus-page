<template>
  <v-container>
    <div class="conf-name">
      <h2>Магнетизм и активность Солнца и звезд</h2>
    </div>
    <div class="conf-date">
      31 августа - 3 сентября 2021, Крым, Россия
    </div>
    <div class="test-block mt-2">
      <v-row>
        <v-col cols=12 md=4
          v-for="file in files"
          :key="file.id"
        >
          <pdf-info-card
            :type="file.type"
            :title="file.title"
            :mainAuthor="file.mainAuthor"
            :authors="file.authors"
            :link="file.link"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script src="./presentations.js"></script>
<style lang="scss" scoped src="./presentations.scss"></style>
