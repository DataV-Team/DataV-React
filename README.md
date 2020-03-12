[ENGLISH](./README_EN.md)

<p align="center">
  <img src="./icon.png">
</p>
<h1 align="center">DataV-React</h1>
<p align="center">
    <a href="https://github.com/DataV-Team/Datav-React/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/DataV-Team/datav-react.svg" alt="LICENSE" />
    </a>
    <a href="https://www.npmjs.com/package/@jiaminghi/data-view-react">
      <img src="https://img.shields.io/npm/v/@jiaminghi/data-view-react.svg" alt="LICENSE" />
    </a>
</p>

## DataV-React 是干什么的?

- DataV-React 是一个基于**React**的数据可视化组件库(当然也有[Vue 版本](https://github.com/DataV-Team/DataV))
- 提供用于提升页面视觉效果的**SVG**边框和装饰
- 提供常用的**图表**如折线图等
- 飞线图/轮播表等其他组件

### 注意事项

**使用了 React Hooks, 简化了许多内部工作。您需要 React 版本 16.8.0 及以上**

### npm 安装

```shell
$ npm install @jiaminghi/data-view-react
```

### 使用

```js
import * as datav from "@jiaminghi/data-view-react";

datav.BorderBox1;

// 或者
import { BorderBox1 } from "@jiaminghi/data-view-react";

// 按需引入
import BorderBox1 from "@jiaminghi/data-view-react/es/borderBox1";
```

详细文档及示例请移步[HomePage](http://datav-react.jiaminghi.com).

### UMD 版

`UMD`版可直接使用`script`标签引入，引入后通过**datav**命名空间使用对应的组件，引入`data-view-react`前请确保已引入`react 和 react-dom`。

[UMD 版使用示例](./umdExample.html)

### TODO

* **地图组件**
* **TS**重构组件库底层依赖

### 致谢

组件库的开发基于个人学习和兴趣，由于技术水平及经验的限制，组件尚有许多不完善之处，如有 BUG 可及时提交[issue](https://github.com/DataV-Team/DataV-React/issues/new?template=bug_report.md)或添加反馈群进行反馈，也欢迎提供指正和建议，感谢各位的支持。

### 反馈

![Feedback](./QQGroup.png)

### Demo

Demo 页面使用了全屏组件，请 F11 全屏后查看。

- [施工养护综合数据](http://datav-react.jiaminghi.com/demo/construction-data/index.html)

![construction-data](./demoImg/construction-data.jpg)

- [机电运维管理台](http://datav-react.jiaminghi.com/demo/manage-desk/index.html)

![manage-desk](./demoImg/manage-desk.jpg)

- [机电设备电子档案](http://datav-react.jiaminghi.com/demo/electronic-file/index.html)

![electronic-file](./demoImg/electronic-file.jpg)
