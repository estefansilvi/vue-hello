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
  },
  changeImg: function(){
    this.immagine='./img/banana.png'
  }
}
});

Vue.config.devtools = true;
