import { Component, OnInit, ɵConsole } from '@angular/core';
import { DatasvcService } from '../datasvc.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  buscarPor: string = null;
  clientes: Cliente[] = [];
  constructor(private client: DatasvcService) {
    
   }

  ngOnInit() {
    this.getCustomerInfo(this.buscarPor);
  }

  getCustomerInfo(searchBy: string) {
    this.client.getClientes(searchBy)
    .subscribe((result) => {
      this.clientes = result;
    });
  }

  getDataBy(event: MouseEvent)
  {
    this.getCustomerInfo(this.buscarPor);
  }

}
