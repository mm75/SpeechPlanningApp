import { IEntity } from '../../interfaces/entities/ientity';
export class Congregacao implements IEntity {
  public id: string;
  public nome: string;
  public local: boolean;
  public ativo: boolean;
}
