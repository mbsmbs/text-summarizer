# 📝 Text Summarizer App

This project is a full-stack web application that summarizes long texts using modern NLP techniques. It allows users to paste a block of text and receive a short, readable summary powered by a pre-trained transformer model.

---

## 🧰 Tech Stack

| Layer       | Tech Used                                                   | Description                                                   |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| 🧠 Backend  | [FastAPI](https://fastapi.tiangolo.com)                     | Python web framework used to serve a summarization API        |
| 🧪 NLP      | [Transformers](https://huggingface.co/transformers/)        | HuggingFace pipeline with `distilbart` for text summarization |
| 💻 Frontend | [Next.js](https://nextjs.org) + [React](https://react.dev/) | Interface where users paste text and view summaries           |
| 🐳 DevOps   | [Docker](https://www.docker.com/) & Docker Compose          | Containers to run frontend + backend together                 |

---

## 📸 Features

- ✨ Summarize long text instantly with one click
- 🧠 Uses a lightweight, fast model (`distilbart-cnn-12-6`) for efficiency
- 🐍 FastAPI backend exposes a `/summarize` endpoint
- ⚡️ React/Next.js frontend with textarea input
- 🔄 CORS-enabled API for seamless frontend/backend communication
- 🐳 Dockerized for easy deployment

---

## 🚀 How to Run Locally

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Run the full app:

```bash
docker-compose up --build
```
