// src/types.ts

// src/types.ts

import { Socket } from "socket.io-client";

export interface ServerToClientEvents {
  init_response: (data: InitResponse) => void;
  user_disconnected: (data: { sid: string; username: string }) => void;
  room_message: (data: RoomMessage) => void;
  chat_request: (data: ChatRequestData) => void;
  chat_approved: (data: ChatApproved) => void;
  chat_started: (data: ChatStarted) => void;
  chat_denied: (data: ChatDenied) => void;
  chat_history: (data: ChatHistory) => void;
}

export interface ClientToServerEvents {
  init: (data: { username: string; role: Role }) => void;
  private_message: (data: { to: string; message: string }) => void;
  chat_request: (data: { patient_sid: string }) => void;
  chat_response: (data: { guest_sid: string; patient_sid: string; approve: boolean }) => void;
  room_message: (data: { room_id: string; message: string }) => void;
  get_chat_history: (data: { room_id: string }) => void;
}

export type SocketWithTypedEvents = Socket<ServerToClientEvents, ClientToServerEvents>;

export type Role =  'creator' |  'patient' | 'guest'

export interface User {
  sid: string;
  username: string;
  role: Role;
}

export interface ChatRequest {
  guest_sid: string;
  guest_username: string;
  patient_sid: string;
  patient_username: string;
}

export interface Message {
  // room: string | undefined; // room name
  from: string; // 'me' or user ID
  to: string; // receiver ID
  message: string;
  timestamp: string; // ISO string
  role: string;
}

export interface ChatRoom {
  roomId: string;
  participants: string[]; // SIDs of participants
  messages: Message[];
}

export interface InitResponse {
  msg: string;
  users: User[];
}

export interface RoomMessage {
  room: string | undefined;
  from: string;
  to: string;
  role: string;
  message: string;
  timestamp: string;
}

export interface ChatApproved {
  room_id: string;
  patient_sid: string;
  guest_sid: string;
}

export interface ChatStarted {
  room_id: string;
  guest_sid: string;
}

export interface ChatDenied {
  msg: string;
}

export interface ChatRequestData {
  guest_sid: string;
  guest_username: string;
  patient_sid: string;
  patient_username: string;
}

export interface ChatHistory {
  room_id: string;
  messages: {
    sender_id: string;
    message: string;
    timestamp: string;
  }[];
}
