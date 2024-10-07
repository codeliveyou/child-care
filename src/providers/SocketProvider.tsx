import { PropsWithChildren, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import config from "../config";
import SocketContext from "../contexts/SocketContext";

interface SocketProviderProps extends PropsWithChildren {}

function SocketProvider({ children }: SocketProviderProps) {
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);

  useEffect(() => {
    const socket: Socket = io(config.api.endpoint_uri, {
      path: "/socket.io/",
      transports: ["websocket"],
      // Removed 'cors' as it's handled server-side
    });
    setSocketInstance(socket);

    return () => {
      socket.disconnect();
      setSocketInstance(null);
      // setLoading(true);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socketInstance: socketInstance,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
