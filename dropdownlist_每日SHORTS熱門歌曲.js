
	// dropdown.js
	document.addEventListener('DOMContentLoaded', function() {
	    var dropdownHTML = `
	        <select class="form-control" id="week-selector" onchange="goToWeek(this.value)">
	            <option value="">選擇一日</option>
	            <option value="index_每日SHORTS熱門歌曲_20250112.html">20250112</option><option value="index_每日SHORTS熱門歌曲_20250111.html">20250111</option><option value="index_每日SHORTS熱門歌曲_20250110.html">20250110</option><option value="index_每日SHORTS熱門歌曲_20250109.html">20250109</option><option value="index_每日SHORTS熱門歌曲_20250108.html">20250108</option><option value="index_每日SHORTS熱門歌曲_20250107.html">20250107</option><option value="index_每日SHORTS熱門歌曲_20250106.html">20250106</option><option value="index_每日SHORTS熱門歌曲_20250105.html">20250105</option><option value="index_每日SHORTS熱門歌曲_20250104.html">20250104</option><option value="index_每日SHORTS熱門歌曲_20250103.html">20250103</option><option value="index_每日SHORTS熱門歌曲_20250102.html">20250102</option><option value="index_每日SHORTS熱門歌曲_20250101.html">20250101</option><option value="index_每日SHORTS熱門歌曲_20241231.html">20241231</option><option value="index_每日SHORTS熱門歌曲_20241230.html">20241230</option><option value="index_每日SHORTS熱門歌曲_20241229.html">20241229</option><option value="index_每日SHORTS熱門歌曲_20241228.html">20241228</option><option value="index_每日SHORTS熱門歌曲_20241227.html">20241227</option><option value="index_每日SHORTS熱門歌曲_20241226.html">20241226</option><option value="index_每日SHORTS熱門歌曲_20241225.html">20241225</option><option value="index_每日SHORTS熱門歌曲_20241224.html">20241224</option><option value="index_每日SHORTS熱門歌曲_20241223.html">20241223</option><option value="index_每日SHORTS熱門歌曲_20241222.html">20241222</option><option value="index_每日SHORTS熱門歌曲_20241221.html">20241221</option><option value="index_每日SHORTS熱門歌曲_20241220.html">20241220</option><option value="index_每日SHORTS熱門歌曲_20241219.html">20241219</option><option value="index_每日SHORTS熱門歌曲_20241218.html">20241218</option><option value="index_每日SHORTS熱門歌曲_20241217.html">20241217</option><option value="index_每日SHORTS熱門歌曲_20241216.html">20241216</option><option value="index_每日SHORTS熱門歌曲_20241215.html">20241215</option><option value="index_每日SHORTS熱門歌曲_20241214.html">20241214</option><option value="index_每日SHORTS熱門歌曲_20241213.html">20241213</option><option value="index_每日SHORTS熱門歌曲_20241212.html">20241212</option><option value="index_每日SHORTS熱門歌曲_20241211.html">20241211</option><option value="index_每日SHORTS熱門歌曲_20241210.html">20241210</option><option value="index_每日SHORTS熱門歌曲_20241209.html">20241209</option><option value="index_每日SHORTS熱門歌曲_20241208.html">20241208</option><option value="index_每日SHORTS熱門歌曲_20241207.html">20241207</option><option value="index_每日SHORTS熱門歌曲_20241206.html">20241206</option><option value="index_每日SHORTS熱門歌曲_20241205.html">20241205</option><option value="index_每日SHORTS熱門歌曲_20241204.html">20241204</option><option value="index_每日SHORTS熱門歌曲_20241203.html">20241203</option><option value="index_每日SHORTS熱門歌曲_20241202.html">20241202</option><option value="index_每日SHORTS熱門歌曲_20241201.html">20241201</option><option value="index_每日SHORTS熱門歌曲_20241130.html">20241130</option><option value="index_每日SHORTS熱門歌曲_20241129.html">20241129</option><option value="index_每日SHORTS熱門歌曲_20241128.html">20241128</option><option value="index_每日SHORTS熱門歌曲_20241127.html">20241127</option><option value="index_每日SHORTS熱門歌曲_20241126.html">20241126</option><option value="index_每日SHORTS熱門歌曲_20241125.html">20241125</option><option value="index_每日SHORTS熱門歌曲_20241124.html">20241124</option><option value="index_每日SHORTS熱門歌曲_20241123.html">20241123</option><option value="index_每日SHORTS熱門歌曲_20241122.html">20241122</option><option value="index_每日SHORTS熱門歌曲_20241121.html">20241121</option><option value="index_每日SHORTS熱門歌曲_20241120.html">20241120</option><option value="index_每日SHORTS熱門歌曲_20241119.html">20241119</option><option value="index_每日SHORTS熱門歌曲_20241118.html">20241118</option><option value="index_每日SHORTS熱門歌曲_20241117.html">20241117</option><option value="index_每日SHORTS熱門歌曲_20241116.html">20241116</option><option value="index_每日SHORTS熱門歌曲_20241115.html">20241115</option><option value="index_每日SHORTS熱門歌曲_20241114.html">20241114</option><option value="index_每日SHORTS熱門歌曲_20241113.html">20241113</option><option value="index_每日SHORTS熱門歌曲_20241112.html">20241112</option><option value="index_每日SHORTS熱門歌曲_20241111.html">20241111</option><option value="index_每日SHORTS熱門歌曲_20241110.html">20241110</option><option value="index_每日SHORTS熱門歌曲_20241109.html">20241109</option><option value="index_每日SHORTS熱門歌曲_20241108.html">20241108</option><option value="index_每日SHORTS熱門歌曲_20241107.html">20241107</option><option value="index_每日SHORTS熱門歌曲_20241106.html">20241106</option><option value="index_每日SHORTS熱門歌曲_20241105.html">20241105</option><option value="index_每日SHORTS熱門歌曲_20241104.html">20241104</option><option value="index_每日SHORTS熱門歌曲_20241103.html">20241103</option><option value="index_每日SHORTS熱門歌曲_20241102.html">20241102</option><option value="index_每日SHORTS熱門歌曲_20241101.html">20241101</option><option value="index_每日SHORTS熱門歌曲_20241031.html">20241031</option><option value="index_每日SHORTS熱門歌曲_20241030.html">20241030</option><option value="index_每日SHORTS熱門歌曲_20241029.html">20241029</option><option value="index_每日SHORTS熱門歌曲_20241028.html">20241028</option><option value="index_每日SHORTS熱門歌曲_20241027.html">20241027</option><option value="index_每日SHORTS熱門歌曲_20241026.html">20241026</option><option value="index_每日SHORTS熱門歌曲_20241025.html">20241025</option><option value="index_每日SHORTS熱門歌曲_20241024.html">20241024</option><option value="index_每日SHORTS熱門歌曲_20241023.html">20241023</option><option value="index_每日SHORTS熱門歌曲_20241022.html">20241022</option><option value="index_每日SHORTS熱門歌曲_20241021.html">20241021</option><option value="index_每日SHORTS熱門歌曲_20241020.html">20241020</option><option value="index_每日SHORTS熱門歌曲_20241019.html">20241019</option><option value="index_每日SHORTS熱門歌曲_20241018.html">20241018</option><option value="index_每日SHORTS熱門歌曲_20241017.html">20241017</option><option value="index_每日SHORTS熱門歌曲_20241016.html">20241016</option><option value="index_每日SHORTS熱門歌曲_20241015.html">20241015</option><option value="index_每日SHORTS熱門歌曲_20241014.html">20241014</option><option value="index_每日SHORTS熱門歌曲_20241013.html">20241013</option><option value="index_每日SHORTS熱門歌曲_20241012.html">20241012</option><option value="index_每日SHORTS熱門歌曲_20241011.html">20241011</option><option value="index_每日SHORTS熱門歌曲_20241010.html">20241010</option><option value="index_每日SHORTS熱門歌曲_20241009.html">20241009</option><option value="index_每日SHORTS熱門歌曲_20241008.html">20241008</option><option value="index_每日SHORTS熱門歌曲_20241007.html">20241007</option><option value="index_每日SHORTS熱門歌曲_20241006.html">20241006</option><option value="index_每日SHORTS熱門歌曲_20241005.html">20241005</option><option value="index_每日SHORTS熱門歌曲_20241004.html">20241004</option><option value="index_每日SHORTS熱門歌曲_20241003.html">20241003</option><option value="index_每日SHORTS熱門歌曲_20241002.html">20241002</option><option value="index_每日SHORTS熱門歌曲_20241001.html">20241001</option><option value="index_每日SHORTS熱門歌曲_20240930.html">20240930</option><option value="index_每日SHORTS熱門歌曲_20240929.html">20240929</option><option value="index_每日SHORTS熱門歌曲_20240928.html">20240928</option><option value="index_每日SHORTS熱門歌曲_20240927.html">20240927</option><option value="index_每日SHORTS熱門歌曲_20240926.html">20240926</option><option value="index_每日SHORTS熱門歌曲_20240925.html">20240925</option><option value="index_每日SHORTS熱門歌曲_20240924.html">20240924</option><option value="index_每日SHORTS熱門歌曲_20240923.html">20240923</option><option value="index_每日SHORTS熱門歌曲_20240922.html">20240922</option><option value="index_每日SHORTS熱門歌曲_20240921.html">20240921</option><option value="index_每日SHORTS熱門歌曲_20240920.html">20240920</option><option value="index_每日SHORTS熱門歌曲_20240919.html">20240919</option><option value="index_每日SHORTS熱門歌曲_20240918.html">20240918</option><option value="index_每日SHORTS熱門歌曲_20240917.html">20240917</option><option value="index_每日SHORTS熱門歌曲_20240916.html">20240916</option><option value="index_每日SHORTS熱門歌曲_20240915.html">20240915</option><option value="index_每日SHORTS熱門歌曲_20240914.html">20240914</option><option value="index_每日SHORTS熱門歌曲_20240913.html">20240913</option><option value="index_每日SHORTS熱門歌曲_20240912.html">20240912</option><option value="index_每日SHORTS熱門歌曲_20240911.html">20240911</option><option value="index_每日SHORTS熱門歌曲_20240910.html">20240910</option><option value="index_每日SHORTS熱門歌曲_20240909.html">20240909</option><option value="index_每日SHORTS熱門歌曲_20240908.html">20240908</option><option value="index_每日SHORTS熱門歌曲_20240907.html">20240907</option><option value="index_每日SHORTS熱門歌曲_20240906.html">20240906</option><option value="index_每日SHORTS熱門歌曲_20240905.html">20240905</option><option value="index_每日SHORTS熱門歌曲_20240904.html">20240904</option><option value="index_每日SHORTS熱門歌曲_20240903.html">20240903</option><option value="index_每日SHORTS熱門歌曲_20240902.html">20240902</option><option value="index_每日SHORTS熱門歌曲_20240901.html">20240901</option><option value="index_每日SHORTS熱門歌曲_20240831.html">20240831</option><option value="index_每日SHORTS熱門歌曲_20240830.html">20240830</option><option value="index_每日SHORTS熱門歌曲_20240829.html">20240829</option><option value="index_每日SHORTS熱門歌曲_20240828.html">20240828</option><option value="index_每日SHORTS熱門歌曲_20240827.html">20240827</option><option value="index_每日SHORTS熱門歌曲_20240826.html">20240826</option><option value="index_每日SHORTS熱門歌曲_20240825.html">20240825</option><option value="index_每日SHORTS熱門歌曲_20240824.html">20240824</option><option value="index_每日SHORTS熱門歌曲_20240823.html">20240823</option><option value="index_每日SHORTS熱門歌曲_20240822.html">20240822</option><option value="index_每日SHORTS熱門歌曲_20240821.html">20240821</option><option value="index_每日SHORTS熱門歌曲_20240820.html">20240820</option><option value="index_每日SHORTS熱門歌曲_20240819.html">20240819</option><option value="index_每日SHORTS熱門歌曲_20240818.html">20240818</option><option value="index_每日SHORTS熱門歌曲_20240817.html">20240817</option><option value="index_每日SHORTS熱門歌曲_20240816.html">20240816</option><option value="index_每日SHORTS熱門歌曲_20240815.html">20240815</option><option value="index_每日SHORTS熱門歌曲_20240814.html">20240814</option><option value="index_每日SHORTS熱門歌曲_20240813.html">20240813</option><option value="index_每日SHORTS熱門歌曲_20240812.html">20240812</option><option value="index_每日SHORTS熱門歌曲_20240811.html">20240811</option><option value="index_每日SHORTS熱門歌曲_20240810.html">20240810</option><option value="index_每日SHORTS熱門歌曲_20240809.html">20240809</option><option value="index_每日SHORTS熱門歌曲_20240808.html">20240808</option><option value="index_每日SHORTS熱門歌曲_20240807.html">20240807</option><option value="index_每日SHORTS熱門歌曲_20240806.html">20240806</option><option value="index_每日SHORTS熱門歌曲_20240805.html">20240805</option><option value="index_每日SHORTS熱門歌曲_20240804.html">20240804</option><option value="index_每日SHORTS熱門歌曲_20240803.html">20240803</option><option value="index_每日SHORTS熱門歌曲_20240802.html">20240802</option><option value="index_每日SHORTS熱門歌曲_20240801.html">20240801</option><option value="index_每日SHORTS熱門歌曲_20240731.html">20240731</option><option value="index_每日SHORTS熱門歌曲_20240730.html">20240730</option><option value="index_每日SHORTS熱門歌曲_20240729.html">20240729</option><option value="index_每日SHORTS熱門歌曲_20240728.html">20240728</option><option value="index_每日SHORTS熱門歌曲_20240727.html">20240727</option><option value="index_每日SHORTS熱門歌曲_20240726.html">20240726</option><option value="index_每日SHORTS熱門歌曲_20240725.html">20240725</option><option value="index_每日SHORTS熱門歌曲_20240724.html">20240724</option><option value="index_每日SHORTS熱門歌曲_20240723.html">20240723</option><option value="index_每日SHORTS熱門歌曲_20240722.html">20240722</option><option value="index_每日SHORTS熱門歌曲_20240721.html">20240721</option><option value="index_每日SHORTS熱門歌曲_20240720.html">20240720</option><option value="index_每日SHORTS熱門歌曲_20240719.html">20240719</option><option value="index_每日SHORTS熱門歌曲_20240718.html">20240718</option><option value="index_每日SHORTS熱門歌曲_20240717.html">20240717</option><option value="index_每日SHORTS熱門歌曲_20240716.html">20240716</option><option value="index_每日SHORTS熱門歌曲_20240715.html">20240715</option><option value="index_每日SHORTS熱門歌曲_20240714.html">20240714</option><option value="index_每日SHORTS熱門歌曲_20240713.html">20240713</option><option value="index_每日SHORTS熱門歌曲_20240712.html">20240712</option><option value="index_每日SHORTS熱門歌曲_20240711.html">20240711</option><option value="index_每日SHORTS熱門歌曲_20240710.html">20240710</option><option value="index_每日SHORTS熱門歌曲_20240709.html">20240709</option><option value="index_每日SHORTS熱門歌曲_20240708.html">20240708</option><option value="index_每日SHORTS熱門歌曲_20240707.html">20240707</option><option value="index_每日SHORTS熱門歌曲_20240706.html">20240706</option><option value="index_每日SHORTS熱門歌曲_20240705.html">20240705</option><option value="index_每日SHORTS熱門歌曲_20240704.html">20240704</option><option value="index_每日SHORTS熱門歌曲_20240703.html">20240703</option><option value="index_每日SHORTS熱門歌曲_20240702.html">20240702</option><option value="index_每日SHORTS熱門歌曲_20240701.html">20240701</option><option value="index_每日SHORTS熱門歌曲_20240630.html">20240630</option><option value="index_每日SHORTS熱門歌曲_20240629.html">20240629</option><option value="index_每日SHORTS熱門歌曲_20240628.html">20240628</option><option value="index_每日SHORTS熱門歌曲_20240627.html">20240627</option><option value="index_每日SHORTS熱門歌曲_20240626.html">20240626</option><option value="index_每日SHORTS熱門歌曲_20240625.html">20240625</option><option value="index_每日SHORTS熱門歌曲_20240624.html">20240624</option><option value="index_每日SHORTS熱門歌曲_20240623.html">20240623</option><option value="index_每日SHORTS熱門歌曲_20240622.html">20240622</option><option value="index_每日SHORTS熱門歌曲_20240621.html">20240621</option><option value="index_每日SHORTS熱門歌曲_20240620.html">20240620</option><option value="index_每日SHORTS熱門歌曲_20240619.html">20240619</option><option value="index_每日SHORTS熱門歌曲_20240618.html">20240618</option><option value="index_每日SHORTS熱門歌曲_20240617.html">20240617</option><option value="index_每日SHORTS熱門歌曲_20240616.html">20240616</option><option value="index_每日SHORTS熱門歌曲_20240615.html">20240615</option><option value="index_每日SHORTS熱門歌曲_20240614.html">20240614</option><option value="index_每日SHORTS熱門歌曲_20240613.html">20240613</option><option value="index_每日SHORTS熱門歌曲_20240612.html">20240612</option><option value="index_每日SHORTS熱門歌曲_20240611.html">20240611</option><option value="index_每日SHORTS熱門歌曲_20240610.html">20240610</option><option value="index_每日SHORTS熱門歌曲_20240609.html">20240609</option><option value="index_每日SHORTS熱門歌曲_20240608.html">20240608</option><option value="index_每日SHORTS熱門歌曲_20240607.html">20240607</option><option value="index_每日SHORTS熱門歌曲_20240606.html">20240606</option><option value="index_每日SHORTS熱門歌曲_20240605.html">20240605</option><option value="index_每日SHORTS熱門歌曲_20240604.html">20240604</option><option value="index_每日SHORTS熱門歌曲_20240603.html">20240603</option><option value="index_每日SHORTS熱門歌曲_20240602.html">20240602</option><option value="index_每日SHORTS熱門歌曲_20240601.html">20240601</option><option value="index_每日SHORTS熱門歌曲_20240531.html">20240531</option><option value="index_每日SHORTS熱門歌曲_20240530.html">20240530</option><option value="index_每日SHORTS熱門歌曲_20240529.html">20240529</option><option value="index_每日SHORTS熱門歌曲_20240528.html">20240528</option><option value="index_每日SHORTS熱門歌曲_20240527.html">20240527</option><option value="index_每日SHORTS熱門歌曲_20240526.html">20240526</option><option value="index_每日SHORTS熱門歌曲_20240525.html">20240525</option><option value="index_每日SHORTS熱門歌曲_20240524.html">20240524</option><option value="index_每日SHORTS熱門歌曲_20240523.html">20240523</option><option value="index_每日SHORTS熱門歌曲_20240522.html">20240522</option><option value="index_每日SHORTS熱門歌曲_20240521.html">20240521</option><option value="index_每日SHORTS熱門歌曲_20240520.html">20240520</option><option value="index_每日SHORTS熱門歌曲_20240519.html">20240519</option><option value="index_每日SHORTS熱門歌曲_20240518.html">20240518</option><option value="index_每日SHORTS熱門歌曲_20240517.html">20240517</option><option value="index_每日SHORTS熱門歌曲_20240516.html">20240516</option><option value="index_每日SHORTS熱門歌曲_20240515.html">20240515</option><option value="index_每日SHORTS熱門歌曲_20240514.html">20240514</option><option value="index_每日SHORTS熱門歌曲_20240513.html">20240513</option><option value="index_每日SHORTS熱門歌曲_20240512.html">20240512</option><option value="index_每日SHORTS熱門歌曲_20240511.html">20240511</option><option value="index_每日SHORTS熱門歌曲_20240510.html">20240510</option><option value="index_每日SHORTS熱門歌曲_20240509.html">20240509</option><option value="index_每日SHORTS熱門歌曲_20240508.html">20240508</option><option value="index_每日SHORTS熱門歌曲_20240507.html">20240507</option><option value="index_每日SHORTS熱門歌曲_20240506.html">20240506</option><option value="index_每日SHORTS熱門歌曲_20240505.html">20240505</option><option value="index_每日SHORTS熱門歌曲_20240504.html">20240504</option><option value="index_每日SHORTS熱門歌曲_20240503.html">20240503</option><option value="index_每日SHORTS熱門歌曲_20240502.html">20240502</option><option value="index_每日SHORTS熱門歌曲_20240501.html">20240501</option><option value="index_每日SHORTS熱門歌曲_20240430.html">20240430</option><option value="index_每日SHORTS熱門歌曲_20240429.html">20240429</option><option value="index_每日SHORTS熱門歌曲_20240428.html">20240428</option><option value="index_每日SHORTS熱門歌曲_20240427.html">20240427</option><option value="index_每日SHORTS熱門歌曲_20240426.html">20240426</option><option value="index_每日SHORTS熱門歌曲_20240425.html">20240425</option><option value="index_每日SHORTS熱門歌曲_20240424.html">20240424</option><option value="index_每日SHORTS熱門歌曲_20240423.html">20240423</option><option value="index_每日SHORTS熱門歌曲_20240422.html">20240422</option><option value="index_每日SHORTS熱門歌曲_20240421.html">20240421</option><option value="index_每日SHORTS熱門歌曲_20240420.html">20240420</option><option value="index_每日SHORTS熱門歌曲_20240419.html">20240419</option><option value="index_每日SHORTS熱門歌曲_20240418.html">20240418</option><option value="index_每日SHORTS熱門歌曲_20240417.html">20240417</option><option value="index_每日SHORTS熱門歌曲_20240416.html">20240416</option><option value="index_每日SHORTS熱門歌曲_20240415.html">20240415</option><option value="index_每日SHORTS熱門歌曲_20240414.html">20240414</option><option value="index_每日SHORTS熱門歌曲_20240413.html">20240413</option><option value="index_每日SHORTS熱門歌曲_20240412.html">20240412</option><option value="index_每日SHORTS熱門歌曲_20240411.html">20240411</option><option value="index_每日SHORTS熱門歌曲_20240410.html">20240410</option><option value="index_每日SHORTS熱門歌曲_20240409.html">20240409</option><option value="index_每日SHORTS熱門歌曲_20240408.html">20240408</option><option value="index_每日SHORTS熱門歌曲_20240407.html">20240407</option><option value="index_每日SHORTS熱門歌曲_20240406.html">20240406</option><option value="index_每日SHORTS熱門歌曲_20240405.html">20240405</option><option value="index_每日SHORTS熱門歌曲_20240404.html">20240404</option><option value="index_每日SHORTS熱門歌曲_20240403.html">20240403</option><option value="index_每日SHORTS熱門歌曲_20240402.html">20240402</option><option value="index_每日SHORTS熱門歌曲_20240401.html">20240401</option><option value="index_每日SHORTS熱門歌曲_20240331.html">20240331</option><option value="index_每日SHORTS熱門歌曲_20240330.html">20240330</option><option value="index_每日SHORTS熱門歌曲_20240329.html">20240329</option><option value="index_每日SHORTS熱門歌曲_20240328.html">20240328</option><option value="index_每日SHORTS熱門歌曲_20240327.html">20240327</option><option value="index_每日SHORTS熱門歌曲_20240326.html">20240326</option><option value="index_每日SHORTS熱門歌曲_20240325.html">20240325</option><option value="index_每日SHORTS熱門歌曲_20240324.html">20240324</option><option value="index_每日SHORTS熱門歌曲_20240323.html">20240323</option><option value="index_每日SHORTS熱門歌曲_20240322.html">20240322</option><option value="index_每日SHORTS熱門歌曲_20240321.html">20240321</option><option value="index_每日SHORTS熱門歌曲_20240320.html">20240320</option><option value="index_每日SHORTS熱門歌曲_20240319.html">20240319</option><option value="index_每日SHORTS熱門歌曲_20240318.html">20240318</option><option value="index_每日SHORTS熱門歌曲_20240317.html">20240317</option><option value="index_每日SHORTS熱門歌曲_20240316.html">20240316</option><option value="index_每日SHORTS熱門歌曲_20240315.html">20240315</option><option value="index_每日SHORTS熱門歌曲_20240314.html">20240314</option><option value="index_每日SHORTS熱門歌曲_20240313.html">20240313</option><option value="index_每日SHORTS熱門歌曲_20240312.html">20240312</option><option value="index_每日SHORTS熱門歌曲_20240311.html">20240311</option><option value="index_每日SHORTS熱門歌曲_20240310.html">20240310</option><option value="index_每日SHORTS熱門歌曲_20240309.html">20240309</option><option value="index_每日SHORTS熱門歌曲_20240308.html">20240308</option><option value="index_每日SHORTS熱門歌曲_20240307.html">20240307</option><option value="index_每日SHORTS熱門歌曲_20240306.html">20240306</option><option value="index_每日SHORTS熱門歌曲_20240305.html">20240305</option><option value="index_每日SHORTS熱門歌曲_20240304.html">20240304</option><option value="index_每日SHORTS熱門歌曲_20240303.html">20240303</option><option value="index_每日SHORTS熱門歌曲_20240302.html">20240302</option><option value="index_每日SHORTS熱門歌曲_20240301.html">20240301</option><option value="index_每日SHORTS熱門歌曲_20240229.html">20240229</option><option value="index_每日SHORTS熱門歌曲_20240228.html">20240228</option><option value="index_每日SHORTS熱門歌曲_20240227.html">20240227</option><option value="index_每日SHORTS熱門歌曲_20240226.html">20240226</option><option value="index_每日SHORTS熱門歌曲_20240225.html">20240225</option><option value="index_每日SHORTS熱門歌曲_20240224.html">20240224</option><option value="index_每日SHORTS熱門歌曲_20240223.html">20240223</option><option value="index_每日SHORTS熱門歌曲_20240222.html">20240222</option><option value="index_每日SHORTS熱門歌曲_20240221.html">20240221</option><option value="index_每日SHORTS熱門歌曲_20240220.html">20240220</option><option value="index_每日SHORTS熱門歌曲_20240219.html">20240219</option><option value="index_每日SHORTS熱門歌曲_20240218.html">20240218</option><option value="index_每日SHORTS熱門歌曲_20240217.html">20240217</option><option value="index_每日SHORTS熱門歌曲_20240216.html">20240216</option><option value="index_每日SHORTS熱門歌曲_20240215.html">20240215</option><option value="index_每日SHORTS熱門歌曲_20240214.html">20240214</option><option value="index_每日SHORTS熱門歌曲_20240213.html">20240213</option><option value="index_每日SHORTS熱門歌曲_20240212.html">20240212</option><option value="index_每日SHORTS熱門歌曲_20240211.html">20240211</option><option value="index_每日SHORTS熱門歌曲_20240210.html">20240210</option><option value="index_每日SHORTS熱門歌曲_20240209.html">20240209</option><option value="index_每日SHORTS熱門歌曲_20240208.html">20240208</option><option value="index_每日SHORTS熱門歌曲_20240207.html">20240207</option><option value="index_每日SHORTS熱門歌曲_20240206.html">20240206</option><option value="index_每日SHORTS熱門歌曲_20240205.html">20240205</option><option value="index_每日SHORTS熱門歌曲_20240204.html">20240204</option><option value="index_每日SHORTS熱門歌曲_20240203.html">20240203</option><option value="index_每日SHORTS熱門歌曲_20240202.html">20240202</option><option value="index_每日SHORTS熱門歌曲_20240201.html">20240201</option><option value="index_每日SHORTS熱門歌曲_20240131.html">20240131</option><option value="index_每日SHORTS熱門歌曲_20240130.html">20240130</option><option value="index_每日SHORTS熱門歌曲_20240129.html">20240129</option><option value="index_每日SHORTS熱門歌曲_20240128.html">20240128</option><option value="index_每日SHORTS熱門歌曲_20240127.html">20240127</option><option value="index_每日SHORTS熱門歌曲_20240126.html">20240126</option><option value="index_每日SHORTS熱門歌曲_20240125.html">20240125</option><option value="index_每日SHORTS熱門歌曲_20240124.html">20240124</option><option value="index_每日SHORTS熱門歌曲_20240123.html">20240123</option><option value="index_每日SHORTS熱門歌曲_20240122.html">20240122</option><option value="index_每日SHORTS熱門歌曲_20240121.html">20240121</option><option value="index_每日SHORTS熱門歌曲_20240120.html">20240120</option><option value="index_每日SHORTS熱門歌曲_20240119.html">20240119</option><option value="index_每日SHORTS熱門歌曲_20240118.html">20240118</option><option value="index_每日SHORTS熱門歌曲_20240117.html">20240117</option><option value="index_每日SHORTS熱門歌曲_20240116.html">20240116</option><option value="index_每日SHORTS熱門歌曲_20240115.html">20240115</option><option value="index_每日SHORTS熱門歌曲_20240114.html">20240114</option><option value="index_每日SHORTS熱門歌曲_20240113.html">20240113</option><option value="index_每日SHORTS熱門歌曲_20240112.html">20240112</option><option value="index_每日SHORTS熱門歌曲_20240111.html">20240111</option><option value="index_每日SHORTS熱門歌曲_20240110.html">20240110</option><option value="index_每日SHORTS熱門歌曲_20240109.html">20240109</option><option value="index_每日SHORTS熱門歌曲_20240108.html">20240108</option><option value="index_每日SHORTS熱門歌曲_20240107.html">20240107</option><option value="index_每日SHORTS熱門歌曲_20240106.html">20240106</option><option value="index_每日SHORTS熱門歌曲_20240105.html">20240105</option><option value="index_每日SHORTS熱門歌曲_20240104.html">20240104</option><option value="index_每日SHORTS熱門歌曲_20240103.html">20240103</option><option value="index_每日SHORTS熱門歌曲_20240102.html">20240102</option><option value="index_每日SHORTS熱門歌曲_20240101.html">20240101</option><option value="index_每日SHORTS熱門歌曲_20231231.html">20231231</option><option value="index_每日SHORTS熱門歌曲_20231230.html">20231230</option><option value="index_每日SHORTS熱門歌曲_20231229.html">20231229</option><option value="index_每日SHORTS熱門歌曲_20231228.html">20231228</option><option value="index_每日SHORTS熱門歌曲_20231227.html">20231227</option><option value="index_每日SHORTS熱門歌曲_20231226.html">20231226</option><option value="index_每日SHORTS熱門歌曲_20231225.html">20231225</option><option value="index_每日SHORTS熱門歌曲_20231224.html">20231224</option><option value="index_每日SHORTS熱門歌曲_20231223.html">20231223</option><option value="index_每日SHORTS熱門歌曲_20231222.html">20231222</option><option value="index_每日SHORTS熱門歌曲_20231221.html">20231221</option><option value="index_每日SHORTS熱門歌曲_20231220.html">20231220</option><option value="index_每日SHORTS熱門歌曲_20231219.html">20231219</option><option value="index_每日SHORTS熱門歌曲_20231218.html">20231218</option><option value="index_每日SHORTS熱門歌曲_20231217.html">20231217</option><option value="index_每日SHORTS熱門歌曲_20231216.html">20231216</option><option value="index_每日SHORTS熱門歌曲_20231215.html">20231215</option><option value="index_每日SHORTS熱門歌曲_20231214.html">20231214</option><option value="index_每日SHORTS熱門歌曲_20231213.html">20231213</option><option value="index_每日SHORTS熱門歌曲_20231212.html">20231212</option><option value="index_每日SHORTS熱門歌曲_20231211.html">20231211</option><option value="index_每日SHORTS熱門歌曲_20231210.html">20231210</option><option value="index_每日SHORTS熱門歌曲_20231209.html">20231209</option><option value="index_每日SHORTS熱門歌曲_20231208.html">20231208</option><option value="index_每日SHORTS熱門歌曲_20231207.html">20231207</option><option value="index_每日SHORTS熱門歌曲_20231206.html">20231206</option><option value="index_每日SHORTS熱門歌曲_20231205.html">20231205</option><option value="index_每日SHORTS熱門歌曲_20231204.html">20231204</option><option value="index_每日SHORTS熱門歌曲_20231203.html">20231203</option><option value="index_每日SHORTS熱門歌曲_20231202.html">20231202</option><option value="index_每日SHORTS熱門歌曲_20231201.html">20231201</option><option value="index_每日SHORTS熱門歌曲_20231130.html">20231130</option><option value="index_每日SHORTS熱門歌曲_20231129.html">20231129</option><option value="index_每日SHORTS熱門歌曲_20231128.html">20231128</option><option value="index_每日SHORTS熱門歌曲_20231127.html">20231127</option><option value="index_每日SHORTS熱門歌曲_20231126.html">20231126</option><option value="index_每日SHORTS熱門歌曲_20231125.html">20231125</option><option value="index_每日SHORTS熱門歌曲_20231124.html">20231124</option><option value="index_每日SHORTS熱門歌曲_20231123.html">20231123</option><option value="index_每日SHORTS熱門歌曲_20231122.html">20231122</option><option value="index_每日SHORTS熱門歌曲_20231121.html">20231121</option><option value="index_每日SHORTS熱門歌曲_20231120.html">20231120</option><option value="index_每日SHORTS熱門歌曲_20231119.html">20231119</option><option value="index_每日SHORTS熱門歌曲_20231118.html">20231118</option><option value="index_每日SHORTS熱門歌曲_20231117.html">20231117</option><option value="index_每日SHORTS熱門歌曲_20231116.html">20231116</option><option value="index_每日SHORTS熱門歌曲_20231115.html">20231115</option><option value="index_每日SHORTS熱門歌曲_20231114.html">20231114</option><option value="index_每日SHORTS熱門歌曲_20231113.html">20231113</option><option value="index_每日SHORTS熱門歌曲_20231112.html">20231112</option><option value="index_每日SHORTS熱門歌曲_20231111.html">20231111</option><option value="index_每日SHORTS熱門歌曲_20231110.html">20231110</option><option value="index_每日SHORTS熱門歌曲_20231109.html">20231109</option><option value="index_每日SHORTS熱門歌曲_20231108.html">20231108</option><option value="index_每日SHORTS熱門歌曲_20231107.html">20231107</option><option value="index_每日SHORTS熱門歌曲_20231106.html">20231106</option>
	        </select>
	    `;

	    // 插入到 DOM 中的某個特定位置
	    document.getElementById('dropdown-container').innerHTML = dropdownHTML;
	});
	