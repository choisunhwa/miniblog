import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './component/suna/page/MainPage';
import PostViewPage from './component/suna/page/PostViewPage';
import PostWritePage from './component/suna/page/PostWritePage';

function AppSuna() { 
    return (
        <div className='AppSuna'>
            <BrowserRouter>
				<Routes>
					<Route index element={<MainPage />}></Route>
					<Route path="/post/*" element={<PostViewPage></PostViewPage>}></Route>
					<Route path="/post-write/*" element={<PostWritePage></PostWritePage>}></Route>
				</Routes>
            </BrowserRouter>
        </div>
    )
}


export default AppSuna;