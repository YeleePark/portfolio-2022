import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return <div>{t('test')}</div>;
}

export default App;
