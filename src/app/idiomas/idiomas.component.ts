import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IdiomaService } from './../core/services/idioma.service';
import { Idioma } from './../shared/models/Idioma';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent implements OnInit {
  public modalRef: BsModalRef;
  public idiomas: Idioma[];
  public selectedIdioma: Idioma;
  public formIdioma: FormGroup;
  public returnedIdioma: Idioma[];

  constructor(
    private idiomaService: IdiomaService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadIdiomas();
  }

  private createForm(): void {
    this.formIdioma = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
    });
  }

  openModal(template: TemplateRef<any>, idioma?: Idioma): void {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
    });

    idioma = idioma ?? new Idioma();

    this.selectedIdioma = idioma;
    this.formIdioma.patchValue(idioma);
  }

  closeModal(): void {
    this.createForm();
    this.modalRef.hide();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedIdioma = this.idiomas.slice(startItem, endItem);
  }

  loadIdiomas(): void {
    this.idiomaService.getAll().subscribe(
      (idiomas: Idioma[]) => {
        this.idiomas = idiomas;
        this.returnedIdioma = this.idiomas.slice(0, 10);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save(): void {
    if (!this.formIdioma.valid) {
      return;
    }

    this.idiomaService.save(this.formIdioma.value).subscribe((data) => {
      this.loadIdiomas();
      this.closeModal();
    });
  }

  remove(congregacao: Idioma): void {
    this.idiomaService
      .remove(congregacao)
      .subscribe((data) => this.loadIdiomas());
  }
}
