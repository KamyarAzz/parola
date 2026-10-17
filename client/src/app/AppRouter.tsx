import {createBrowserRouter} from "react-router";
import {PracticePage} from "../features/practice/pages/PracticePage";
import {ResultDetailPage} from "../features/results/pages/ResultDetailPage";
import {ResultsPage} from "../features/results/pages/ResultsPage";
import {TopicsPage} from "../features/topics/pages/TopicsPage";
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
