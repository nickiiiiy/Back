import { body } from "express-validator";

export const loginValidation = [
  body("email", "Неверный email").isEmail(),
  body("password", " Пароль должен быть больше 5 символов").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Неверный email").isEmail(),
  body("password", " Пароль должен быть больше 5 символов").isLength({
    min: 5,
  }),
  body("fullName", "Имя должно быть больше 3 символов").isLength({ min: 3 }),
  body("avatarUrl", "Неверная ссылка на аватар").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Название поста не может быть пустым")
    .isLength({ min: 3 })
    .isString(),
  body("text", "Текст поста не может быть пустым")
    .isLength({ min: 3 })
    .isString(),
  body("tags", "Неверный формат тегов (укажите массив)").optional().isString(),
  body("imageUrl", "Неверная ссылка на изображение").optional().isString(),
];
