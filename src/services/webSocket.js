import { EventRegister } from 'react-event-listeners'
class WebSocketService {

    static webSocketInstance = null;
    connected;
    socketRef;
    static getInstance() {
        if (!WebSocketService.webSocketInstance) WebSocketService.webSocketInstance = new WebSocketService();
        return WebSocketService.webSocketInstance;
    }

    constructor() {
        this.socketRef = null;
        this.connected = false;
    }

    connect = (userId) => {
        if (WebSocketService.connected) {
        } else {
            const deviceUrl = 'ws://46517d13.ngrok.io/';
            // const deviceUrl = 'ws://localhost:8080/';
            this.socketRef = new WebSocket(deviceUrl);
            this.addOnErrorListener();
            this.socketRef.onopen = () => {
                this.socketRef.send(JSON.stringify({ userId: userId }));
                this.connected = true;
                console.log('Socket Opened');
                this.addOnCloseListener();
            }
        }

    }

    addOnErrorListener = () => {
        this.socketRef.addEventListener('error', () => {
            this.removeEventListener();
        })
    }

    addOnCloseListener = () => {
        this.socketRef.addEventListener('close', () => {
            this.connected = false;
            if (this.socketRef !== null) {
                this.removeEventListener();
                this.socketRef = null;
            }
        })
    }

    removeEventListener = () => {
        this.socketRef.removeEventListener('error', null);
        this.socketRef.removeEventListener('open', null);
        this.socketRef.removeEventListener('close', null);
    }

    closeConnection = () => {
        if (this.socketRef) {
            this.connected = false;
            this.removeEventListener();
            this.socketRef = null;
        }
    }

    addMessageEventListener = () => {
        if (this.socketRef) {
            this.socketRef.addEventListener('message', (event) => {
                console.log(JSON.parse(event.data));
                const eventData = JSON.parse(event.data);
                EventRegister.emit(eventData.type, eventData);
            })
        }
    }

}

export default WebSocketService.getInstance()