import axios from "axios";

const TOKEN = "6429070561:AAGkVAtRxM2rD6x7d8Ty9MbItOBjNLwFmOU";
const CHAT_ID = "-1002002775010";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const submitNewClient = ({ name, phone, comment }) => {
  let message = `<b>Новая заявка</b>\n <b>Имя отправителя: ${name}</b>\n <b>Телефон : ${phone}</b>\n <b>Комментарий : ${comment}</b>`;
  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .catch((err) => {
      console.warn(err);
    });
};

export const submitNewReview = ({ name, service, comment }) => {
  let message = `<b>Новый отзыв</b>\n <b>Имя отправителя: ${name}</b>\n <b>Какой услугой воспользовались: ${service}</b>\n <b>Комментарий : ${comment}</b>`;
  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .catch((err) => {
      console.warn(err);
    });
};
