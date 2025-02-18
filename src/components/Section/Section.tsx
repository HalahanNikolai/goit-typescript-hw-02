import React from 'react';
import { SectionWrap, SectionTitle } from './Section.styled';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section: React.FC<SectionProps>  = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};

export default Section;
