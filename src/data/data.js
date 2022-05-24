const questions = [
  {
    questionText:
      "Quelle est le cerveau de l'ordinateur :",
    answerOptions: [
      { answerText: "CPU", isCorrect: true },
      { answerText: "RAM", isCorrect: false },
      { answerText: "ROM", isCorrect: false },
    ],
  },
  {
    questionText:
      "RAM est :",
    answerOptions: [
      { answerText: "Read Access Memory", isCorrect: false },
      { answerText: "Random Access Memory", isCorrect: true },
      { answerText: "Release Access Memory", isCorrect: false },
    ],
  },
  {
    questionText: "C'est quoi un disque dur :",
    answerOptions: [
      { answerText: "Espace de stockage", isCorrect: true },
      { answerText: "Le coeur de l'ordinateur", isCorrect: false },
      { answerText: "Périphérique de sortie", isCorrect: false },
    ],
  },
  {
    questionText: "RAM stocke :",
    answerOptions: [
      { answerText: "Ne permet pas de stocker les données", isCorrect: false },
      { answerText: "Provisoirement les données", isCorrect: true },
      { answerText: "Définitivement les données", isCorrect: false },
    ],
  },
  {
    questionText:
      "Composant responsable de l'affichage :",
    answerOptions: [
      { answerText: "Carte graphique", isCorrect: true },
      { answerText: "Carte mére", isCorrect: false },
      { answerText: "Boite d'alimentation", isCorrect: false },
    ],
  },
];

export default questions;
