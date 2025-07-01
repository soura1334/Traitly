package com.traitly.server.service;

import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AIService {

    private OpenAiChatModel chatModel;

    public AIService(OpenAiChatModel chatModel){
        this.chatModel = chatModel;
    }

    private String prompt = """
Analyze the recent public tweets of the Twitter/X user @USER.

Score the following six subtraits from 0 to 100 based on their tweet content:
- 🧠 Logic
- 😂 Humor
- 🔥 Spice
- 📢 Loudness
- 💭 Depth
- 🌈 Positivity

Then, select a dominant trait from this fixed list that best matches the user's personality based on those scores:

1. 🐸 Meme Alchemist – Regularly turns random topics into peak meme content. A blend of humor, spice, and creativity with mid-range logic and low loudness.
2. 🤯 Deep Diver – Thinks before tweeting. Insightful, reflective, and meaningful.
3. 🔥 Chaos Bard – Loud, spicy, and unpredictable. Memes and mayhem.
4. 🌸 Positive Vibes Only – Uplifting, supportive, and optimistic.
5. 🤖 Cold Strategist – Logical, reserved, and no-nonsense.
6. 🎭 Quietly Chaotic – Subtle but impactful, with niche spice and humor.
7. 📣 Amplifier – Loud, energetic, and always heard.
8. 🎨 Artful Thinker – Poetic, deep, and emotionally resonant.
9. 🧂 Satirical Cynic – Witty, critical, and sarcastic with spice.

You must return only a **valid JSON object** in the following format.
If the user cannot be found or no username is provided, return this JSON object instead:
{ "error": "User not found or inaccessible." }
Do not add greetings, apologies, or explanations. Do not include any Markdown, code blocks, or headings.

Otherwise, return:

{
  "username": "@<username>",
  "subtraits": {
    "🧠 Logic": <score>,
    "😂 Humor": <score>,
    "🔥 Spice": <score>,
    "📢Loudness": <score>,
    "💭 Depth": <score>,
    "🌈 Positivity": <score>
  },
  "dominant_trait": {
    "title": "<provided_emoji> <trait title>",
    "description": "<trait description>"
  }
}
""";

    public String getResponse(String userName){
        String res = chatModel.call(prompt.replace("USER",userName));
        return res;
    }

}
