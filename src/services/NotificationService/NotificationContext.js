import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  notificationText: null,
  isNotificationTimed: false,
  success: () => {},
  error: () => {},
  clear: () => {}
});

const NotificationProvider = (props) => {
    const [notification, setNotification] = useState(null);
    const [notificationText, setNotificationText] = useState(null);
    const [isNotificationTimed, setNotificationTimed] = useState(false);
  const success = (text, isTimed) => {
      window.scroll(0, 0);
      setNotificationText(text);
      setNotification(STATES.SUCCESS);
      if(isTimed)
        setNotificationTimed(true);
      else
        setNotificationTimed(false);
    };
  const error = (text, isTimed) => {
      window.scroll(0, 0);
      setNotificationText(text);
      setNotification(STATES.ERROR);
      if(isTimed)
        setNotificationTimed(true);
      else
        setNotificationTimed(false);
    };
  const clear = () => {
      setNotificationText(null);
      setNotification(null);
    };
  return (
      <NotificationContext.Provider
        value={{
          success, error, clear, notification, notificationText, isNotificationTimed
        }}
      >
        {props.children}
      </NotificationContext.Provider>
    );
  };

const STATES = {
    SUCCESS: 'success',
    ERROR: 'error',
};

export { NotificationProvider, STATES };
export default NotificationContext;