import React from 'react';

interface IProps {
  title: string;
}

const Header = ({ title }: IProps) => {
  return <h1>{title}</h1>;
};

export { Header };
