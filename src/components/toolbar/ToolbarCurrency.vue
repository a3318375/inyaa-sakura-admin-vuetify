<script setup>
const currency = ref()
const currencies = [{
  label: 'USD',
  decimalDigits: 2,
  decimalSeparator: '.',
  thousandsSeparator: ',',
  currencySymbol: '$',
  currencySymbolNumberOfSpaces: 0,
  currencySymbolPosition: 'left',
}, {
  label: 'EUR',
  decimalDigits: 2,
  decimalSeparator: '.',
  thousandsSeparator: ',',
  currencySymbol: '€',
  currencySymbolNumberOfSpaces: 1,
  currencySymbolPosition: 'right',
}]
</script>

<template>
  <v-menu
    offset-y
    left
    transition="slide-y-transition"
  >
    <template #activator="{ on }">
      <v-btn icon v-on="on">
        {{ `${currency.currencySymbol} ${currency.label}` }}
      </v-btn>
    </template>

    <!-- currencies list -->
    <v-list dense nav>
      <v-list-item v-for="item in currencies" :key="item.label" @click="setCurrency(item)">
        <v-list-item-title>{{ `${item.currencySymbol} ${item.label}` }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
