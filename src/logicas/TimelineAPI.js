import { Listagem, Comentario, Like, Notifica } from "../actions/actionCreator";
export default class TimelineAPI {
  static lista(urlPerfil) {
    return dispatch => {
      fetch(urlPerfil)
        .then(response => response.json())
        .then(fotos => {
          dispatch(Listagem(fotos));
          return fotos;
        });
    };
  }

  static comenta(fotoId, textoComentario) {
    return dispatch => {
      const requestInfo = {
        method: "POST",
        body: JSON.stringify({ texto: textoComentario }),
        headers: new Headers({
          "Content-type": "application/json"
        })
      };

      fetch(
        `https://instalura-api.herokuapp.com/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem(
          "auth-token"
        )}`,
        requestInfo
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("não foi possível comentar");
          }
        })
        .then(novoComentario => {
          dispatch(Comentario(fotoId, novoComentario));
          return novoComentario;
        });
    };
  }

  static like(fotoId) {
    return dispatch => {
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
          dispatch(Like(fotoId, liker));
          return liker;
        });
    };
  }

  static pesquisa(login) {
    return dispatch => {
      fetch(`https://instalura-api.herokuapp.com/api/public/fotos/${login}`)
        .then(response => response.json())
        .then(fotos => {
          if (fotos.length === 0) {
            dispatch(Notifica("Usuário não encontrado!!!"));
          }
          dispatch(Listagem(fotos));
          return fotos;
        });
    };
  }
}
