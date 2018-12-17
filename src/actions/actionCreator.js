export function Listagem(fotos) {
  return { type: "LISTAGEM", fotos };
}

export function Comentario(fotoId, novoComentario) {
  return { type: "COMENTARIO", fotoId, novoComentario };
}

export function Like(fotoId, liker) {
  return { type: "LIKE", fotoId, liker };
}

export function Notifica(msg) {
  return { type: "NOTIFICA", msg };
}
