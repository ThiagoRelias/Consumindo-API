import { Filme, FilmeDetalhe } from '../types/filme';

const API_URL = 'http://10.92.201.130:3000';

export async function getFilmes(): Promise<Filme[]> {
  const res = await fetch(`${API_URL}/filmes`);
  if (!res.ok) throw new Error('Erro ao carregar filmes');
  return res.json();
}

export async function getFilme(id: string): Promise<FilmeDetalhe> {
  const res = await fetch(`${API_URL}/filmes/${id}`);
  if (!res.ok) throw new Error('Erro ao carregar filme');
  return res.json();
}