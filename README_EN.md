[中文](./README.md)

<h1 align="center">DataV</h1>

<p align="center">
    <a href="https://github.com/jiaming743/datav/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/DataV-Team/datav-react.svg" alt="LICENSE" />
    </a>
    <a href="https://www.npmjs.com/package/@jiaminghi/data-view">
      <img src="https://img.shields.io/npm/v/@jiaminghi/data-view-react.svg" alt="LICENSE" />
    </a>
</p>

## What is DataV?

* DataV is a data **visualization** components library based on **Vue**.
* Provide cool **SVG** borders and decorations.
* Provide common **charts** such as line chart, etc..
* flying line chart, carousel table and etc.

### Install with npm

```shell
$ npm install @jiaminghi/data-view
```

### use

```js
import datav from "@jiaminghi/data-view-react"

datav.BorderBox1

// Introduced on demand
import { BorderBox1 } from "@jiaminghi/data-view-react"
```

Detailed documents and examples can be viewed on the [HomePage](http://datav.jiaminghi.com).

### UMD version

The `UMD` version can be directly imported using the `script` tag. The `UMD` version file is located in the project `dist` directory. After import, all components will be automatically registered as **Vue global components**. Be sure to introduce `Vue` before introducing `DataV`.

[UMD version usage example](./umdExample.html)

### React version

The reaction version is already under development, so stay tuned

### Questionnaire

React version of the component library and feedback[Questionnaire](https://www.wjx.cn/jq/45326197.aspx)

![问卷调查](./questionnaire.jpg)

### TODO

* **flylineChart**Add multi-center point and reverse fly line function.
* Add color and other necessary configuration to the **borderBox** and **decoration** to enhance configurability and flexibility.

### Acknowledgement

The development of the component library is based on personal learning and interest. Due to technical level and experience limitations, there are still many imperfections in the components. If there are errors, you can submit [issue](https://github.com/jiaming743/DataV/issues/new?template=bug_report.md) in time or add feedback groups for feedback. Welcome to provide corrections and suggestions. Thank you for your support.

### Feedback

![Feedback](./QQGroup.png)

### Demo

The Demo page uses the full-screen component, please view it after F11 full screen.

* [Construction Data](http://datav.react.jiaminghi.com/demo/construction-data/index.html)

![construction-data](./demoImg/construction-data.jpg)

* [Manage-Desk](http://datav.react.jiaminghi.com/demo/manage-desk/index.html)

![manage-desk](./demoImg/manage-desk.jpg)

* [Electronic-File](http://datav.react.jiaminghi.com/demo/electronic-file/index.html)

![electronic-file](./demoImg/electronic-file.jpg)