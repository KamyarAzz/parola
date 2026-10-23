import {createBrowserRouter} from "react-router";
import PracticePage from "../features/practice/pages/PracticePage";
import ResultDetailPage from "../features/results/pages/ResultDetailPage";
import ResultsPage from "../features/results/pages/ResultsPage";
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
      {path: "/results", element: <ResultsPage />},
    ],
  },
  {path: "/practice/:topicId", element: <PracticePage />},
  {path: "/results/:resultId", element: <ResultDetailPage />},
]);
