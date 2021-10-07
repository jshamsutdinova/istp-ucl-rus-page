<template>
  <v-container>
    <div v-for="file in files" :key="file.id">
      <div class="conf-name">
        <h2 @click="openFile(file.link_conf)">{{ file.name_conf }}</h2>
      </div>
      <div class="conf-date">
        {{ file.date_place }}
      </div>
        <v-row class="mb-2">
          <v-col cols=12 md=6 sm=6 xl=4
            v-for="pdf in file.presentations"
            :key="pdf.num"
          >
            <pdf-info-card
              :type="pdf.type"
              :title="pdf.title"
              :main="pdf.main_author"
              :speaker="pdf.speaker"
              :authors="pdf.authors"
              :link="pdf.link"
            />
          </v-col>
        </v-row>
    </div>
  </v-container>
</template>

<script src="./presentations.js"></script>
<style lang="scss" scoped src="./presentations.scss"></style>
