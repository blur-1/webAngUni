import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  listaClientes: Cliente[] | undefined;

  constructor(private servicioCliente: ClienteService){}

  ngOnInit(): void {
    this.servicioCliente.servicioSelect().subscribe(
      (res) =>{
        console.log(res);
        this.listaClientes = JSON.parse(JSON.stringify(res));
    } )
  }
}
