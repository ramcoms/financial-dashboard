const netWorth_div = document.getElementById('netWorth');

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawNetWorthChart);

function drawNetWorthChart() {
  // Set Data
  const data = new google.visualization.DataTable();
  data.addColumn('date', 'Period');
  data.addColumn('number', 'Amount');
  data.addRows([
    // 2020
    [new Date(2020, 12), 24933],

    // 2021
    [new Date(2021, 1), 124993],
    [new Date(2021, 2), 157422],
    [new Date(2021, 3), 228453],
    [new Date(2021, 4), 243060],
    [new Date(2021, 5), 313659],
    [new Date(2021, 6), 318776],
    [new Date(2021, 7), 391775],
    [new Date(2021, 8), 419383],
    [new Date(2021, 9), 461289],
    [new Date(2021, 10), 489861],
    [new Date(2021, 11), 512768],
    [new Date(2021, 12), 548374],

    // 2022
    [new Date(2022, 1), 596537],
    [new Date(2022, 2), 623289],
    [new Date(2022, 6), 493355],
    [new Date(2022, 7), 534165],
    [new Date(2022, 8), 560399],
    [new Date(2022, 9), 577682],
    [new Date(2022, 10), 542893],
    [new Date(2022, 11), 614069],
    [new Date(2022, 12), 661423],

    // 2023
    [new Date(2023, 1), 694964],
    [new Date(2023, 2), 747447],
    [new Date(2023, 3), 800462],
    [new Date(2023, 4), 847520],
  ]);

  // Set Options
  const options = {
    title: 'Net Worth',
    hAxis: { title: 'Period' },
    width: '100vw',
    height: 400,
    legend: 'none',
    crosshair: { trigger: 'focus' },
  };

  // Draw
  const chart = new google.visualization.AreaChart(netWorth_div);

  chart.draw(data, options);
}
