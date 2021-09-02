<template>
  <v-container>
    <embed src="test.pdf" type="application/pdf" width="100%" height="600px">
    <embed src="@/assets/emblems/istp.png" type="image/jpg">
    <iframe src="@/assets/presentation/test.pdf"></iframe>
    <a href="@/assets/presentation/test.pdf">link</a>
  </v-container>
</template>

<script src="./presentations.js"></script>
<style lang="scss" scoped src="./presentations.scss"></style>
