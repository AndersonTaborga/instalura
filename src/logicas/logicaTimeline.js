import Pubsub from "pubsub-js";
export default class LogicaTimeline {
  //insejeção de independecia
  constructor(fotos) {
    this.fotos = fotos;
  }

  like(fotoId) {
    fetch(
      `https://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem(
        "auth-token"
      )}`,
      { method: "POST" }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("não foi possível realizar o like da foto");
        }
      })
      .then(liker => {
        const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
        fotoAchada.likeada = !fotoAchada.likeada;

        const possivelLiker = fotoAchada.likers.find(
          likerAtual => liker.login === likerAtual.login
        );

        if (possivelLiker === undefined) {
          fotoAchada.likers.push(liker);
        } else {
          const novosLikers = fotoAchada.likers.filter(
            likerAtual => liker.login !== likerAtual.login
          );
          fotoAchada.likers = novosLikers;
        }
        Pubsub.publish("timeline", this.fotos);
      });
  }
}
