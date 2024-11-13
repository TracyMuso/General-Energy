interface FAQData {
  question: string;
  answer: string;
}

const questions: FAQData[] = [
  {
    question: "La consultation est-elle gratuite ?",
    answer:
      "Bien sûr ! N'hésitez pas à nous appeler ou à nous envoyer un e-mail. Vous pouvez également visiter nos bureaux, ouverts du lundi au samedi.",
  },
  {
    question: "Quels sont les avantages de passer à un forfait solaire premium ?",
    answer:
      "Passer à un forfait premium vous offre de nombreux avantages. Vous bénéficiez d'un support client 24h/24 et 7j/7, d'une maintenance hebdomadaire et de vérifications.",
  },
  {
    question: "Avez-vous des architectes et des ingénieurs qualifiés ?",
    answer:
      "Absolument ! Nous recrutons les meilleurs experts du marché.",
  },
  {
    question: "Comment puis-je annuler mon abonnement ?",
    answer:
      "Veuillez noter qu'une fois l'abonnement souscrit, il ne peut pas être annulé. Assurez-vous de prendre une décision éclairée avant de vous abonner.",
  },
];

export default questions;
