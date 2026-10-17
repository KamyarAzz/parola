import {createBrowserRouter} from "react-router";
import {PracticePage} from "../features/practice/PracticePage";
import {ResultDetailPage} from "../features/results/ResultDetailPage";
import {ResultsPage} from "../features/results/ResultsPage";
import {TopicsPage} from "../features/topics/TopicsPage";
import {AppLayout} from "./AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: "/", element: <TopicsPage />},
      {path: "/results", element: <ResultsPage />},
    ],
  },
  {path: "/practice/:topicId", element: <PracticePage />},
  {path: "/results/:resultId", element: <ResultDetailPage />},
]);
