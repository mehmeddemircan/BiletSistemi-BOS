import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
import { newCandidate } from "../../actions/candidateActions";

const AntdModal = ({ isModalVisible, handleOk, handleCancel }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      newCandidate({ fullName, email, mobile, address, age, bloodGroup })
    );
  };

  return (
    <div>
      <Modal
        bodyStyle={{ maxHeight: 480, overflowY: "auto" }}
        title="Create New Candidate"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary"onClick={handleOk}>    
          Create
          </Button>,
  
        ]}
      >
        <form>
          {/* 1 */}
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full Name
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* 2 */}
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Mobile Phone
            </label>
            <input
              maxLength={11}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Blood group
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone number"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Age
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AntdModal;
