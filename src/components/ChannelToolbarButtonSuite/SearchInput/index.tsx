import { SearchInput as Input } from '@/components/ui/searchInput';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const SearchInput: React.FC = () => {
  const { t } = useTranslation();
  return <Input placeholder={t('searchInput_placeholder')} className="outline-none w-32 focus:w-48 transition-all" />;
};

export default SearchInput;
