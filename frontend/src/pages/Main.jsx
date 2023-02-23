import React from "react";
import Header from "../components/trivia/Header";
import List from "../components/trivia/List";

const Main = () => {
  const data = [
    {
      category: "General Knowledge",
      id: "6239f843a72e7a347ac879da",
      correctAnswer: "Yankee",
      incorrectAnswers: ["Yearly", "Yum", "Yurt"],
      question:
        "What word is used in the NATO Phonetic Alphabet for the letter Y?",
      tags: ["words", "language", "general_knowledge"],
      type: "Multiple Choice",
      difficulty: "easy",
      regions: [],
    },
    {
      category: "General Knowledge",
      id: "622a1c367cc59eab6f9503f9",
      correctAnswer: "Robots",
      incorrectAnswers: ["Aliens", "Gods", "Wizards"],
      question: "Transformers are ___________ in disguise. ",
      tags: ["general_knowledge"],
      type: "Multiple Choice",
      difficulty: "easy",
      regions: [],
    },
    {
      category: "General Knowledge",
      id: "6239f8049129041bf3925cbe",
      correctAnswer: "Bravo",
      incorrectAnswers: ["Boot", "Ball", "Baby"],
      question:
        "What word is used in the NATO Phonetic Alphabet for the letter B?",
      tags: ["words", "general_knowledge"],
      type: "Multiple Choice",
      difficulty: "easy",
      regions: [],
    },
    {
      category: "General Knowledge",
      id: "622a1c377cc59eab6f95045e",
      correctAnswer: "5 Gold Rings",
      incorrectAnswers: [
        "5 Drummers Drumming",
        "5 Swans a Swimming",
        "5 Lords a Leaping",
      ],
      question:
        'What Did My True Love Give To Me On The "Fifth" Day Of Christmas"?',
      tags: ["christmas", "lyrics", "general_knowledge"],
      type: "Multiple Choice",
      difficulty: "easy",
      regions: [],
    },
    {
      category: "General Knowledge",
      id: "622a1c3d7cc59eab6f951c69",
      correctAnswer: "Five Gold Rings",
      incorrectAnswers: [
        "Five Lords a Leaping",
        "Five Drummers Drumming",
        "Five Calling Birds",
      ],
      question:
        "According to the Christmas song what did my true love give to me on the fifth day of Christmas?",
      tags: ["general_knowledge"],
      type: "Multiple Choice",
      difficulty: "easy",
      regions: [],
    },
  ];

  return (
    <div>
      <Header />
      <List data={data} />
    </div>
  );
};

export default Main;
