/**
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 10:04:03
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 10:04:05
 * @FilePath: \jungehousing\.prettierrc.js
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
 */
module.exports = {
  // 行尾需要有分号
  semi: true,
  // 是否使用单引号
  singleQuote: true,
  // 末尾不需要逗号'none'
  trailingComma: 'none',
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 空格数
  tabWidth: 2,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 箭头函数参数括号，avoid：能省略括号时就省略；always：总是有括号
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 在对象、数组括号与文字之间加空格 "{ foo: bar }"
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 一行的字符数，如果超过会进行换行，默认80
  printWidth: 120,
  // 多行JSX中的>放置在最后一行
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: true,
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf 结尾是 \n \r \n\r auto
  endOfLine: 'lf'
};
