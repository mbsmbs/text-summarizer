from transformers import pipeline

# Load summarizer model (you can change to a smaller model if needed)
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

def summarize_text(text: str, max_length: int = 130, min_length: int = 30) -> str:
    if len(text) > 1024:
        text = text[:1024]  # Truncate to avoid model crash
    result = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return result[0]['summary_text']
