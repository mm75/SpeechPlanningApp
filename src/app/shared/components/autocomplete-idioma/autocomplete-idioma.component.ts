import { IdiomaService } from './../../../core/services/idioma.service';
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
import { Idioma } from '../../models/Idioma';

@Component({
  selector: 'app-autocomplete-idioma',
  templateUrl: './autocomplete-idioma.component.html',
  styleUrls: ['./autocomplete-idioma.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteIdiomaComponent implements OnInit {
  selected: Idioma;
  suggestions$: Observable<Idioma[]>;
  errorMessage: string;
  arIdioma: Idioma[];

  @Input()
  search: string;

  @Input()
  parentForm: FormGroup;

  constructor(private idiomaService: IdiomaService) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'idiomaNome',
      new FormControl('', Validators.required)
    );

    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.idiomaService.getByNome(query)
            .pipe(
              map((data: Idioma[]) => data || this.arIdioma),
              tap(
                () => {
                  noop();
                },
                (err) => {
                  this.errorMessage =
                    (err && err.message) || 'Ocorreu um erro.';
                }
              )
            );
        }

        return of(this.arIdioma);
      })
    );
  }

  onSelect(event: TypeaheadMatch): void {
    this.parentForm.controls['idiomaId'].setValue(event.item.id);
  }
}
