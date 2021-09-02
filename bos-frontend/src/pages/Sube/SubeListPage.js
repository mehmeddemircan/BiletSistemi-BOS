import { Button, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllSubes, deleteSube } from "../../actions/subeActions";

import LayoutHome from "../../components/layout/LayoutHome";
import AntdModal from "../../components/modals/AntdModal";
import CreateSubeModal from "../../components/modals/CreateSubeModal";
import { CREATE_SUBE_RESET, DELETE_SUBE_RESET } from "../../constants/subeConstants";


const SubeListPage = () => {
  const subeDetails = useSelector((state) => state.subeDetails);
  const { deleted, updated } = useSelector((state) => state.sube);
  const { success } = useSelector((state) => state.newSube);
  const getAllSubes = useSelector(state => state.getAllSubes)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllSubes());

    if (success) {
      setIsModalVisible(false);
      dispatch({ type: CREATE_SUBE_RESET });
    }

    if (deleted) {
      dispatch({ type: DELETE_SUBE_RESET });
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
      dispatch(deleteSube(id));
    }
  };

  return (
    <LayoutHome>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h3>Butun Subeler</h3>
          </div>
          <div className="col-md-4 col-sm-12 text-end">
            {/* Button antd  */}
            <Button type="primary" onClick={showModal}>
             Yeni Sube
            </Button>

            <CreateSubeModal
              isModalVisible={isModalVisible}
              handleCancel={handleCancel}
              handleOk={handleOk}
            />
          </div>
        </div>
        <table class="table table-striped my-4 table-bordered">
          <thead>
            <tr>
          
              <th scope="col">Sube Adi</th>
              <th scope="col">Sube Kodu</th>
              <th scope="col">Sube Il</th>
              <th scope="col">Sube Ilce</th>
              <th scope="col">Sube Address</th>
            <th></th>
           
            </tr>
          </thead>
          <tbody>
            {getAllSubes.subes.map((sube) => (
                <tr>
                  
                   <td> <Link to={`/sube/${sube.id}`}>{sube.subeAdi}</Link>       </td>
          
                <td>{sube.subeKodu}</td>
             
                <td>{sube.subeIl}</td>
                <td>{sube.subeIlce}</td>
                <td>{sube.subeAddress}</td>
                
                <td className='d-inline-flex  justify-content-between w-100 align-items-center flex-wrap ' >
                 <Link to={`/${sube.id}`}> Edit </Link> 
                  <i
               
                    class="fas fa-trash text-danger"
                    style={{ marginLeft: 4 }}
                    onClick={() => handleDelete(sube.id)}
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

export default SubeListPage;
