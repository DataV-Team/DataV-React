[中文](./README.md)

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

## What is DataV-React?

- DataV-React is a data **visualization** components library based on **React**(Of course there are also[Vue version](https://github.com/DataV-Team/DataV)).
- Provide cool **SVG** borders and decorations.
- Provide common **charts** such as line chart, etc..
- flying line chart, carousel table and etc.

### Precautions

**Using React Hooks simplifies many internal work. You need React version 16.8.0 and above**

### Install with npm

```shell
$ npm install @jiaminghi/data-view-react
```

### use

```js
import * as datav from "@jiaminghi/data-view-react";

datav.BorderBox1;

// or
import { BorderBox1 } from "@jiaminghi/data-view-react";

// Introduced on demand
import BorderBox1 from "@jiaminghi/data-view-react/es/borderBox1";
```

Detailed documents and examples can be viewed on the [HomePage](http://datav-react.jiaminghi.com).

### UMD version

The `UMD` version can be directly imported using the `script` tag. After the introduction, the corresponding component is used through the **datav** namespace. Before introducing `data-view-react`, please ensure that `react and react-dom are introduced.

[UMD version usage example](./umdExample.html)

### TODO

* **Map Component**
* Refactor underlying dependencies using **TS**.

### Acknowledgement

The development of the component library is based on personal learning and interest. Due to technical level and experience limitations, there are still many imperfections in the components. If there are errors, you can submit [issue](https://github.com/DataV-Team/DataV-React/issues/new?template=bug_report.md) in time or add feedback groups for feedback. Welcome to provide corrections and suggestions. Thank you for your support.

### Feedback

![Feedback](./QQGroup.png)

### Demo

The Demo page uses the full-screen component, please view it after F11 full screen.

- [Construction Data](http://datav-react.jiaminghi.com/demo/construction-data/index.html)

![construction-data](./demoImg/construction-data.jpg)

- [Manage-Desk](http://datav-react.jiaminghi.com/demo/manage-desk/index.html)

![manage-desk](./demoImg/manage-desk.jpg)

- [Electronic-File](http://datav-react.jiaminghi.com/demo/electronic-file/index.html)

![electronic-file](./demoImg/electronic-file.jpg)
