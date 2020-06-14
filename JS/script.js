        //Khi người dùng cuộn chuột thì gọi hàm scrollFunction
        window.onscroll = function() {
            scrollFunction()
        };
        // khai báo hàm scrollFunction
        function scrollFunction() {
            // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                //nếu lớn hơn 200px thì hiện button
                document.getElementById("scrollToTop").style.display = "block";
            }
            else {
                //nếu nhỏ hơn 200px thì ẩn button
                document.getElementById("scrollToTop").style.display = "none";
            }
        }
        
        function scrollToTop() {
            var position = document.body.scrollTop || document.documentElement.scrollTop;
            if (position) {
                window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
                scrollAnimation = setTimeout("scrollToTop()", 30);
            } 
            else clearTimeout(scrollAnimation);
        }