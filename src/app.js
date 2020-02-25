import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selectedCountry: null
    },
    mounted(){
      this.fetchCountry();
    },
    computed : {
      totalPopulation: function(){
        return this.countries.reduce((total, country) => {
          return total += country.population;
        }, 0)
      }
    },
    methods: {
      fetchCountry: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => this.countries = data)
      },
      getCountryInformation: function(){

      }

    // filteredCountries: function(){
    //   return this.countries.filter((country)=>{
    //
    //   })
    // }
      // dropdown: function(){
      //   return this.countries.map((country) => {
      //     return country.name;
      //   })
      // }

    }
  })
})
