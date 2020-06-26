var app = new Vue({ 
    el: '#app',
    data: {
         username: '',
         email: '',
         password: '',
         password_confirm:'',
         info: null
    },
    // methods: {
    //     // reverseMessage: function () {
    //     //   this.username = this.username.split('').reverse().join('')
    //     // }
    //     submit(){
    //       // axios.post('http://127.0.0.1:8000/api/register', {name: this.username, email: this.email, password: this.password})
    //       // .then(response => (this.info = response));
    //       axios
    //       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //       .then(response => (this.info = response));
    //     }
    //   }
      mounted() {
          axios
            .get('http://127.0.0.1:8000/api/userget', {headers: {
              'Access-Control-Allow-Origin': 'http://127.0.0.1:8000/api/userget'
            }})
            .then(response => (this.info = response));
    }
});

// new Vue({
//   el: '#app',
//   data() {
//     return {
//       info: null
//     };
//   },
//   mounted() {
//     axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => (this.info = response));
//   }
// });
