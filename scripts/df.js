function convertDF(dc){
    return dc * 1.8 + 32;
}

var dc = prompt("請輸入攝氏溫度：","25");	

var df = convertDF(dc);

document.querySelector('#Hello').textContent=('華氏溫度為：' + df);