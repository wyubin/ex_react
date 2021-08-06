import { io, Socket } from 'socket.io-client';
class Client {
  private socket: Socket

  constructor() {
      this.socket = io();
  }
}

const client = new Client();