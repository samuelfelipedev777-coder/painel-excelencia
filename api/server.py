from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json
import bcrypt
from fastapi.middleware.cors import CORSMiddleware
import os

# Caminho do arquivo de usuários
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
USERS_FILE = os.path.join(BASE_DIR, "users.json")

# Cria o arquivo se não existir
if not os.path.exists(USERS_FILE):
    with open(USERS_FILE, "w") as f:
        json.dump([], f)

# Inicializa a aplicação FastAPI
app = FastAPI()

# Permite CORS para o frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos
class User(BaseModel):
    nome: str
    email: str
    senha: str

class LoginData(BaseModel):
    email: str
    senha: str

# Rota raiz
@app.get("/")
def root():
    return {"mensagem": "API rodando!"}

# Rota de registro
@app.post("/register")
def register_user(user: User):
    with open(USERS_FILE, "r") as file:
        users = json.load(file)

    for u in users:
        if u["email"] == user.email:
            raise HTTPException(status_code=400, detail="Email já cadastrado")

    hashed_senha = bcrypt.hashpw(user.senha.encode("utf-8"), bcrypt.gensalt())
    hashed_senha_str = hashed_senha.decode("utf-8")

    new_user = {
        "nome": user.nome,
        "email": user.email,
        "senha": hashed_senha_str
    }

    users.append(new_user)
    with open(USERS_FILE, "w") as file:
        json.dump(users, file, indent=4)

    return {"mensagem": "Usuário registrado com sucesso!"}

# Rota de login
@app.post("/login")
def login_user(user: LoginData):
    with open(USERS_FILE, "r") as file:
        users = json.load(file)

    for u in users:
        if u["email"] == user.email:
            if bcrypt.checkpw(user.senha.encode("utf-8"), u["senha"].encode("utf-8")):
                return {"mensagem": "Login realizado com sucesso!", "nome": u["nome"]}
            else:
                raise HTTPException(status_code=400, detail="Senha incorreta")

    raise HTTPException(status_code=400, detail="Usuário não encontrado")
