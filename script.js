console.log("i am linked")

let key = "07469bfb1652c11f885351bf40c8491c";

let url = "https://gnews.io/api/v4/top-headlines?country=us&token=" + key;

$.ajax({
    type:"GET",
    url:url,
    success:function(data){
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
                            <p><small>${data.articles[i].source.name}</small></p>
                            <h5 class="card-title">${data.articles[i].title}</h5>
                            <p class="card-text">${data.articles[i].description}.</p>                            
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Read More
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <p>${data.articles[i].content}</p>
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