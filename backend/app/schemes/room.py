from pydantic import BaseModel


class RoomReq(BaseModel):
    name: str
    password: str