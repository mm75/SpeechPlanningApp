import {Component, OnInit} from '@angular/core';
import {ConfirmationDialogService} from '../../services/confirmation-dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  public message: any;

  constructor(
    private confirmDialogService: ConfirmationDialogService
  ) {
  }

  ngOnInit(): any {
    this.confirmDialogService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
