import { RouterProvider } from 'react-router-dom';
import  router  from './core/routes/routes';
import AppStyle from './AppStyle';

const App = () => {
  return  ( 
    <AppStyle>
      <RouterProvider router={router} />
    </AppStyle>
  )
}

export default App;
