export const useHapticFeedback = () => {
    const tg = window.Telegram.WebApp;
    tg.HapticFeedback.impactOccurred("light");
}