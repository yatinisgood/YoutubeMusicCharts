
	// dropdown.js
	document.addEventListener('DOMContentLoaded', function() {
	    var dropdownHTML = `
	        <select class="form-control" id="week-selector" onchange="goToWeek(this.value)">
	            <option value="">選擇一週</option>
	            <option value="index_每週SHORTS熱門歌曲_20240118.html">20240118</option><option value="index_每週SHORTS熱門歌曲_20240111.html">20240111</option><option value="index_每週SHORTS熱門歌曲_20240104.html">20240104</option><option value="index_每週SHORTS熱門歌曲_20231228.html">20231228</option><option value="index_每週SHORTS熱門歌曲_20231221.html">20231221</option><option value="index_每週SHORTS熱門歌曲_20231214.html">20231214</option><option value="index_每週SHORTS熱門歌曲_20231207.html">20231207</option><option value="index_每週SHORTS熱門歌曲_20231130.html">20231130</option><option value="index_每週SHORTS熱門歌曲_20231123.html">20231123</option><option value="index_每週SHORTS熱門歌曲_20231116.html">20231116</option><option value="index_每週SHORTS熱門歌曲_20231109.html">20231109</option><option value="index_每週SHORTS熱門歌曲_20231102.html">20231102</option>
	        </select>
	    `;

	    // 插入到 DOM 中的某個特定位置
	    document.getElementById('dropdown-container').innerHTML = dropdownHTML;
	});
	