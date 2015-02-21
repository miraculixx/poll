define(['chart'], function(Chart) {
    var ctx = document.getElementById('poll_result').getContext('2d');
    var data = {
        labels: ['Chartjs', 'Atomjs', 'Flotr2'],
        datasets: [
            {
                label: "Poll survey",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [60, 20, 10]
            },
        ]
    };
    var options =
        {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero : true,

            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines : true,

            //String - Colour of the grid lines
            scaleGridLineColor : "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth : 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - If there is a stroke on each bar
            barShowStroke : true,

            //Number - Pixel width of the bar stroke
            barStrokeWidth : 2,

            //Number - Spacing between each of the X value sets
            barValueSpacing : 5,

            //Number - Spacing between data sets within X values
            barDatasetSpacing : 1,

            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        };

    var myBarChart = new Chart(ctx).Bar(data, options);
});
