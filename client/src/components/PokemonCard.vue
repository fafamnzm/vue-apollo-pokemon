<template>
  <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2" v-on="on">
    <v-img
      aspect-ratio="1"
      contain
      :src="pokemon.image"
      class="mx-auto my-auto"
    />
    <v-card-title>
      {{ pokemon.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    pokemon: {},
    on: {},
    hover: Boolean
  }
}
</script>

<style scoped></style>
