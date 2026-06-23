from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()

active_connections = {}


@router.websocket("/ws/providers/{provider_id}")
async def provider_ws(websocket: WebSocket, provider_id: int):
    await websocket.accept()

    if provider_id not in active_connections:
        active_connections[provider_id] = []

    active_connections[provider_id].append(websocket)

    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        active_connections[provider_id].remove(websocket)