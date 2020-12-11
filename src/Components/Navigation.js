import React from 'react';
import { Link } from 'react-router-dom';

// import { AuthUserContext } from './Session';
import * as ROUTES from './Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navigation = () => (
  // <AuthUserContext.Consumer>
  //   {(authUser) => !!authUser && (
  <nav defaultactivekey="/home">
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <Link
        className="nav-item nav-link"
        id="nav-home-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-home"
        aria-selected="false"
        to={ROUTES.HOME}
      >
        <FontAwesomeIcon icon={["fas", "home"]} />
      </Link>
      <Link
        className="nav-item nav-link"
        id="nav-work-cited-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-work-cited"
        aria-selected="false"
        to={ROUTES.WORK_CITED}
      >
        Work Cited
      </Link>
      <Link
        className="nav-item nav-link"
        id="nav-work-cited-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-work-cited"
        aria-selected="false"
        to={ROUTES.IMG_CAROUSEL}
      >
        Images
      </Link>
      <Link
        className="nav-item nav-link"
        id="nav-pbs-videos-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-pbs-videos"
        aria-selected="false"
        to={ROUTES.PBS_VIDEOS}
      >
        PBS Videos
      </Link>

      {/* {!!authUser.roles.ADMIN && (
        <Link
          className="nav-item nav-link"
          id="nav-admin-tab"
          data-toggle="tab"
          role="tab"
          aria-controls="nav-admin"
          aria-selected="false"
          to={ROUTES.ADMIN}
        >
          Admin
        </Link>
      )} */}
    </div>
  </nav>
  // <div className="tab-wrapper">
  //   <div className="container">
  //     <div className="row">

  //     </div>
  //   </div>
  // </div>
  //   )}
  // </AuthUserContext.Consumer>
);

export default Navigation;
