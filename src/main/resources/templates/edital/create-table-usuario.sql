CREATE TABLE usuario (
    ra TEXT PRIMARY KEY UNIQUE NOT NULL,
    nome TEXT NOT NULL,
    sobrenome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    acesso TEXT
);