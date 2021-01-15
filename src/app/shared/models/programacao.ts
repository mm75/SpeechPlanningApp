import { IEntity } from './../../core/entities/ientity';

export class Programacao implements IEntity {
  id: string;
  congregacaoId: string;
  congregacaoNome: string;
  oradorId: string;
  oradorNome: string;
  esbocoId: string;
  esbocoTitulo: string;
  canticoId: string;
  canticoTitulo: string;
  data: Date;
  hora: string;
}
