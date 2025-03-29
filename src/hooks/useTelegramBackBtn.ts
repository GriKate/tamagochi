import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useTelegramBackBtn = () => {
    const webApp = window.Telegram.WebApp;
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackBtn = () => {
        if (location.pathname !== "/") {
            navigate(-1);
        }
    }

    useEffect(() => {
        if (location.pathname !== "/") {
            webApp.BackButton.show();
            webApp.onEvent('backButtonClicked', handleBackBtn);
        } else {
            webApp.BackButton.hide();
        }

        return () => {
            webApp.offEvent('backButtonClicked', handleBackBtn);
            webApp.BackButton.hide();
        }
    }, [location.pathname, navigate])
}