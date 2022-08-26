import React from 'react';
import NameProvider from '../context/NameProvider';
import Button from './Button';
import Text from './Text';

export default function Article() {
  return (
    <div className="article">
      <NameProvider>
        <>
          Article
          <Button />
          <Text />
        </>
      </NameProvider>
    </div>
  );
}
