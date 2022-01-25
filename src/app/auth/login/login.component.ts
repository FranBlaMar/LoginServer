import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }
  email: string = "bruno@email.com";
  password: string = "bruno";
  ngOnInit(): void {
  }

  login(){
      this.authService.login(this.email,this.password)
      .subscribe( resp => {
        console.log(resp);
        localStorage.setItem('jwt',JSON.stringify(resp));
        this.router.navigateByUrl('/dashboard');
      })
  }
}
