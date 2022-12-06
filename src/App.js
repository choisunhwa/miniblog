import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './component/book/page/MainPage';
import PostWritePage from './component/book/page/PostWritePage';
import PostViewPage from './component/book/page/PostViewPage';

function App() {
  return (
    <div className='App'>
      
      <h1 style={{ textAlign: 'center' }}>서나의 미니 블로그</h1>
      
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>}></Route>
          <Route path="post-write" element={<PostWritePage/>}></Route>
          <Route path="post/:postId" element={<PostViewPage/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
