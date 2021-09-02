import { Tabs } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllSubes, deleteSube, getSingleSube } from "../../actions/subeActions";
import LayoutHome from "../../components/layout/LayoutHome";
import CreateSubeModal from "../../components/modals/CreateSubeModal";
import DeleteSubeModal from "../../components/modals/DeleteSubeModal";
import {
  CREATE_SUBE_RESET,
  DELETE_SUBE_RESET,
} from "../../constants/subeConstants";

const { TabPane } = Tabs;
const BosTable = () => {
  const getAllSubes = useSelector((state) => state.getAllSubes);
  const dispatch = useDispatch();
  const { deleted, updated } = useSelector((state) => state.sube);
  const { success } = useSelector((state) => state.newSube);
  const getSubeDetails = useSelector((state) => state.getSubeDetails);

  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(AllSubes());

    if (success) {
      setIsModalVisible(false);
      dispatch({ type: CREATE_SUBE_RESET });
    }

    if (deleted) {
      setShowDeleteModal(false);
      setId("");
      dispatch({ type: DELETE_SUBE_RESET });
    }
  }, [dispatch, success, deleted]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleId = (id) => {
    setId(id);

    dispatch(getSingleSube(id));
  };

  return (
    <Fragment>
      <LayoutHome>
        <div class="container py-3">
          <div className="row">
            <div className="col-md-8">
              <div className="">
                <form class="row g-3 px-4">
                  <h4>Sube bilgileri</h4>
                  <div className="d-inline-flex justify-content-between flex-wrap">
                    <div class="col-md-5">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-5">
                      <label for="inputPassword4" class="form-label">
                        Password
                      </label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div class="col-md-3">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="col-md-3">
                      <label for="inputPassword4" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="inputPassword4" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="px-4 my-3">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Bilgi ve Komisyonlar" key="1">
                    <div style={{ height: 800 }}>hello</div>
                  </TabPane>
                  <TabPane tab="Yazici Parametreleri" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Bilet Parametreleri" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                  <TabPane tab="Sube Parametreleri" key="4">
                    Content of Tab Pane 3
                  </TabPane>
                  <TabPane tab="Diger" key="5">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </div>
            </div>

            <div className="col-md-4">
              <h4 className="text-center">Sube Listesi</h4>
              <table class="table table-striped my-4 table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Sube Kodu</th>
                    <th scope="col">Sube Adi</th>
                  </tr>
                </thead>

                <tbody>
                  {getAllSubes.subes.map((sube) => (
                    <tr onClick={() => handleId(sube.id)}>
                      <td>
                        {" "}
                        <Link to={`/sube/${sube.id}`}>{sube.subeAdi}</Link>{" "}
                        <a>{sube.id}</a>
                        <a>{id}</a>
                      </td>

                      <td>{sube.subeKodu}</td>

                      {/* <td className="d-inline-flex  justify-content-between w-100 align-items-center flex-wrap ">
                        <Link to={`/${sube.id}`}> Edit </Link>
                        <i
                          class="fas fa-trash text-danger"
                          style={{ marginLeft: 4 }}
                          // onClick={() => handleDelete(sube.id)}
                        ></i>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary float-end" onClick={showModal}>
                <i className="fas fa-plus" style={{ marginRight: 12 }}></i>
                Sube ekle
              </button>

              <CreateSubeModal
                isModalVisible={isModalVisible}
                showModal={showModal}
                handleCancel={handleCancel}
                handleOk={handleOk}
              />

              <button
                type="submit"
                class="btn btn-danger float-end mx-3"
                // onClick={() => handleDelete(id)}
                onClick={handleDeleteModal}
                disabled={id == ""}
              >
                <i className="fas fa-trash " style={{ marginRight: 12 }}></i>{" "}
                Sil
              </button>

              <DeleteSubeModal
                showDeleteModal={showDeleteModal}
                handleCancelDelete={handleCancelDelete}
                sube={getSubeDetails.sube}
              />
            </div>
          </div>
        </div>
      </LayoutHome>
    </Fragment>
  );
};

export default BosTable;
