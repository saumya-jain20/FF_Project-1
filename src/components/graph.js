
// Graph.js

import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const Graph = ({ inputData }) => {
  useEffect(() => {
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Set themes
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();

    // Create X axis
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    // Create Y axis
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'close';
    series.dataFields.openValueY = 'open';
    series.dataFields.lowValueY = 'low';
    series.dataFields.highValueY = 'high';
    series.tooltipText = 'Open: {open}\n Low: {low}\n High: {high}\n Close: {close}';
    chart.cursor = new am4charts.XYCursor();

    // Enable mouse wheel zoom
    chart.plotContainer.wheelable = true;

    // Parse data and set to series
    const parsedData = inputData.map(item => ({
      date: new Date(item.Date),
      open: item.Open,
      high: item.High,
      low: item.Low,
      close: item.Close,
    }));

    // Set data
    series.data = parsedData;

    // Clean up on component unmount
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [inputData]); // Include inputData in the dependency array

  return <div id="chartdiv" style={{ width: '70%', height: '600px', margin: '15px', maxWidth: '100%' }}></div>;
};

export default Graph;
