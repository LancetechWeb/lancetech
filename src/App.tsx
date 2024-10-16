import { RouterProvider } from 'react-router-dom';
import  router  from './core/routes/routes';
import AppStyle from './AppStyle';
import useAuthCheck from './core/hooks/useAuthCheck';

const App = () => {
  useAuthCheck()

  return  ( 
    <AppStyle>
      <RouterProvider router={router} />
    </AppStyle>
  )
}

export default App;
