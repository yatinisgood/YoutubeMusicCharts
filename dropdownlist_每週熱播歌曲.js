// dropdown.js
document.addEventListener('DOMContentLoaded', function() {
    var dropdownHTML = `
        <select class="form-control" id="week-selector" onchange="goToWeek(this.value)">
            <option value="">選擇一週</option>
            <option value="index_每週熱門音樂影片_20240104.html">20240104</option>
            <option value="index_每週熱門音樂影片_20231228.html">20231228</option>
            <!-- 更多選項 -->
        </select>
    `;

    // 插入到 DOM 中的某個特定位置
    document.getElementById('dropdown-container').innerHTML = dropdownHTML;
});