import { EmprestimoStatus, EmprestimoTela, IItem } from '../infra/interface';

export const EMPRESTIMO: IItem[] = [
  {
    id: 1,
    title: 'OFERTA DE EMPRESTIMO 1',
    date: '16/05/22',
    value: 'R$ 1.200,00',
    status: EmprestimoStatus.Aprovado,
    screen: EmprestimoTela.Ativos,
  },
  {
    id: 2,
    title: 'OFERTA DE EMPRESTIMO 2',
    date: '16/05/22',
    value: 'R$ 120,00',
    status: EmprestimoStatus.Aprovado,
    screen: EmprestimoTela.Ativos,
  },
  {
    id: 3,
    title: 'OFERTA DE EMPRESTIMO 3',
    date: '16/03/22',
    value: 'R$ 100,00',
    status: EmprestimoStatus.Aprovado,
    screen: EmprestimoTela.Ativos,
  },
  {
    id: 4,
    title: 'OFERTA DE EMPRESTIMO 4',
    date: '11/03/22',
    value: 'R$ 900,00',
    status: EmprestimoStatus.Aprovado,
    screen: EmprestimoTela.Ativos,
  },
  {
    id: 5,
    title: 'OFERTA DE EMPRESTIMO 5',
    date: '16/05/22',
    value: 'R$ 500,00',
    status: EmprestimoStatus.Cancelado,
    screen: EmprestimoTela.Ativos,
  },
];
