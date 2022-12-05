import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>}></Route>
          <Route path="post-write" element={<PostWritePage/>}></Route>
          <Route path="post/:postId" element={<PostViewPage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
