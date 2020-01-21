import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";

export default class ResultsTable extends React.Component {


    constructor(props) {
        super(props);

        // this.state = {x: 0, y: 0, inside: ''};

        this.OnDeleteClick = this.OnDeleteClick.bind(this);
        this.OnReRadiusClick = this.OnReRadiusClick.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
    }


    componentDidMount() {

        //this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }


    render() {
        // const columns = [
        //     {field: 'a', header: 'Vin'},
        //     {field: 'b', header: 'Year'},
        //            ];
        //
        // const dynamicColumns = columns.map((col,i) => {
        //     return <Column key={col.field} field={col.field} header={col.header} />;
        // });

        let tableData = [];


        if (this.props.results) {
            tableData = [...this.props.results];
        }


        tableData.forEach(p => {
            p.popalText = p.inside.toString();

        });
        tableData.reverse();
        return (
            <div className="ResultsTable">
                {/*<DataTableSubmenu />*/}


                <h3>Таблица результатов</h3>
                <DataTable value={tableData}>
                    <Column field="x" header="x"/>
                    <Column field="y" header="y"/>
                    <Column field="r" header="r"/>
                    <Column field="popalText" header="Попадание"/>
                    <Column header="Действие" body={this.actionTemplate}/>
                    {/*<Column field="---" header="Попадание" />*/}
                </DataTable>

                {/*<h3>Dynamic Columns</h3>*/}
                {/*<DataTable value={this.state.cars}>*/}
                {/*    {dynamicColumns}*/}
                {/*</DataTable>*/}


                {/*<DataTableDoc></DataTableDoc>*/}
            </div>
        );
    }


    OnDeleteClick(point_id) {


        this.props.DeletePoint(point_id,this.props.r);


    }
    OnReRadiusClick(point_id) {


        // this.props.ReDrawPoint(point_id,this.props.r);
        this.props.ReDrawPoint(point_id,this.props.r);


    }

    actionTemplate(rowData, column) {

        return <div>
            <button  type="button" onClick={() => this.OnDeleteClick(rowData.pointId)}><span >Удалить</span></button>
            <button  type="button" onClick={() => this.OnReRadiusClick(rowData.pointId)}><span>Перерасчет</span></button>
        </div>;
    }
}


