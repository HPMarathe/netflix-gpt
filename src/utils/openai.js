import OpenAI from "openai";
import { OPENAI_GPT_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_GPT_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
  //  Error is coming because you are calling api from client side.Best way is to call from backend i.e. server side
});

export default openai;
