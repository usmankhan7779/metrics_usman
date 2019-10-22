import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as Chart from 'chart.js';

declare var $: any;

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics_id;
  select = false;
  dashboardname;
  metrics = [];
  tabname1;
  tabname2;
  getsearch;
  searchResult = [];
  tablview: any = [];
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
  chart: any = [];
  chart2:any=[];

  constructor(private http: HttpService, private _nav: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.get_metrics_dasboard();
 
  }


  get_metrics_dasboard() {

    this.http.get_metrics().subscribe(
      res => {

        this.metrics = res;
        
        this.dashboardname = res.title;
        this.metrics = res.metrics;
        this.tabname1 = res.viewOptions[0].name;
        this.tabname2 = res.viewOptions[1].name;
    
        this.tablview = res.tables
        this.charts_view = res.charts

        console.log(this.charts_view[0])
        for (let data of res.charts) {
          console.log(data.chartSeries[0].values)

          console.log(data.chartSeries[0])


          this.chart2 = new Chart('chart2',
            {
              type: 'bar',
              data: {
                labels: ['day1', 'day2', 'day3',
                  'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10',
                  'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'day17', 'day18', 'day19', 'day20'



                ],
                datasets: [

                  {
                    label: data.chartSeries[1].name,
                    data: [

                      data.chartSeries[1].values[0].value,
                      data.chartSeries[1].values[1].value,
                      data.chartSeries[1].values[2].value,
                      data.chartSeries[1].values[3].value,
                      data.chartSeries[1].values[4].value,
                      data.chartSeries[1].values[5].value,
                      data.chartSeries[1].values[6].value,
                      data.chartSeries[1].values[7].value,
                      data.chartSeries[1].values[8].value,
                      data.chartSeries[1].values[9].value,
                      data.chartSeries[1].values[10].value,


                      data.chartSeries[1].values[11].value,
                      data.chartSeries[1].values[12].value,
                      data.chartSeries[1].values[13].value,
                      data.chartSeries[1].values[14].value,
                      data.chartSeries[1].values[15].value,
                      data.chartSeries[1].values[16].value,
                      data.chartSeries[1].values[17].value,
                      data.chartSeries[1].values[18].value,
                      data.chartSeries[1].values[19].value,
                      data.chartSeries[1].values[20].value,

                 


                    ],
                    backgroundColor: [


                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',

                    ]
                  },


                ],
             

              },
              options: {
                legend: {
                  display: true,
                 
                }
              }


            })
          this.chart = new Chart('chart1',
            {
              type: 'bar',
              data: {
                labels: ['day1', 'day2', 'day3',
                  'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10',
                  'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'day17', 'day18', 'day19', 'day20',
                  'day21', 'day22', 'day23', 'day24', 'day25', 'day26', 'day27', 'day28', 'day29', 'day30',



                ],
                datasets: [

                  {
                    label: data.chartSeries[0].name,
                    data: [

                      data.chartSeries[0].values[0].value,
                      data.chartSeries[0].values[1].value,
                      data.chartSeries[0].values[2].value,
                      data.chartSeries[0].values[3].value,
                      data.chartSeries[0].values[4].value,
                      data.chartSeries[0].values[5].value,
                      data.chartSeries[0].values[6].value,
                      data.chartSeries[0].values[7].value,
                      data.chartSeries[0].values[8].value,
                      data.chartSeries[0].values[9].value,
                      data.chartSeries[0].values[10].value,


                      data.chartSeries[0].values[11].value,
                      data.chartSeries[0].values[12].value,
                      data.chartSeries[0].values[13].value,
                      data.chartSeries[0].values[14].value,
                      data.chartSeries[0].values[15].value,
                      data.chartSeries[0].values[16].value,
                      data.chartSeries[0].values[17].value,
                      data.chartSeries[0].values[18].value,
                      data.chartSeries[0].values[19].value,
                      data.chartSeries[0].values[20].value,

                      data.chartSeries[0].values[21].value,
                      data.chartSeries[0].values[22].value,
                      data.chartSeries[0].values[23].value,
                      data.chartSeries[0].values[24].value,
                      data.chartSeries[0].values[25].value,
                      data.chartSeries[0].values[26].value,
                      data.chartSeries[0].values[27].value,
                      data.chartSeries[0].values[28].value,
                      data.chartSeries[0].values[29].value,



                    ],
                    backgroundColor: [


                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',

                    ]
                  },


                ],
            
              },
              options: {
                legend: {
                  display: true,
                  
                }
              }


            })
        }
      

      });
  }

 

  setFilter(item) {
    this.getsearch = '';
    this.searchResult = [];
    const data = {
      value: item.id
    };

    this.http.setFilter(data).subscribe(res => {
      console.log(res);
    });
  }

  selectPerios(period) {

    this.select = false;
    this.http.setPeriod(period.id).subscribe(res => {
      console.log(res);
    });
  }

  selectViews(viewId) {

    this.select = false;
    this.http.setView(viewId).subscribe(res => {
      console.log(res);
    });
  }

  search(query) {
    let auth = {
      value: query

    };
    this.http.search(auth).subscribe(
      res => {
        console.log(res);

        this.searchResult = res;

      });
  }
  getvalue(val1) {
    this.metrics_id = val1
    this.view_metrics(val1)
  }
 get_id(val1,val2){
   alert(val1)
  //  

  this.http.get_page(val1,val2).subscribe(
    res => {

    console.log(res)
      
    

    });
 }

  charts_view: any = [];
  view_metrics(id) {
    this.http.get_metrics_view(id).subscribe(
      res => {

        this.tablview = res.tables
        this.charts_view = res.charts

        for (let data of res.charts) {
          console.log(data.chartSeries[0].values)

          console.log(data.chartSeries[0])


          this.chart2 = new Chart('chart2',
            {
              type: 'bar',
              data: {
                labels: ['day1', 'day2', 'day3',
                  'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10',
                  'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'day17', 'day18', 'day19', 'day20'



                ],
                datasets: [

                  {
                    label: data.chartSeries[1].name,
                    data: [

                      data.chartSeries[1].values[0].value,
                      data.chartSeries[1].values[1].value,
                      data.chartSeries[1].values[2].value,
                      data.chartSeries[1].values[3].value,
                      data.chartSeries[1].values[4].value,
                      data.chartSeries[1].values[5].value,
                      data.chartSeries[1].values[6].value,
                      data.chartSeries[1].values[7].value,
                      data.chartSeries[1].values[8].value,
                      data.chartSeries[1].values[9].value,
                      data.chartSeries[1].values[10].value,


                      data.chartSeries[1].values[11].value,
                      data.chartSeries[1].values[12].value,
                      data.chartSeries[1].values[13].value,
                      data.chartSeries[1].values[14].value,
                      data.chartSeries[1].values[15].value,
                      data.chartSeries[1].values[16].value,
                      data.chartSeries[1].values[17].value,
                      data.chartSeries[1].values[18].value,
                      data.chartSeries[1].values[19].value,
                      data.chartSeries[1].values[20].value,

                 


                    ],
                    backgroundColor: [


                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',

                    ]
                  },


                ],
             

              },
              options: {
                legend: {
                  display: true,
                 
                }
              }


            })
          this.chart = new Chart('chart1',
            {
              type: 'bar',
              data: {
                labels: ['day1', 'day2', 'day3',
                  'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10',
                  'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'day17', 'day18', 'day19', 'day20',
                  'day21', 'day22', 'day23', 'day24', 'day25', 'day26', 'day27', 'day28', 'day29', 'day30',



                ],
                datasets: [

                  {
                    label: data.chartSeries[0].name,
                    data: [

                      data.chartSeries[0].values[0].value,
                      data.chartSeries[0].values[1].value,
                      data.chartSeries[0].values[2].value,
                      data.chartSeries[0].values[3].value,
                      data.chartSeries[0].values[4].value,
                      data.chartSeries[0].values[5].value,
                      data.chartSeries[0].values[6].value,
                      data.chartSeries[0].values[7].value,
                      data.chartSeries[0].values[8].value,
                      data.chartSeries[0].values[9].value,
                      data.chartSeries[0].values[10].value,


                      data.chartSeries[0].values[11].value,
                      data.chartSeries[0].values[12].value,
                      data.chartSeries[0].values[13].value,
                      data.chartSeries[0].values[14].value,
                      data.chartSeries[0].values[15].value,
                      data.chartSeries[0].values[16].value,
                      data.chartSeries[0].values[17].value,
                      data.chartSeries[0].values[18].value,
                      data.chartSeries[0].values[19].value,
                      data.chartSeries[0].values[20].value,

                      data.chartSeries[0].values[21].value,
                      data.chartSeries[0].values[22].value,
                      data.chartSeries[0].values[23].value,
                      data.chartSeries[0].values[24].value,
                      data.chartSeries[0].values[25].value,
                      data.chartSeries[0].values[26].value,
                      data.chartSeries[0].values[27].value,
                      data.chartSeries[0].values[28].value,
                      data.chartSeries[0].values[29].value,



                    ],
                    backgroundColor: [


                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',
                      '#AF7AC5',

                    ]
                  },


                ],
            
              },
              options: {
                legend: {
                  display: true,
                  
                }
              }


            })
        }
      

      });
  }

  // get_metrics_view

  logout() {

    this.http.logout().subscribe(
      data => {
        console.log(data);

        this.toastr.success(data['response']);
        this._nav.navigate(['/login']);

        localStorage.removeItem('role')
        localStorage.removeItem('clienttag');

      });
  }
}