<template>
  <v-card class="mx-auto my-auto" max-width="400" max-height="400" outlined>
    <v-list-item four-line>
      <v-list-item-content>
        <!-- <div class="overline m-4">Details</div> -->
        <v-list-item-title class="headline mb-1">{{
          pokemon.name
        }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar class="mt-12" tile size="110">
        <v-img :src="pokemon.image" aspect-ratio="1" contain />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-subtitle>
      {{ pokemon.classification }}
      <p>
        {{ pokemon.types[0] }}
        <span v-if="pokemon.types.length > 1">, {{ pokemon.types[1] }}</span>
      </p>
    </v-card-subtitle>
    <v-spacer></v-spacer>

    <v-card-text class="text--primary">
      <div>
        Height:
        {{ pokemon.height.minimum }}
        -
        {{ pokemon.height.maximum }}
        <br />
        Weight:
        {{ pokemon.weight.minimum }}
        -
        {{ pokemon.weight.maximum }}
        <br />
        <br />
        Attacks:
        <br />
        Fast:
        <div v-for="attack in pokemon.attacks.fast" :key="attack">
          {{ attack.name }} - {{ attack.type }} - {{ attack.damage }}
        </div>
        <br />
        Special:
        <div v-for="attack in pokemon.attacks.special" :key="attack">
          {{ attack.name }} - {{ attack.type }} - {{ attack.damage }}
        </div>
        <br />

        Resistant:
        <div v-for="resistant in pokemon.resistant" :key="resistant">
          {{ resistant }}
        </div>
        <br />
        Weaknesses:
        <div v-for="weakness in pokemon.weaknesses" :key="weakness">
          {{ weakness }}
        </div>
        <br />
        <div>Flee Rate: {{ pokemon.fleeRate }}</div>
        <br />
        <div>MaxCP: {{ pokemon.maxCP }}</div>
        <br />
        <div>maxHP: {{ pokemon.maxHP }}</div>
        <br />
        <div v-if="pokemon.evolutions">
          Evolutions:
          {{ pokemon.evolutions[0].name }}
          {{ pokemon.evolutions[1] ? " / " + pokemon.evolutions[1].name : "" }}
        </div>
        <div v-else>Fully Evolved</div>
        <br />
        <div v-if="pokemon.evolutionRequirements">
          Evolutions Requirements:
          {{ pokemon.evolutionRequirements.amount }} of
          {{ pokemon.evolutionRequirements.name }}
        </div>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="pokemon.dialog = false">
        CLOSE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PokemonDetails",
  props: {
    pokemon: {}
  }
}
</script>

<style></style>
