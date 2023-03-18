var barChartOptions = {
    series: [{
    data: [256, 384, 297, 436]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    },
  },
  colors: [
    "#ffbf00"
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "60%",

    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["January", "February", "March", "April"],
  },
};

  var barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);
  barChart.render();