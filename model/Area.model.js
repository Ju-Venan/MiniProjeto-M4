const Areas = require("./area.js");

const areas = [
  // América do Sul
  new Areas(1, "Amazônia", "América do Sul", "Brasil", "Floresta", "Desmatamento", "Alto"),
  new Areas(2, "Pantanal", "América do Sul", "Brasil", "Pantanal", "Queimadas", "Alto"),

  // Oceania
  new Areas(3, "Grande Barreira de Corais", "Oceania", "Austrália", "Recife", "Branqueamento de corais", "Alto"),

  // América do Norte
  new Areas(4, "Parque Nacional Yellowstone", "América do Norte", "Estados Unidos", "Parque Nacional", "Atividades turísticas", "Médio"),
  new Areas(5, "Floresta de Tongass", "América do Norte", "Estados Unidos", "Floresta", "Exploração madeireira", "Alto"),

  // Europa
  new Areas(6, "Floresta Negra", "Europa", "Alemanha", "Floresta", "Poluição", "Médio"),
  new Areas(7, "Alpes", "Europa", "França", "Montanhas", "Turismo de massa", "Médio"),

  // Ásia
  new Areas(8, "Deserto de Gobi", "Ásia", "Mongólia/China", "Deserto", "Desertificação", "Alto"),
  new Areas(9, "Floresta de Taiga", "Ásia", "Rússia", "Floresta", "Desmatamento", "Médio"),

  // África
  new Areas(10, "Savana do Serengeti", "África", "Tanzânia", "Savana", "Caça ilegal", "Alto"),
  new Areas(11, "Deserto do Saara", "África", "Vários países", "Deserto", "Desertificação", "Alto"),
]

module.exports = areas;
