$(document).ready(function(){
    $("#pic0").show();
    $("#pic1").show();
    $("#pic2").show();


    const urlDisplay = "https://newsapi.org/v2/top-headlines?country=us&apiKey=be3add4abc4c45e4a4b92c7a6e90be20"
    

$.ajax({
    url: urlDisplay,
    success: function (data) {
        console.log(data)
        
        const displayTitle0 = data.articles[0].title
        $("#displayArticle0").html(displayTitle0)
        
        const displaySource0 = data.articles[0].source.name
        $("#displaySource0").html(displaySource0)

        const displayDes0 = data.articles[0].description
        $("#displayDes0").html(displayDes0)

        const picOfArticle0 = data.articles[0].urlToImage
        $("#pic0").attr('src', picOfArticle0)

        const articleDis0 = data.articles[0].url
        $("#webU0").attr("href",articleDis0).html("View article")

        




        const displayTitle1 = data.articles[1].title
        $("#displayArticle1").html(displayTitle1)

        const displaySource1 = data.articles[1].source.name
        $("#displaySource1").html(displaySource1)
        
        const displayDes1 = data.articles[1].description
        $("#displayDes1").html(displayDes1)
        
        const picOfArticle1 = data.articles[1].urlToImage
        $("#pic1").attr('src', picOfArticle1)
       
        const articleDis1 = data.articles[1].url
        $("#webU1").attr("href",articleDis1).html("View article")





        const displayTitle2 = data.articles[2].title
        $("#displayArticle2").html(displayTitle2)

        const displaySource2 = data.articles[2].source.name
        $("#displaySource2").html(displaySource2)

        const displayDes2 = data.articles[2].description
        $("#displayDes2").html(displayDes2)

        const articleDis2 = data.articles[2].url
        $("#webU2").attr("href",articleDis2).html("View article")

        const picOfArticle2 = data.articles[2].urlToImage
        $("#pic2").attr('src', picOfArticle2);






        // const featuredTitle1 = data.articles[2].title
        // $("#featuredTitle").html(featuredTitle1)
        
        // const featuredDes1 = data.articles[2].description
        // $("#featuredDes1").html(featuredDes1)
        
        // const featuredPic = data.articles[2].urlToImage
        // $("#featuredPic").attr('src', featuredPic)
       
        // const featuredUrl = data.articles[2].url
        // // console.log(articleDis1)
        // $("featuredU").attr("href",featuredU).html(" View article")
      
    },
    error: function (request, error) {

        console.log(error)
        console.log(request)

    }
  
});
});