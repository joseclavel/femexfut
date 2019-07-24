import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Ordenes } from './ordenes';

@Injectable({
  providedIn: 'root'
})
export class DatasvcService {

  constructor(private httpClient: HttpClient) { 

  }

  getClientes(buscarPor: string) {
    let url = "https://apigsa.fmf.mx/prtladmn/clientes";

    if (buscarPor !== null) {
      url += "?busqueda=" + buscarPor;
    }

    return this.httpClient.get<Cliente[]>(url);
  }

  getOrdersByPeriod(year: number, month: number) {
    let url = "https://apigsa.fmf.mx/prtladmn/ordenes-pago?anio=" + year + "&mes=" + month;
    return this.httpClient.get<Ordenes[]>(url);
  }

  getOrdersByOrderId(orderId: number) {

    if (orderId === null)
    {
      return null;
    }
    let url = "https://apigsa.fmf.mx/prtladmn/ordenes-pago?ordenPagoId=" + orderId;
    return this.httpClient.get<Ordenes[]>(url);
  }
}
