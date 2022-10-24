import { useState, ChangeEvent } from 'react';
import { ToastProvider, toastService } from 'react-toast-k-lib';
import { Button, Select } from './styled';

type ToastType = 'Success' | 'Info' | 'Warning' | 'Error';

const App = () => {
  const [toastType, setToastType] = useState<ToastType>('Success');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setToastType(e.target.value as ToastType);
  }

  const handleSuccessNotify = () => {
    toastService.addToast({
      type: toastType,
      description: 'Toast Example'
    })
  }

  return (
    <div>
      <Select value={toastType} onChange={handleChange}>
        <option value="Success">Success</option>
        <option value="Info">Info</option>
        <option value="Warning">Warning</option>
        <option value="Error">Error</option>
      </Select>
      <Button onClick={handleSuccessNotify}>Show toast</Button>
      <ToastProvider />
    </div>
  );
}

export default App;
