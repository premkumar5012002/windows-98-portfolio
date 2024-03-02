"use server";

import { z } from "zod";
import { nanoid } from "nanoid";
import { Redis } from "@upstash/redis";

export type FormState = {
  message?: string;
  error?: string;
};

const schema = z.object({
  from: z.string().email(),
  subject: z.string().max(128),
  message: z.string().max(4096),
});

const redis = Redis.fromEnv();

export async function submitMail(_: FormState, formData: FormData) {
  const rawData = Object.fromEntries(formData);

  const parsedData = schema.safeParse(rawData);

  if (parsedData.success === false) {
    return { error: "Invalid data." };
  }

  const mail = {
    id: nanoid(),
    ...parsedData.data,
    date: new Date().toISOString(),
  };

  try {
    await redis.hset(`mail:${mail.id}`, mail);
  } catch (e) {
    return { error: "Something went wrong." };
  }

  return { message: "Your mail has been send." };
}
