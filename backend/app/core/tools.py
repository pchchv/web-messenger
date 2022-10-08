from db.database import Database
from core.config import settings
from utils.helpers import Parser
from api.wsmanager import RoomsManager
from utils.crypt import Encoder, Decoder


manager = RoomsManager()
encoder = Encoder(settings.SECRET_KEY)
decoder = Decoder(settings.SECRET_KEY)
database = Database()
parser = Parser()