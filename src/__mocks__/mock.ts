import { EmprestimoStatus } from '../infra/interface';

export const Emprestimo = {
  ativos: [
    {
      id: '1',
      titulo: '0 Antecipação do FGTS',
      data: '16/05/22',
      valor: 12900,
      status: EmprestimoStatus.ContratacaoAprovada,
      link: 'antecipacao-fgts',
    },
    {
      id: '2',
      titulo: '1 Crédito Consignado',
      data: '16/05/22',
      valor: 12900,
      status: EmprestimoStatus.ContratacaoAprovada,
      link: 'consignado',
    },
    {
      id: '3',
      titulo: 'Outro Crédito',
      data: '11/03/22',
      valor: 1200,
      status: EmprestimoStatus.ContratoQuitado,
      link: 'antecipacao-fgts',
    },
  ],
};
