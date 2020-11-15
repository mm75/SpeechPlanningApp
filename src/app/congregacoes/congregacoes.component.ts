import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CongregacaoService } from './../core/services/congregacao.service';
import { Congregacao } from './../shared/models/congregacao';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-congregacoes',
  templateUrl: './congregacoes.component.html',
  styleUrls: ['./congregacoes.component.scss'],
})
export class CongregacoesComponent implements OnInit {
  public modalRef: BsModalRef;
  public congregacoes: Congregacao[];
  public selectedCongregacao: Congregacao;
  public formCongregacao: FormGroup;
  public returnedCongregacoes: Congregacao[];

  constructor(
    private congregacoeservice: CongregacaoService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadCongregacoes();
  }

  private createForm(): void {
    this.formCongregacao = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      local: [false],
      ativo: [true],
    });
  }

  openModal(template: TemplateRef<any>, congregacao?: Congregacao): void {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
    });

    congregacao = congregacao ?? new Congregacao();

    this.selectedCongregacao = congregacao;
    this.formCongregacao.patchValue(congregacao);
  }

  closeModal(): void {
    this.createForm();
    this.modalRef.hide();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.returnedCongregacoes = this.congregacoes.slice(startItem, endItem);
  }

  loadCongregacoes(): void {
    this.congregacoeservice.getAll().subscribe(
      (congregacoes: Congregacao[]) => {
        this.congregacoes = congregacoes;
        this.returnedCongregacoes = this.congregacoes.slice(0, 10);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save(): void {
    if (!this.formCongregacao.valid) {
      return;
    }

    this.congregacoeservice
      .save(this.formCongregacao.value)
      .subscribe((data) => {
        this.loadCongregacoes();
        this.closeModal();
      });
  }

  remove(congregacao: Congregacao): void {
    this.congregacoeservice
      .remove(congregacao)
      .subscribe((data) => this.loadCongregacoes());
  }
}
