<script>
import { useDisplay } from 'vuetify'
export default {
  setup() {
    // Destructure only the keys we want to use
    const { smAndDown, mdAndUp } = useDisplay()

    return { smAndDown, mdAndUp }
  },
  props: {
    // Show dropdown arrow
    showArrow: {
      type: Boolean,
      default: false,
    },
    // Show the country label
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale)
    },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$vuetify.lang.current = locale

      // example on how certain languages can be RTL
      if (locale === 'ar')
        this.$vuetify.rtl = true
      else
        this.$vuetify.rtl = false
    },
  },
}
</script>

<template>
  <v-menu
    offset-y
    left
    transition="slide-y-transition"
  >
    <template #activator="{ on }">
      <v-btn text :icon="smAndDown" v-on="on">
        <FlagIcon :round="smAndDown" :flag="currentLocale.flag" />
        <span v-show="mdAndUp && showLabel" :class="[$vuetify.rtl ? 'mr-1' : 'ml-1']">{{ currentLocale.label }}</span>
        <v-icon v-if="showArrow" right>
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>

    <v-list dense nav>
      <v-list-item v-for="locale in availableLocales" :key="locale.code" @click="setLocale(locale.code)">
        <FlagIcon :class="[$vuetify.rtl ? 'ml-1' : 'mr-1']" :flag="locale.flag" />
        <v-list-item-title>{{ locale.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
