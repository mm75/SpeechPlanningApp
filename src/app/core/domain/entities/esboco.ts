import { IEntity } from '../../interfaces/entities/ientity';

export class Esboco implements IEntity {
  public id: string;
  public numero: number;
  public titulo: string;
  public idiomaId: number;
  public idiomaNome: string;
}
