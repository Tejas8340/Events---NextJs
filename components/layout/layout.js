import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNofication = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNofication && (
        <Notification title={activeNofication.title} message={activeNofication.message} status={activeNofication.status} />
      )}
    </Fragment>
  );
}

export default Layout;
