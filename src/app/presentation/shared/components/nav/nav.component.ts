import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/infra/authentication/authenticate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private auth: AuthenticateService) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }
}
