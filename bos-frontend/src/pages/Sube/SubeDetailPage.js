import { UPDATE_SUBE_RESET } from "../../constants/subeConstants";
import { Button, Modal, message } from "antd";

import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import EditSubeModal from "../../components/modals/EditSubeModal";
import { getSingleSube } from "../../actions/subeActions";
import LayoutHome from "../../components/layout/LayoutHome";
const SubeDetailPage = ({ match }) => {
  const { sube } = useSelector((state) => state.getSubeDetails);
  const dispatch = useDispatch();
  const { updateSuccess } = useSelector((state) => state.sube);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (sube && match.params.id !== sube.id) {
      dispatch(getSingleSube(match.params.id));
    }
    if (updateSuccess) {
      setIsModalVisible(false);
      message.success("Basarili bir sekilde sube duzenlendi");
      dispatch({ type: UPDATE_SUBE_RESET });
    }
  }, [dispatch, match, updateSuccess]);

  return (
    <Fragment>
      <LayoutHome>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div class="card" style={{ borderRadius: 20 }}>
                <div class="card-body">
                  <h5 class="card-title text-center">SUBE BILGILERI</h5>

                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Sube Adi <a className="float-end">{sube.subeAdi}</a>
                    </li>
                    <li class="list-group-item">
                      Sube Kodu <a className="float-end">{sube.subeKodu}</a>
                    </li>
                    <li class="list-group-item">
                      Sube Il <a className="float-end">{sube.subeIl}</a>
                    </li>
                    <li class="list-group-item">
                      Sube Ilce <a className="float-end">{sube.subeIlce}</a>
                    </li>
                    <li class="list-group-item">
                      Sube Address{" "}
                      <a className="float-end">{sube.subeAddress}</a>
                    </li>
                    <li class="list-group-item"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <Button
                icon={
                  <i
                    className="fas fa-pen"
                    style={{ marginRight: 8, fontSize: 11 }}
                  ></i>
                }
                type="primary"
                onClick={showModal}
              >
                Edit
              </Button>

              <EditSubeModal
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
                handleOk={handleOk}
              />
            </div>
          </div>
        </div>
      </LayoutHome>
    </Fragment>
  );
};

export default SubeDetailPage;
