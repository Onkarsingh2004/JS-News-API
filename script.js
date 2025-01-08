const key="bd700beb966ef93d311741e327a196fa"
const surl="https://gnews.io/api/v4/search?apikey="+key+"&q="
const nurl="https://gnews.io/api/v4/top-headlines?apikey="+key+"&category="
function searchNews(e){
    e.preventDefault()
    $('#result').empty()
    let q = $("#query").val()
    let req_url=surl+q;
    let txt=""
    $.getJSON(req_url,function (data){
       $.each(data.articles, function(i,article){
           txt+=`<div class="col-md-6  mb-3">
           <div class="card">
  <img src="${article.image}" class="card-img-top" alt="..." height="300px">
  <div class="card-body">
    <h5 class="card-title">${article.title}</h5>
    <p class="card-text">${article.description}</p>
    <a href="${article.url}" class="btn btn-danger">Read Full Article</a>
  </div>
</div>
           </div>`
       })
       $('#result').append(txt)
    })
   }




   function getNews(type){
    $('#result').empty()
    let req_url=nurl+type;
    let txt=""
    $.getJSON(req_url,function (data){
       $.each(data.articles, function(i,article){
           txt+=`<div class="col-md-6  mb-3">
           <div class="card">
  <img src="${article.image}" class="card-img-top" alt="..." height="300px">
  <div class="card-body">
    <h5 class="card-title">${article.title}</h5>
    <p class="card-text">${article.description}</p>
    <a href="${article.url}" class="btn btn-danger">Read Full Article</a>
  </div>
</div>
           </div>`
       })
       $('#result').append(txt)
    })
   }
   