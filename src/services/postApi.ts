import { Post } from "../types/post";
import { api } from "./config";

export const getPosts = async (): Promise<Post[]> => {
  return api("/posts");
};
