# 1.2.5-alpha (2020-11-15)

### New

- **decoration12:** New decoration(Radar scan).

### Optmization

- **ScrollBoard:** Reduce redundant node rendering.
- **ScrollRankingBoard:** Reduce redundant node rendering.
- **ScrollRankingBoard:** Add value formatter.
- **BorderBox:** Canonical class name.
- **useAutoResize(hooks):** Add exception prompt.
- **Decoration** add `dur` configuration.
- **ActiveRingChart** add `digitalFlopUnit` configuration.

# 1.2.4-alpha (2020-7-25)

### Bug 修复

- **scrollBoard:** hover Error [(#9)](https://github.com/DataV-Team/DataV-React/issues/9).

# 1.2.2-alpha (2020-7-04)

### Bug 修复

- **ScrollRankingBoard:** 计算规则调整 [(#101)](https://github.com/DataV-Team/DataV/pull/101).
- **scrollBoard:** key 生成策略调整 [(#8)](https://github.com/DataV-Team/DataV-React/issues/8).
- **uuid:** uuid 生成策略调整 [(#108)](https://github.com/DataV-Team/DataV/issues/108).

### Perfect

- **DigitalFlop:** 添加 `formatter` 配置.

# 1.2.0-alpha (2020-6-14)

### Perfect

- **BorderBox:** 添加 `backgroundColor` prop.
- **BorderBox8:** 添加 `reverse` prop.
- **DigitalFlop:** 添加 `rowGap` 配置.
- **ScrollBoard:** 添加 `hoverPause` 配置.
- **CapsuleChart:** 添加 `showValue` 配置.
- **ActiveRightChart:** 添加 `showOriginValue` 配置.

- **uuid:** 使用 `uuid` 生成唯一 id.

# 1.1.7-alpha (2020-04-10)

### BUG 修复

- **WaterLevelPond:** 组件切换到后台陷入死循环.
- **CapsuleChart:** 胶囊图数值错误.

### Perfect

- **Component:** 内部使用 useImperativeHandle 的组件默认经过 forwardRef 返回.

# 1.1.3-alpha (2020-01-17)

### BUG 修复

- **ActiveRingChart:** `parseInt` 精度损失.

# 1.1.2-alpha (2020-01-10)

### Perfect

- **AtiveRingChart:** 添加 digitalFlopToFixed 配置项.

# 1.1.1-alpha (2020-01-08)

### New

- **FlylineChartEnhanced:** Enhanced flylineChart .

# 1.0.10-alpha (2019-12-27)

### Perfect

- **ScrollRankingBoard:** 配置项 sort 控制是否自动排序.
- **ScrollRankingBoard:** 通过 dangerouslySetInnerHTML 渲染 name 数据.

# 1.0.8-alpha (2019-12-17)

### Feature

- **BorderBox & Decoration:** **Configurable** color.

  ```html
  <!-- Example -->
  <BorderBox1 color={['red', 'green']} />
  <Decoration1 color={['red', 'green']} />
  ```

- **ScrollBoard:** 配置 header index.

### New

- **borderBox11**
- **borderBox12**
- **borderBox13**
- **decoration11**

# 1.0.7-alpha (2019-10-25)

### Perfect

- **co:** 优化 Generator 异常.
- **export:** 导出 co, useAutoResize.

# 1.0.5-alpha (2019-10-24)

### Perfect

- **Charts:** 优化内存泄漏.
- **DigitalFlop:** 优化内存泄漏.

# 1.0.4-alpha (2019-10-24)

### Bug 修复

- **ActiveRingChart:** 优化内存泄漏.

# 1.0.2-alpha (2019-09-27)

### Bug 修复

- **co:** Generator 自动执行异常.

### 优化组件

- **ActiveRingChart**
- **DigitalFlop**
- **FullScreenContainer**
- **PercentPond**
- **ScrollBoard**
- **ScrollBankingBoard**
- **WaterLevelPond**

# 1.0.1-alpha (2019-09-24)

### Bug 修复

- **ActiveRingChart:** 由于数据值为 0 而导致计算异常.

# 1.0.0-alpha (2019-09-23)

### 初始化代码

- **Vue to React:** 转换 **Vue** 组件 为 **React** 组件.
