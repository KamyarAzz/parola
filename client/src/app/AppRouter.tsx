import {createBrowserRouter} from "react-router";
import GrammarGroupPage from "../features/grammar/pages/GrammarGroupPage";
import GrammarPage from "../features/grammar/pages/GrammarPage";
import PracticePage from "../features/practice/pages/PracticePage";
import ResultDetailPage from "../features/results/pages/ResultDetailPage";
import ResultsPage from "../features/results/pages/ResultsPage";
import SentenceGroupPage from "../features/sentences/pages/SentenceGroupPage";
import SentencesPage from "../features/sentences/pages/SentencesPage";
import TopicsPage from "../features/topics/pages/TopicsPage";
import VerbGroupPage from "../features/verbs/pages/VerbGroupPage";
import VerbsPage from "../features/verbs/pages/VerbsPage";
import WordGroupPage from "../features/words/pages/WordGroupPage";
import WordsPage from "../features/words/pages/WordsPage";
import AppLayout from "./AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: "/", element: <TopicsPage />},
      {path: "/words", element: <WordsPage />},
      {path: "/words/:groupId", element: <WordGroupPage />},
      {path: "/verbs", element: <VerbsPage />},
      {path: "/verbs/:groupId", element: <VerbGroupPage />},
      {path: "/grammar", element: <GrammarPage />},
      {path: "/grammar/:groupId", element: <GrammarGroupPage />},
      {path: "/sentences", element: <SentencesPage />},
      {path: "/sentences/:groupId", element: <SentenceGroupPage />},
      {path: "/results", element: <ResultsPage />},
    ],
  },
  {path: "/practice/:topicId", element: <PracticePage />},
  {path: "/results/:resultId", element: <ResultDetailPage />},
]);
