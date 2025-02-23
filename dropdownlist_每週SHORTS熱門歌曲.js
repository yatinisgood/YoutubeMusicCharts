
	// dropdown.js
	document.addEventListener('DOMContentLoaded', function() {
	    var dropdownHTML = `
	        <select class="form-control" id="week-selector" onchange="goToWeek(this.value)">
	            <option value="">選擇一週</option>
	            <option value="index_每週SHORTS熱門歌曲_20250220.html">20250220</option><option value="index_每週SHORTS熱門歌曲_20250213.html">20250213</option><option value="index_每週SHORTS熱門歌曲_20250206.html">20250206</option><option value="index_每週SHORTS熱門歌曲_20250130.html">20250130</option><option value="index_每週SHORTS熱門歌曲_20250123.html">20250123</option><option value="index_每週SHORTS熱門歌曲_20250116.html">20250116</option><option value="index_每週SHORTS熱門歌曲_20250109.html">20250109</option><option value="index_每週SHORTS熱門歌曲_20250102.html">20250102</option><option value="index_每週SHORTS熱門歌曲_20241226.html">20241226</option><option value="index_每週SHORTS熱門歌曲_20241219.html">20241219</option><option value="index_每週SHORTS熱門歌曲_20241212.html">20241212</option><option value="index_每週SHORTS熱門歌曲_20241205.html">20241205</option><option value="index_每週SHORTS熱門歌曲_20241128.html">20241128</option><option value="index_每週SHORTS熱門歌曲_20241121.html">20241121</option><option value="index_每週SHORTS熱門歌曲_20241114.html">20241114</option><option value="index_每週SHORTS熱門歌曲_20241107.html">20241107</option><option value="index_每週SHORTS熱門歌曲_20241031.html">20241031</option><option value="index_每週SHORTS熱門歌曲_20241024.html">20241024</option><option value="index_每週SHORTS熱門歌曲_20241017.html">20241017</option><option value="index_每週SHORTS熱門歌曲_20241010.html">20241010</option><option value="index_每週SHORTS熱門歌曲_20241003.html">20241003</option><option value="index_每週SHORTS熱門歌曲_20240926.html">20240926</option><option value="index_每週SHORTS熱門歌曲_20240919.html">20240919</option><option value="index_每週SHORTS熱門歌曲_20240912.html">20240912</option><option value="index_每週SHORTS熱門歌曲_20240905.html">20240905</option><option value="index_每週SHORTS熱門歌曲_20240829.html">20240829</option><option value="index_每週SHORTS熱門歌曲_20240822.html">20240822</option><option value="index_每週SHORTS熱門歌曲_20240815.html">20240815</option><option value="index_每週SHORTS熱門歌曲_20240808.html">20240808</option><option value="index_每週SHORTS熱門歌曲_20240801.html">20240801</option><option value="index_每週SHORTS熱門歌曲_20240725.html">20240725</option><option value="index_每週SHORTS熱門歌曲_20240718.html">20240718</option><option value="index_每週SHORTS熱門歌曲_20240711.html">20240711</option><option value="index_每週SHORTS熱門歌曲_20240704.html">20240704</option><option value="index_每週SHORTS熱門歌曲_20240627.html">20240627</option><option value="index_每週SHORTS熱門歌曲_20240620.html">20240620</option><option value="index_每週SHORTS熱門歌曲_20240613.html">20240613</option><option value="index_每週SHORTS熱門歌曲_20240606.html">20240606</option><option value="index_每週SHORTS熱門歌曲_20240530.html">20240530</option><option value="index_每週SHORTS熱門歌曲_20240523.html">20240523</option><option value="index_每週SHORTS熱門歌曲_20240516.html">20240516</option><option value="index_每週SHORTS熱門歌曲_20240509.html">20240509</option><option value="index_每週SHORTS熱門歌曲_20240502.html">20240502</option><option value="index_每週SHORTS熱門歌曲_20240425.html">20240425</option><option value="index_每週SHORTS熱門歌曲_20240418.html">20240418</option><option value="index_每週SHORTS熱門歌曲_20240411.html">20240411</option><option value="index_每週SHORTS熱門歌曲_20240404.html">20240404</option><option value="index_每週SHORTS熱門歌曲_20240328.html">20240328</option><option value="index_每週SHORTS熱門歌曲_20240321.html">20240321</option><option value="index_每週SHORTS熱門歌曲_20240314.html">20240314</option><option value="index_每週SHORTS熱門歌曲_20240307.html">20240307</option><option value="index_每週SHORTS熱門歌曲_20240229.html">20240229</option><option value="index_每週SHORTS熱門歌曲_20240222.html">20240222</option><option value="index_每週SHORTS熱門歌曲_20240215.html">20240215</option><option value="index_每週SHORTS熱門歌曲_20240208.html">20240208</option><option value="index_每週SHORTS熱門歌曲_20240201.html">20240201</option><option value="index_每週SHORTS熱門歌曲_20240125.html">20240125</option><option value="index_每週SHORTS熱門歌曲_20240118.html">20240118</option><option value="index_每週SHORTS熱門歌曲_20240111.html">20240111</option><option value="index_每週SHORTS熱門歌曲_20240104.html">20240104</option><option value="index_每週SHORTS熱門歌曲_20231228.html">20231228</option><option value="index_每週SHORTS熱門歌曲_20231221.html">20231221</option><option value="index_每週SHORTS熱門歌曲_20231214.html">20231214</option><option value="index_每週SHORTS熱門歌曲_20231207.html">20231207</option><option value="index_每週SHORTS熱門歌曲_20231130.html">20231130</option><option value="index_每週SHORTS熱門歌曲_20231123.html">20231123</option><option value="index_每週SHORTS熱門歌曲_20231116.html">20231116</option><option value="index_每週SHORTS熱門歌曲_20231109.html">20231109</option><option value="index_每週SHORTS熱門歌曲_20231102.html">20231102</option>
	        </select>
	    `;

	    // 插入到 DOM 中的某個特定位置
	    document.getElementById('dropdown-container').innerHTML = dropdownHTML;
	});
	