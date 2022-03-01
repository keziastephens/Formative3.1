console.log("i am linked")

let key = "07469bfb1652c11f885351bf40c8491c";

function allNews(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                
                
                }
            };

        
        }
    })
    
}

document.getElementById("topHeadlines").addEventListener("click", allNews);
allNews();


function america(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?country=us&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            };


        }

        
    })
}

document.getElementById("us").addEventListener("click", america);
america();

function unitedKingdom(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?country=gb&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            };
        }
    })
}

document.getElementById("gb").addEventListener("click", unitedKingdom);
unitedKingdom();

function france(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?country=fr&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            };
        }
    })
}

document.getElementById("fr").addEventListener("click", france);
france();

function canada(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?country=ca&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            };
        }
    })
}

document.getElementById("ca").addEventListener("click", canada);
canada();

function japan(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?country=ja&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            };
        }
    })
}

document.getElementById("ja").addEventListener("click", japan);
japan();

function australia(){
    $.ajax({
        type:"GET",
        url: "https://gnews.io/api/v4/top-headlines?country=au&token=" + key,
        success:function(data){
            document.getElementById("cardContainer").innerHTML = "";
            let i = 0;
                for(i = 0; i < data.articles.length; i++){
                    console.log(data.articles[i])
                    console.log(data.articles[i].image)
                
                
            // console.log(data);
            displayCard();
            function displayCard(){
                
                // let i = 0;
                // for(i = 0; i < data.articles.length; i++);
                // console.log(data.articles[i])
                // console.log(data.articles[i].title);
                    $("#cardContainer").append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img src="${data.articles[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-publisher"><small>${data.articles[i].source.name}</small></p>
                                <h5 class="card-title">${data.articles[i].title}</h5>
                                <p class="card-text">${data.articles[i].description}</p>                            
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <p class="card-content__accordion">${data.articles[i].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            };
        }
    })
}

document.getElementById("au").addEventListener("click", australia);
australia();

function newsHeader(){
    $("topNewsHeader").append(
        `
        <h1 class="topnews-text">Top News</h1>
        `
    )


}    
newsHeader();



