import { useTranslation } from 'react-i18next';

export function Blog() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('blogTitle')}</h2>
      <p>{t('blogDescription')}</p>
    </div>
  );
}
