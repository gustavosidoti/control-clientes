import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfiguracionServicio } from '../servicios/configuracion.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Configuracion } from '../modelo/configuracion.model';

@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
        private router: Router,
        private configuracionServicio: ConfiguracionServicio
    ){}


    canActivate(): Observable<boolean> {
        return this.configuracionServicio.getConfiguracion().pipe(
            map((configuracion:Configuracion) => {
                if(configuracion.permitirRegistro){
                    return true;
                }else{
                    this.router.navigate(['/login']);
                }
            })
        );
        
    }

}