import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>타로오션</span>}>
      <MenuItemGroup title="타로이야기나눔">
        <Menu.Item key="tarot_D"><a href="/tarotdirectory">타로백과사전</a></Menu.Item>
        <Menu.Item key="tarot_S"><a href="/tarotspread">스프레드배열법</a></Menu.Item>
        <Menu.Item key="tarot_B"><a href="/tarotboard">정보/공유</a></Menu.Item>
      </MenuItemGroup>
    </SubMenu>

    <SubMenu title={<span>점성학오션</span>}>
      <MenuItemGroup title="점성학이야기나눔">
        <Menu.Item key="setting:1"><a href="/tarotdirectory"></a>점성학알아보기</Menu.Item>
        <Menu.Item key="setting:2"><a href="/tarotdirectory"></a>정보/공유</Menu.Item>
      </MenuItemGroup>
    </SubMenu>

    <SubMenu title={<span>사주오션</span>}>
      <MenuItemGroup title="사주이야기나눔">
        <Menu.Item key="setting:1">내사주알아보기</Menu.Item>
        <Menu.Item key="setting:2">정보/공유</Menu.Item>
      </MenuItemGroup>
    </SubMenu>

    <SubMenu title={<span>커뮤니티</span>}>
      <MenuItemGroup title="도란도란">
        <Menu.Item key="setting:1">가입인사</Menu.Item>
        <Menu.Item key="setting:2">자유수다/고민방</Menu.Item>
        <Menu.Item key="setting:3">20대수다/고민방</Menu.Item>
        <Menu.Item key="setting:4">30대수다/고민방</Menu.Item>
        <Menu.Item key="setting:5">40대수다/고민방</Menu.Item>
        <Menu.Item key="setting:6">50대수다/고민방</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu