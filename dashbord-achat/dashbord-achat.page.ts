import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import _default from "chart.js/dist/plugins/plugin.tooltip";
import backgroundColor = _default.defaults.backgroundColor;



@Component({
  selector: 'app-dashbord-achat',
  templateUrl: './dashbord-achat.page.html',
  styleUrls: ['./dashbord-achat.page.scss'],
})
export class DashbordAchatPage implements OnInit {

  constructor() { }

  ngOnInit() {
    (async function() {
      const backgroundColor =[];
      const data = [
        { month: "Décembre", count: 10 },
        { month: "Janvier", count: 20 },
        { month: "Février", count: 15 },
        { month: "Mars", count: 25 },
        { month: "Avril", count: 22 },
        { month: "Mai", count: 30 },
        { month: "Juin", count: 28 },
      ];
       for (let i=0 ; i <data.length ; i++){
         if(data[i+1]){
          backgroundColor.push("#10155F")
         }else{
           backgroundColor.push("#FEC321")
         }
       }
      // @ts-ignore
      new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: data.map(row => row.month),
          datasets: [
            {
              label: 'Les Dépenses par Mois',
              data: data.map(row => row.count),
              backgroundColor:backgroundColor ,
              borderRadius: {
                topLeft:50,
                topRight:50,
                bottomLeft:50,
                bottomRight:50
              },
              barThickness:20

            }
          ]
        },
        options:{
          scales: {
            y:{
              display:false
            },
            x:{
              grid:{
              display: false
              }
            }
          }
        }
      });
    })();
  }

}
