/**
 * Created by Json on 2014/8/1.
 */
(function() {
    var pages = document.querySelectorAll(".page");
    // var layout = document.querySelector("#layout");
    var template = Z.HTMLTemplate(document.getElementById("template"));

    Z.loopArray(pages, function(page, i) {
        page.onCut = function() {
            page.style.removeProperty("z-index");
            page.style.removeProperty("-webkit-transform");
            page.style.removeProperty("transform");
            i == 0 && page.querySelector(".page1-cloud3").classList.remove("hide");
            page.classList.add("animate");
        };
        page.onRemove = function() {
            page.classList.remove("animate");
        };
    });

    function setPage1(page) {
        var resource = [ "img/picture1.jpg", "img/picture2.jpg","img/picture3.jpg",
        "img/picture4.jpg","img/picture5.jpg","img/picture6.jpg",];
        var pic = page.querySelector(".page5-pic");
        Z.loopArray(resource, function(src) {
            var border = Z.element("div", {
                classList: "page5-border"
            }, pic);
            var img = new Image();
            img.src = src;
            border.appendChild(img);
        });

        Z.onSwipeStartH(document.body, function(e) {
            var borders = pic.querySelectorAll(".page5-border");
            if (e.direction) {
                // 向右滑
                borders[0].classList.add("remove-right");
                setTimeout(function() {
                    pic.removeChild(borders[0]);
                    pic.appendChild(borders[0]);
                    borders[0].classList.remove("remove-right");
                }, 300);
            } else {
                // 向左滑
                borders[0].classList.add("remove-left");
                setTimeout(function() {
                    pic.removeChild(borders[0]);
                    pic.appendChild(borders[0]);
                    borders[0].classList.remove("remove-left");
                }, 300);
            }
        }, {});
    }

    setTimeout(function() {
        setPage1(pages[0]);
    }, 10);



    setTimeout(function() {
        document.body.removeChild(document.querySelector(".page-loading"));
        rs.ScreenSystem(document.getElementById("layout"));
    }, 3500);


})();

