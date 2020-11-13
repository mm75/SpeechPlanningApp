import { CanticoService } from './../core/services/cantico.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cantico } from '../shared/models/cantico';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  openModal(template: TemplateRef<any>, cantico?: Cantico): void {
    this.modalRef = this.modalService.show(template);
    this.selectedCantico = cantico;
    this.formCantico.patchValue(cantico);
  }

  constructor(
    private canticoService: CanticoService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
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
      titulo: [null, Validators.required]
    });
  }

  loadCanticos(): void {
    this.canticoService.getAll().subscribe(
      (canticos: Cantico[]) => {
        this.canticos = canticos;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save(): void {
    this.canticoService.save(this.formCantico.value).subscribe((data) => console.log(data));
    this.modalRef.hide();
  }
}
