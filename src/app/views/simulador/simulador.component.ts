import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  constructor() { }
  
  

  ngOnInit():void {
  }


  goToUrl(): void {
    window.open('http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso');
  }
  

}


