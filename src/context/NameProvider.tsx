import React, { ReactNode, useContext, useState } from 'react';

const MyContext = React.createContext<any | null>(null);

export default function NameProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>('');
  const contextValue = {
    name,
    setName,
  };

  return (
    // Provider 핳위에서 Context 구독하는 모든 컴포넌트는 value prop가 바뀔 때마다 다시 렌더링.
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export const useNameContext = () => {
  const context = useContext(MyContext);
  if (MyContext) {
    throw new Error('context error 입니다.');
  }

  return context;
};
