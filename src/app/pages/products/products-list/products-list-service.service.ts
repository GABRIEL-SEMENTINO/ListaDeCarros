import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { brand: 'BMW', model: '328i Cabriolet', board: 'AFW-3900', price: 179.000, color: 'AZUL MARINHO FOSCO' },
      { brand: 'BMW', model: '428i', board: 'ARY-3767', price: 183.278, color: 'PRETO' },
      { brand: 'BMW', model: 'X6', board: 'AQR-2247', price: 386.240, color: 'PRETO' },
      { brand: 'Toyota', model: 'Bandeirantes', board: 'BAM-1055', price: 45.563, color: 'PRETO' },
      { brand: 'Volvo', model: 'XC90', board: 'ALD-5070', price: 72.423, color: 'BRANCO ÁRTICO' },
      { brand: 'Troller', model: 'Troller 3.3', board: 'AOO-8543', price: 64.200, color: 'VERDE MILITAR' },
    ];
  }

  getColumns() {
    return {
      brand: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '10%',
      },
      model: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '15%',
      },
      board: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '20%',
      },
      price: {
        title: 'Valor Fip',
        type: 'number',
        filter: true,
        width: '10%',
      },
      color: {
        title: 'Cor',
        type: 'number',
        filter: true,
        width: '10%',
      },
    }
  };

}
