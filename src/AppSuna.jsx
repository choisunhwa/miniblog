import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './component/suna/page/MainPage';
import PostViewPage from './component/suna/page/PostViewPage';
import PostWritePage from './component/suna/page/PostWritePage';
import CheckBox from './component/suna/ui/CheckBox';

const subTextValue = ['체크되었습니다.', '체크해주세요.'];

function AppSuna() { 
    return (
        <div className='AppSuna'>
            <CheckBox id="checkbox01" subTextValue={ subTextValue }></CheckBox>
            <CheckBox ></CheckBox>

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