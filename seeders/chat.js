import { faker, simpleFaker } from "@faker-js/faker";
import { Chat } from "../models/chat.js";
import { Message } from "../models/message.js";
import { User } from "../models/user.js";


const createSingleChats = async (numChats) => {
  try {
    const users = await User.find().select("_id");

    const chatsPromise = [];

    for (let i = 0; i < numChats; i++) {

      const user1 = Math.floor(Math.random()*users.length);
      const user2 = Math.floor(Math.random()*users.length);
      if( user1 !== user2 ){
        chatsPromise.push(
          Chat.create({
            name: faker.lorem.words(2),
            members: [users[user1], users[user2]],
          })
        );
      }
    }

    await Promise.all(chatsPromise);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const createGroupChats = async (numChats) => {
  try {
    const users = await User.find().select("_id");

    const chatsPromise = [];

    for (let i = 0; i < numChats; i++) {
      const numMembers = simpleFaker.number.int({ min: 3, max: users.length });
      const members = [];

      for (let i = 0; i < numMembers; i++) {
        const randomIndex = Math.floor(Math.random() * users.length);
        const randomUser = users[randomIndex];

        // Ensure the same user is not added twice
        if (!members.includes(randomUser)) {
          members.push(randomUser);
        }
      }

      const chat = Chat.create({
        groupChat: true,
        name: faker.lorem.words(1),
        members,
        creator: members[0],
      });

      chatsPromise.push(chat);
    }

    await Promise.all(chatsPromise);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const createMessages = async (numMessages) => {
  try {
    const chats = await Chat.find().select("_id");

    const messagesPromise = [];

    for (let i = 0; i < numMessages; i++) {
      const randomChat = chats[Math.floor(Math.random() * chats.length)];

      const completeChat = await Chat.find({ _id : randomChat });
      const chatMembers = completeChat[0]["members"];
      const memberInd = chatMembers[Math.floor(Math.random() * chatMembers.length)]

      const senderId = {
        "_id" : memberInd
      }

      messagesPromise.push(
        Message.create({
          chat: randomChat,
          sender: senderId,
          content: faker.lorem.sentence(),
        })
      );

    }

    await Promise.all(messagesPromise);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const createAttachmentMessages = async (numMessages) => {
  try {
    const chats = await Chat.find().select("_id");

    const messagesPromise = [];

    for (let i = 0; i < numMessages; i++) {
      const randomChat = chats[Math.floor(Math.random() * chats.length)];

      const completeChat = await Chat.find({ _id : randomChat });
      const chatMembers = completeChat[0]["members"];
      const memberInd = chatMembers[Math.floor(Math.random() * chatMembers.length)]

      const senderId = {
        "_id" : memberInd
      }

      messagesPromise.push(
        Message.create({
          chat: randomChat,
          sender: senderId,
          content: "",
          attachments: [
            {
              public_id: faker.string.uuid(),
              url: faker.image.url(),
            },
          ],
        })
      );

    }

    await Promise.all(messagesPromise);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const createMessagesInAChat = async (chatId, numMessages) => {
  try {
    const completeChat = await Chat.find({ _id : chatId });
      const chatMembers = completeChat[0]["members"];

    const messagesPromise = [];

    for (let i = 0; i < numMessages; i++) {
      const memberInd = chatMembers[Math.floor(Math.random() * chatMembers.length)]

      const senderId = {
        "_id" : memberInd
      }

      messagesPromise.push(
        Message.create({
          chat: chatId,
          sender: senderId,
          content: faker.lorem.sentence(),
        })
      );
    }

    await Promise.all(messagesPromise);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const createAttachementMessagesInAChat = async (chatId, numMessages) => {
  try {
    const completeChat = await Chat.find({ _id : chatId });
      const chatMembers = completeChat[0]["members"];

    const messagesPromise = [];

    for (let i = 0; i < numMessages; i++) {
      const memberInd = chatMembers[Math.floor(Math.random() * chatMembers.length)]

      const senderId = {
        "_id" : memberInd
      }

      messagesPromise.push(
        Message.create({
          chat: chatId,
          sender: senderId,
          content: faker.lorem.sentence(),
        })
      );
    }

    await Promise.all(messagesPromise);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};


export {
  createGroupChats,
  createMessages,
  createMessagesInAChat,
  createSingleChats,
  createAttachmentMessages,
  createAttachementMessagesInAChat,
};
