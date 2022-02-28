console.log("i am linked")

let key = "07469bfb1652c11f885351bf40c8491c";

let url = "https://gnews.io/api/v4/top-headlines?country=gb&token=" + key;

$.ajax({
    type:"GET",
    url:url,
    success:function(data){
        let i = 0;
            for(i = 0; i < data.articles.length; i++){
                console.log(data.articles[i])
            };
            
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
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
            )
        }
    }
})