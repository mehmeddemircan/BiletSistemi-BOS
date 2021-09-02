import Layout from 'antd/lib/layout/layout'
import React, { Fragment ,useState,useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import LoginModal from '../../components/modals/LoginModal'
const LoginPage = () => {

    const [subeKodu, setSubeKodu] = useState('')
    const [kullaniciKodu, setKullaniciKodu] = useState('')
    const [kullaniciSifre, setKullaniciSifre] = useState('')
    return (
        <Fragment>
        
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{backgroundColor: '#EFEFBB',height:'100vh'}}  >


      <div className="col-md-4 d-flex justify-content-center py-3" style={{background: '#EAEAEA',borderRadius:20}}>
         <form>
          {/* 1 */}

          {/* <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div> */}

   

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
             SubeKodu
            </label>
            <input
              type="name"
              class="form-control w-50  "
              id="exampleFormControlInput1"
              placeholder="Sube Kodu"
              value={subeKodu}
              onChange={(e) => setSubeKodu(e.target.value)}
            />
          </div>

          {/* 2 */}
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Kullanici Kodu
            </label>
            <input
              type="number"
              class="form-control w-50 "
              id="exampleFormControlInput1"
              placeholder="Kullanici Kodu"
              value={kullaniciKodu}
              onChange={(e) => setKullaniciKodu(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
            Kullanici Sifre
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sifre"
              value={kullaniciSifre}
              onChange={(e) => setKullaniciSifre(e.target.value)}
            />
          </div>


            <div className="mb-3 d-inline-flex"  style={{marginTop: 12}}>
                  
                    <button className="btn btn-primary mx-2 px-4">
        F2 - Tamam
</button>
<button className="btn btn-danger mx-3 px-4">
F3 - Iptal
</button>
           
            </div>
     

        </form>
         </div>
      </div>
  
         
        </Fragment>
    )
}

export default LoginPage
