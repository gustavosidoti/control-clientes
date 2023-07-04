import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { Configuracion } from 'src/app/modelo/configuracion.model';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  mostrarREsponsive_menu = false;//creo esta variable para desplegar menu
  isLoggedIn: boolean;
  loggedInUser:string;
  permitirRegistro: boolean;

  constructor(private loginService: LoginService,
              private router: Router,
              private configuracionServicio: ConfiguracionServicio) { }

  ngOnInit(): void {
    // Revisa si el usuario está logueado
    this.loginService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    });
    // Asigna el valor de la configuracion de firebase para registrar un usuario
    this.configuracionServicio.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      })
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
