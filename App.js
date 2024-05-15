import { Provider } from 'react-redux';
import { Router } from './src/navigation';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  
  );
}

