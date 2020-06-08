<template>
  <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2" v-on="on">
    <v-img :src="pokemon.image" class="mx-auto my-auto" />
    <v-card-title>
      {{ pokemon.name }}
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <span>
        {{ pokemon.types[0] }}
      </span>
      <span v-if="pokemon.types.length > 1"> , {{ pokemon.types[1] }} </span>
    </v-card-actions>
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
