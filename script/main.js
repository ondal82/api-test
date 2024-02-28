// ! API 영역

// `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttblusci2359001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`

const urlAPI = "https://corsproxy.io/?http://www.aladin.co.kr/ttb/api/ItemSearch.aspx";

const ttbKey = `ttblusci2359001`;

let url = new URL(`https://${urlAPI}?ttbkey=${ttbKey}`);

// ! 쿼리 영역

let query = "aladdin";

let queryType = "Title";

let maxResults = 10;

let resultStart = 1;

let SearchTarget = "Book";

let outputStyle = "js";

let apiVersion = "20131101";

// ! 전역 변수

let bookList = [];

let callback = [];

let data = "";


// ! get 함수

const getList = async () => {

        console.log("get list");

        url.searchParams.set("Query",query);
        url.searchParams.set("QueryType",queryType);
        url.searchParams.set("MaxResult",maxResults);
        url.searchParams.set("start",resultStart);
        url.searchParams.set("SearchTarget",SearchTarget);
        url.searchParams.set("output",outputStyle);
        url.searchParams.set("Version",apiVersion);

        const response = await fetch(url);

        const data = await response.json();
        
        console.log("ddd",data);

}

// ! 실행영역

console.log("run");


// ! JSONP 테스트

const testJSONP = () => {
        
//         $.ajax({
//         url: url,
//         dataType: 'jsonp',
//         jsonpCallback: "myCallback",
//         success: callback
//       });

//       console.log(myCallback);

        $.getJSON(url + "?callback=?", data, callback);

};

//       $.getJSON(url + "?callback=?", data, callback);

const testScript = () => {
        var script = document.createElement('script');
        script.src = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttblusci2359001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

        document.getElementsByTagName('head')[0].appendChild(script);

        function myCallback(data){
        //callback method
        }

}