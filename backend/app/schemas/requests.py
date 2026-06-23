from pydantic import BaseModel


class CreateRequest(BaseModel):
    client_id: int
    description: str
    service_type: str
    latitude: float
    longitude: float