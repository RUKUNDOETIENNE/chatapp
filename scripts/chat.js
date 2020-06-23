//adding new chat coduments
//setting up real time listener to get chat 
//updating the username
//updating the room
class Chatroom{
	constructor(room, username){
		this.room = room;
		this.username = username;
		this.chats = db.collection('chats');
	}
	async addChat(message){
		//format chat object
      const now = new Date();
      const chat = {
        message,
        username: this.username,
        room: this.username,
        created_at: db.firebase.firestore.Timestamp.fromDate(now)
      };
      //save the chat document from 
       const response = await this.chats.add(chat);
       return response;
	}
	const chatroom = new Chatroom('gaming','john');
	console.log(chatroom)
	
