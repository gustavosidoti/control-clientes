import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from '../../servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor( private clienteServicio:ClienteServicio) { }

  ngOnInit(): void {
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes != null){
      this.clientes.forEach( cliente =>{
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }

}
