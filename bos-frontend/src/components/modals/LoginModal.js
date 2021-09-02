import { Button, Input } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Form from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";



const LoginModal = ({handleCloseLogin,showLoginModal}) => {

  const [register, setRegister] = useState(false)
  
  const handleRegister = () => {
    setRegister((prev) => !prev) ; 
  }
  return (
    <Fragment>
    
      <Modal
        visible={showLoginModal}
        onOk={handleCloseLogin}
        onCancel={handleCloseLogin}
        bodyStyle={{ padding: 0 }}
        width={850}
        footer=""
      >
        <div style={{ display: "flex", height: 530, justifyContent: "center" }}>
          <div
            id="carouselExampleCaptions1"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
          
            </div>
            <div
              class="carousel-inner"
              style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
            >
      
              <div class="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100 img-fluid"
                  style={{ height: 530, objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/1427744/pexels-photo-1427744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100 img-fluid"
                  style={{ height: 530, objectFit: "cover" }}
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",

              flexWrap: "wrap",
              flex: "0 0 50%",
              padding: "0px 16px",

              background: "rgb(247, 247, 247)",
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <div
              className="form w-100 formScrollbar"
              style={{ maxHeight: 350, overflowY: "auto", padding: '0 17px' }}
            >
              <Button
                className=" position-absolute "
                style={{ top: 14, borderRadius: 20, border: " 1px solid #222" ,color: '#1890ff' , border : '1px solid #1890ff'}}
                onClick={handleRegister}
              >
               {register ? "Login" : "Register"}
              </Button>
              <h3 class="text-center mb-4">{register ? "Register" : "Login"}</h3>
        
            {register && (     <div>
                <input
                  class="form-control mb-3 mt-1"
                  type="text"
                  placeholder="Username"
                  aria-label="default input example"
                />
              </div>)}
              <div>
                <input
                  class="form-control mb-3 mt-1"
                  type="password"
                  placeholder="Email Address"
                  aria-label="default input example"
                />
              </div>
              <div>
                <input
                  class="form-control mb-3 mt-1"
                  type="password"
                  placeholder="Password"
                  aria-label="default input example"
                />
              </div>
              <div
                class="mb-3  form-check d-flex justify-content-between "
                style={{ marginLeft: 6 }}
              >
                <div>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <div>
                  {" "}
                  <a style={{ textDecoration: "underline" }}>
                    {register ? "Already have account?" : "Forgot password? "}
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="btn w-100 my-3 "
                  style={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: 15,
                    minHeight: 42,
                    fontSize: 18
                  }}
                >
                {register ? "Register" : "Login"}
                </button>
              </div>
              <div
                style={{
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                  fontSize: 15,
                }}
              >
                or continue with
              </div>
              <hr />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 10,
                    color: "#222",
                    fontSize: 14,
                    padding: "10px 12px",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ flexGrow: 0, flexShrink: 1, color: "#95a5a6" }}
                    >
                      <i class="fas fa-mobile"></i>
                    </div>
                    <div style={{ flexGrow: 1, flexShrink: 1 }}>
                      <div>Continue with phone</div>
                    </div>
                  </div>
                </Button>
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 10,
                    color: "#222",
                    fontSize: 14,
                    padding: "10px 12px",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ flexGrow: 0, flexShrink: 1, color: "#3b5998" }}
                    >
                      <i class="fab fa-facebook"></i>
                    </div>
                    <div style={{ flexGrow: 1, flexShrink: 1 }}>
                      <div>Continue with facebook</div>
                    </div>
                  </div>
                </Button>

                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 10,
                    color: "#222",
                    fontSize: 14,
                    padding: "10px 12px",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ flexGrow: 0, flexShrink: 1, color: "#db4437" }}
                    >
                      <i class="fab fa-google"></i>
                    </div>
                    <div style={{ flexGrow: 1, flexShrink: 1 }}>
                      <div>Continue with google</div>
                    </div>
                  </div>
                </Button>
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 10,
                    color: "#222",
                    fontSize: 14,
                    padding: "10px 12px",
                    marginBottom: 10,
                    lineHeight: "24px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 0, flexShrink: 1, fontSize: 18 }}>
                      <i class="fab fa-apple"></i>
                    </div>
                    <div style={{ flexGrow: 1, flexShrink: 1 }}>
                      <div>Continue with apple</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default LoginModal;
