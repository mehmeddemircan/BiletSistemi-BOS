import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
import { newSube } from "../../actions/subeActions";

const CreateSubeModal = ({ isModalVisible, handleOk, handleCancel }) => {
  // sube kod
  // ad
  // il
  // ilce

  // address
  const [subeKodu, setSubeKodu] = useState("");
  const [subeAdi, setSubeAdi] = useState("");
  const [subeIl, setSubeIl] = useState("");
  const [subeIlce, setSubeIlce] = useState("");
  const [subeAddress, setSubeAddress] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(newSube({ subeAdi, subeIl, subeIlce, subeKodu, subeAddress }));
  };

  return (
    <div>
      <Modal
        bodyStyle={{ maxHeight: 480, overflowY: "auto" }}
        title="Yeni Sube Olustur"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Iptal
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Olustur
          </Button>,
        ]}
      >
        <form>
          {/* 1 */}
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Sube Adi
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sube Adi"
              value={subeAdi}
              onChange={(e) => setSubeAdi(e.target.value)}
            />
          </div>

          {/* 2 */}
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Sube Kodu
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sube Kodu"
              value={subeKodu}
              onChange={(e) => setSubeKodu(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Sube Il
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sube il"
              value={subeIl}
              onChange={(e) => setSubeIl(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Sube Ilce
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sube ilce"
              value={subeIlce}
              onChange={(e) => setSubeIlce(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Address
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Address"
              value={subeAddress}
              onChange={(e) => setSubeAddress(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateSubeModal;
