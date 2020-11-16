import { CanticoService } from '../core/services/cantico.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cantico } from '../shared/models/cantico';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ConfirmationDialogService } from '../shared/services/confirmation-dialog.service';

@Component({
  selector: 'app-canticos',
  templateUrl: './canticos.component.html',
  styleUrls: ['./canticos.component.scss'],
})
export class CanticosComponent implements OnInit {
  public modalRef: BsModalRef;
  public canticos: Cantico[];
  public selectedCantico: Cantico;
  public formCantico: FormGroup;
  public returnedCantico: Cantico[];

  constructor(
    private canticoService: CanticoService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadCanticos();
  }

  private createForm(): void {
    this.formCantico = this.formBuilder.group({
      id: [null],
      numero: [null, Validators.required],
      titulo: [null, Validators.required],
    });
  }

  openModal(template: TemplateRef<any>, cantico?: Cantico): void {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
    });

    cantico = cantico ?? new Cantico();

    this.selectedCantico = cantico;
    this.formCantico.patchValue(cantico);
  }

  closeModal(): void {
    this.createForm();
    this.modalRef.hide();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedCantico = this.canticos.slice(startItem, endItem);
  }

  loadCanticos(): void {
    this.canticoService.getAll().subscribe(
      (canticos: Cantico[]) => {
        this.canticos = canticos;
        this.returnedCantico = this.canticos.slice(0, 10);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save(): void {
    if (!this.formCantico.valid) {
      return;
    }

    this.canticoService.save(this.formCantico.value).subscribe((data) => {
      this.loadCanticos();
      this.closeModal();
    });
  }

  remove(congregacao: Cantico): void {
    this.confirmationDialogService.confirmThis(
      'Deseja realmente remover o registro?',
      () => {
        this.canticoService
          .remove(congregacao)
          .subscribe((data) => this.loadCanticos());
      },
      () => {
        return false;
      }
    );
  }
}
