import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {

  }

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.route.navigate(['/'])
  }

}
