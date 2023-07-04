import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from '../../servicios/cliente.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild('clienteForm') clienteForm: NgForm;

  constructor(private clienteServicio: ClienteServicio,
              private router: Router) { }

  ngOnInit(): void {
  }

  agregar(clienteForm : NgForm){
    if(!clienteForm.valid){
      console.log('revisar el formulario')
    }else{
      // Agregar el cliente
      this.clienteServicio.agregarCliente(clienteForm.value)
      this.clienteForm.resetForm();
      this.router.navigate(['/']);

    }
  }

}
