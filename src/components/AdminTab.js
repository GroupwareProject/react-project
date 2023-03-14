import { useState } from 'react';
import AdminTabCSS from "./AdminTab.module.css";

const AdminTab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  const [currentTab,setTab] = useState(0);

  const menuArr = [
    { name: '사원관리', content: 'Tab menu ONE' },
    { name: '근태관리', content: 'Tab menu TWO' }
  ];

  const selectMenuHandler = (index) => {
    setTab(index);
  };

  return (
 
    <>
      <div>
        <div className={ AdminTabCSS.TabMenu }>
          {/*TODO: 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정합니다.*/}
          {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                  나머지 2개의 tab은 'submenu' 가 됩니다.*/}

         {menuArr.map( (tap,index) => {
             return (
             <li key={index} className={currentTab === index ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}>{tap.name}</li>
             )
          })}
        </div>
        <div className={ AdminTabCSS.Desc }>
          {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
          <p>{menuArr[currentTab].content}</p>
        </div>
      </div>
    </>
  );
};

export default AdminTab;