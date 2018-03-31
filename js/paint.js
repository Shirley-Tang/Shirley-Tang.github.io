// 个人画册页面的数据
var data = [{
    pics: './images/c9.jpg',
    text: '18.3.31',
}, {
    pics: './images/c8.jpg',
    text: '18.3.27',
}, {
    pics: './images/c6.jpg',
    text: '18.3.25',
}, {
    pics: './images/c7.jpg',
    text: '18.3.24',
}, {
    pics: './images/c1.jpg',
    text: '18.2.17',
}, {
    pics: './images/c4.jpg',
    text: '14.5.5',
}, {
    pics: './images/c5.jpg',
    text: '13.6.14',
}, {
    pics: './images/c3.jpg',
    text: '13.5.4',
}];

// 相关 DOM
var $wrapper = $('.box-wrapper');

/**
 * 画册内容 HTML 模板
 * @param {String} pics 图片地址 text 文本
 * @return {String} 返回html字符串
 */
function paintsHtmlTpl(messageData) {
  var htmlText = [];
  htmlText.push('<div class="box">');
  htmlText.push('<img src="' + messageData.pics +'"/>');
  htmlText.push('<div class="box-content"><div class="box-inner-content">');
  htmlText.push('<h3 class="title">' + messageData.text +'</h3>');
  htmlText.push('</div></div></div>');
  return htmlText.join('');
}

/* paintsHtmlTpl例子
<div class="box">
    <img src="images/c6.jpg"/>
    <div class="box-content">
        <div class="box-inner-content">
            <h3 class="title">18/3/25</h3>
        </div>
    </div>
</div>
 */

/**
 * 页面渲染函数：render
 * 展示data数组中的所有消息数据
 */
function render() {
  var len = data.length;
  var htmlText = [];
  for(var i = 0 ;i < len; i++){
    htmlText.push(paintsHtmlTpl(data[i]));
  }
  $wrapper.append(htmlText.join(''));
}

render();