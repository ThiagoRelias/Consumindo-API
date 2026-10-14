export type Filme = {
  id: number | string;
  nome: string;
  ano: number;
  duracao: string;
  genero: string;
  poster: string;
  capa: string;
};

export type FilmeDetalhe = Filme & {
  diretor: string;
  sinopse: string;
  classificacao: string | number;
};