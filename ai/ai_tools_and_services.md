# 🔀 OpenRouter vs LiteLLM

## 🌐 OpenRouter

OpenRouter **hosts and resells** LLMs on their side. They offer a single API where you pass any model name in the `model` field, and the reply comes from their hosted LLMs—no need for separate API keys for OpenAI, Gemini, Claude, etc.

One API key → access to many providers.

This means you don't have to pay for APIs separately; they provide their own API that grants access to all major LLM providers.

- **Pros:** Simple, fast start
- **Cons:** Price markup, rate limits, vendor lock-in, trust and data privacy concerns

> *This is why some users avoid it.*

**Analogy:**
> A shopkeeper saying: *"Don't go to the market to buy one candy for $10. I already bought many candies. Come to me and pick any candy you want for the same price."*

---

## 🛠️ LiteLLM

LiteLLM isn't hosting anything or asking for money. It is simply a library that provides a standard chat completion interface. This allows you to use different models without changing too much code configuration—just change the API key and model name. No base URL changes are required.

LiteLLM is a **library** (like React or shadcn). It **doesn't host** and **doesn't sell** access. It just gives you a **standard interface**. *(Note: It is still considered experimental. Code examples are available in official agents-sdk docs.)*

**Analogy:**
> It is not selling or reselling anything. It is just providing the **shopping bag** for you to carry your own candies.
