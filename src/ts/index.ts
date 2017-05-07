const _ = require('lodash');

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());

//配列の作成
var R = new Array();
var Y = new Array();
//配列に色(RGB)データを入力
const T_1 = [255, 255, 255, 0];
const B_1 = [0, 0, 0, 255];
const W_1 = [255, 255, 255, 255];
const BL1 = [82, 82, 206, 255];
const BL2 = [7, 49, 181, 255];
const BL3 = [74, 16, 140, 255];
const BR1 = [123, 90, 57, 255];
const BR2 = [206, 148, 90, 255];
const BR3 = [239, 198, 148, 255];
const GR1 = [115, 115, 115, 255];
const GR2 = [181, 181, 156, 255];

//ドット絵の大きさ
var W = 16;
var H = 20;

function main() {
  //キャンバス要素の作成
  var canvas = document.createElement("canvas");
  //bodyに要素の追加
  document.body.appendChild(canvas);
  //コンテキストを取得 2dは2D描画の意味
  var ctx = canvas.getContext("2d");

  // ImageDataオブジェクトを作成
  var imgData = ctx.createImageData(W, H);
  var imgData2 = ctx.createImageData(W, H);

  //データ用の配列を作成
  var data = new Array();
  var data2 = new Array();

  //１６×１６のデータを配列の連結で作る
  data = data.concat(
    W_1, W_1, W_1, W_1, W_1, B_1, B_1, B_1, B_1, B_1, B_1, W_1, W_1, W_1, W_1, W_1,
    W_1, W_1, W_1, W_1, B_1, BL1, BL1, BL1, BL1, BL3, BL3, B_1, W_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL1, BL1, BL1, BL1, BL1, BL1, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL3, BL1, BL1, BL1, BL1, BL3, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL1, BL1, BL3, BL3, BL3, BL1, BL1, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL3, BL1, BL1, BL1, BL1, BL1, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL3, BL3, BL3, BL3, BL3, BL3, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, B_1, B_1, B_1, B_1, BR3, B_1, BR2, BR2, B_1, BR2, B_1, B_1, W_1, W_1, W_1,
    B_1, BR3, BR1, B_1, BR2, BR3, B_1, BR3, BR3, B_1, BR2, BR2, B_1, B_1, W_1, W_1,
    B_1, BR2, BR1, BL3, B_1, BR2, BR3, BR3, BR3, BR2, BR2, B_1, BL1, BL3, B_1, W_1,
    B_1, BR2, BR1, BL3, BL1, B_1, B_1, BR2, BR1, B_1, B_1, BL1, BL3, BL1, B_1, W_1,
    W_1, B_1, B_1, BL3, BL3, BL1, BL1, B_1, B_1, BL1, BL3, BL3, GR1, BR1, BR2, B_1,
    B_1, BR3, BR2, GR1, BL3, BL3, BL3, BL3, BL3, BL3, BL3, GR2, GR1, B_1, BR2, B_1,
    B_1, BR2, BR2, B_1, GR2, W_1, W_1, W_1, W_1, W_1, GR2, GR2, B_1, B_1, BR1, B_1,
    W_1, B_1, BR1, GR1, B_1, GR2, W_1, W_1, W_1, GR2, GR2, B_1, GR1, B_1, BR1, B_1,
    W_1, B_1, BR1, GR1, GR2, B_1, BR1, BR2, BR2, BR1, B_1, GR2, GR2, B_1, B_1, W_1,
    W_1, B_1, BR2, B_1, GR2, GR2, W_1, W_1, W_1, W_1, W_1, GR2, B_1, W_1, W_1, W_1,
    W_1, B_1, BR2, B_1, BL2, BL2, BL2, B_1, BR2, BR3, BR3, BR2, B_1, W_1, W_1, W_1,
    W_1, B_1, BR2, B_1, GR1, GR1, GR1, B_1, BL2, BL2, BL2, BL2, B_1, W_1, W_1, W_1,
    W_1, W_1, B_1, B_1, W_1, W_1, W_1, B_1, GR1, GR2, GR2, GR1, B_1, W_1, W_1, W_1
  );

  //１６×１６のデータを配列の連結で作る
  data2 = data2.concat(
    W_1, W_1, W_1, W_1, W_1, B_1, B_1, B_1, B_1, B_1, B_1, W_1, W_1, W_1, W_1, W_1,
    W_1, W_1, W_1, W_1, B_1, BL1, BL1, BL1, BL1, BL3, BL3, B_1, W_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL1, BL1, BL1, BL1, BL1, BL1, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL3, BL1, BL1, BL1, BL1, BL3, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL1, BL1, BL3, BL3, BL3, BL1, BL1, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL3, BL1, BL1, BL1, BL1, BL1, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL3, BL3, BL3, BL3, BL3, BL3, BL3, BL3, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, B_1, BR3, B_1, BR2, BR2, B_1, BR2, B_1, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BR2, BR3, B_1, BR3, BR3, B_1, BR2, BR2, B_1, B_1, W_1, W_1,
    W_1, B_1, B_1, BL3, B_1, BR2, BR3, BR3, BR3, BR2, BR2, B_1, BL1, BL3, B_1, W_1,
    B_1, BR3, BR2, BL3, BL1, B_1, B_1, BR2, BR1, B_1, B_1, B_1, B_1, BR2, B_1, W_1,
    B_1, BR2, BR2, BL3, BL3, BL1, BL1, B_1, B_1, BL1, B_1, BR3, BR2, BR1, B_1, W_1,
    B_1, B_1, B_1, GR1, BL3, BL3, BL3, BL3, BL3, BL3, B_1, BR2, BR2, BR1, B_1, W_1,
    B_1, BR2, BR1, B_1, GR2, W_1, W_1, W_1, W_1, W_1, B_1, B_1, BR1, B_1, W_1, W_1,
    W_1, B_1, BR1, GR1, B_1, GR2, W_1, W_1, W_1, GR2, GR2, B_1, B_1, B_1, W_1, W_1,
    W_1, W_1, B_1, GR1, GR2, B_1, BR1, BR2, BR2, BR1, B_1, GR2, GR2, B_1, W_1, W_1,
    W_1, W_1, W_1, B_1, GR2, W_1, W_1, W_1, W_1, GR2, GR2, GR2, B_1, W_1, W_1, W_1,

    W_1, W_1, W_1, B_1, BR2, BR3, BR3, BR2, B_1, BL2, BL2, BL2, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, BL2, BL2, BL2, BL2, B_1, GR1, GR1, GR1, B_1, W_1, W_1, W_1,
    W_1, W_1, W_1, B_1, GR1, GR2, GR2, GR1, B_1, W_1, W_1, W_1, W_1, W_1, W_1, W_1
  );

    //イメージデータにRGBの値を入れる
    var i = 0;
    for (i = 0; i < 4 * W * H; i++) {
      imgData.data[i] = data[i];
    }
    for (i = 0; i < 4 * W * H; i++) {
      imgData2.data[i] = data2[i];
    }

    //イメージデータを出力
    ctx.putImageData(imgData, 0, 0);
    ctx.putImageData(imgData2, 20, 0);
  }

  main();
