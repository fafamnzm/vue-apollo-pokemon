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
            <v-skeleton-loader
              ref="skeleton"
              type="image, list-item-avatar"
              class="mx-auto"
            ></v-skeleton-loader>
          </div>
          <!-- Error -->
          <div v-else-if="error" class="error apollo">
            An error occurred something went wrong : {{ error }}
          </div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <v-container>
              <v-row align="center" justify="center">
                <div v-for="pokemon in data.pokemons" :key="pokemon.id">
                  <v-col>
                    <v-hover v-slot:default="{ hover }">
                      <v-dialog
                        v-model="pokemon.dialog"
                        scrollable="true"
                        width="300px"
                      >
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
                </div>
              </v-row>
            </v-container>
            <v-card v-if="first <= 150" v-intersect="loadMore"></v-card>
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">
            <v-row>
              <v-col>
                <v-skeleton-loader
                  ref="skeleton"
                  type="image, list-item-avatar"
                  class="mx-auto"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
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
      this.first += 9
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
