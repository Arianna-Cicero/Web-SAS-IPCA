import { api } from "./API";

export interface CategoryStat {
  categoria: string;
  percent: number;
}

export const getCategoryStats = async (): Promise<CategoryStat[]> => {
  const response = await api.get<CategoryStat[]>("/estatisticas/categorias");
  return response.data;
};
