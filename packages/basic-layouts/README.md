@antdp/basic-layouts
---

[![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts)
[![npm download](https://img.shields.io/npm/dm/@antdp/basic-layouts.svg?style=flat)](https://www.npmjs.com/package/@antdp/basic-layouts)

入口公共界面

## 安装

```bash
$ npm i @antdp/basic-layouts  # yarn add  @antdp/basic-layouts
```


## 基本使用

```jsx
import React from 'react';
import BasicLayouts from '@antdp/basic-layouts';
const Demo = () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
    />
  )
};

export default Demo
```

## 菜单国际化设置

```jsx
import BasicLayouts from '@antdp/basic-layouts';
import { useIntl,SelectLang } from '@umijs/max';

const Demo = () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
      intlLanguage={useIntl()}
      topRightLanguage={<SelectLang />}
    />
  )
};
export default Demo
```
## 配置右侧菜单
```jsx
import BasicLayouts from '@antdp/basic-layouts';

export default () => {
  return (
    <BasicLayouts
      projectName="Ant Design Pro"
      topRightMenu={[
          {
            title: '个人中心',
            icon: <UserOutlined />,
            onClick: () => {},
          },
          {
            title: '个人设置',
            link: '/setting/property',
            icon: <SettingOutlined />,
          },
          {
            divider: true,
          },
          {
            title: '退出登录',
            icon: <LogoutOutlined />,
            onClick: () => {
              logout();
            },
          },
        ]}
    />
  )
};

```

## 配置暗模式
```jsx
import BasicLayouts from '@antdp/basic-layouts';

export default () => {
  return (
    <BasicLayouts
      theme="dark"
      projectName="Ant Design Pro"
      topRightMenu={[
        {
          title: '个人中心',
          icon: <UserOutlined />,
          onClick: () => {},
        },
        {
          title: '个人设置',
          link: '/setting/property',
          icon: <SettingOutlined />,
        },
        {
          divider: true,
        },
        {
          title: '退出登录',
          icon: <LogoutOutlined />,
          onClick: () => {
            logout();
          },
        },
      ]}
    />
  )
};

```

## API

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| logo | 项目logo | string  | - |
| projectName | 项目名称 | `React.ReactNode` | - |
| children | 自定义内容 | `React.ReactNode` | - |
| intlLanguage | 国际化语言转换方法 | `IntlShape` |
| topRightMenu | 头像下拉菜单 |  `TopRightMenuProps[]` | - |
| bodyPadding | 设置内容区域补白，默认 14px |   `number` | - |
| topRightLanguage | 顶部右方 |   `React.ReactNode` | - |
| siderWidth | 置最左边菜单宽度 |   `number` | `180` |
| profile | 用户信息显示 |   `{avatar?: string;name?: string}` | - |
| theme | 明或暗 |   `dark` | `light` | `light` |
| className | 样式 |   `string` | - |
| configProviderProps | `antd组件全局化配置` |   `ConfigProviderProps` | - |

## TopRightMenuProps
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| icon | 图标 | `React.ReactNode`  | - |
| title | 标题 | `React.ReactNode` | - |
| link | 链接 | `string` | - |
| divider | 是否有下划线 | `boolean` | - |
| onClick | 点击事件 | `IntlShape` |