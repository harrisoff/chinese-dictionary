# 汉语字典

总计收录 21104 个汉字和符号。

> 符号包括标点符号和数学符号等

- `full.json` 为完整数据，包含字段：
   - `word`，字符
   - `pinyin`，带音调的拼音
   - `pinyin2`，无音调的拼音
   - `strokes`，笔画数
   - `radical`，偏旁
   - `url`，该字所在页面
   - `html`，原页面详情部分 html
   - `detail`，详情部分文本
- `full.{start}-{end}.json` 为分片后的数据，方便 git diff
- `slim.json` 删除了 `detail`、`url` 和 `html` 字段
- `words.json` 只保留汉字
- `pinyin-alias.json` 带音调和不带音调的单韵母的对照表

个人使用，禁止商用。
