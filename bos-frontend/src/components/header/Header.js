import { Button, Drawer, Space } from "antd";
import Search from "antd/lib/input/Search";
import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import CategoryCards from "../cards/CategoryCards";
import SearchDrawer from "../drawer/SearchDrawer";
import LanguagesModal from "../modals/LanguagesModal";
import LoginModal from '../modals/LoginModal'
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    setShowSearch(true);
  };

  const onClose = () => {
    setShowSearch(false);
  };

  const [showLngModal, setShowLngModal] = useState(false);

  const handleLanguage = () => {
    setShowLngModal(true);
  };

  const handleCloseLng = () => {
    setShowLngModal(false);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLogin = () => {
    setShowLoginModal(true);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
  };


  return (
    <Fragment>
      <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div class="container">
            <a class="navbar-brand">WebApi </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-sm-inline-flex justify-content-between"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav flex-grow-1">
                <li class="nav-item">
                  <Link class="nav-link text-dark" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-dark" to="/category">
                    Category
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link text-dark" to="/candidates">
                    Candidate
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-dark" to="/subeler">
                    Subeler
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link text-dark" to="/products">
                    Users
                  </Link>
                </li>
              </ul>

              <ul class="navbar-nav">

              <li class="nav-item">
                    <Button type="text" onClick={handleShowLogin}>Sign in</Button>

                  <LoginModal
                      showLoginModal={showLoginModal}
                      handleCloseLogin={handleCloseLogin}
                  />
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" onClick={handleSearch}>
                    {" "}
                    <i class="fas fa-search"></i>
                  </a>
                  {showSearch ? (
                    <SearchDrawer
                      showSearch={showSearch}
                      onClose={onClose}
                      handleSearch={handleSearch}
                    />
                  ) : null}
                </li>

                <li class="nav-item">
                  <a class="nav-link text-dark">
                    {" "}
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" onClick={handleLanguage}>
                    {" "}
                    <i class="fas fa-globe"></i>
                  </a>
                </li>

                <LanguagesModal
                  showLngModal={showLngModal}
                  handleCloseLng={handleCloseLng}
                />
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="container">
      <div className="w-100 py-3">
      {showSearch  ? <input className="form-control"/>: <h2>false</h2>}
      </div>
      </div> */}
      </header>
    </Fragment>
  );
};

export default Header;
