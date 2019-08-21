function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };
  
  
  
// https://youtube.com
// icann.org
// www.xakep.ru
console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("https://youtube.com"))
console.log(domainName("icann.org"))
console.log(domainName("www.xakep.ru"))