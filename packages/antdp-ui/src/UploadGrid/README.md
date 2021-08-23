UploadGrid 可拖拽上传组件
---

快速生成Form表单。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { Component } from 'react';
import { UploadGrid } from '@antdp/antdp-ui'
import { PlusOutlined } from '@ant-design/icons/lib';
export default class Home extends Component {
  state = {
    fileList: []
  }
  uploadButton = (
    <div>
      <PlusOutlined />
      <div>Upload</div>
    </div>
  );
  render() {
    return (
      <div>
        <UploadGrid
          action=""
          listType="picture-card"
          fileList={this.state.fileList}
          onChange={({ fileList }) => { this.setState({ fileList: fileList }) }}
        >
          {this.state.fileList.length >= 9 ? null : this.uploadButton}
        </UploadGrid>
      </div>
    )
  }
}
```
<!--End-->

### Props
组件继承 [`Upload`](https:ant.design/components/upload-cn/#header)
```ts
export type Props = {
  onChange: (params: { fileList: UploadFile[] }) => void;
  children?: ReactNode;
} & UploadProps
```