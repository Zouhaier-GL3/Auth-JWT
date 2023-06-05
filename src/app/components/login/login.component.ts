import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: 'zouhaier@gmail.com',
    password: 'azerty'
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logIn(){
    console.log(this.user);
    this.authService.singin(this.user).subscribe( (res:any) => {
      // const token:string = JSON.stringify(res).split(",")[1].split(":")[1].split(' ')[1];
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['private']);
    })
  }

}
