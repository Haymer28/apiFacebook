const API = "https://graph.facebook.com/";

const app = Vue.createApp({
  data(){
    return{
      message: 'Bienvenido',
      busqueda: null,
      result: null,
      error: null,
      favoritos: new Map()
    }
  },
  created(){
    const FavoritosGuardados = JSON.parse(window.localStorage.getItem("misfavoritos"))

    if(FavoritosGuardados?.lenght){
      const FavoritosRebuild = new Map(
        FavoritosGuardados.map(alias=>[alias.id,alias])
      )
      this.favoritos = FavoritosRebuild
    }
  },
  computed:{
    estaFavoritos(){
      return this.favoritos.has(this.result.id)
    },
    TodosFavoritos(){
      return Array.from(this.favoritos.values())
    }

  },
  methods:{
    async Buscar(){
      this.result = this.error = null
      try{
      const response = await fetch(API + this.busqueda +'?fields=id,name,picture&access_token=EAALpEZCTkzKABAGO78SsUZAOnAiGVrjTkQ6zowk45STlN0TN7AiCzj3eEvSLZAYkjzmuOeZBEIE6pk5rO0MCLgrY7ZA8kKXyhxg6ebjFdclZCFVbRZAUWvqnH0aDyMDKEneZA66dgHxh5Ijz0LzzIvp9zwq7SXK0vUshZB3ZCy6ZCnYEUHeloAb3cloDLv0mSZA5YSvEW4vG30Dl6curCvehgqHVZARFWJy6U6wXGYDhA29NSvg21IMwU0vtd')
      if(!response.ok) throw new Error("Usuario no encontrado")
      const data = await response.json()
      console.log(data)
      this.result = data;
      }catch (error){
        this.error = error
      }finally {
        this.busqueda = null
      }
  },
  addFavorito(){
    this.favoritos.set(this.result.id, this.result)
    this.actualizarStorage();
  },
  removeFavorito(){
    this.favoritos.delete(this.result.id)
    this.actualizarStorage();
  },
  actualizarStorage(){
    window.localStorage.setItem('misfavoritos', JSON.stringify(this.TodosFavoritos))
  },
  mostrarFavoritos(parametro){
    this.result = parametro
  }
  }
})

//100005327266047
//100013851588548
//531560048665112