new Vue({
    el: '#app',
    data () {
      return {
        data: null
      }
    },
    mounted () {
      // Getting data from API
      axios
        .get('https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga')
        .then(response => (this.data = response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']))
        .catch(error => console.log(error));
    }
  })