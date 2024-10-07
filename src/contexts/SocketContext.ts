import { createContext, useContext} from 'react';
import { Socket } from 'socket.io-client';

interface SocketContextProps {
    socketInstance: Socket | null;
}

const SocketContext = createContext<SocketContextProps>({
    socketInstance: null
});

function useSocket() {
    const socketContext = useContext(SocketContext);
    return socketContext;
}

export default SocketContext;
export { useSocket };