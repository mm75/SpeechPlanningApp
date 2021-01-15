import { IEntity } from '../../../../core/interfaces/entities/ientity';
import { switchMap, map, tap } from 'rxjs/operators';
import { noop, Observable, Observer, of } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { BaseService } from 'src/app/infra/http/base.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent<T extends IEntity> implements OnInit {
  selected: T;
  suggestions: Observable<T[]>;
  errorMessage: string;
  arEntities: T[];

  @Input()
  title: string;

  @Input()
  search: string;

  @Input()
  parentForm: FormGroup;

  @Input()
  fieldId: string;

  @Input()
  fieldName: string;

  @Input()
  fieldValue = 'nome';

  @Input()
  service: BaseService<T>;

  constructor() {}

  ngOnInit(): void {
    this.parentForm.addControl(
      this.fieldName,
      new FormControl('', Validators.required)
    );

    this.suggestions = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.service.getBy(query).pipe(
            map((data: T[]) => data || this.arEntities),
            tap(
              () => {
                noop();
              },
              (err) => {
                this.errorMessage = (err && err.message) || 'Ocorreu um erro.';
              }
            )
          );
        }

        return of(this.arEntities);
      })
    );
  }

  onSelect(event: TypeaheadMatch): void {
    this.parentForm.controls[this.fieldId].setValue(event.item.id);
  }
}
