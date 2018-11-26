$(document).ready(function () {
    $("img").hide();
    $(".button").hide();
    $("#articleFields").hide()
    $("#arrowSearch").hide()


    $("#searchWord").click(function () {

        const article = $("#textBox").val()
        const apiKey = "be3add4abc4c45e4a4b92c7a6e90be20"


        const url = "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com,news.vice.com,abcnews.go.com,apnews.com,buzzfeed.com,time.com,cbsnews.com,techradar.com,foxnews.com,msnbc.com,nbcnews.com,washingtonpost.com,techcrunch.com,huffingtonpost.com,nationalgeographic.com,mtv.com/news,news.google.com,usatoday.com/news,bbc.co.uk/news&apiKey=" + apiKey + "&" + "q=" + article

        console.log(url)
        M.toast({html: 'Scroll away!'})


        $.ajax({

            url: url,
            success: function (data) {
                console.log(data)
                $(".button").show();
                $("img").show();
                $("#articleFields").show()
                $("#arrowSearch").show()



                // $(".articlePic").show();

                ////////////////////////////////////////Row 0 //////////////////////////////////////////////////////

                const article0 = data.articles[0].title
                console.log(article0)
                $("#headline0").html(article0)
                const article0date = data.articles[0].publishedAt
                $("#date0").html(article0date)
                const article0content = data.articles[0].content
                $("#description0").html(article0content)
                const article0source = data.articles[0].source.name
                $("#source0").html(article0source)
                const picOfArticle00 = data.articles[0].urlToImage
                $("#pic00").attr('src', picOfArticle00)
                const article0url = data.articles[0].url
                $("#weburl0").attr("href", article0url).html("View Article")


                //             let pic00 = document.createElement('IMG');

                // // can load any script, from any domain
                // img.src = data.articles[0].urlToImage
                // document.head.append(pic00);
                // script.onload = function() {
                //   // the script creates a helper function "_"
                //   alert("search"); // the function is available
                // };

                // const image = document.createElement("IMG")
                // article00 = data.articles[0].urlToImage
                // image.src = pic00
                // $("#pic00").appendTo.html(image)


                const article1 = data.articles[1].title
                console.log(article1)
                $("#headline1").html(article1)
                const article1date = data.articles[1].publishedAt
                $("#date1").html(article1date)
                const article1content = data.articles[1].content
                $("#description1").html(article1content)
                const article1source = data.articles[1].source.name
                $("#source1").html(article1source)
                const article1url = data.articles[1].url
                $("#weburl1").attr("href", article1url).html("View Article")
                const picOfArticle01 = data.articles[1].urlToImage
                $("#pic01").attr('src', picOfArticle01)



                ////////////////////////////////////////Row 1 //////////////////////////////////////////////////////

                const article2 = data.articles[2].title
                console.log(article2)
                $("#headline2").html(article2)
                const article2date = data.articles[2].publishedAt
                $("#date2").html(article2date)
                const article2content = data.articles[2].content
                $("#description2").html(article2content)
                const article2source = data.articles[2].source.name
                $("#source2").html(article2source)
                const article2url = data.articles[2].url
                $("#weburl2").attr("href", article2url).html("View Article")
                const picOfArticle02 = data.articles[2].urlToImage
                $("#pic02").attr('src', picOfArticle02)


                const article3 = data.articles[3].title
                console.log(article3)
                $("#headline3").html(article3)
                const article3date = data.articles[3].publishedAt
                $("#date3").html(article3date)
                const article3content = data.articles[3].content
                $("#description3").html(article3content)
                const article3source = data.articles[3].source.name
                $("#source3").html(article3source)
                const article3url = data.articles[3].url
                $("#weburl3").attr("href", article3url).html("View Article")
                const picOfArticle3 = data.articles[3].urlToImage
                $("#pic3").attr('src', picOfArticle3)


                ////////////////////////////////////////Row 2 //////////////////////////////////////////////////////

                const article4 = data.articles[4].title
                console.log(article4)
                $("#headline4").html(article4)
                const article4date = data.articles[4].publishedAt
                $("#date4").html(article4date)
                const article4content = data.articles[4].content
                $("#description4").html(article4content)
                const article4source = data.articles[4].source.name
                $("#source4").html(article4source)
                const article4url = data.articles[4].url
                $("#weburl4").attr("href", article4url).html("View Article")
                const picOfArticle4 = data.articles[4].urlToImage
                $("#pic4").attr('src', picOfArticle4)



                const article5 = data.articles[5].title
                console.log(article5)
                $("#headline5").html(article5)
                const article5date = data.articles[5].publishedAt
                $("#date5").html(article5date)
                const article5content = data.articles[5].content
                $("#description5").html(article5content)
                const article5source = data.articles[5].source.name
                $("#source5").html(article5source)
                const article5url = data.articles[5].url
                $("#weburl5").attr("href", article5url).html("View Article")
                const picOfArticle5 = data.articles[5].urlToImage
                $("#pic5").attr('src', picOfArticle5)

                ////////////////////////////////////////Row 3 //////////////////////////////////////////////////////

                const article6 = data.articles[6].title
                console.log(article6)
                $("#headline6").html(article6)
                const article6date = data.articles[6].publishedAt
                $("#date6").html(article6date)
                const article6content = data.articles[6].content
                $("#description6").html(article6content)
                const article6source = data.articles[6].source.name
                $("#source6").html(article6source)
                const article6url = data.articles[6].url
                $("#weburl6").attr("href", article6url).html("View Article")
                const picOfArticle6 = data.articles[6].urlToImage
                $("#pic6").attr('src', picOfArticle6)



                const article7 = data.articles[7].title
                console.log(article7)
                $("#headline7").html(article7)
                const article7date = data.articles[7].publishedAt
                $("#date7").html(article7date)
                const article7content = data.articles[7].content
                $("#description7").html(article7content)
                const article7source = data.articles[7].source.name
                $("#source7").html(article7source)
                const article7url = data.articles[7].url
                $("#weburl7").attr("href", article7url).html("View Article")
                const picOfArticle7 = data.articles[7].urlToImage
                $("#pic7").attr('src', picOfArticle7)

                ////////////////////////////////////////Row 4 //////////////////////////////////////////////////////

                const article8 = data.articles[8].title
                console.log(article8)
                $("#headline8").html(article8)
                const article8date = data.articles[8].publishedAt
                $("#date8").html(article8date)
                const article8content = data.articles[8].content
                $("#description8").html(article8content)
                const article8source = data.articles[8].source.name
                $("#source8").html(article8source)
                const article8url = data.articles[8].url
                $("#weburl8").attr("href", article8url).html("View Article")
                const picOfArticle8 = data.articles[8].urlToImage
                $("#pic8").attr('src', picOfArticle8)


                const article9 = data.articles[9].title
                console.log(article9)
                $("#headline9").html(article9)
                const article9date = data.articles[9].publishedAt
                $("#date9").html(article9date)
                const article9content = data.articles[9].content
                $("#description9").html(article9content)
                const article9source = data.articles[9].source.name
                $("#source9").html(article9source)
                const article9url = data.articles[9].url
                $("#weburl9").attr("href", article9url).html("View Article")
                const picOfArticle9 = data.articles[9].urlToImage
                $("#pic9").attr('src', picOfArticle9)


                /////////////////////////////////////Row 5 //////////////////////////////////////////////////////
                const article10 = data.articles[10].title
                console.log(article10)
                $("#headline10").html(article10)
                const article10date = data.articles[10].publishedAt
                $("#date10").html(article10date)
                const article10content = data.articles[10].content
                $("#description10").html(article10content)
                const article10source = data.articles[10].source.name
                $("#source10").html(article10source)
                const article10url = data.articles[10].url
                $("#weburl10").attr("href", article10url).html("View Article")
                const picOfArticle10 = data.articles[10].urlToImage
                $("#pic10").attr('src', picOfArticle10)



                const article11 = data.articles[11].title
                console.log(article11)
                $("#headline11").html(article11)
                const article11date = data.articles[11].publishedAt
                $("#date11").html(article11date)
                const article11content = data.articles[11].content
                $("#description11").html(article11content)
                const article11source = data.articles[11].source.name
                $("#source11").html(article11source)
                const article11url = data.articles[11].url
                $("#weburl11").attr("href", article11url).html("View Article")
                const picOfArticle11 = data.articles[11].urlToImage
                $("#pic11").attr('src', picOfArticle11)




                /////////////////////////////////////Row 6 ////////////////////////////////////////////////////
                const article12 = data.articles[12].title
                console.log(article12)
                $("#headline12").html(article12)
                const article12date = data.articles[12].publishedAt
                $("#date12").html(article12date)
                const article12content = data.articles[12].content
                $("#description12").html(article12content)
                const article12source = data.articles[12].source.name
                $("#source12").html(article12source)
                const article12url = data.articles[12].url
                $("#weburl12").attr("href", article12url).html("View Article")
                const picOfArticle12 = data.articles[12].urlToImage
                $("#pic12").attr('src', picOfArticle12)


                const article13 = data.articles[13].title
                console.log(article13)
                $("#headline13").html(article13)
                const article13date = data.articles[13].publishedAt
                $("#date13").html(article13date)
                const article13content = data.articles[13].content
                $("#description13").html(article13content)
                const article13source = data.articles[13].source.name
                $("#source13").html(article13source)
                const article13url = data.articles[13].url
                $("#weburl13").attr("href", article13url).html("View Article")
                const picOfArticle13 = data.articles[13].urlToImage
                $("#pic13").attr('src', picOfArticle13)


                /////////////////////////////////////Row 7 ////////////////////////////////////////////////////
                const article14 = data.articles[14].title
                console.log(article14)
                $("#headline14").html(article14)
                const article14date = data.articles[14].publishedAt
                $("#date14").html(article14date)
                const article14content = data.articles[14].content
                $("#description14").html(article14content)
                const article14source = data.articles[14].source.name
                $("#source14").html(article14source)
                const article14url = data.articles[14].url
                $("#weburl14").attr("href", article14url).html("View Article")
                const picOfArticle14 = data.articles[14].urlToImage
                $("#pic14").attr('src', picOfArticle14)



                const article15 = data.articles[15].title
                console.log(article15)
                $("#headline15").html(article15)
                const article15date = data.articles[15].publishedAt
                $("#date15").html(article15date)
                const article15content = data.articles[15].content
                $("#description15").html(article15content)
                const article15source = data.articles[15].source.name
                $("#source15").html(article15source)
                const article15url = data.articles[15].url
                $("#weburl15").attr("href", article15url).html("View Article")
                const picOfArticle15 = data.articles[15].urlToImage
                $("#pic15").attr('src', picOfArticle15)

                /////////////////////////////////////Row 8 ////////////////////////////////////////////////////
                const article16 = data.articles[16].title
                console.log(article16)
                $("#headline16").html(article16)
                const article16date = data.articles[16].publishedAt
                $("#date16").html(article16date)
                const article16content = data.articles[16].content
                $("#description16").html(article16content)
                const article16source = data.articles[16].source.name
                $("#source16").html(article16source)
                const article16url = data.articles[16].url
                $("#weburl16").attr("href", article16url).html("View Article")
                const picOfArticle16 = data.articles[16].urlToImage
                $("#pic16").attr('src', picOfArticle16)

                const article17 = data.articles[17].title
                console.log(article17)
                $("#headline17").html(article17)
                const article17date = data.articles[17].publishedAt
                $("#date17").html(article17date)
                const article17content = data.articles[17].content
                $("#description17").html(article17content)
                const article17source = data.articles[17].source.name
                $("#source17").html(article17source)
                const article17url = data.articles[17].url
                $("#weburl17").attr("href", article17url).html("View Article")
                const picOfArticle17 = data.articles[17].urlToImage
                $("#pic17").attr('src', picOfArticle17)


                /////////////////////////////////////Row 9 ////////////////////////////////////////////////////
                const article18 = data.articles[18].title
                console.log(article18)
                $("#headline18").html(article18)
                const article18date = data.articles[18].publishedAt
                $("#date18").html(article18date)
                const article18content = data.articles[18].content
                $("#description18").html(article18content)
                const article18source = data.articles[18].source.name
                $("#source18").html(article18source)
                const article18url = data.articles[18].url
                $("#weburl18").attr("href", article18url).html("View Article")
                const picOfArticle18 = data.articles[18].urlToImage
                $("#pic18").attr('src', picOfArticle18)

                const article19 = data.articles[19].title
                console.log(article19)
                $("#headline19").html(article19)
                const article19date = data.articles[19].publishedAt
                $("#date19").html(article19date)
                const article19content = data.articles[19].content
                $("#description19").html(article19content)
                const article19source = data.articles[19].source.name
                $("#source19").html(article19source)
                const article19url = data.articles[19].url
                $("#weburl19").attr("href", article19url).html("View Article")
                const picOfArticle19 = data.articles[19].urlToImage
                $("#pic19").attr('src', picOfArticle19)


            },
            error: function (request, error) {

                console.log(error)
                console.log(request)

            }

        });


    });


})

