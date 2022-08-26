import React from 'react';

export default function Button() {
  const onClickButton = () => {
    console.log('click button');
  };
  return (
    <div
      style={{
        backgroundColor: 'skyblue',
        border: '1px solid black',
        borderRadius: 17,
        width: 100,
        height: 40,
      }}
      onClick={onClickButton}
      onKeyDown={onClickButton}
      role="button"
      tabIndex={0}
    >
      button
    </div>
  );
}
