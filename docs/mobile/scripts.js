
document.addEventListener('DOMContentLoaded', () => {

    const previewContainer = document.querySelector('.preview');
    const documentListContainer = document.querySelector('.document-list');

    if (isScreenOrientation()) {

        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        // <link rel="stylesheet" href="styles.css">
        link.href = 'mobile/styles.css';
        link.rel = 'stylesheet';
        head.appendChild(link);

        // 监听返回键事件
        document.addEventListener('keydown', function(event) {
            if (event.key === "Backspace") {
                togglePreview(false);
                window.history.back()
            }
        });
    }

    function togglePreview(show){
        if(show){
           previewContainer.style.display = 'block'
           documentListContainer.style.display= 'none'
        }else{
           previewContainer.style.display= 'none'
           documentListContainer.style.display= 'block'
        }
    }

    function isScreenOrientation() {
         let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
         return screenWidth < screenHeight ;
    }
});




