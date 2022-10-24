import { ToastProvider, toastService } from 'react-toast-k-lib';
import { Button } from './styled';

const App = () => {
  const handleClick = () => {
    toastService.addToast({
      type: 'Info',
      description: 'Toast Example'
    })
  }

  return (
    <div>
      <Button onClick={handleClick}>Show toast</Button>
      <ToastProvider />
    </div>
  );
}

export default App;
