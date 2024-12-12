const questions = [
  {
    id: 1,
    question: "What is your age group?",
    options: ["Under 18", "18–30", "31–50", "Above 50"],
    values: [-1, 5, 3, 1] // Younger adults get higher marks.
  },
  {
    id: 2,
    question: "What is your gender?",
    options: ["Male", "Female", "Other"],
    values: [3, 3, 1] // Neutral values for gender.
  },
  {
    id: 3,
    question: "Do you currently have a valid government-issued ID?",
    options: ["Yes", "No"],
    values: [5, -5] // Required for eligibility.
  },
  {
    id: 4,
    question: "Do you have any pre-existing medical conditions?",
    options: ["Yes", "No"],
    values: [-3, 5] // No conditions get higher marks.
  },
  // {
  //   id: 5,
  //   question: "Do you smoke or use tobacco products?",
  //   options: ["Yes", "No", "Occasionally"],
  //   values: [-5, 5, -2] // Non-smokers score higher.
  // },
  // {
  //   id: 6,
  //   question: "How often do you exercise?",
  //   options: ["Daily", "Several times a week", "Rarely", "Never"],
  //   values: [5, 4, -1, -5] // Frequent exercise is better.
  // },
  // {
  //   id: 7,
  //   question: "What is your marital status?",
  //   options: ["Single", "Married", "Divorced", "Widowed"],
  //   values: [3, 5, 1, 1] // Married individuals score highest.
  // },
  // {
  //   id: 8,
  //   question: "Do you have dependents?",
  //   options: ["Yes", "No"],
  //   values: [5, 3] // Dependents may indicate a higher need.
  // },
  // {
  //   id: 9,
  //   question: "Are you currently employed?",
  //   options: ["Yes, full-time", "Yes, part-time", "No"],
  //   values: [5, 3, -3] // Full-time employment scores highest.
  // },
  // {
  //   id: 10,
  //   question: "What is your annual income range?",
  //   options: ["Less than $20,000", "$20,000–$50,000", "$50,000–$100,000", "Above $100,000"],
  //   values: [1, 3, 5, 5] // Middle-to-higher income ranges score higher.
  // },
  // {
  //   id: 11,
  //   question: "Do you have any family history of chronic illnesses?",
  //   options: ["Yes", "No"],
  //   values: [-3, 5] // No family history scores higher.
  // },
  // {
  //   id: 12,
  //   question: "Do you have health insurance currently?",
  //   options: ["Yes", "No"],
  //   values: [5, -1] // Current coverage scores higher.
  // },
  // {
  //   id: 13,
  //   question: "Are you willing to undergo a medical examination?",
  //   options: ["Yes", "No"],
  //   values: [5, -5] // Willingness is a positive indicator.
  // },
  // {
  //   id: 14,
  //   question: "How frequently do you consume alcohol?",
  //   options: ["Never", "Occasionally", "Regularly"],
  //   values: [5, 3, -3] // Lower consumption scores higher.
  // },
  // {
  //   id: 15,
  //   question: "Do you have a family doctor or general physician?",
  //   options: ["Yes", "No"],
  //   values: [5, -1] // Having a physician is favorable.
  // },
  // {
  //   id: 16,
  //   question: "Do you travel frequently?",
  //   options: ["Yes", "No", "Occasionally"],
  //   values: [-2, 5, 3] // Frequent travel may be a risk factor.
  // },
  // {
  //   id: 17,
  //   question: "Do you have any allergies?",
  //   options: ["Yes", "No"],
  //   values: [-3, 5] // No allergies score higher.
  // },
  // {
  //   id: 18,
  //   question: "What is your primary reason for seeking health insurance?",
  //   options: ["Personal health", "Family health", "Financial security", "Other"],
  //   values: [5, 5, 4, 2] // Personal and family health have higher priority.
  // },
  // {
  //   id: 19,
  //   question: "Do you prefer individual or family health insurance plans?",
  //   options: ["Individual", "Family", "Not sure"],
  //   values: [3, 5, 1] // Family plans score higher.
  // },
  // {
  //   id: 20,
  //   question: "Are you looking for coverage for specific medical services?",
  //   options: ["Yes", "No", "Not sure"],
  //   values: [3, 5, 1] // General coverage scores higher.
  // }
];

export default questions;
