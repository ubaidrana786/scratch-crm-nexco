import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./Header.css";

export const Header = () => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              {/* <Link to="#" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src={logoN} alt="" height="30" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={logoNexco} alt="" height="80" />
                                    </span>
                                </Link>

                                <Link to="#" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src={logoN} alt="" height="30" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={logoNexco} alt="" height="80" />
                                    </span>
                                </Link> */}
            </div>
            {/* 
                            <Button size="sm" color="none" type="button"  className="px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                                <i className="ri-menu-2-line align-middle"></i>
                            </Button>


                            <Form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <Input type="text" className="form-control" placeholder='Search' />
                                    <span className="ri-search-line"></span>
                                </div>
                            </Form> */}

            <Form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="ri-search-line"></span>
              </div>
            </Form>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
              >
                <i className="ri-search-line"></i>
              </button>
              <div aria-labelledby="page-header-search-dropdown">
                <Form className="p-3">
                  <FormGroup className="m-0">
                    <InputGroup>
                      <Input type="text" className="form-control" />
                      {/* <InputGroupAddon addonType="append">
                                                    <Button color="primary" type="submit"><i className="ri-search-line"></i></Button>
                                                </InputGroupAddon> */}
                    </InputGroup>
                  </FormGroup>
                </Form>
              </div>
            </div>

            {/* 
                            <div className="dropdown d-none d-lg-inline-block ms-1">
                                <Button color="none" type="button" className="header-item noti-icon waves-effect" onClick={this.toggleFullscreen}>
                                    <i className="ri-fullscreen-line"></i>
                                </Button>
                            </div> */}

            {/* <ProfileMenu /> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
