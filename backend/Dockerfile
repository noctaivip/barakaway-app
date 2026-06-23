FROM python:3.13-slim

RUN apt-get update && apt-get install -y curl netcat-openbsd && rm -rf /var/lib/apt/lists/*

# --- Create non-root user ---
RUN useradd -m appuser

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chmod +x entrypoint.sh
RUN chown -R appuser:appuser /app

ENV PYTHONUNBUFFERED=1

USER appuser

CMD ["sh", "entrypoint.sh"]