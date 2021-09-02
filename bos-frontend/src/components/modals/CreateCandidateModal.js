import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidateDetails, newCandidate } from "../../actions/candidateActions";
import { CREATE_CANDIDATE_RESET } from "../../constants/candidateConstants";


const CreateCandidateModal = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')


  const {success} = useSelector(state => state.newCandidate)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getCandidateDetails())
      if (success) {
          dispatch({type : CREATE_CANDIDATE_RESET})
      }
  }, [dispatch])

  const handleSubmit = (e) => {
      e.preventDefault() 
      dispatch(newCandidate({ fullName, email,mobile,address,age,bloodGroup }))

  }

  return (
    <Fragment>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form >
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCandidateModal;
