import { IEntity } from './../../core/entities/ientity';
export class Congregacao implements IEntity {
  public id: string;
  public nome: string;
  public local: boolean;
  public ativo: boolean;
}
