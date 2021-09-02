import { Button, message } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { deleteSube } from '../../actions/subeActions'
const DeleteSubeModal = ({showDeleteModal,handleCancelDelete,sube}) => {


    const dispatch = useDispatch()
    const {deleted} = useSelector(state => state.sube)
    const handleSubmitDeleteModal = (id) => {
        dispatch(deleteSube(id))

   

      }

    //   useEffect(() => {

    //     if (deleted) {
            
    //     }

    //   }, [dispatch,deleted])


    //  const handleDelete = (id) => {
    //     // if (window.confirm(`Bu subeyi silmekten emin misin ? `)) {
    //     //   dispatch(deleteSube(id));
    //     // }
    //  
    //   };
    return (
        <Fragment>
            <Modal 
            
            
            bodyStyle={{ maxHeight: 480, overflowY: "auto" }}
            title="Sube silme islemi" 
            visible={showDeleteModal}
            onOk={() => handleSubmitDeleteModal(sube.id)}
            onCancel={handleCancelDelete}
            footer={[
                <Button key="submit" type="primary" onClick={() => handleSubmitDeleteModal(sube.id)}>
                     Ok
                </Button>,
              <Button key="back" onClick={handleCancelDelete}>
                  Cancel
              </Button>,
           
            ]}>

                <h5 className="text-center mb-4">Bu subeyi silmekten emin misiniz ?</h5>
            <div class="card" style={{ borderRadius: 20 }}>
                <div class="card-body">
                  <h5 class="card-title">SUBE BILGILERI</h5>

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


            </Modal>
        </Fragment>
    )
}

export default DeleteSubeModal
