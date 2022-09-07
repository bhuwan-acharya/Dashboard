import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  ColumnSeries,
  DataLabel,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  barPrimaryYAxis,
  barPrimaryXAxis,
  barCustomSeries,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Inflation rate in percentage" />
      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[ColumnSeries, Legend, DateTime, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
