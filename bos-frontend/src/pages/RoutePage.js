import { Menu } from "antd";
import React, { Fragment } from "react";

const RoutePage = () => {
  return (
    <Fragment>

        <h2 className="text-center my-5">BOS</h2>
      <div className="container ">
        <div className="row">
        
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className="col-md-3 col-sm-12 bg-primary   ">
            <h4 className="text-center my-2">ISLEMLER</h4>
            <Menu
      
        style={{ width: '100%' }}

        mode="inline"
      >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 1</Menu.Item>
            <Menu.Item key="4">Option 2</Menu.Item>
            <Menu.Item key="5">Option 1</Menu.Item>
            <Menu.Item key="6">Option 2</Menu.Item>
            <Menu.Item key="7">Option 1</Menu.Item>
            <Menu.Item key="8">Option 2</Menu.Item>
            <Menu.Item key="9">Option 1</Menu.Item>
            <Menu.Item key="10">Option 2</Menu.Item>
            <Menu.Item key="11">Option 1</Menu.Item>
            <Menu.Item key="12">Option 2</Menu.Item>
      </Menu>
          </div>
          <div className="col-md-3 col-sm-12 bg-primary  ">
            <h4 className="text-center my-2">KARTLAR</h4>
            <ul class="list-group">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>

              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 bg-primary ">
            <h4 className="text-center my-2">TANIMLAR</h4>
            <ul class="list-group">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>

              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
        </div>
        </div>
        </div>
    
    </Fragment>
  );
};

export default RoutePage;
