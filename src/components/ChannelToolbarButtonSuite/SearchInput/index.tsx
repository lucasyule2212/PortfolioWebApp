import { Input } from '@/components/ui/input';
import React from 'react';

// import { Container } from './styles';

const SearchInput: React.FC = () => {
  return <Input placeholder="Buscar" className="outline-none w-32 focus:w-48 transition-all" />;
};

export default SearchInput;
