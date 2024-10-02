// MeetingApp.d.ts
import React from 'react';

declare global {
  interface Window {
    Metered: {
      Meeting: new () => any;
    };
  }
}

declare const MeetingApp: React.FC;

export default MeetingApp;