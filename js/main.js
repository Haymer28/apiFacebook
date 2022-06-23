const API = "https://graph.facebook.com/";

const app = Vue.createApp({
  data(){
    return{
      message: 'Bienvenido',
      busqueda: null
    }
  },
  methods:{
    async Buscar(){
      const response = await fetch(API + this.busqueda +'?access_token=EAALpEZCTkzKABAMlbUl46c3jESONSvng6wKRm7dZC9Th9VaS34M61DObwD2nnEzwAMOotFSjgTRW2gHZAEPFgPDaD4fcDgUWcDuVx5yxdMJwiQ5PcK2ZBqrHQhpJa8p1kvgkkOfxDmrEcZAQ5QTzWmlnqTi50mrKHXkwPNEHCOgZDZD')
      const data = await response.json()
      console.log(data)
  }
  }
})
