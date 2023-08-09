import { useContext } from "react"
import NotificationContext, { STATES } from "./NotificationContext"
import { Alert, Snackbar } from "@mui/material"

const NotificationBar = () => {
    const notificationCtx = useContext(NotificationContext)

    if (notificationCtx.notification === STATES.SUCCESS)
        return (
            <Snackbar
                open={true}
                autoHideDuration={notificationCtx.isNotificationTimed ? 5000 : null}
                onClose={notificationCtx.clear}
            >
                <Alert onClose={notificationCtx.clear} severity="success" sx={{ width: '100%' }}>{notificationCtx.notificationText}</Alert>
            </Snackbar>
        );
    else if (notificationCtx.notification === STATES.ERROR)
        return (
            <Snackbar
                open={true}
                autoHideDuration={notificationCtx.isNotificationTimed ? 5000 : null}
                onClose={notificationCtx.clear}
            >
                <Alert onClose={notificationCtx.clear} severity="error" sx={{ width: '100%' }}>{notificationCtx.notificationText}</Alert>
            </Snackbar>
        )
};

export default NotificationBar;