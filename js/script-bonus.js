var app = new Vue({
 el: '#root',
 data:{
   messaggio:'Hellooooooooooooo',
   immagine:'./img/minion.png',
   titleColor:''
 },
 methods: {
   cambio:function(){
   this.messaggio='Bananaaaaaaaaaaaaaaaaa!!!';

  },
  changeColor: function(){
    this.titleColor='yellow'
  }
}
});

Vue.config.devtools = true;
