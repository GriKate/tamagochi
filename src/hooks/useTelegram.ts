import { useEffect, useState } from "react"

export const useTelegram = () => {
    const [webApp, setWebApp] = useState<WebApp | null>(null);
    const [isTelegram, setIsTelegram] = useState<boolean>(false);
    const [user, setUser] = useState<WebAppUser | null>(null);

    useEffect(() => {
        const initUser = () => {
            const tg = window.Telegram.WebApp;
            if (tg) {
                setWebApp(tg);
                // проверка, что запуск происходит в приложении, а не в браузере
                const isValidTelegramData = tg && tg.initDataUnsafe 
                    && Object.keys(tg.initDataUnsafe).length > 0 
                    && tg.initDataUnsafe.user;
                if (isValidTelegramData) {
                    setIsTelegram(true);
                    tg.ready();
                    tg.expand();
                    tg.disableVerticalSwipes();
                    setUser(tg.initDataUnsafe.user!)
                } else {
                    // доп проверка: если environment==Develop
                    setUser({
                        id: 12345,
                        first_name: 'Test',
                    })
                }
            } else {
                setWebApp(null);
            }
        }
        initUser();
    }, [])
    return {isTelegram, webApp, user};
}