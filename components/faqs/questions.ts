interface FAQData {
  question: string;
  answer: string;
}

const questions: FAQData[] = [
  {
    question: "Is consultation free?",
    answer:
      'Of course it is! Please feel free to call us or email us. You can also visit our offices, open from monday to saurday.',
  },
  {
    question: "What are the benefits of upgrading to a premium account?",
    answer:
      "Upgrading to a premium account unlocks unlimited features and tools, unlimited career opportunities, user analytics, priority customer support, and unlimited business promotion for businesses.",
  },
  {
    question: "Can I have multiple types of accounts?",
    answer:
      "Absolutely! You can have a social account, professional account, and business account, all linked to the same email identity. Enjoy the flexibility of managing all three accounts simultaneously.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "Please note that once a subscription is purchased, it cannot be reversed. Ensure you make an informed decision before subscribing.",
  },
];

export default questions;
