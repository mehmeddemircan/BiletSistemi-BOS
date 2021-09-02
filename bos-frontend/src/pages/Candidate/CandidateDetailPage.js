import React, { useState, useEffect, Fragment } from "react";
import { Button, message } from "antd";
import LayoutHome from "../../components/layout/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCandidate } from "../../actions/candidateActions";
import EditCandidateModal from "../../components/modals/EditCandidateModal";
import { UPDATE_CANDIDATE_RESET } from "../../constants/candidateConstants";

const CandidateDetailPage = ({ match }) => {
  const { candidate } = useSelector((state) => state.getCandidateDetails);
  const dispatch = useDispatch();
  const { updateSuccess } = useSelector((state) => state.candidate);

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
    if (candidate && match.params.id !== candidate.id) {
      dispatch(getSingleCandidate(match.params.id));
    }
    if (updateSuccess) {
      setIsModalVisible(false);
      message.success("Successfully updated candidate");
      dispatch({ type: UPDATE_CANDIDATE_RESET });
    }
  }, [dispatch, match, updateSuccess]);

  return (
    <Fragment>
      <LayoutHome>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">{candidate.fullName}</p>
                  <a href="#" class="card-link">
                  
                  
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-end">
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

              <EditCandidateModal
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

export default CandidateDetailPage;
