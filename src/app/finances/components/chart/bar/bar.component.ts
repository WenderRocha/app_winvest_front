import { Component, OnInit } from "@angular/core";

import {
  ApexResponsive,
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTheme,
} from "ng-apexcharts";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.css"],
})
export class BarComponent implements OnInit {
  responsive: ApexResponsive[] = [];
  series: ApexAxisChartSeries = [];
  chart!: ApexChart;
  dataLabels!: ApexDataLabels;
  plotOptions!: ApexPlotOptions;
  yaxis!: ApexYAxis;
  xaxis!: ApexXAxis;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  stroke!: ApexStroke;
  legend!: ApexLegend;
  colors: string[] = [];
  theme!: ApexTheme;

  constructor() {}

  ngOnInit(): void {
    this.initializeChartOption();
  }

  private initializeChartOption(): void {
    (this.theme = {
      mode: "dark",
    }),
      (this.responsive = [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ]);

    (this.series = [
      {
        name: "Receita",
        data: [0, 0, 131.56, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },

      {
        name: "Despesa",
        data: [0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ]),
      (this.colors = ["#27ae60", "#c0392b"]);

    this.chart = {
      type: "bar",
      width: 350,
      height: 300

    };

    (this.plotOptions = {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    }),
      (this.dataLabels = {
        enabled: false,
      }),
      (this.stroke = {
        show: true,
        width: 2,
        colors: ["transparent"],
      }),
      (this.xaxis = {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],

        labels: {
          style: {
            colors: [
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
              "#f1f1f1",
            ],
          },
        },
      }),
      (this.yaxis = {
        title: {
          text: "R$ (Balanço)",
          style: {
            fontSize: "14px",
            fontWeight: "normal",
            color: "#f1f1f1",
          },
        },
      }),
      (this.fill = {
        opacity: 1,
      }),
      (this.tooltip = {
        theme: "dark",

        y: {
          formatter: function (val) {
            return "R$ " + val + " Reais";
          },
        },
      });

    this.legend = {
      fontSize: "14px",
      labels: {
        colors: "#f1f1f1",
      },
    };
  }
}
