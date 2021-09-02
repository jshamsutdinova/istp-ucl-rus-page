<template>
  <v-container>
    <v-row>

      <v-col cols="12" md="6">
        <h1 class="mb-1"> Британские участники </h1>
        <v-row>
          <v-col cols="12" xl="4" md="6" sm="6"
           v-for="member in british_members"
           :key="member.id"
          >
            <member-info
              :full_name="member.name"
              :institute="member.institute"
              :description="member.description"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="mb-1"> Российские участники </h1>
          <v-row>
            <v-col cols="12" xl="4" md="6" sm="6"
              v-for="member in russian_members"
              :key="member.id"
            >
              <member-info
                class="full-inst"
                :full_name="member.name"
                :institute="member.institute"
                :description="member.description"
              />
              <member-info
                class="short-inst"
                :full_name="member.name"
                :institute="member.shortNameInst"
                :description="member.description"
              />
            </v-col>
          </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script src="./members.js"></script>
<style lang="scss" scoped src="./members.scss"></style>
