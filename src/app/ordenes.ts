import { Cliente } from './cliente';

export class Ordenes {
    fechaCrea: string;
    id: string;
    clienteSAP: string;
    pedido: number;
    pedidoSAP: number;
    total: number;
    refBanamex: string;
    refBancomer: string;
    Cliente: Cliente;
}
