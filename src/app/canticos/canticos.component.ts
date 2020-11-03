import { CanticoService } from './../core/services/cantico.service';
import { Component, OnInit } from '@angular/core';
import { Cantico } from '../shared/models/cantico';

@Component({
  selector: 'app-canticos',
  templateUrl: './canticos.component.html',
  styleUrls: ['./canticos.component.scss'],
})
export class CanticosComponent implements OnInit {
  public canticos: Cantico[];

  constructor(private canticoService: CanticoService) {}

  ngOnInit(): void {
    this.loadCanticos();
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
}
