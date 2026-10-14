import { useQuery } from '@tanstack/react-query';
import { getFilme, getFilmes } from '../services/api';

export const useFilmes = () =>
  useQuery({ queryKey: ['filmes'], queryFn: getFilmes });

export const useFilme = (id: string) =>
  useQuery({ queryKey: ['filme', id], queryFn: () => getFilme(id), enabled: !!id });