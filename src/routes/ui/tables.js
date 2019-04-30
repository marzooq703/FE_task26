import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Table } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import ReactTable from "react-table";
import PerfectScrollbar from "react-perfect-scrollbar";
import productsData from "Data/products.json";
import classnames from "classnames";
import DataTablePagination from "Components/DataTables/pagination";

const dataTableData = productsData.data.slice(0, 20);
console.log(dataTableData);
const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Sales",
    accessor: "sales",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Stock",
    accessor: "stock",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: props => <p className="text-muted">{props.value}</p>
  }
];

export default class TablesUi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.tables" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row className="mb-5">
          <Colxx xxs="12">
            <h3 className="mb-4">
              <IntlMessages id="table.bootstrap-tables" />
            </h3>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.bootstrap-basic" />
                </CardTitle>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.bootstrap-striped" />
                </CardTitle>

                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.bootstrap-bordered" />
                </CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.bootstrap-borderless" />
                </CardTitle>
                <Table borderless>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.bootstrap-hoverable" />
                </CardTitle>
                <Table hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.bootstrap-responsive" />
                </CardTitle>

                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <h3 className="mb-4">
              <IntlMessages id="table.react-tables" />
            </h3>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.react-pagination" />
                </CardTitle>
                <ReactTable
                  data={dataTableData}
                  columns={dataTableColumns}
                  defaultPageSize={5}
                  showPageJump={false}
                  showPageSizeOptions={false}
                  PaginationComponent={DataTablePagination}
                  className={"react-table-fixed-height"}
                />
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.react-scrollable" />
                </CardTitle>
                <ReactTable
                  data={dataTableData}
                  TbodyComponent={CustomTbodyComponent}
                  columns={dataTableColumns}
                  defaultPageSize={20}
                  showPageJump={false}
                  showPageSizeOptions={false}
                  showPagination={false}
                  className={"react-table-fixed-height"}
                />
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="table.react-advanced" />
                </CardTitle>
                <ReactTable
                  data={dataTableData}
                  columns={dataTableColumns}
                  defaultPageSize={5}
                  filterable={true}
                  showPageJump={true}
                  PaginationComponent={DataTablePagination}
                  showPageSizeOptions={true}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
