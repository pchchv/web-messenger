from db.database import Database
from core.config import settings
from utils.crypt import Encoder, Decoder


encoder = Encoder(settings.SECRET_KEY)
decoder = Decoder(settings.SECRET_KEY)
database = Database()