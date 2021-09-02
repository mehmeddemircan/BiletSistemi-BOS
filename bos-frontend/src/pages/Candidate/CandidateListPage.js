import { Button, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AllCandidates,
  deleteCandidate,
  getCandidateDetails,
} from "../../actions/candidateActions";
import LayoutHome from "../../components/layout/LayoutHome";
import AntdModal from "../../components/modals/AntdModal";
import {
  CREATE_CANDIDATE_RESET,
  DELETE_CANDIDATE_RESET,
} from "../../constants/candidateConstants";

const CandidateListPage = () => {
  const candidateDetails = useSelector((state) => state.candidateDetails);
  const { deleted, updated } = useSelector((state) => state.candidate);
  const { success } = useSelector((state) => state.newCandidate);
  const getAllCandidates = useSelector(state => state.getAllCandidates)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllCandidates());

    if (success) {
      setIsModalVisible(false);
      dispatch({ type: CREATE_CANDIDATE_RESET });
    }

    if (deleted) {
      dispatch({ type: DELETE_CANDIDATE_RESET });
    }
  }, [dispatch, success, deleted]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // delete

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this subcategory")) {
      dispatch(deleteCandidate(id));
    }
  };

  return (
    <LayoutHome>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h3>Candidates</h3>
          </div>
          <div className="col-md-4 col-sm-12 text-end">
            {/* Button antd  */}
            <Button type="primary" onClick={showModal}>
              New Candidate
            </Button>

            <AntdModal
              isModalVisible={isModalVisible}
              handleCancel={handleCancel}
              handleOk={handleOk}
            />
          </div>
        </div>
        <table class="table table-striped my-4 table-bordered">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getAllCandidates.candidates.map((candidate) => (
                <tr>
                  
                   <td> <Link to={`/candidate/${candidate.id}`}>{candidate.fullName}       </Link> </td>
          
                <td>{candidate.mobile}</td>
                <td>{candidate.email}</td>
                <td>{candidate.age}</td>
                <td>{candidate.bloodGroup}</td>
                <td>{candidate.address}</td>
                <td className='d-inline-flex  justify-content-between w-100 align-items-center flex-wrap ' >
                 <Link to={`/${candidate.id}`}> Edit </Link> 
                  <i
               
                    class="fas fa-trash text-danger"
                    style={{ marginLeft: 4 }}
                    onClick={() => handleDelete(candidate.id)}
                  ></i>
                  
                </td>
              </tr>
          
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </LayoutHome>
  );
};

export default CandidateListPage;
