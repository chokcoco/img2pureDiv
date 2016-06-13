;/*!/static/js/index.js*/
(function(window,undefined){

	var
		img2div = function(imgElem){
			return new img2div.prototype.init(imgElem);
		},
		img = document.getElementById('img'),
		div = document.getElementById('toDiv');


	/**
	 * 获取图片每个像素颜色值
	 * @param  {[type]} imgElem [description]
	 * @return {[type]}         [description]
	 */
  img2div.prototype.getImgColor = function(imgElem){
  	var imgWidth = imgElem.width,
			imgHeight = imgElem.height,
			canvas = document.createElement("canvas"),
			context = canvas.getContext("2d");

		// 根据 img 设置 canvas 高宽
		canvas.width = imgWidth;
  	canvas.height = imgHeight;

  	// 绘图
  	context.drawImage(imgElem, 0, 0, imgWidth, imgHeight);

  	// 取色
  	var colorArr = context.getImageData(0, 0, imgWidth, imgHeight),
  	  data = colorArr.data,
  	  len = data.length,
  	  boxShadowBox = [],
  	  i = 0;

  	for(; i<len; i++){
  		if(i%4 === 0){
  			var x = i / 4 % imgWidth,
  				y = Math.floor(i /4 / imgWidth),
  				rgbaR = data[i],
  				rgbaG = data[i+1],
  				rgbaB = data[i+2],
  				rgbaA = 1;

  			boxShadowBox.push(
  				(x+1)+'px '+
  				(y+1)+'px '+ 'rgba(' +
  				rgbaR + ',' + rgbaG + ',' + rgbaB + ',' + rgbaA + ')'
  			);
  		}
  	}
  	console.log(data);
  	console.log(boxShadowBox);
  	console.log('len is '+len);

  	// div.style.width = imgWidth;
  	// div.style.height = imgHeight;
  	div.style.boxShadow = boxShadowBox.join();

  }

  img2div.prototype.init = function(imgElem){
  	this.getImgColor(imgElem);
  }

  img2div.prototype.init.prototype = img2div.prototype;


	var a = img2div(img);
	console.log(a);

})(window);
