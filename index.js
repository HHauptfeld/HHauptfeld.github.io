google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
      var data = google.visualization.arrayToDataTable([
        ['Skill', 'Skill Level', { role: 'style' }],
        ['Java', 95, '#015249'],
        ['HTML/CSS', 75, '#015249'],
        ['Javascript', 70, '#015249'],
        ['Python', 60, '#015249'],
        ['Matlab', 50, '#015249'],
        ['C', 50, '#015249']
      ]);

      /*var data2 = new google.visualization.DataTable();
      data.addColumn('string', 'Month');
      data.addColumn('number', 'Tokyo');
      data.addColumn('number', 'New York');
      data.addColumn('number', 'Berlin');
      data.addColumn('number', 'London');
      data.addRows([
         ['Jan',  7.0, -0.2, -0.9, 3.9],
         ['Feb',  6.9, 0.8, 0.6, 4.2],
         ['Mar',  9.5,  5.7, 3.5, 5.7],
         ['Apr',  14.5, 11.3, 8.4, 8.5],
         ['May',  18.2, 17.0, 13.5, 11.9],
         ['Jun',  21.5, 22.0, 17.0, 15.2],
         
         ['Jul',  25.2, 24.8, 18.6, 17.0],
         ['Aug',  26.5, 24.1, 17.9, 16.6],
         ['Sep',  23.3, 20.1, 14.3, 14.2],
         ['Oct',  18.3, 14.1, 9.0, 10.3],
         ['Nov',  13.9,  8.6, 3.9, 6.6],
         ['Dec',  9.6,  2.5,  1.0, 4.8]
      ]);
      */

      var options = {
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Rating',
          textPosition: 'none',
          minValue: 0
        },
        legend: {position: 'none'}
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }