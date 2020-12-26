let config = require('./config.json');

export const MESSAGE_LIST_API = `https://api.telegram.org/bot${config.apikey}/getUpdates`;

export const SEND_MESSAGE_API = (chatId,message ) => {
    return `https://api.telegram.org/bot${config.apikey}/sendMessage?chat_id=${chatId.toString()}&parse_mode=Markdown&text=${message}`;
}
