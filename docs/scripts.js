// JavaScript 代码
document.addEventListener('DOMContentLoaded', () => {
    const tagsContainer = document.querySelector('.tags');
    const documentListContainer = document.querySelector('.document-list');
    const previewContainer = document.querySelector('.preview');
	const host = "https://raw.githubusercontent.com/manymore13/report/main/eastmoney/"
	         

    // 模拟从远程获取标签
    const tags = [
		{
			"name": "互联网服务",
			"csv_url": host+"%E4%BA%92%E8%81%94%E7%BD%91%E6%9C%8D%E5%8A%A1.csv"

		},
		
		{
			"name": "专业服务",
			"csv_url": host+"%E4%B8%93%E4%B8%9A%E6%9C%8D%E5%8A%A1.csv"

		},
		
		{
			"name": "互联网服务",
			"csv_url": host+"%E4%BA%92%E8%81%94%E7%BD%91%E6%9C%8D%E5%8A%A1.csv"

		},
		
		{
			"name": "互联网服务",
			"csv_url": host+"%E4%BA%92%E8%81%94%E7%BD%91%E6%9C%8D%E5%8A%A1.csv"

		},
		
		{
			"name": "互联网服务",
			"csv_url": host+"%E4%BA%92%E8%81%94%E7%BD%91%E6%9C%8D%E5%8A%A1.csv"

		},
		
	];

    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tag.name;
        tagElement.addEventListener('click', () => {
            // 点击标签时触发的事件
            fetchDocumentList(tag);
        });
        tagsContainer.appendChild(tagElement);
    });

    function fetchDocumentList(tag) {
        // 模拟从远程获取文档列表
        // 注意替换 REMOTE_CSV_URL 为你的远程 CSV 文件链接
        const REMOTE_CSV_URL = tag.csv_url;
        fetch(REMOTE_CSV_URL)
            .then(response => response.text())
            .then(csv => {
                const reports = parseCSV(csv);
                renderDocumentList(reports);
            })
            .catch(error => console.error('Error fetching document list:', error));
    }

    function parseCSV(csv) {
        // 解析 CSV 文件
        const rows = csv.split('\n');
        const reports = [];
        rows.forEach(row => {
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

    function renderDocumentList(reports) {
        documentListContainer.innerHTML = ''; // 清空列表
        reports.forEach(report => {
            const documentItem = document.createElement('div');
            documentItem.classList.add('document-item');
            documentItem.textContent = report.title;
            documentItem.addEventListener('click', () => {
                fetchDocumentPreview(report.pdfUrl);
            });
            documentListContainer.appendChild(documentItem);
        });
    }

    function fetchDocumentPreview(pdfUrl) {
        // 模拟从远程获取 PDF 预览
        // 此处你需要使用你的 PDF 阅读器进行预览，如 PDF.js
        // 这里仅作为示例
        previewContainer.innerHTML = `<iframe src="${pdfUrl}" width="100%" height="1000px"></iframe>`;
    }
});