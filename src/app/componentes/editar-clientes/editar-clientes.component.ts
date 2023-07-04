import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import Swal from 'sweetalert2';
import { ClienteServicio } from '../../servicios/cliente.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  cliente: Cliente ={
    
  }

  id:string;
  
  constructor(private clienteServicio: ClienteServicio,
              
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.clienteServicio.getCliente(this.id).subscribe( cliente =>
      this.cliente = cliente)
  }

  guardar({value, valid}: {value: Cliente, valid:boolean}){
    if(!valid){
      Swal.fire('Error', 'Error al guardar los datos', 'error')
    }else{
      value.id = this.id;
      // Modificar el cliente
      this.clienteServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm('¿Seguro que desea eliminar el cliente?')){
      this.clienteServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
