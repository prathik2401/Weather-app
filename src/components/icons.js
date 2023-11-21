import day from "../animated/clear-day.svg";
import cloudy from "../animated/cloudy.svg";
import cloudy2 from "../animated/partly-cloudy-day.svg";
import cloudy3 from "../animated/partly-cloudy-day-fog.svg";
import rain1 from "../animated/extreme-rain.svg";
import rain2 from "../animated/extreme-day-rain.svg";
import rain3 from "../animated/extreme-night-rain.svg";
import mist from "../animated/extreme-haze.svg";
import clear_night from "../animated/clear-night.svg";
import night_fog from "../animated/extreme-night-fog.svg";
import day_snow from "../animated/extreme-day-snow.svg";
import night_smoke from "../animated/extreme-night-smoke.svg";
import night_sleet from "../animated/cloudy.svg";
import rain from "../animated/rain.svg";
import night_rain from "../animated/partly-cloudy-night-rain.svg";
import thunderstorms from "../animated/thunderstorms-rain.svg";
import snow from "../animated/extreme-snow.svg";
import smoke from "../animated/extreme-day-smoke.svg";

export const setFunction = (icon) => {
    const icons = {
    "01d": day,
    "02d": cloudy,
    "03d": cloudy2,
    "04d": cloudy3,
    "09d": rain1,
    "10d": rain2,
    "11d": rain3,
    "13d": day_snow,
    "50d": smoke,
    "01n": clear_night,
    "02n": night_fog,
    "03n": night_smoke,
    "04n": night_sleet,
    "09n": rain,
    "10n": night_rain,
    "11n": thunderstorms,
    "13n": snow,
    "50n": mist,
    }

    return icons[icon];
};
