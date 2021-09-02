import { Button, Drawer } from "antd";
import React, { Fragment } from "react";
import CategoryCards from "../cards/CategoryCards";
import './drawer.css'
const SearchDrawer = ({ onClose, showSearch, handleSearch }) => {
  return (
    <Fragment>
      <Drawer
        width={"100vw"}
        onClose={onClose}
        visible={showSearch}
        bodyStyle={{
          paddingBottom: 80,
          background: "transparent",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} type="primary">
              Search
            </Button>
          </div>
        }
      >
        <form>
          <input
            placeholder="Type here to search..."
            className="form-control"
            style={{ marginTop: 64, height: 50, borderRadius: 20 }}
          />
          {/* <div style={{height: '200vh'}}></div> */}
        </form>

        <div style={{ margin: "80px 0px" }}>
          <div className="row">
            <div className="col-md-6 px-5">
              <h2>Categories</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>

            <div className="col-md-6 px-5">
              <h2>Trends</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>

            <CategoryCards />
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
};

export default SearchDrawer;
