import React, { Fragment } from 'react';
import { Col } from 'antd';
import ContentBlock from '../shared/components/ContentBlock.component';
import EditProfileForm from '../components/EditProfileForm/EditProfileForm.component';
import CloseAccountButton from '../shared/components/CloseAccountButton.component';
import ProfileLayout from '../layouts/Profile.layout';

import '../sass/pages/Profile.page.sass';

export default function Profile({ store, dispatch }: any): JSX.Element {
  return (
    <Fragment>
      <ProfileLayout>
        <Col style={{ marginTop: '4rem' }} xs={24} xl={14} push={5}>
          <CloseAccountButton className="button--close-account" store={store} dispatch={dispatch} />
          <ContentBlock>
            <EditProfileForm store={store} dispatch={dispatch}/>
          </ContentBlock>
        </Col>
      </ProfileLayout>
    </Fragment>
  );
}
