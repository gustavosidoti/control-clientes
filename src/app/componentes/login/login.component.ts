import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor( private router: Router,
                private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  login(){
    this.loginService.login(this.email, this.password)
    .then( res =>{
      this.router.navigate(['/']);
    })
    .catch(error =>{
      Swal.fire('Error', "Usuario o contraseña incorrecto", 'error')
    })
  }

}
