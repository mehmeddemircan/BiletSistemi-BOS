import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getSingleCandidate,
  updateCandidate,
} from "../../actions/candidateActions";

const EditCandidateModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  match,
}) => {
  const { candidate } = useSelector((state) => state.getCandidateDetails);
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState(candidate.fullName);
  const [email, setEmail] = useState(candidate.email);
  const [mobile, setMobile] = useState(candidate.mobile);
  const [address, setAddress] = useState(candidate.address);
  const [age, setAge] = useState(candidate.age);
  const [bloodGroup, setBloodGroup] = useState(candidate.bloodGroup);

  // const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateCandidate(candidate.id, {
        fullName,
        email,
        mobile,
        address,
        age,
        bloodGroup,
      })
    );
  };

  return (
    <Fragment>
      <Modal
        title="Update Candidate"
        visible={isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: 480, overflowY: "auto" }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Update
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
    </Fragment>
  );
};

export default EditCandidateModal;
