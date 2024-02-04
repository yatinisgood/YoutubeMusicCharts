
	// dropdown.js
	document.addEventListener('DOMContentLoaded', function() {
	    var dropdownHTML = `
	        <select class="form-control" id="week-selector" onchange="goToWeek(this.value)">
	            <option value="">選擇一日</option>
	            <option value="index_每日SHORTS熱門歌曲_20240202.html">20240202</option><option value="index_每日SHORTS熱門歌曲_20240201.html">20240201</option><option value="index_每日SHORTS熱門歌曲_20240131.html">20240131</option><option value="index_每日SHORTS熱門歌曲_20240130.html">20240130</option><option value="index_每日SHORTS熱門歌曲_20240129.html">20240129</option><option value="index_每日SHORTS熱門歌曲_20240128.html">20240128</option><option value="index_每日SHORTS熱門歌曲_20240127.html">20240127</option><option value="index_每日SHORTS熱門歌曲_20240126.html">20240126</option><option value="index_每日SHORTS熱門歌曲_20240125.html">20240125</option><option value="index_每日SHORTS熱門歌曲_20240124.html">20240124</option><option value="index_每日SHORTS熱門歌曲_20240123.html">20240123</option><option value="index_每日SHORTS熱門歌曲_20240122.html">20240122</option><option value="index_每日SHORTS熱門歌曲_20240121.html">20240121</option><option value="index_每日SHORTS熱門歌曲_20240120.html">20240120</option><option value="index_每日SHORTS熱門歌曲_20240119.html">20240119</option><option value="index_每日SHORTS熱門歌曲_20240118.html">20240118</option><option value="index_每日SHORTS熱門歌曲_20240117.html">20240117</option><option value="index_每日SHORTS熱門歌曲_20240116.html">20240116</option><option value="index_每日SHORTS熱門歌曲_20240115.html">20240115</option><option value="index_每日SHORTS熱門歌曲_20240114.html">20240114</option><option value="index_每日SHORTS熱門歌曲_20240113.html">20240113</option><option value="index_每日SHORTS熱門歌曲_20240112.html">20240112</option><option value="index_每日SHORTS熱門歌曲_20240111.html">20240111</option><option value="index_每日SHORTS熱門歌曲_20240110.html">20240110</option><option value="index_每日SHORTS熱門歌曲_20240109.html">20240109</option><option value="index_每日SHORTS熱門歌曲_20240108.html">20240108</option><option value="index_每日SHORTS熱門歌曲_20240107.html">20240107</option><option value="index_每日SHORTS熱門歌曲_20240106.html">20240106</option><option value="index_每日SHORTS熱門歌曲_20240105.html">20240105</option><option value="index_每日SHORTS熱門歌曲_20240104.html">20240104</option><option value="index_每日SHORTS熱門歌曲_20240103.html">20240103</option><option value="index_每日SHORTS熱門歌曲_20240102.html">20240102</option><option value="index_每日SHORTS熱門歌曲_20240101.html">20240101</option><option value="index_每日SHORTS熱門歌曲_20231231.html">20231231</option><option value="index_每日SHORTS熱門歌曲_20231230.html">20231230</option><option value="index_每日SHORTS熱門歌曲_20231229.html">20231229</option><option value="index_每日SHORTS熱門歌曲_20231228.html">20231228</option><option value="index_每日SHORTS熱門歌曲_20231227.html">20231227</option><option value="index_每日SHORTS熱門歌曲_20231226.html">20231226</option><option value="index_每日SHORTS熱門歌曲_20231225.html">20231225</option><option value="index_每日SHORTS熱門歌曲_20231224.html">20231224</option><option value="index_每日SHORTS熱門歌曲_20231223.html">20231223</option><option value="index_每日SHORTS熱門歌曲_20231222.html">20231222</option><option value="index_每日SHORTS熱門歌曲_20231221.html">20231221</option><option value="index_每日SHORTS熱門歌曲_20231220.html">20231220</option><option value="index_每日SHORTS熱門歌曲_20231219.html">20231219</option><option value="index_每日SHORTS熱門歌曲_20231218.html">20231218</option><option value="index_每日SHORTS熱門歌曲_20231217.html">20231217</option><option value="index_每日SHORTS熱門歌曲_20231216.html">20231216</option><option value="index_每日SHORTS熱門歌曲_20231215.html">20231215</option><option value="index_每日SHORTS熱門歌曲_20231214.html">20231214</option><option value="index_每日SHORTS熱門歌曲_20231213.html">20231213</option><option value="index_每日SHORTS熱門歌曲_20231212.html">20231212</option><option value="index_每日SHORTS熱門歌曲_20231211.html">20231211</option><option value="index_每日SHORTS熱門歌曲_20231210.html">20231210</option><option value="index_每日SHORTS熱門歌曲_20231209.html">20231209</option><option value="index_每日SHORTS熱門歌曲_20231208.html">20231208</option><option value="index_每日SHORTS熱門歌曲_20231207.html">20231207</option><option value="index_每日SHORTS熱門歌曲_20231206.html">20231206</option><option value="index_每日SHORTS熱門歌曲_20231205.html">20231205</option><option value="index_每日SHORTS熱門歌曲_20231204.html">20231204</option><option value="index_每日SHORTS熱門歌曲_20231203.html">20231203</option><option value="index_每日SHORTS熱門歌曲_20231202.html">20231202</option><option value="index_每日SHORTS熱門歌曲_20231201.html">20231201</option><option value="index_每日SHORTS熱門歌曲_20231130.html">20231130</option><option value="index_每日SHORTS熱門歌曲_20231129.html">20231129</option><option value="index_每日SHORTS熱門歌曲_20231128.html">20231128</option><option value="index_每日SHORTS熱門歌曲_20231127.html">20231127</option><option value="index_每日SHORTS熱門歌曲_20231126.html">20231126</option><option value="index_每日SHORTS熱門歌曲_20231125.html">20231125</option><option value="index_每日SHORTS熱門歌曲_20231124.html">20231124</option><option value="index_每日SHORTS熱門歌曲_20231123.html">20231123</option><option value="index_每日SHORTS熱門歌曲_20231122.html">20231122</option><option value="index_每日SHORTS熱門歌曲_20231121.html">20231121</option><option value="index_每日SHORTS熱門歌曲_20231120.html">20231120</option><option value="index_每日SHORTS熱門歌曲_20231119.html">20231119</option><option value="index_每日SHORTS熱門歌曲_20231118.html">20231118</option><option value="index_每日SHORTS熱門歌曲_20231117.html">20231117</option><option value="index_每日SHORTS熱門歌曲_20231116.html">20231116</option><option value="index_每日SHORTS熱門歌曲_20231115.html">20231115</option><option value="index_每日SHORTS熱門歌曲_20231114.html">20231114</option><option value="index_每日SHORTS熱門歌曲_20231113.html">20231113</option><option value="index_每日SHORTS熱門歌曲_20231112.html">20231112</option><option value="index_每日SHORTS熱門歌曲_20231111.html">20231111</option><option value="index_每日SHORTS熱門歌曲_20231110.html">20231110</option><option value="index_每日SHORTS熱門歌曲_20231109.html">20231109</option><option value="index_每日SHORTS熱門歌曲_20231108.html">20231108</option><option value="index_每日SHORTS熱門歌曲_20231107.html">20231107</option><option value="index_每日SHORTS熱門歌曲_20231106.html">20231106</option>
	        </select>
	    `;

	    // 插入到 DOM 中的某個特定位置
	    document.getElementById('dropdown-container').innerHTML = dropdownHTML;
	});
	