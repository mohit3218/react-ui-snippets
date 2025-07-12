import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import { lazy, Suspense } from 'react';
import MainLayout from './components/MainLayout'; // new layout
import ProgressBar from './components/ProgressBar';

const OtpComponent = lazy(() => import("./components/OtpInput"));
const CommentBoxComponent = lazy(() => import("./components/CommentBox"));
const TodoListComponent = lazy(() => import("./components/TodoList"));
const FilesFolderComponent = lazy(() => import("./components/FilesFolderStructure"));
const AutoCompleteSearchBar = lazy(() => import("./components/AutoCompleteSearchBar"));
const Pagination = lazy(() => import("./components/Pagination"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />, // wrap everything in layout
      errorElement: <Error />,
      children: [
        {
          path: '/otp-validator',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <OtpComponent />
            </Suspense>
          )
        },
        {
          path: '/progress-bar',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProgressBar />
            </Suspense>
          )
        },
        {
          path: '/files-folder-structure',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <FilesFolderComponent />
            </Suspense>
          )
        },
        {
          path: '/auto-complete-search-bar',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AutoCompleteSearchBar />
            </Suspense>
          )
        },
        {
          path: '/pagination',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Pagination />
            </Suspense>
          )
        },
        {
          path: '/comment-box',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CommentBoxComponent />
            </Suspense>
          )
        },
        {
          path: '/todo-list',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <TodoListComponent />
            </Suspense>
          )
        },
        {
          index: true,
          element: <div className='p-6'>Select a feature from the sidebar.</div>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
