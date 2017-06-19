<template>
  <div class="table">
    <img class="table__header" src="./../assets/Great-Pokemon-Library.png">
    <div class="table__container">
    <table class="table__pokemonlist" >
      <tr class="table__pokemonlist__header"><th>Name</th><th>Image</th><th>HP</th></tr>
      <!-- I slice array of pokemons to make pagination -->
      <tr class="table__pokemonlist__row" v-for="pokemon in array.slice(pageNumber*sliceLimit-4,pageNumber*sliceLimit)">
        <td class="table__pokemonlist__cell table__pokemonlist__name"><router-link :to="pokemon.id">{{pokemon.name}}</router-link></td>
        <td class="table__pokemonlist__cell table__pokemonlist__photo"><img class=" table__pokemonlist__photo__img" v-bind:src="pokemon.image" alt=""></td>
        <td class="table__pokemonlist__cell table__pokemonlist__hp">{{pokemon.hp}}</td>
      </tr>
    </table>
      <!-- Increasing and decreasing pageNumber loads another part of the array -->
      <span class="table__pagination table__prev" v-on:click="pageNumber--" v-if="pageNumber>1">
        Previous
      </span>
      <span class="table__pagination table__next" v-on:click="pageNumber++" v-if="pageNumber<5">
        Next
      </span>
    </div>
    <div  class="table__loader" v-bind:class="{ hidden: ready }">
      <img class="table__loader__image" src="./../assets/vXa1ndiG1liU0.gif" alt="">
      <div class="table__loader__progressbar">
        <div class="table__loader__progress" v-bind:style="{ transform: 'scale(' + elemsNum + ', 1)' }"></div>
      </div>
      <div class="table__loader__opening">{{ parseInt(elemsNum*100) }}%</div>
      <div class="table__loader__description">Fetching your Pokemons...</div>
    </div>
    <!-- SVG for pagination arrows -->
    <svg width="0" height="0">
      <clipPath id="clipPolygon-next">
        <polygon points="50 0,60 10,50 20,0 20,0 0">
        </polygon>
      </clipPath>
    </svg>
    <svg width="0" height="0">
      <clipPath id="clipPolygon-prev">
        <polygon points="0 10,10 0,70 0,70 20,10 20">
        </polygon>
      </clipPath>
    </svg>
  </div>
</template>

<script src="./../js/Table.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./../css/Table.css"></style>
