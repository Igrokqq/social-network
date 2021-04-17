import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useHistory, Link } from 'react-router-dom';
import { UnregisterCallback, Location } from 'history';
import Logo from './Logo';
import HomeIcon from './Ui/HomeIcon';
import HomeActiveIcon from './Ui/HomeActiveIcon';
import HashTagIcon from './Ui/HashTagIcon';
import BellIcon from './Ui/BellIcon';
import MessageIcon from './Ui/MessageIcon';
import ProfileIcon from './Ui/ProfileIcon';
import ProfileActiveIcon from './Ui/ProfileActiveIcon';
import RoutesConstants from '../routes/constants';

import '../sass/components/HomeHeaderNavigationPanel.sass';

const DEFAULT_CURRENT_TAB: string = RoutesConstants.HOME.INDEX;

export default function HomeHeaderNavigationPanel(): JSX.Element {
  const [currentTab, setCurrentTab] = useState<string>(DEFAULT_CURRENT_TAB);
  const history = useHistory();

  useEffect(() => {
    setCurrentTab(history.location.pathname);
    const stopHistoryListening: UnregisterCallback = history.listen(({ pathname }: Location<unknown>): void => {
      setCurrentTab(pathname);
    });

    return (): void => {
      stopHistoryListening();
    };
  }, []);

  return (
    <Nav
      defaultActiveKey={DEFAULT_CURRENT_TAB}
      className="flex-column navigation"
    >
      <div className="d-flex justify-content-start align-items-start w-100 mb-3">
        <Nav.Link as={Link} to={RoutesConstants.HOME.INDEX} className="pl-0"><Logo /></Nav.Link>
      </div>

      <div className={`navigation-link mb-2 ${currentTab === RoutesConstants.HOME.INDEX ? 'active' : ''}`}>
        <Nav.Link as={Link} to={RoutesConstants.HOME.INDEX} className="link">
          {currentTab === RoutesConstants.HOME.INDEX
            ? <HomeActiveIcon className="icon" />
            : <HomeIcon className="icon" />
          }
          <span className="text d-none d-sm-none d-md-inline">Home</span>
        </Nav.Link>
      </div>
      <div className="navigation-link mb-2">
        <Nav.Link eventKey="link-2" className="link">
          <HashTagIcon className="icon" />
          <span className="text d-none d-sm-none d-md-inline">Explore</span>
        </Nav.Link>
      </div>
      <div className="navigation-link mb-2">
        <Nav.Link eventKey="link-2" className="link">
          <BellIcon className="icon" />
          <span className="text d-none d-sm-none d-md-inline">Notifications</span>
        </Nav.Link>
      </div>
      <div className="navigation-link mb-2">
        <Nav.Link eventKey="link-3" className="link">
          <MessageIcon className="icon" />
          <span className="text d-none d-sm-none d-md-inline">Messages</span>
        </Nav.Link>
      </div>
      <div className={`navigation-link mb-2 ${currentTab === RoutesConstants.PROFILE.INDEX ? 'active' : ''}`}>
        <Nav.Link as={Link} to={RoutesConstants.PROFILE.INDEX} className="link">
          {currentTab === RoutesConstants.PROFILE.INDEX
            ? <ProfileActiveIcon className="icon" />
            : <ProfileIcon className="icon" />
          }
          <span className="text d-none d-sm-none d-md-inline">Profile</span>
        </Nav.Link>
      </div>
    </Nav>
  );
}
