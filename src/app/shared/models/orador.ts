import { IEntity } from './../../core/entities/ientity';

export class Orador implements IEntity{
  id: string;
  nome: string;
  telefone: string;
  congregacaoId: string;;
  congregacaoNome: string;
  ativo: boolean;
}
