<template>
  <div class="pokemon">
    <div v-if="found" class="pokemon__details">
      <h2 class="pokemon__details__name">{{ pokemon.name }}</h2>
      <img class="pokemon__details__image" v-bind:src="pokemon.image" alt="">
      <ul class="pokemon__details__stats">
        <li class="pokemon__details__stat" v-for="stat in pokemon.stats">{{ stat.stat.name }}: {{ stat.base_stat }}</li>
      </ul>
      <!-- If pokemon ID %3 equals 1, this pokemon is base form, if equals 2 - this is second form -> thanks to this pattern in API I created references to evolution without looking in table of fetching data from server -->
      <div class="pokemon__details__evolution">
        <div class="pokemon__details__evolution--first" v-if="pokemon.id%3 == 1">
          <h2>Evolutions:</h2>
          <router-link class="pokemon__details__evolution__link" :to="'/pokemon/' + (pokemon.id + 1)">Next form</router-link>
          <router-link class="pokemon__details__evolution__link" :to="'/pokemon/' + (pokemon.id + 2)">Last form</router-link>
        </div>
        <div class="pokemon__details__evolution--second" v-if="pokemon.id%3 == 2">
          <h2>Evolution:</h2>
          <router-link class="pokemon__details__evolution__link" :to="'/pokemon/' + (pokemon.id + 1)">Next form</router-link>
        </div>
      </div>
    </div>
    <!-- I show this message if this pokemon is not downloaded yet or data was not downloaded from server -->
    <div v-else class="pokemon--notfound">
      <img class="pokemon__empty" src="./../assets/empty.png">
      <div class="pokemon--notfound pokemon__description">Sorry, this pokemon is not in our base or might not have been downloaded yet!</div>
    </div>
    <h3 class="pokemon__backlink"><router-link to="/">Back</router-link></h3>
  </div>
</template>

<style scoped src="./../css/Pokemon.css"></style>

<script src="./../js/Pokemon.js"></script>

