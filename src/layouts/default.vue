<script setup>
import { VApp, VAppBar, VContainer, VMain } from 'vuetify/components'
import { product } from '~/configs'
import { theme } from '~/configs/theme'
import navigation from '~/configs/navigation'
const { isContentBoxed, isToolbarDetached, menuTheme, toolbarTheme } = theme
console.log(22222, theme, product)
const drawer = ref()
const showSearch = ref(false)

function onKeyup(e) {
  this.$refs.search.focus()
}
</script>

<template>
  <div
    class="d-flex flex-grow-1"
  >
    <v-layout>
      <!-- Navigation -->
      <v-navigation-drawer
        v-model="drawer"
        app
        floating
        class="elevation-1"
        :right="$vuetify.rtl"
        :light="menuTheme === 'light'"
        :dark="menuTheme === 'dark'"
      >
        <!-- Navigation menu info -->
        <template #prepend>
          <div class="pa-2">
            <div class="title font-weight-bold text-uppercase primary--text">
              {{ product.name }}
            </div>
            <div class="overline grey--text">
              {{ product.version }}
            </div>
          </div>
        </template>

        <!-- Navigation menu -->
        <MainMenu :menu="navigation.menu" />

        <!-- Navigation menu footer -->
        <template #append>
          <!-- Footer navigation links -->
          <div class="pa-1 text-center">
            <v-btn
              v-for="(item, index) in navigation.footer"
              :key="index"
              :href="item.href"
              :target="item.target"
              small
              text
            >
              {{ item.key ? $t(item.key) : item.text }}
            </v-btn>
          </div>

          <!-- REMOVE ME - Shop Demo purposes -->
          <div class="pa-2 pt-1 text-center">
            <v-btn
              class="buy-button"
              dark
              block
              color="#EE44AA"
              href="https://store.vuetifyjs.com/products/lux-admin-pro/"
              target="_blank"
            >
              Buy Now
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <!-- Toolbar -->
      <v-app-bar
        app
        :color="isToolbarDetached ? 'surface' : undefined"
        :flat="isToolbarDetached"
        :light="toolbarTheme === 'light'"
        :dark="toolbarTheme === 'dark'"
      >
        <v-card
          class="flex-grow-1 d-flex" :class="[isToolbarDetached ? 'pa-1 mt-3 mx-1' : 'pa-0 ma-0']"
          :flat="!isToolbarDetached"
        >
          <div class="d-flex flex-grow-1 align-center">
            <!-- search input mobile -->
            <v-text-field
              v-if="showSearch"
              append-icon="mdi-close"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              hide-details
              solo
              flat
              autofocus
              @click:append="showSearch = false"
            />

            <div v-else class="d-flex flex-grow-1 align-center">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

              <v-spacer class="d-none d-lg-block" />

              <!-- search input desktop -->
              <v-text-field
                ref="search"
                class="mx-1 hidden-xs-only"
                :placeholder="$t('menu.search')"
                prepend-inner-icon="mdi-magnify"
                hide-details
                filled
                rounded
                dense
              />

              <v-spacer class="d-block d-sm-none" />

              <v-btn class="d-block d-sm-none" icon @click="showSearch = true">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>



              <ToolbarApps />

              <div :class="[$vuetify.rtl ? 'ml-1' : 'mr-1']">
                <ToolbarNotifications />
              </div>

              <ToolbarUser />
            </div>
          </div>
        </v-card>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height" :fluid="!isContentBoxed">
          <RouterView />
        </v-container>
        <v-footer app inset>
          <v-spacer />
          <div class="overline">
            Built with
            <v-icon small color="pink">
              mdi-heart
            </v-icon>
            <a class="text-decoration-none" href="https://indielayer.com" target="_blank">@indielayer</a>
          </div>
        </v-footer>
      </v-main>
    </v-layout>
  </div>
</template>

<style scoped>
.buy-button {
  box-shadow: 1px 1px 18px #ee44aa;
}
</style>
