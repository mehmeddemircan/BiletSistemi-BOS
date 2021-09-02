// import Modal from 'antd/lib/modal/Modal'
// import React, { Fragment } from 'react'
// import languages from '../../constants/languages/Languages'
// const LanguagesModal = ({showLngModal,handleCloseLng}) => {
//     return (
//         <Fragment>

// <Modal width={1000}  title="Basic Modal" visible={showLngModal}  onCancel={handleCloseLng}>
// {languages.map(({ code, name, country_code }) => (
//                   <Menu.Item
//                     style={{ fontSize: 16, margin: "6px 0px" }}
//                     className={classNames("dropdown-item", {
//                       disabled: currentLanguageCode === code,
//                     })}
//                     onClick={() => {
//                       i18next.changeLanguage(code);
//                     }}
//                   >
//                     <span
//                       className={`flag-icon flag-icon-${country_code} mx-2`}
//                       style={{
//                         opacity: currentLanguageCode === code ? 0.5 : 1,
//                       }}
//                     ></span>
//                     {name}
//                   </Menu.Item>
//                 ))}
//       </Modal>
//         </Fragment>
//     )
// }

// export default LanguagesModal


import React, { Fragment, useState, useEffect } from "react";
import classNames from "classnames";
import { Modal, Button, Menu, Tabs } from "antd";
import cookies from "js-cookie";
import i18next from "i18next";
import languages from '../../constants/languages/Languages'
const { TabPane } = Tabs;


const LanguagesModal = ({ showLngModal, handleOk, handleCloseLng, setIsModalVisible }) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <Fragment>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        visible={showLngModal}
        footer={null}
        onCancel={handleCloseLng}
        width={1040}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Language and Region" key="1">
     
            <div
              style={{
           
            
                maxHeight: 480,
                overflowY: "auto",
          
              }}
            >
          


           
        
            <div className="px-3 my-3"  >
              <h6 style={{fontSize: 21 ,color: '#484848'}}>Recommended Language</h6>
            </div>
          
           <li
                    style={{
                      display: "inline-block",
                      padding: 4,
                      fontSize: 15,
                      height: 50,
                      lineHeight: "40px",
                      borderRadius: 20,
                      margin: "8px",

                      color: "",
                      // currentLanguageCode === "en" ? "#1890ff" : "",
                      border:"1px solid rgba(34,34,34,0.10)"
                        // currentLanguageCode === "en"
                        //   ? "1px solid #1890ff"
                          // : "1px solid rgba(34,34,34,0.10)",
                    }}
                    className="col-md-2"
                   
                    onClick={() => {
                      i18next.changeLanguage("en");
                      setIsModalVisible(false);
                    }}
                  >
                    <a style={{ padding: "9px 12px" }}>
                      {" "}
                      <span
                        className={`flag-icon flag-icon-gb mx-2`}
                        // style={{
                        //   opacity: currentLanguageCode === code ? 0.5 : 1,
                        // }}
                      ></span>
                    English
                    </a>
                  </li>

                      
            

         
        
                      <div className="px-3 mt-5 mb-3"  >
              <h6 style={{fontSize: 21 ,color: '#484848'}}>Choose a language & Region</h6>
            </div>

              <ul style={{ padding: 0 }}>
                {languages.map(({ code, name, country_code }) => (
                  <li
                    style={{
                      display: "inline-block",
                      padding: 4,
                      fontSize: 15,
                      height: 50,
                      
                      lineHeight: "40px",
                      borderRadius: 20,
                      margin: "8px",
                      position:'relative',
                    

                      color: currentLanguageCode === code ? "#1890ff" : "",
                      border:
                        currentLanguageCode === code
                          ? "1px solid #1890ff"
                          : "1px solid rgba(34,34,34,0.10)",
                    }}
                    className="col-md-2"
                    aria-disabled={currentLanguageCode === code}
                    onClick={() => {
                      i18next.changeLanguage(code);
                      setIsModalVisible(false);
                    }}
                  >
                    <a style={{ padding: "9px 12px" ,}}>
                      {" "}
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        // style={{
                        //   opacity: currentLanguageCode === code ? 0.5 : 1,
                        // }}
                      ></span>
                      {name}
                    </a>
                  </li>
                ))}

                    

                
              </ul>
            </div>
          </TabPane>
          <TabPane tab="Currency" key="2">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                maxHeight: 480,
                overflowY: "auto",
              }}
            >
              <h4 style={{ padding: "5px 0px 5px 10px" }}>Choose a currency</h4>

              <ul style={{ padding: 0 }}>
                {languages.map(({ code, name, country_code }) => (
                  <li
                    style={{
                      display: "inline-block",
                      padding: 4,
                      fontSize: 15,
                      height: 50,
                      lineHeight: "40px",
                      borderRadius: 20,
                      margin: "8px",

                      color: currentLanguageCode === code ? "#1890ff" : "",
                      border:
                        currentLanguageCode === code
                          ? "1px solid #1890ff"
                          : "1px solid rgba(34,34,34,0.10)",
                    }}
                    className="col-md-2"
                    aria-disabled={currentLanguageCode === code}
                    onClick={() => {
                      i18next.changeLanguage(code);
                      setIsModalVisible(false);
                    }}
                  >
                    <a style={{ padding: "9px 12px" }}>
                      {" "}
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        // style={{
                        //   opacity: currentLanguageCode === code ? 0.5 : 1,
                        // }}
                      ></span>
                      {name}
                    </a>
                  </li>
                ))}

                <div style={{ height: "110vh" }}></div>
              </ul>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  );
};

export default LanguagesModal;