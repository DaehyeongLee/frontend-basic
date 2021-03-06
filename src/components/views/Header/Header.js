import React, {useState} from 'react';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Header.css';

function Header() {

    const [drawerVisible, setdrawerVisible] = useState(false)

    //햄버거 버튼 클릭시 호출
    const openDrawer = () => {
        setdrawerVisible(true)
    }
    //Drawer Close시 호출
    const closeDrawer = () => {
        setdrawerVisible(false)
    }

    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', overflow: 'hidden' }}>

            {/*서비스 로고 */}
            <div className="menu__logo">
                <a href="/">
                    MyApp
                </a>
            </div>

            {/*메뉴 컨테이너 - Right Menu */}
            <div className="menu__container">
                {/*PC 버전 */}
                <div className="menu_right">
                    <RightMenu mode="horizontal" />
                </div>
                {/*모바일 버전 */}
                <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={openDrawer}
                >
                    <Icon type="align-right" />
                </Button>
                {/*모바일 버전에서 햄버거 버튼 눌렀을 시 Drawer표출 */}
                <Drawer
                    title="Menu"
                    placement="right"
                    className="menu_drawer"
                    onClose={closeDrawer}
                    visible={drawerVisible} //값이 true일 경우 drawer open
                >
                    <RightMenu mode="inline" closeDrawer={closeDrawer}/>
                </Drawer>
            </div>
        </nav>
    )
}

export default Header
