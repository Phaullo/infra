
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.json({
    message: "API funcionando!",
    status: "success"
  });
});

// Rota GET
app.get("/usuarios", (req, res) => {
  res.json([
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" },
    { id: 5, nome: "Ana" },
  ]);
});

// Rota POST
app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      error: "Nome e email são obrigatórios"
    });
  }

  res.status(201).json({
    message: "Usuário criado com sucesso!",
    usuario: {
      id: Date.now(),
      nome,
      email
    }
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
