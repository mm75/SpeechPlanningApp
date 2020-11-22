import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { EsbocoService } from './../core/services/esboco.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Esboco } from '../shared/models/esboco';
import { ConfirmationDialogService } from '../shared/services/confirmation-dialog.service';

@Component({
  selector: 'app-esbocos',
  templateUrl: './esbocos.component.html',
  styleUrls: ['./esbocos.component.scss'],
})
export class EsbocosComponent implements OnInit {
  public modalRef: BsModalRef;
  public esbocos: Esboco[];
  public selectedEsboco: Esboco;
  public formEsboco: FormGroup;
  public returnedEsbocos: Esboco[];

  constructor(
    private esbocoservice: EsbocoService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadEsbocos();
  }

  private createForm(): void {
    this.formEsboco = this.formBuilder.group({
      id: [null],
      numero: [null, Validators.required],
      titulo: [null, Validators.required],
      idiomaId: [null, Validators.required]
    });
  }

  openModal(template: TemplateRef<any>, esboco?: Esboco): void {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
    });

    esboco = esboco ?? new Esboco();

    this.selectedEsboco = esboco;
    this.formEsboco.patchValue(esboco);
  }

  closeModal(): void {
    this.createForm();
    this.modalRef.hide();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.returnedEsbocos = this.esbocos.slice(startItem, endItem);
  }

  loadEsbocos(): void {
    this.esbocoservice.getAll().subscribe(
      (esbocos: Esboco[]) => {
        this.esbocos = esbocos;
        this.returnedEsbocos = this.esbocos.slice(0, 10);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save(): void {
    if (!this.formEsboco.valid) {
      return;
    }

    this.esbocoservice.save(this.formEsboco.value).subscribe((data) => {
      this.loadEsbocos();
      this.closeModal();
    });
  }

  remove(esboco: Esboco): void {
    this.confirmationDialogService.confirmThis(
      'Deseja realmente remover o registro?',
      () => {
        this.esbocoservice
          .remove(esboco)
          .subscribe((data) => this.loadEsbocos());
      },
      () => {
        return false;
      }
    );
  }
}
