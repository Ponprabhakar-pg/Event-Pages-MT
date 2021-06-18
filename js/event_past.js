// var com_name=["Maker'sTribe","Chennai Freelancers Club","Trekking Community","IoT Community(IFA)","Cycling","Kafka","Art & Crafts","Dev Community","3-D Printing","Job Scanner","Skill Development","Readers community","Tamil Mandram","Startup Community","Writers community","Lifestyle","Elastic Search","Open Source Community","Story Telling","AI & ML","Digital Marketing","Cyber Security","Networking","Graphic Designing","Musical Jam","Travel Diaries"]
// var com_details=["A community platform for Creators and Innovators.","Come meet fellow Freelancers, network and share the opportunities and stories. Aspiring Freelancers are also Welcome!","Rock your trek, with Right people.","A community that can make any device smart!","Let's fall in love with the chains that sets us free!","","Create and Innovate with us!","Meet the Digital Gods here!","Let's Bring it Real!","A perfect place to scan the perfect Candidate and to be scanned by employer.","You are not born with Skills, but you can acquire it!","Read like breathing air, to Fill up and Live.","Ulagathin Mudhan mozhiyai Uyirena kapom!","Kick-off your entrepreneurial journey!","","Let's not compromise in making our life a masterpiece!","","Contribute, Collaborate and Create","We have all got a story, what's yours?","Welcome to the era of brainy machines!","","Be a part of making the internet world safer!","A community of networking professionals and enthusiasts!","Community that makes communication easier with visual designs!","Music is Magic to the ears! Come spend the evening and enjoy the performance of the band.","Listen to exciting Travel stories and share your experience as well. Inspire and get inspired to pack your bags!"]
var res

  scrap("events")


var com_cont=document.getElementById("events")
console.log(res.length)
if(res.length%2==0){
    var i=0
    for(i=0;i<res.length;i++){
      console.log(i);
        com_cont.innerHTML+=`<div class="row">
        <div id="container" id="Technical" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">KNOW MORE</span></button>
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
        <div id="container" id="Technical" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i+1]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">KNOW MORE</span></button>
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
        <div id="container" id="Technical" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">KNOW MORE</span></button>
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
        <div id="container" id="Technical" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i+1]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">KNOW MORE</span></button>
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
    <div id="container" id="Technical" class="col-sm-12 col-md-5 col-lg-5"  >	
          <div class="product-details">
            <h1>`+res[i]['event_topic']+`</h1>
            <div class="control"><br>
              <a href="#"><button class="btn">
                <span class="buy">KNOW MORE</span></button>
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
          console.log(res[0]["description"]);
          console.log(res[0]);
      }
  }
  xhr.send("colname="+col);
}





function uploadExcel(){
  window.location.replace('upload_excel.html')
}




// document.querySelector("#excel").addEventListener('click', function(){
//   Swal.fire("Our First Alert");
// });