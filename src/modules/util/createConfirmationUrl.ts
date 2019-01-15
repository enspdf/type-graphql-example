import { v4 } from "uuid";
import { redis } from "../../redis";
import { confirmUserPrexix } from "../constants/redisPrefixes";

export const createConfirmationUrl = async (userId: number) => {
  const token = v4();
  await redis.set(confirmUserPrexix + token, userId, "ex", 60 * 60 * 24);

  return `http://localhost:3000/user/confirm/${token}`;
};
