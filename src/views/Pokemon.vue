<template>
  <div>
    <h1 align="center" justify="center">Pokemons, Gotta Catch em all</h1>
    <div>
      <ApolloQuery
        :query="require('@/graphql/pokemons.gql')"
        :variables="{ first }"
      >
        <!-- TODO -->
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">
            Loading... : {{ loading }}
            <v-container>
              <v-row>
                <v-col
                  v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                  :key="i"
                  cols="12"
                  md="4"
                  sm="6"
                >
                  <v-skeleton-loader
                    ref="skeleton"
                    type="card"
                    class="mx-auto"
                    loading
                    tile
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <!-- Error -->
          <div v-else-if="error" class="error apollo">
            An error occurred something went wrong : {{ error }}
          </div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <v-container>
              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  md="4"
                  sm="6"
                  v-for="pokemon in data.pokemons"
                  :key="pokemon.id"
                >
                  <v-hover v-slot:default="{ hover }">
                    <v-dialog v-model="pokemon.dialog" scrollable width="300px">
                      <template v-slot:activator="{ on }">
                        <PokemonCard
                          :on="on"
                          :hover="hover"
                          :pokemon="pokemon"
                        />
                      </template>

                      <PokemonDetails :pokemon="pokemon" />
                    </v-dialog>
                  </v-hover>
                </v-col>
              </v-row>
              <div v-if="first <= 150" v-intersect="loadMore">
                <v-row>
                  <v-col
                    v-for="i in [1, 2, 3]"
                    :key="i"
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-skeleton-loader
                      ref="skeleton"
                      type="card"
                      class="mx-auto"
                      loading
                      tile
                    ></v-skeleton-loader>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">
            <v-container>
              <v-row>
                <v-col
                  v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                  :key="i"
                  cols="12"
                  md="4"
                  sm="6"
                >
                  <v-skeleton-loader
                    ref="skeleton"
                    type="card"
                    class="mx-auto"
                    loading
                    tile
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
// The other way to use apollo query
// import gql from "graphql-tag"
import PokemonCard from "@/components/PokemonCard.vue"
import PokemonDetails from "@/components/PokemonDetails.vue"

export default {
  name: "Pokemon",
  components: {
    PokemonCard,
    PokemonDetails
  },
  created() {
    this.$vuetify.theme.themes.dark.header = "#41B883"
  },
  data() {
    return {
      first: 15,
      pokemon: {
        dialog: false
      }
    }
  },
  methods: {
    loadMore() {
      console.log(this.first)
      return (this.first += 6)
    }
  }
  // apollo: {
  //   pokemons: gql`
  //     {
  //       pokemons(first: 10) {
  //         id
  //         name
  //         number
  //         image
  //       }
  //     }
  //   `
  // }
}
</script>

<style scoped></style>
