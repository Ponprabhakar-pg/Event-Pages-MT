var res

  scrap("events")


var com_cont=document.getElementById("events")
if(res.length%2==0){
    var i=0
    for(i=0;i<res.length;i++){
        com_cont.innerHTML+=`<div class="row">
        <div id="container" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">Know More</span></button>
              </a>
            </div>
          </div>
          <div class="product-image">
            <img src="`+res[i]['image']+`" alt="">
            <div class="info">
              <h2 style="text-decoration: ivory;"> Description</h2>
              <ul>
                <li><strong>Date: </strong> `+res[i]["date"]+`</li>
                <li><strong>Time: </strong> `+res[i]["time"]+`</li>
                <li><strong>Speaker: </strong> `+res[i]["speaker"]+`</li>
                <li><strong><a href="#"> Tribe: </strong> `+res[i]["community"]+`</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="container" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i+1]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">Know More</span></button>
              </a>
            </div>
          </div>
          <div class="product-image">
            <img src="`+res[i+1]['image']+`" alt="">
            <div class="info">
              <h2 style="text-decoration: ivory;"> Description</h2>
              <ul>
                <li><strong>Date: </strong> `+res[i+1]["date"]+`</li>
                <li><strong>Time: </strong> `+res[i+1]["time"]+`</li>
                <li><strong>Speaker: </strong> `+res[i+1]["speaker"]+`</li>
                <li><strong><a href="#"> Tribe: </strong> `+res[i+1]["community"]+`</a></li>
              </ul>
            </div>
          </div>
        </div>     
      </div>`
        i=i+1
    }
}
else if(res.length%2==1){
    var i=0
    for(i=0;i<res.length-1;i++){
        com_cont.innerHTML+=`<div class="row">
        <div id="container" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">Know More</span></button>
              </a>
            </div>
          </div>
          <div class="product-image">
            <img src="`+res[i]['image']+`" alt="">
            <div class="info">
              <h2 style="text-decoration: ivory;"> Description</h2>
              <ul>
                <li><strong>Date: </strong> `+res[i]["date"]+`</li>
                <li><strong>Time: </strong> `+res[i]["time"]+`</li>
                <li><strong>Speaker: </strong> `+res[i]["speaker"]+`</li>
                <li><strong><a href="#"> Tribe: </strong> `+res[i]["community"]+`</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="container" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i+1]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">Know More</span></button>
              </a>
            </div>
          </div>
          <div class="product-image">
            <img src="`+res[i+1]['image']+`" alt="">
            <div class="info">
              <h2 style="text-decoration: ivory;"> Description</h2>
              <ul>
                <li><strong>Date: </strong> `+res[i+1]["date"]+`</li>
                <li><strong>Time: </strong> `+res[i+1]["time"]+`</li>
                <li><strong>Speaker: </strong> `+res[i+1]["speaker"]+`</li>
                <li><strong><a href="#"> Tribe: </strong> `+res[i+1]["community"]+`</a></li>
              </ul>
            </div>
          </div>
        </div>   
      </div>`
        i=i+1
    }
    com_cont.innerHTML+=`<div class="row">
    <div id="container" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">Know More</span></button>
              </a>
            </div>
          </div>
          <div class="product-image">
            <img src="`+res[i]['image']+`" alt="">
            <div class="info">
              <h2 style="text-decoration: ivory;"> Description</h2>
              <ul>
                <li><strong>Date: </strong> `+res[i]["date"]+`</li>
                <li><strong>Time: </strong> `+res[i]["time"]+`</li>
                <li><strong>Speaker: </strong> `+res[i]["speaker"]+`</li>
                <li><strong><a href="#"> Tribe: </strong> `+res[i]["community"]+`</a></li>
              </ul>
            </div>
          </div>
        </div>      
  </div>`

}


function scrap(col){
  //Using Ajax and getting data from the given website
  let xhr = new XMLHttpRequest();
  xhr.open('POST','https://makers-tribe.herokuapp.com/infoCommunity',false);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  xhr.onreadystatechange = function(){
      if(xhr.readyState==4 && xhr.status==200){
          res=JSON.parse(xhr.responseText);
      }
  }
  xhr.send("colname="+col);
}





