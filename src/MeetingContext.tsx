import { createContext } from "react";

export const meteredMeeting = new window.Metered.Meeting();
export const MeetingContext = createContext(meteredMeeting);