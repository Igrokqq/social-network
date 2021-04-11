/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Logo from '../components/Logo';
import HomeIcon from '../components/HomeIcon';
import HashTagIcon from '../components/HashTagIcon';
import BellIcon from '../components/BellIcon';
import MessageIcon from '../components/MessageIcon';
import ProfileIcon from '../components/ProfileIcon';

import '../sass/layouts/HomeHeader.sass';

export default function HomeHeader(): JSX.Element {
  return (
    <Fragment>
      <header className="header d-flex flex-column justify-content-start align-items-center">
        <Nav defaultActiveKey="/" className="flex-column navigation">
          <div className="d-flex justify-content-start align-items-start w-100 mb-3">
            <Nav.Link href="/" className="pl-0"><Logo /></Nav.Link>
          </div>

          <div className="navigation-link">
            <Nav.Link href="/" className="link">
              <HomeIcon className="icon" />
              <span className="text">Home</span>
            </Nav.Link>
          </div>
          <div className="navigation-link">
            <Nav.Link eventKey="link-2" className="link">
              <HashTagIcon className="icon" />
              <span className="text">Explore</span>
            </Nav.Link>
          </div>
          <div className="navigation-link">
            <Nav.Link eventKey="link-2" className="link">
              <BellIcon className="icon" />
              <span className="text">Notifications</span>
            </Nav.Link>
          </div>
          <div className="navigation-link">
            <Nav.Link eventKey="link-3" className="link">
              <MessageIcon className="icon" />
              <span className="text">Messages</span>
            </Nav.Link>
          </div>
          <div className="navigation-link">
            <Nav.Link eventKey="link-4" className="link">
              <ProfileIcon className="icon" />
              <span className="text">Profile</span>
            </Nav.Link>
          </div>
        </Nav>
      </header>
    </Fragment>
  );
}
