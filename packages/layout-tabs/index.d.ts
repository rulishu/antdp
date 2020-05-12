import React from 'react';

interface LayoutTabsRouter {
  component?: JSX.Element;
  exact?: boolean;
  icon: string;
  key: string;
  name: string;
  path: string;
}

export interface LayoutTabsProps {
  /**
   * 是否重新渲染页面，默认 true
   */
  isReRender?: boolean;
  activeKey?: string[]
  dataSource?: LayoutTabsRouter[]
  children?: React.ReactNode;
}

declare const _default: (props?: LayoutTabsProps) => React.ReactNode;
export default _default;