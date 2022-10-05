export enum EmprestimoStatus {
  Aprovado,
  PropostaAprovada,
  Cancelado,
}

export enum EmprestimoTela {
  Ativos,
  Finalizados,
}

export interface IItem {
  id: number;
  title: string;
  date: string;
  value: string;
  status: EmprestimoStatus;
  screen: EmprestimoTela;
}
