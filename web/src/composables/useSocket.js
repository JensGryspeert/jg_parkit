import { ref } from 'vue';
import { io } from 'socket.io-client';

// Define the reactive references for socket connections and list of sockets
const currentSocket = ref(null);

export default function useSocket() {
  async function initializeSocket() {
    const baseUrl = 'http://ipv6-server-jens:3000';
    const serverId = '2313131DSDSAEZE132sd';
    const url = `${baseUrl}`;

    const socket = io(url, {
      transports: ['websocket'],
      query: {
        serverId: serverId
      }
    });

    socket.on('connect', () => {
      console.info(`🟢 WS - Connected [${baseUrl}]`);
    });

    socket.on('error', (error) => {
      console.error(`🔴 WS - Error: ${error}`);
    });

    currentSocket.value = socket;

    return socket;
  }

  // Function to emit an event to the server
  function emit(socket, event, payload) {
    if (socket) {
      socket.emit(event, payload);
    } else {
      console.error('🔴 Socket not found.');
    }
  }

  // Function to subscribe to an event from the server
  function subscribe(socket, event, callback) {
    if (socket) {
      socket.on(event, callback);
    } else {
      console.error('🔴 Socket not found.');
    }
  }

  async function unsubscribe(socket, event, callback) {
    if (socket) {
      socket.off(event, callback);
    } else {
      console.error('🔴 Socket not found.');
    }
  }

  // Function to initialize WebSocket connections for 'user' and 'meeting' namespaces
  async function initialiseSocketConnections() {
    await Promise.all([initializeSocket()]);
  }

  return {
    currentSocket,
    initialiseSocketConnections,
    emit,
    subscribe,
    unsubscribe,
  };
}
