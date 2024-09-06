import './App.css';
import StoreList from './components/StoreList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
        <UserList />
        <br />
        <hr />
        {/* 맛집 리스트 추가 */}
        {/* 월미당(쌀국수집) */}
        <StoreList />
    </div>
  );
}

export default App;
