import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './output.css';
import OtpInput from './components/OtpInput';
import CommentBox from './components/CommentBox';
import TodoList from './components/TodoList';
import Error from './components/Error';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <OtpInput />,
      errorElement: <Error />
    },
    {
      path:"/",
      element: <CommentBox />,
      errorElement: <Error />
    },
    {
      path:"/",
      element: <TodoList />,
      errorElement: <Error />
    },
  ])
  
  return (
    <div className='flex justify-center'>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
