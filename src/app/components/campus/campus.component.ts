import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/entities/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  listaProveedores: Servicio[] | undefined;

  constructor(private proveedorService: ServicioService) { }

  ngOnInit(): void {
    this.proveedorService.servicioSelect().subscribe(
      (res) =>{
        console.log(res);
        this.listaProveedores = JSON.parse(JSON.stringify(res));
    } )
  }
}
