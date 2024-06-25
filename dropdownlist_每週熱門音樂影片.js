
	// dropdown.js
	document.addEventListener('DOMContentLoaded', function() {
	    var dropdownHTML = `
	        <select class="form-control" id="week-selector" onchange="goToWeek(this.value)">
	            <option value="">選擇一週</option>
	            <option value="index_每週熱門音樂影片_20240620.html">20240620</option><option value="index_每週熱門音樂影片_20240613.html">20240613</option><option value="index_每週熱門音樂影片_20240606.html">20240606</option><option value="index_每週熱門音樂影片_20240530.html">20240530</option><option value="index_每週熱門音樂影片_20240523.html">20240523</option><option value="index_每週熱門音樂影片_20240516.html">20240516</option><option value="index_每週熱門音樂影片_20240509.html">20240509</option><option value="index_每週熱門音樂影片_20240502.html">20240502</option><option value="index_每週熱門音樂影片_20240425.html">20240425</option><option value="index_每週熱門音樂影片_20240418.html">20240418</option><option value="index_每週熱門音樂影片_20240411.html">20240411</option><option value="index_每週熱門音樂影片_20240404.html">20240404</option><option value="index_每週熱門音樂影片_20240328.html">20240328</option><option value="index_每週熱門音樂影片_20240321.html">20240321</option><option value="index_每週熱門音樂影片_20240314.html">20240314</option><option value="index_每週熱門音樂影片_20240307.html">20240307</option><option value="index_每週熱門音樂影片_20240229.html">20240229</option><option value="index_每週熱門音樂影片_20240222.html">20240222</option><option value="index_每週熱門音樂影片_20240215.html">20240215</option><option value="index_每週熱門音樂影片_20240208.html">20240208</option><option value="index_每週熱門音樂影片_20240201.html">20240201</option><option value="index_每週熱門音樂影片_20240125.html">20240125</option><option value="index_每週熱門音樂影片_20240118.html">20240118</option><option value="index_每週熱門音樂影片_20240111.html">20240111</option><option value="index_每週熱門音樂影片_20240104.html">20240104</option><option value="index_每週熱門音樂影片_20231228.html">20231228</option><option value="index_每週熱門音樂影片_20231221.html">20231221</option><option value="index_每週熱門音樂影片_20231214.html">20231214</option><option value="index_每週熱門音樂影片_20231207.html">20231207</option><option value="index_每週熱門音樂影片_20231130.html">20231130</option><option value="index_每週熱門音樂影片_20231123.html">20231123</option><option value="index_每週熱門音樂影片_20231116.html">20231116</option><option value="index_每週熱門音樂影片_20231109.html">20231109</option><option value="index_每週熱門音樂影片_20231102.html">20231102</option><option value="index_每週熱門音樂影片_20231026.html">20231026</option><option value="index_每週熱門音樂影片_20231019.html">20231019</option><option value="index_每週熱門音樂影片_20231012.html">20231012</option><option value="index_每週熱門音樂影片_20231005.html">20231005</option><option value="index_每週熱門音樂影片_20230928.html">20230928</option><option value="index_每週熱門音樂影片_20230921.html">20230921</option><option value="index_每週熱門音樂影片_20230914.html">20230914</option><option value="index_每週熱門音樂影片_20230907.html">20230907</option><option value="index_每週熱門音樂影片_20230831.html">20230831</option><option value="index_每週熱門音樂影片_20230824.html">20230824</option><option value="index_每週熱門音樂影片_20230817.html">20230817</option><option value="index_每週熱門音樂影片_20230810.html">20230810</option><option value="index_每週熱門音樂影片_20230803.html">20230803</option><option value="index_每週熱門音樂影片_20230727.html">20230727</option><option value="index_每週熱門音樂影片_20230720.html">20230720</option><option value="index_每週熱門音樂影片_20230713.html">20230713</option><option value="index_每週熱門音樂影片_20230706.html">20230706</option><option value="index_每週熱門音樂影片_20230629.html">20230629</option><option value="index_每週熱門音樂影片_20230622.html">20230622</option><option value="index_每週熱門音樂影片_20230615.html">20230615</option><option value="index_每週熱門音樂影片_20230608.html">20230608</option><option value="index_每週熱門音樂影片_20230601.html">20230601</option><option value="index_每週熱門音樂影片_20230525.html">20230525</option><option value="index_每週熱門音樂影片_20230518.html">20230518</option><option value="index_每週熱門音樂影片_20230511.html">20230511</option><option value="index_每週熱門音樂影片_20230504.html">20230504</option><option value="index_每週熱門音樂影片_20230427.html">20230427</option><option value="index_每週熱門音樂影片_20230420.html">20230420</option><option value="index_每週熱門音樂影片_20230413.html">20230413</option><option value="index_每週熱門音樂影片_20230406.html">20230406</option><option value="index_每週熱門音樂影片_20230330.html">20230330</option><option value="index_每週熱門音樂影片_20230323.html">20230323</option><option value="index_每週熱門音樂影片_20230316.html">20230316</option><option value="index_每週熱門音樂影片_20230309.html">20230309</option><option value="index_每週熱門音樂影片_20230302.html">20230302</option><option value="index_每週熱門音樂影片_20230223.html">20230223</option><option value="index_每週熱門音樂影片_20230216.html">20230216</option><option value="index_每週熱門音樂影片_20230209.html">20230209</option><option value="index_每週熱門音樂影片_20230202.html">20230202</option><option value="index_每週熱門音樂影片_20230126.html">20230126</option><option value="index_每週熱門音樂影片_20230119.html">20230119</option><option value="index_每週熱門音樂影片_20230112.html">20230112</option><option value="index_每週熱門音樂影片_20230105.html">20230105</option><option value="index_每週熱門音樂影片_20221229.html">20221229</option><option value="index_每週熱門音樂影片_20221222.html">20221222</option><option value="index_每週熱門音樂影片_20221215.html">20221215</option><option value="index_每週熱門音樂影片_20221208.html">20221208</option><option value="index_每週熱門音樂影片_20221201.html">20221201</option><option value="index_每週熱門音樂影片_20221124.html">20221124</option><option value="index_每週熱門音樂影片_20221117.html">20221117</option><option value="index_每週熱門音樂影片_20221110.html">20221110</option><option value="index_每週熱門音樂影片_20221103.html">20221103</option><option value="index_每週熱門音樂影片_20221027.html">20221027</option><option value="index_每週熱門音樂影片_20221020.html">20221020</option><option value="index_每週熱門音樂影片_20221013.html">20221013</option><option value="index_每週熱門音樂影片_20221006.html">20221006</option><option value="index_每週熱門音樂影片_20220929.html">20220929</option><option value="index_每週熱門音樂影片_20220922.html">20220922</option><option value="index_每週熱門音樂影片_20220915.html">20220915</option><option value="index_每週熱門音樂影片_20220908.html">20220908</option><option value="index_每週熱門音樂影片_20220901.html">20220901</option><option value="index_每週熱門音樂影片_20220825.html">20220825</option><option value="index_每週熱門音樂影片_20220818.html">20220818</option><option value="index_每週熱門音樂影片_20220811.html">20220811</option><option value="index_每週熱門音樂影片_20220804.html">20220804</option><option value="index_每週熱門音樂影片_20220728.html">20220728</option><option value="index_每週熱門音樂影片_20220721.html">20220721</option><option value="index_每週熱門音樂影片_20220714.html">20220714</option><option value="index_每週熱門音樂影片_20220707.html">20220707</option><option value="index_每週熱門音樂影片_20220630.html">20220630</option><option value="index_每週熱門音樂影片_20220623.html">20220623</option><option value="index_每週熱門音樂影片_20220616.html">20220616</option><option value="index_每週熱門音樂影片_20220609.html">20220609</option><option value="index_每週熱門音樂影片_20220602.html">20220602</option><option value="index_每週熱門音樂影片_20220526.html">20220526</option><option value="index_每週熱門音樂影片_20220519.html">20220519</option><option value="index_每週熱門音樂影片_20220512.html">20220512</option><option value="index_每週熱門音樂影片_20220505.html">20220505</option><option value="index_每週熱門音樂影片_20220428.html">20220428</option><option value="index_每週熱門音樂影片_20220421.html">20220421</option><option value="index_每週熱門音樂影片_20220414.html">20220414</option><option value="index_每週熱門音樂影片_20220407.html">20220407</option><option value="index_每週熱門音樂影片_20220331.html">20220331</option><option value="index_每週熱門音樂影片_20220324.html">20220324</option><option value="index_每週熱門音樂影片_20220317.html">20220317</option><option value="index_每週熱門音樂影片_20220310.html">20220310</option><option value="index_每週熱門音樂影片_20220303.html">20220303</option><option value="index_每週熱門音樂影片_20220224.html">20220224</option><option value="index_每週熱門音樂影片_20220217.html">20220217</option><option value="index_每週熱門音樂影片_20220210.html">20220210</option><option value="index_每週熱門音樂影片_20220203.html">20220203</option><option value="index_每週熱門音樂影片_20220127.html">20220127</option><option value="index_每週熱門音樂影片_20220120.html">20220120</option><option value="index_每週熱門音樂影片_20220113.html">20220113</option><option value="index_每週熱門音樂影片_20220106.html">20220106</option><option value="index_每週熱門音樂影片_20211230.html">20211230</option><option value="index_每週熱門音樂影片_20211223.html">20211223</option><option value="index_每週熱門音樂影片_20211216.html">20211216</option><option value="index_每週熱門音樂影片_20211209.html">20211209</option><option value="index_每週熱門音樂影片_20211202.html">20211202</option><option value="index_每週熱門音樂影片_20211125.html">20211125</option><option value="index_每週熱門音樂影片_20211118.html">20211118</option><option value="index_每週熱門音樂影片_20211111.html">20211111</option><option value="index_每週熱門音樂影片_20211104.html">20211104</option><option value="index_每週熱門音樂影片_20211028.html">20211028</option><option value="index_每週熱門音樂影片_20211021.html">20211021</option><option value="index_每週熱門音樂影片_20211014.html">20211014</option><option value="index_每週熱門音樂影片_20211007.html">20211007</option><option value="index_每週熱門音樂影片_20210930.html">20210930</option><option value="index_每週熱門音樂影片_20210923.html">20210923</option><option value="index_每週熱門音樂影片_20210916.html">20210916</option><option value="index_每週熱門音樂影片_20210909.html">20210909</option><option value="index_每週熱門音樂影片_20210902.html">20210902</option><option value="index_每週熱門音樂影片_20210826.html">20210826</option><option value="index_每週熱門音樂影片_20210819.html">20210819</option><option value="index_每週熱門音樂影片_20210812.html">20210812</option><option value="index_每週熱門音樂影片_20210805.html">20210805</option><option value="index_每週熱門音樂影片_20210729.html">20210729</option><option value="index_每週熱門音樂影片_20210722.html">20210722</option><option value="index_每週熱門音樂影片_20210715.html">20210715</option><option value="index_每週熱門音樂影片_20210708.html">20210708</option><option value="index_每週熱門音樂影片_20210701.html">20210701</option><option value="index_每週熱門音樂影片_20210624.html">20210624</option><option value="index_每週熱門音樂影片_20210617.html">20210617</option><option value="index_每週熱門音樂影片_20210610.html">20210610</option><option value="index_每週熱門音樂影片_20210603.html">20210603</option><option value="index_每週熱門音樂影片_20210527.html">20210527</option><option value="index_每週熱門音樂影片_20210520.html">20210520</option><option value="index_每週熱門音樂影片_20210513.html">20210513</option><option value="index_每週熱門音樂影片_20210506.html">20210506</option><option value="index_每週熱門音樂影片_20210429.html">20210429</option><option value="index_每週熱門音樂影片_20210422.html">20210422</option><option value="index_每週熱門音樂影片_20210415.html">20210415</option><option value="index_每週熱門音樂影片_20210408.html">20210408</option><option value="index_每週熱門音樂影片_20210401.html">20210401</option><option value="index_每週熱門音樂影片_20210325.html">20210325</option><option value="index_每週熱門音樂影片_20210318.html">20210318</option><option value="index_每週熱門音樂影片_20210311.html">20210311</option><option value="index_每週熱門音樂影片_20210304.html">20210304</option><option value="index_每週熱門音樂影片_20210225.html">20210225</option><option value="index_每週熱門音樂影片_20210218.html">20210218</option><option value="index_每週熱門音樂影片_20210211.html">20210211</option><option value="index_每週熱門音樂影片_20210204.html">20210204</option><option value="index_每週熱門音樂影片_20210128.html">20210128</option><option value="index_每週熱門音樂影片_20210121.html">20210121</option><option value="index_每週熱門音樂影片_20210114.html">20210114</option><option value="index_每週熱門音樂影片_20210107.html">20210107</option><option value="index_每週熱門音樂影片_20201231.html">20201231</option><option value="index_每週熱門音樂影片_20201224.html">20201224</option><option value="index_每週熱門音樂影片_20201217.html">20201217</option><option value="index_每週熱門音樂影片_20201210.html">20201210</option><option value="index_每週熱門音樂影片_20201203.html">20201203</option><option value="index_每週熱門音樂影片_20201126.html">20201126</option><option value="index_每週熱門音樂影片_20201119.html">20201119</option><option value="index_每週熱門音樂影片_20201112.html">20201112</option><option value="index_每週熱門音樂影片_20201105.html">20201105</option><option value="index_每週熱門音樂影片_20201029.html">20201029</option><option value="index_每週熱門音樂影片_20201022.html">20201022</option><option value="index_每週熱門音樂影片_20201015.html">20201015</option><option value="index_每週熱門音樂影片_20201008.html">20201008</option><option value="index_每週熱門音樂影片_20201001.html">20201001</option><option value="index_每週熱門音樂影片_20200924.html">20200924</option><option value="index_每週熱門音樂影片_20200917.html">20200917</option><option value="index_每週熱門音樂影片_20200910.html">20200910</option><option value="index_每週熱門音樂影片_20200903.html">20200903</option><option value="index_每週熱門音樂影片_20200827.html">20200827</option><option value="index_每週熱門音樂影片_20200820.html">20200820</option><option value="index_每週熱門音樂影片_20200813.html">20200813</option><option value="index_每週熱門音樂影片_20200806.html">20200806</option><option value="index_每週熱門音樂影片_20200730.html">20200730</option><option value="index_每週熱門音樂影片_20200723.html">20200723</option><option value="index_每週熱門音樂影片_20200716.html">20200716</option><option value="index_每週熱門音樂影片_20200709.html">20200709</option><option value="index_每週熱門音樂影片_20200702.html">20200702</option><option value="index_每週熱門音樂影片_20200625.html">20200625</option><option value="index_每週熱門音樂影片_20200618.html">20200618</option><option value="index_每週熱門音樂影片_20200611.html">20200611</option><option value="index_每週熱門音樂影片_20200604.html">20200604</option><option value="index_每週熱門音樂影片_20200528.html">20200528</option><option value="index_每週熱門音樂影片_20200521.html">20200521</option><option value="index_每週熱門音樂影片_20200514.html">20200514</option><option value="index_每週熱門音樂影片_20200507.html">20200507</option><option value="index_每週熱門音樂影片_20200430.html">20200430</option><option value="index_每週熱門音樂影片_20200423.html">20200423</option><option value="index_每週熱門音樂影片_20200416.html">20200416</option><option value="index_每週熱門音樂影片_20200409.html">20200409</option><option value="index_每週熱門音樂影片_20200402.html">20200402</option><option value="index_每週熱門音樂影片_20200326.html">20200326</option><option value="index_每週熱門音樂影片_20200319.html">20200319</option><option value="index_每週熱門音樂影片_20200312.html">20200312</option><option value="index_每週熱門音樂影片_20200305.html">20200305</option><option value="index_每週熱門音樂影片_20200227.html">20200227</option><option value="index_每週熱門音樂影片_20200220.html">20200220</option><option value="index_每週熱門音樂影片_20200213.html">20200213</option><option value="index_每週熱門音樂影片_20200206.html">20200206</option><option value="index_每週熱門音樂影片_20200130.html">20200130</option><option value="index_每週熱門音樂影片_20200123.html">20200123</option><option value="index_每週熱門音樂影片_20200116.html">20200116</option><option value="index_每週熱門音樂影片_20200109.html">20200109</option><option value="index_每週熱門音樂影片_20200102.html">20200102</option><option value="index_每週熱門音樂影片_20191226.html">20191226</option><option value="index_每週熱門音樂影片_20191219.html">20191219</option><option value="index_每週熱門音樂影片_20191212.html">20191212</option><option value="index_每週熱門音樂影片_20191205.html">20191205</option><option value="index_每週熱門音樂影片_20191128.html">20191128</option><option value="index_每週熱門音樂影片_20191121.html">20191121</option><option value="index_每週熱門音樂影片_20191114.html">20191114</option><option value="index_每週熱門音樂影片_20191107.html">20191107</option><option value="index_每週熱門音樂影片_20191031.html">20191031</option><option value="index_每週熱門音樂影片_20191024.html">20191024</option><option value="index_每週熱門音樂影片_20191017.html">20191017</option><option value="index_每週熱門音樂影片_20191010.html">20191010</option><option value="index_每週熱門音樂影片_20191003.html">20191003</option><option value="index_每週熱門音樂影片_20190926.html">20190926</option><option value="index_每週熱門音樂影片_20190919.html">20190919</option><option value="index_每週熱門音樂影片_20190912.html">20190912</option><option value="index_每週熱門音樂影片_20190905.html">20190905</option><option value="index_每週熱門音樂影片_20190829.html">20190829</option><option value="index_每週熱門音樂影片_20190822.html">20190822</option><option value="index_每週熱門音樂影片_20190815.html">20190815</option><option value="index_每週熱門音樂影片_20190808.html">20190808</option><option value="index_每週熱門音樂影片_20190801.html">20190801</option><option value="index_每週熱門音樂影片_20190725.html">20190725</option><option value="index_每週熱門音樂影片_20190718.html">20190718</option><option value="index_每週熱門音樂影片_20190711.html">20190711</option><option value="index_每週熱門音樂影片_20190704.html">20190704</option><option value="index_每週熱門音樂影片_20190627.html">20190627</option><option value="index_每週熱門音樂影片_20190620.html">20190620</option><option value="index_每週熱門音樂影片_20190613.html">20190613</option><option value="index_每週熱門音樂影片_20190606.html">20190606</option><option value="index_每週熱門音樂影片_20190530.html">20190530</option><option value="index_每週熱門音樂影片_20190523.html">20190523</option><option value="index_每週熱門音樂影片_20190516.html">20190516</option><option value="index_每週熱門音樂影片_20190509.html">20190509</option><option value="index_每週熱門音樂影片_20190502.html">20190502</option><option value="index_每週熱門音樂影片_20190425.html">20190425</option><option value="index_每週熱門音樂影片_20190418.html">20190418</option><option value="index_每週熱門音樂影片_20190411.html">20190411</option><option value="index_每週熱門音樂影片_20190404.html">20190404</option><option value="index_每週熱門音樂影片_20190328.html">20190328</option><option value="index_每週熱門音樂影片_20190321.html">20190321</option><option value="index_每週熱門音樂影片_20190314.html">20190314</option><option value="index_每週熱門音樂影片_20190307.html">20190307</option><option value="index_每週熱門音樂影片_20190228.html">20190228</option><option value="index_每週熱門音樂影片_20190221.html">20190221</option><option value="index_每週熱門音樂影片_20190214.html">20190214</option><option value="index_每週熱門音樂影片_20190207.html">20190207</option><option value="index_每週熱門音樂影片_20190131.html">20190131</option><option value="index_每週熱門音樂影片_20190124.html">20190124</option><option value="index_每週熱門音樂影片_20190117.html">20190117</option><option value="index_每週熱門音樂影片_20190110.html">20190110</option><option value="index_每週熱門音樂影片_20190103.html">20190103</option><option value="index_每週熱門音樂影片_20181227.html">20181227</option><option value="index_每週熱門音樂影片_20181220.html">20181220</option><option value="index_每週熱門音樂影片_20181213.html">20181213</option><option value="index_每週熱門音樂影片_20181206.html">20181206</option><option value="index_每週熱門音樂影片_20181129.html">20181129</option><option value="index_每週熱門音樂影片_20181122.html">20181122</option><option value="index_每週熱門音樂影片_20181115.html">20181115</option><option value="index_每週熱門音樂影片_20181108.html">20181108</option><option value="index_每週熱門音樂影片_20181101.html">20181101</option><option value="index_每週熱門音樂影片_20181025.html">20181025</option><option value="index_每週熱門音樂影片_20181018.html">20181018</option><option value="index_每週熱門音樂影片_20181011.html">20181011</option><option value="index_每週熱門音樂影片_20181004.html">20181004</option><option value="index_每週熱門音樂影片_20180927.html">20180927</option><option value="index_每週熱門音樂影片_20180920.html">20180920</option><option value="index_每週熱門音樂影片_20180913.html">20180913</option><option value="index_每週熱門音樂影片_20180906.html">20180906</option><option value="index_每週熱門音樂影片_20180830.html">20180830</option><option value="index_每週熱門音樂影片_20180823.html">20180823</option><option value="index_每週熱門音樂影片_20180816.html">20180816</option><option value="index_每週熱門音樂影片_20180809.html">20180809</option><option value="index_每週熱門音樂影片_20180802.html">20180802</option><option value="index_每週熱門音樂影片_20180726.html">20180726</option><option value="index_每週熱門音樂影片_20180719.html">20180719</option><option value="index_每週熱門音樂影片_20180712.html">20180712</option><option value="index_每週熱門音樂影片_20180705.html">20180705</option><option value="index_每週熱門音樂影片_20180628.html">20180628</option><option value="index_每週熱門音樂影片_20180621.html">20180621</option><option value="index_每週熱門音樂影片_20180614.html">20180614</option><option value="index_每週熱門音樂影片_20180607.html">20180607</option><option value="index_每週熱門音樂影片_20180531.html">20180531</option><option value="index_每週熱門音樂影片_20180524.html">20180524</option><option value="index_每週熱門音樂影片_20180517.html">20180517</option><option value="index_每週熱門音樂影片_20180510.html">20180510</option><option value="index_每週熱門音樂影片_20180503.html">20180503</option><option value="index_每週熱門音樂影片_20180426.html">20180426</option><option value="index_每週熱門音樂影片_20180419.html">20180419</option><option value="index_每週熱門音樂影片_20180412.html">20180412</option><option value="index_每週熱門音樂影片_20180405.html">20180405</option><option value="index_每週熱門音樂影片_20180329.html">20180329</option><option value="index_每週熱門音樂影片_20180322.html">20180322</option><option value="index_每週熱門音樂影片_20180315.html">20180315</option><option value="index_每週熱門音樂影片_20180308.html">20180308</option><option value="index_每週熱門音樂影片_20180301.html">20180301</option><option value="index_每週熱門音樂影片_20180222.html">20180222</option><option value="index_每週熱門音樂影片_20180215.html">20180215</option><option value="index_每週熱門音樂影片_20180208.html">20180208</option><option value="index_每週熱門音樂影片_20180201.html">20180201</option><option value="index_每週熱門音樂影片_20180125.html">20180125</option><option value="index_每週熱門音樂影片_20180118.html">20180118</option><option value="index_每週熱門音樂影片_20180111.html">20180111</option><option value="index_每週熱門音樂影片_20180104.html">20180104</option><option value="index_每週熱門音樂影片_20171228.html">20171228</option><option value="index_每週熱門音樂影片_20171221.html">20171221</option><option value="index_每週熱門音樂影片_20171214.html">20171214</option><option value="index_每週熱門音樂影片_20171207.html">20171207</option><option value="index_每週熱門音樂影片_20171130.html">20171130</option><option value="index_每週熱門音樂影片_20171123.html">20171123</option><option value="index_每週熱門音樂影片_20171116.html">20171116</option><option value="index_每週熱門音樂影片_20171109.html">20171109</option><option value="index_每週熱門音樂影片_20171102.html">20171102</option><option value="index_每週熱門音樂影片_20171026.html">20171026</option><option value="index_每週熱門音樂影片_20171019.html">20171019</option><option value="index_每週熱門音樂影片_20171012.html">20171012</option><option value="index_每週熱門音樂影片_20171005.html">20171005</option><option value="index_每週熱門音樂影片_20170928.html">20170928</option><option value="index_每週熱門音樂影片_20170921.html">20170921</option><option value="index_每週熱門音樂影片_20170914.html">20170914</option><option value="index_每週熱門音樂影片_20170907.html">20170907</option><option value="index_每週熱門音樂影片_20170831.html">20170831</option><option value="index_每週熱門音樂影片_20170824.html">20170824</option><option value="index_每週熱門音樂影片_20170817.html">20170817</option><option value="index_每週熱門音樂影片_20170810.html">20170810</option><option value="index_每週熱門音樂影片_20170803.html">20170803</option><option value="index_每週熱門音樂影片_20170727.html">20170727</option><option value="index_每週熱門音樂影片_20170720.html">20170720</option><option value="index_每週熱門音樂影片_20170713.html">20170713</option><option value="index_每週熱門音樂影片_20170706.html">20170706</option><option value="index_每週熱門音樂影片_20170629.html">20170629</option><option value="index_每週熱門音樂影片_20170622.html">20170622</option><option value="index_每週熱門音樂影片_20170615.html">20170615</option><option value="index_每週熱門音樂影片_20170608.html">20170608</option><option value="index_每週熱門音樂影片_20170601.html">20170601</option><option value="index_每週熱門音樂影片_20170525.html">20170525</option><option value="index_每週熱門音樂影片_20170518.html">20170518</option><option value="index_每週熱門音樂影片_20170511.html">20170511</option><option value="index_每週熱門音樂影片_20170504.html">20170504</option><option value="index_每週熱門音樂影片_20170427.html">20170427</option><option value="index_每週熱門音樂影片_20170420.html">20170420</option><option value="index_每週熱門音樂影片_20170413.html">20170413</option><option value="index_每週熱門音樂影片_20170406.html">20170406</option><option value="index_每週熱門音樂影片_20170330.html">20170330</option><option value="index_每週熱門音樂影片_20170323.html">20170323</option><option value="index_每週熱門音樂影片_20170316.html">20170316</option><option value="index_每週熱門音樂影片_20170309.html">20170309</option><option value="index_每週熱門音樂影片_20170302.html">20170302</option><option value="index_每週熱門音樂影片_20170223.html">20170223</option><option value="index_每週熱門音樂影片_20170216.html">20170216</option><option value="index_每週熱門音樂影片_20170209.html">20170209</option><option value="index_每週熱門音樂影片_20170202.html">20170202</option><option value="index_每週熱門音樂影片_20170126.html">20170126</option><option value="index_每週熱門音樂影片_20170119.html">20170119</option><option value="index_每週熱門音樂影片_20170112.html">20170112</option><option value="index_每週熱門音樂影片_20170105.html">20170105</option><option value="index_每週熱門音樂影片_20161229.html">20161229</option><option value="index_每週熱門音樂影片_20161222.html">20161222</option><option value="index_每週熱門音樂影片_20161215.html">20161215</option><option value="index_每週熱門音樂影片_20161208.html">20161208</option><option value="index_每週熱門音樂影片_20161201.html">20161201</option><option value="index_每週熱門音樂影片_20161124.html">20161124</option><option value="index_每週熱門音樂影片_20161117.html">20161117</option><option value="index_每週熱門音樂影片_20161110.html">20161110</option><option value="index_每週熱門音樂影片_20161103.html">20161103</option><option value="index_每週熱門音樂影片_20161027.html">20161027</option><option value="index_每週熱門音樂影片_20161020.html">20161020</option><option value="index_每週熱門音樂影片_20161013.html">20161013</option><option value="index_每週熱門音樂影片_20161006.html">20161006</option><option value="index_每週熱門音樂影片_20160929.html">20160929</option><option value="index_每週熱門音樂影片_20160922.html">20160922</option><option value="index_每週熱門音樂影片_20160915.html">20160915</option><option value="index_每週熱門音樂影片_20160908.html">20160908</option><option value="index_每週熱門音樂影片_20160901.html">20160901</option><option value="index_每週熱門音樂影片_20160825.html">20160825</option><option value="index_每週熱門音樂影片_20160818.html">20160818</option><option value="index_每週熱門音樂影片_20160811.html">20160811</option><option value="index_每週熱門音樂影片_20160804.html">20160804</option><option value="index_每週熱門音樂影片_20160728.html">20160728</option><option value="index_每週熱門音樂影片_20160721.html">20160721</option><option value="index_每週熱門音樂影片_20160714.html">20160714</option><option value="index_每週熱門音樂影片_20160707.html">20160707</option><option value="index_每週熱門音樂影片_20160630.html">20160630</option><option value="index_每週熱門音樂影片_20160623.html">20160623</option><option value="index_每週熱門音樂影片_20160616.html">20160616</option><option value="index_每週熱門音樂影片_20160609.html">20160609</option><option value="index_每週熱門音樂影片_20160602.html">20160602</option><option value="index_每週熱門音樂影片_20160526.html">20160526</option><option value="index_每週熱門音樂影片_20160519.html">20160519</option><option value="index_每週熱門音樂影片_20160512.html">20160512</option><option value="index_每週熱門音樂影片_20160505.html">20160505</option><option value="index_每週熱門音樂影片_20160428.html">20160428</option><option value="index_每週熱門音樂影片_20160421.html">20160421</option><option value="index_每週熱門音樂影片_20160414.html">20160414</option><option value="index_每週熱門音樂影片_20160407.html">20160407</option><option value="index_每週熱門音樂影片_20160331.html">20160331</option><option value="index_每週熱門音樂影片_20160324.html">20160324</option><option value="index_每週熱門音樂影片_20160317.html">20160317</option><option value="index_每週熱門音樂影片_20160310.html">20160310</option><option value="index_每週熱門音樂影片_20160303.html">20160303</option><option value="index_每週熱門音樂影片_20160225.html">20160225</option>
	        </select>
	    `;

	    // 插入到 DOM 中的某個特定位置
	    document.getElementById('dropdown-container').innerHTML = dropdownHTML;
	});
	