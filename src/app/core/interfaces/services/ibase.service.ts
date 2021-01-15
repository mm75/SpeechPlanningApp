import { IEntity } from '../entities/ientity';
import { Observable } from 'rxjs';

export interface IBaseService<T> {
  getBy(value: string): Observable<T[]>;
  getAll(): Observable<T[]>;
  getById(id: string): Observable<T>;
  save(entity: IEntity): Observable<T>;
  remove(entity: IEntity): Observable<T>;
}
