import { IEntity } from '../../core/interfaces/entities/ientity';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ConfirmationDialogService } from '../shared/services/confirmation-dialog.service';
import { FormGroup } from '@angular/forms';
import { TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BaseService } from '../../infra/http/base.service';

export abstract class BaseController<T, Y extends new (item?: any) => T> {
  public modalRef: BsModalRef;
  public entities: T[];
  public selectedEntity: T;
  public form: FormGroup;
  public returnedEntity: T[];
  public entity: T;

  constructor(
    private service: BaseService<T>,
    private type: Y,
    private modalService: BsModalService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  factory(item?: any): T {
    return new this.type(item);
  }

  abstract createForm(): void;

  openModal(template: TemplateRef<any>, entity?: T): void {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
    });

    entity = entity ?? this.factory(this.type);

    this.selectedEntity = entity;
    this.form.patchValue(entity);
  }

  closeModal(): void {
    this.createForm();
    this.modalRef.hide();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedEntity = this.entities.slice(startItem, endItem);
  }

  loadEntities(): void {
    this.service.getAll().subscribe(
      (entities: T[]) => {
        this.entities = entities;
        this.returnedEntity = this.entities.slice(0, 10);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save(): void {
    if (!this.form.valid) {
      return;
    }

    this.service.save(this.form.value).subscribe((data) => {
      this.loadEntities();
      this.closeModal();
    });
  }

  remove(entity: IEntity): void {
    this.confirmationDialogService.confirmThis(
      'Deseja realmente remover o registro?',
      () => {
        this.service.remove(entity).subscribe((data) => this.loadEntities());
      },
      () => {
        return false;
      }
    );
  }
}
