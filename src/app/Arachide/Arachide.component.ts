import { Component, OnInit } from '@angular/core';
import { YieldService } from '../yield.service';
import { Chart } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Arachide',
  templateUrl: './Arachide.component.html',
  styleUrls: ['./Arachide.component.css']
})
export class ArachideComponent implements OnInit {
  chart = [];

  constructor(private _yield: YieldService) {
  }

  ngOnInit(){
    // this._yield.rendement()
    // .subscribe(res =>{
    //   let rendement = res['res'].map(res => res.rendement_kg_ha)
    //     let production = res['res'].map(res => res.production_t)
    //     let annee = res['res'].map(res => res.annee)

    //     this.chart.push(new Chart('canvas', {
    //       type: 'line',
    //       data: {
    //         labels: annee,
    //         datasets: [
    //           {
    //             data: rendement,
    //             borderColor: '#3cba9f',
    //             fill: false
    //           },
    //           {
    //             data: production,
    //             borderColor: '#ffcc00',
    //             fill: false
    //           },
    //         ]
    //       },
         
    //     }))
    // })
  }
}
