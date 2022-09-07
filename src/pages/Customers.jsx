import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Toolbar,
  Sort,
  Filter,
  Selection,
  Edit,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-24 bg-white rounded-3xl">
      <Header category="Page" title="Customers"></Header>
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
