import { Component, OnInit } from '@angular/core';
import { DatasvcService } from '../datasvc.service';
import { Ordenes } from '../ordenes';
import * as _ from 'underscore';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  years: { year: number }[] = [
    { year: 2011 }, { year: 2012 }, { year: 2013 }, { year: 2014 },
    { year: 2015 }, { year: 2016 }, { year: 2017 }, { year: 2018 },
    { year: 2019 }
  ];

  months: { id: number; }[] = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
    { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }
  ]

  orders: Ordenes[] = [];
  listaOrdenes: Ordenes[] = [];
  buscarPor: number = 0;
  buscarTexto: string = null;

  params: {
    year: number;
    month: number;
  }

  constructor(private client : DatasvcService) { }

  ngOnInit() {
    this.params = { year: 2019, month: 7};

    this.searchOrdersByPeriod();
  }

  busquedaInteligente(searchFor: string) {
    let tempOrders : Ordenes[] = this.orders;
    this.listaOrdenes = [];

    if (searchFor === null) {
      this.listaOrdenes = this.orders;
      return;
    }

    tempOrders.forEach((item) => {
      if (item.Cliente.nombreCompleto.toLowerCase().includes(searchFor.toLowerCase())) {
        this.listaOrdenes.push(item);
      } else if (item.Cliente.razonSocial.toLowerCase().includes(searchFor)) {
        this.listaOrdenes.push(item);
      } else if (item.id.toLowerCase().includes(searchFor)) {
        this.listaOrdenes.push(item);
      } else if (item.fechaCrea.toLowerCase().includes(searchFor)) {
        this.listaOrdenes.push(item);
      } else if (item.pedido.toString().toLowerCase().includes(searchFor)) {
        this.listaOrdenes.push(item);
      } else if (item.total.toString().toLowerCase().includes(searchFor)) {
        this.listaOrdenes.push(item);
      }
  });
  }

  searchOrdersByPeriod() {
    this.client.getOrdersByPeriod(this.params.year, this.params.month)
    .subscribe((result) => {
      this.orders = _.filter(result, function(item) { return item.Cliente !== null; });

      this.listaOrdenes = this.orders;
    });
  }

  searchOrdersByOrderId() {
    console.log(this.buscarPor);
    if (this.buscarPor !== null && this.buscarPor !== undefined) {
      this.client.getOrdersByOrderId(this.buscarPor)
      .subscribe((result) => {
        this.orders = result;
      });
    }
  }
}
