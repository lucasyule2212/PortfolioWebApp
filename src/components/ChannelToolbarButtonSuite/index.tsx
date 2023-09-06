import React, { useState } from 'react';
import IconButton from '../IconButton';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { IoMail } from 'react-icons/io5';
import SearchInput from './SearchInput';
import RedirectConfirmationModal from '../RedirectConfirmationModal';
import LanguageSwapButton from '../LanguageSwapButton';

// import { Container } from './styles';

const ChannelToolbarButtonSuite: React.FC = () => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [redirectLink, setRedirectLink] = useState('');

  const handleClickLinkButton = (link = '') => {
    setIsConfirmationModalOpen(true);
    setRedirectLink(link);
  };
  return (
    <>
      <RedirectConfirmationModal
        isOpen={isConfirmationModalOpen}
        setIsOpen={setIsConfirmationModalOpen}
        redirectLink={redirectLink}
      />
      <div className="flex items-center gap-4 mr-2">
        <IconButton
          icon={AiFillLinkedin}
          handleClick={() => handleClickLinkButton('https://www.linkedin.com/in/lucasyulerocha/')}
        />
        <IconButton icon={AiFillGithub} handleClick={() => handleClickLinkButton('https://github.com/lucasyule2212')} />
        <IconButton icon={IoMail} handleClick={() => handleClickLinkButton('mailto:lucasyule6@gmail.com')} />
        <SearchInput />
        <LanguageSwapButton src="br-flag.png" alt="brazil flag" />
        <LanguageSwapButton src="usa-flag.png" alt="united states flag" />
      </div>
    </>
  );
};

export default ChannelToolbarButtonSuite;
