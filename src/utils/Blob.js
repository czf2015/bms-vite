const download = (fileName, blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
};

// 作者：阿宝哥
// 链接：https://juejin.cn/post/6844904178725158926
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


function dataUrlToBlob(base64, mimeType) {
    let bytes = window.atob(base64.split(",")[1]);
    let ab = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
}


function uploadFile(url, blob) {
    let formData = new FormData();
    let request = new XMLHttpRequest();
    formData.append("image", blob);
    request.open("POST", url, true);
    request.send(formData);
}
