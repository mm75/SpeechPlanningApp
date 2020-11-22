import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteIdiomaComponent } from './autocomplete-idioma.component';

describe('AutocompleteIdiomaComponent', () => {
  let component: AutocompleteIdiomaComponent;
  let fixture: ComponentFixture<AutocompleteIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteIdiomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
