bind = "0.0.0.0:8000"
workers = 4
worker_class = "uvicorn.workers.UvicornWorker"
timeout = 60

pidfile = "/tmp/gunicorn.pid"
worker_tmp_dir = "/tmp"

accesslog = "-"
errorlog = "-"
loglevel = "info"

preload_app = True
daemon = False

# ВАЖНО: отключаем control server
enable_stdio_inheritance = True