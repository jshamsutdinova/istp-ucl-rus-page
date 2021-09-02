<template>
  <nav>
  <v-app-bar
    app
    absolute
    prominent
    :src="require('@/assets/banner/banner_1.jpg')"
    height="180px"
  >
  <div class="content">
    <div class="top-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" class="hidden-sm-and-up mr-auto"></v-app-bar-nav-icon>
      <div class="lang">
        <v-img
            contain
            max-height="30"
            :src="require('@/assets/flags/russia.png')"
            alt="RU"
          />
        <v-img
            contain
            max-height="30"
            :src="require('@/assets/flags/united-kingdom.png')"
            alt="GB"
          />
      </div>
    </div>
    <div class="title overline mt-1">
      Изучение процессов ускорения электронов в микроволновых источниках событий в метровом радиодиапазоне
    </div>
    <div class="menu mt-2">
      <div
        v-for="button in buttons"
        :key="button.name"
      >
        <v-divider></v-divider>
            <v-btn text :to="button.link">{{ button.name }}</v-btn>
        <v-divider></v-divider>
      </div>
    </div>
  </div>
  </v-app-bar>

  <v-navigation-drawer
    app
    absolute
    temporary
    v-model="drawer"
  >
      <div class="lang-nav mt-2 ml-2">
        <v-img
            contain
            max-height="30"
            :src="require('@/assets/flags/united-kingdom.png')"
            alt="GB"
          />
        <v-img
          contain
          max-height="30"
          :src="require('@/assets/flags/russia.png')"
          alt="RU"
        />
      </div>
    <v-list
        nav
        dense
        flat
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="button in buttons"
            :key="button.name"
            link
          >
            <v-icon class="mr-1"> {{ button.icon }} </v-icon>
            <v-list-item
              :to="button.link"
            >
                {{ button.name }}
            </v-list-item>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      </v-navigation-drawer>
    </nav>
</template>

<script src="./header.js"></script>
<style lang="scss" scoped src="./header.scss"></style>
