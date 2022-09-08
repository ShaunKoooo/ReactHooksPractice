

import { useEffect } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './usememo/UseMemo';
import UseMemo1 from './usememo/UseMemo1';
import UseCallback from './usecallback/UseCallback';
import UpdateDocTitle from './useEffect/UpdateDocTitle';
import LoadingPage from './customHooks/loading/LoadingPage';
import CountDown from './customHooks/countdown/CountDown';
import BigListParent from './usecallback/bigList/BigListParent';
import Counter from './customHooks/interval/Counter';



const App = () => {
  return (
    // <UseMemo />
    // <UseMemo1 />
    // <UseCallback />
    // <UpdateDocTitle />
    // <LoadingPage />
    // <CountDown />
    // <BigListParent />
    <Counter />
  );
}

export default App;
