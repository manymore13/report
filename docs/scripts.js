// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const tagsContainer = document.getElementById('tags');
    const documentListContainer = document.querySelector('.document-list');
    const previewContainer = document.querySelector('.preview');
    const tagsDrawer = document.querySelector('.tags-drawer');
    const toggleTagsDrawerBtn = document.getElementById('toggleTagsDrawer');
    const reportIndustry = document.getElementById('report_industry');

    const host = "https://cdn.jsdelivr.net/gh/manymore13/report/eastmoney/";

    // 模拟从远程获取标签
    const tags = [
        { "name": "专业服务", "csv_url": host + "专业服务.csv" },
        { "name": "专用设备", "csv_url": host + "专用设备.csv" },
        { "name": "中药", "csv_url": host + "中药.csv" },
        { "name": "互联网服务", "csv_url": host + "互联网服务.csv" },
        { "name": "仪器仪表", "csv_url": host + "仪器仪表.csv" },
        { "name": "保险", "csv_url": host + "保险.csv" },
        { "name": "光伏设备", "csv_url": host + "光伏设备.csv" },
        { "name": "光学光电子", "csv_url": host + "光学光电子.csv" },
        { "name": "公用事业", "csv_url": host + "公用事业.csv" },
        { "name": "农牧饲渔", "csv_url": host + "农牧饲渔.csv" },
        { "name": "化学制品", "csv_url": host + "化学制品.csv" },
        { "name": "化学制药", "csv_url": host + "化学制药.csv" },
        { "name": "化学原料", "csv_url": host + "化学原料.csv" },
        { "name": "化纤行业", "csv_url": host + "化纤行业.csv" },
        { "name": "化肥行业", "csv_url": host + "化肥行业.csv" },
        { "name": "医疗器械", "csv_url": host + "医疗器械.csv" },
        { "name": "医疗服务", "csv_url": host + "医疗服务.csv" },
        { "name": "医药商业", "csv_url": host + "医药商业.csv" },
        { "name": "半导体", "csv_url": host + "半导体.csv" },
        { "name": "商业百货", "csv_url": host + "商业百货.csv" },
        { "name": "多元金融", "csv_url": host + "多元金融.csv" },
        { "name": "家用轻工", "csv_url": host + "家用轻工.csv" },
        { "name": "家电行业", "csv_url": host + "家电行业.csv" },
        { "name": "小金属", "csv_url": host + "小金属.csv" },
        { "name": "工程建设", "csv_url": host + "工程建设.csv" },
        { "name": "工程机械", "csv_url": host + "工程机械.csv" },
        { "name": "房地产开发", "csv_url": host + "房地产开发.csv" },
        { "name": "房地产服务", "csv_url": host + "房地产服务.csv" },
        { "name": "教育", "csv_url": host + "教育.csv" },
        { "name": "文化传媒", "csv_url": host + "文化传媒.csv" },
        { "name": "旅游酒店", "csv_url": host + "旅游酒店.csv" },
        { "name": "有色金属", "csv_url": host + "有色金属.csv" },
        { "name": "水泥建材", "csv_url": host + "水泥建材.csv" },
        { "name": "汽车整车", "csv_url": host + "汽车整车.csv" },
        { "name": "汽车零部件", "csv_url": host + "汽车零部件.csv" },
        { "name": "消费电子", "csv_url": host + "消费电子.csv" },
        { "name": "游戏", "csv_url": host + "游戏.csv" },
        { "name": "煤炭行业", "csv_url": host + "煤炭行业.csv" },
        { "name": "物流行业", "csv_url": host + "物流行业.csv" },
        { "name": "环保行业", "csv_url": host + "环保行业.csv" },
        { "name": "玻璃玻纤", "csv_url": host + "玻璃玻纤.csv" },
        { "name": "珠宝首饰", "csv_url": host + "珠宝首饰.csv" },
        { "name": "生物制品", "csv_url": host + "生物制品.csv" },
        { "name": "电力行业", "csv_url": host + "电力行业.csv" },
        { "name": "电子元件", "csv_url": host + "电子元件.csv" },
        { "name": "电子化学品", "csv_url": host + "电子化学品.csv" },
        { "name": "电池", "csv_url": host + "电池.csv" },
        { "name": "电源设备", "csv_url": host + "电源设备.csv" },
        { "name": "电网设备", "csv_url": host + "电网设备.csv" },
        { "name": "石油行业", "csv_url": host + "石油行业.csv" },
        { "name": "纺织服装", "csv_url": host + "纺织服装.csv" },
        { "name": "美容护理", "csv_url": host + "美容护理.csv" },
        { "name": "能源金属", "csv_url": host + "能源金属.csv" },
        { "name": "航天航空", "csv_url": host + "航天航空.csv" },
        {"name": "航空机场", "csv_url": host + "航空机场.csv" },
        { "name": "航运港口", "csv_url": host + "航运港口.csv" },
        { "name": "船舶制造", "csv_url": host + "船舶制造.csv" },
        { "name": "装修建材", "csv_url": host + "装修建材.csv" },
        { "name": "装修装饰", "csv_url": host + "装修装饰.csv" },
        { "name": "计算机设备", "csv_url": host + "计算机设备.csv" },
        { "name": "证券", "csv_url": host + "证券.csv" },
        { "name": "贵金属", "csv_url": host + "贵金属.csv" },
        { "name": "软件开发", "csv_url": host + "软件开发.csv" },
        { "name": "通信服务", "csv_url": host + "通信服务.csv" },
        { "name": "通信设备", "csv_url": host + "通信设备.csv" },
        { "name": "通用设备", "csv_url": host + "通用设备.csv" },
        { "name": "造纸印刷", "csv_url": host + "造纸印刷.csv" },
        { "name": "酿酒行业", "csv_url": host + "酿酒行业.csv" },
        { "name": "采掘行业", "csv_url": host + "采掘行业.csv" },
        { "name": "钢铁行业", "csv_url": host + "钢铁行业.csv" },
        { "name": "铁路公路", "csv_url": host + "铁路公路.csv" },
        { "name": "银行", "csv_url": host + "银行.csv" },
        { "name": "非金属材料", "csv_url": host + "非金属材料.csv" },
        { "name": "风电设备", "csv_url": host + "风电设备.csv" },
        { "name": "食品饮料", "csv_url": host + "食品饮料.csv" }
    
    ];

    // 渲染标签
    tags.forEach((tag, index) => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tag.name;
        tagElement.addEventListener('click', () => {
            fetchDocumentList(tag);
            // 取消其他标签的选中状态
            document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('selected'));
            // 当前标签设置为选中状态
            tagElement.classList.add('selected');

            reportIndustry.textContent = tag.name
        });
        tagsContainer.appendChild(tagElement);

        // 默认选中第一个标签
        if (index === 0) {
            tagElement.click();
        }
    });

    // 从远程获取文档列表
    function fetchDocumentList(tag) {
        fetch(tag.csv_url)
            .then(response => response.text())
            .then(csv => {
                const reports = parseCSV(csv);
                renderDocumentList(reports);
            })
            .catch(error => console.error('Error fetching document list:', error));
    }

    // 解析 CSV 文件
    function parseCSV(csv) {
        const rows = csv.split('\n');
        const reports = [];
        rows.forEach( (row, index) => {
            if(index == 0){
                return;
            }
            const columns = row.split(',');
            if (columns.length === 5) {
                const report = {
                    title: columns[0],
                    orgName: columns[1],
                    pubDate: columns[2],
                    industry: columns[3],
                    pdfUrl: columns[4]
                };
                reports.push(report);
            }
        });
        return reports;
    }

    // 渲染文档列表
    function renderDocumentList(reports) {
        documentListContainer.innerHTML = '';
        reports.forEach((report,index) => {
            const documentItem = document.createElement('div');
            documentItem.classList.add('document-item');
            documentItem.textContent = report.title;
            documentItem.innerHTML = '<div class="title">' + report.title  +
            '<author>' + report.orgName + '</author>'+
            '<date>' + report.pubDate + '</date>'+
            '</div>';
            documentItem.addEventListener('click', () => {
                fetchDocumentPreview(report.pdfUrl);
                // 取消其他文档项的选中状态
                document.querySelectorAll('.document-item').forEach(item => item.classList.remove('selected'));
                // 当前文档项设置为选中状态
                documentItem.classList.add('selected');
            });
            documentListContainer.appendChild(documentItem);
            if ( index === 0 ){
                documentItem.click();
            }
        });
    }

    // 获取并渲染 PDF 预览
    function fetchDocumentPreview(pdfUrl) {
        previewContainer.innerHTML = `<iframe src="${pdfUrl}" width="100%" height="600px"></iframe>`;
    }

    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click',function() {
          // 切换内容的高度以实现动画效果
          if (tagsContainer.classList.contains('expanded')) {
              tagsContainer.style.maxHeight = '0';
              tagsContainer.classList.remove('expanded');
              toggleButton.textContent = '展开';
          } else {
              tagsContainer.style.maxHeight = tagsContainer.scrollHeight + 'px';
              tagsContainer.classList.add('expanded');
              toggleButton.textContent = '收缩';
          }
    });

    function toggleTagContent() {
      var content = document.getElementById("tags");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
});
