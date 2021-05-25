        var cust__order = [];
        var cust_order = '';
        
        var total = 0;
      


        //Cat1
        function submitCat1Item1 (){
            var order = {
                prod_name: "K-Chicken Burger",
                prod_price: 160,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat1Item1'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat1Item1()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat1Item1 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "K-Chicken Burger") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 160;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat1Item1").remove();
                }
            }
        }
        
        function submitCat1Item2 (){
            var order = {
                prod_name: "K-Beef Burger",
                prod_price: 160,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat1Item2'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat1Item2()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat1Item2 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "K-Beef Burger") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 160;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat1Item2").remove();
                }
            }
        }

        function submitCat1Item3 (){
            var order = {
                prod_name: "Ultimate Burger McShare",
                prod_price: 499,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat1Item3'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat1Item3()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat1Item3 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Ultimate Burger McShare") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 499;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat1Item3").remove();
                }
            }
        }

        function submitCat1Item4 (){
            var order = {
                prod_name: "Strawberry Banana Sundae",
                prod_price: 35,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat1Item4'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat1Item4()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat1Item4 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Strawberry Banana Sundae") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 35;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat1Item4").remove();
                }
            }
        }

        function submitCat1Item5 (){
            var order = {
                prod_name: "K-Chicken Burger Meal",
                prod_price: 206,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat1Item5'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat1Item5()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat1Item5 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "K-Chicken Burger Meal") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 206;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat1Item5").remove();
                }
            }
        }
    
        function submitCat1Item6 (){
            var order = {
                prod_name: "K-Beef Burger Meal",
                prod_price: 206,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat1Item6'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat1Item6()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat1Item6 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "K-Beef Burger Meal") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 206;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat1Item6").remove();
                }
            }
        }



        //Cat 2
        function submitCat2Item1 (){
            var order = {
                prod_name: "Sausage w/ Egg & Hash Browns Rice Bowl",
                prod_price: 154,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat2Item1'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat2Item1()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat2Item1 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Sausage w/ Egg & Hash Browns Rice Bowl") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 154;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat2Item1").remove();
                }
            }
        }
        
        function submitCat2Item2 (){
            var order = {
                prod_name: "Longganisa w/ Egg & Hash Browns Rice Bowl",
                prod_price: 154,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat2Item2'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat2Item2()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat2Item2 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Longganisa w/ Egg & Hash Browns Rice Bowl") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 154;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat2Item2").remove();
                }
            }
        }

        function submitCat2Item3 (){
            var order = {
                prod_name: "2pc. Hotcakes",
                prod_price: 73,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat2Item3'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat2Item3()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat2Item3 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "2pc. Hotcakes") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 73;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat2Item3").remove();
                }
            }
        }

        function submitCat2Item4 (){
            var order = {
                prod_name: "Cheesy Eggdesal w/ Hashbrown",
                prod_price: 95,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat2Item4'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat2Item4()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat2Item4 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Cheesy Eggdesal w/ Hashbrown") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 95;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat2Item4").remove();
                }
            }
        }

        function submitCat2Item5 (){
            var order = {
                prod_name: "Big Breakfast",
                prod_price: 157,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat2Item5'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat2Item5()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat2Item5 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Big Breakfast") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 157;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat2Item5").remove();
                }
            }
        }
    
        function submitCat2Item6 (){
            var order = {
                prod_name: "Egg McMuffin w/ Hashbrown",
                prod_price: 135,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat2Item6'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat2Item6()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat2Item6 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Egg McMuffin w/ Hashbrown") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 135;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat2Item6").remove();
                }
            }
        }


        //Cat 3
        function submitCat3Item1 (){
            var order = {
                prod_name: "20 pc. McNugget w/ FREE Lipton",
                prod_price: 370,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat3Item1'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat3Item1()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat3Item1 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "20 pc. McNugget w/ FREE Lipton") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 370;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat3Item1").remove();
                }
            }
        }
        
        function submitCat3Item2 (){
            var order = {
                prod_name: "6 pc. Chicken McShare w/ FREE Lipton",
                prod_price: 330,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat3Item2'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat3Item2()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat3Item2 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "6 pc. Chicken McShare w/ FREE Lipton") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 330;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat3Item2").remove();
                }
            }
        }

        function submitCat3Item3 (){
            var order = {
                prod_name: "8 pc. Chicken McShare w/ FREE Lipton",
                prod_price: 440,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat3Item3'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat3Item3()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat3Item3 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "8 pc. Chicken McShare w/ FREE Lipton") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 440;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat3Item3").remove();
                }
            }
        }

        function submitCat3Item4 (){
            var order = {
                prod_name: "Snack Burger McShare x/ FREE Lipton",
                prod_price: 330,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat3Item4'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat3Item4()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat3Item4 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Snack Burger McShare x/ FREE Lipton") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 330;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat3Item4").remove();
                }
            }
        }

        function submitCat3Item5 (){
            var order = {
                prod_name: "Ultimate Burger McShare",
                prod_price: 499,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat3Item5'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat3Item5()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat3Item5 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Ultimate Burger McShare") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 499;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat3Item5").remove();
                }
            }
        }

        function submitCat3Item6 (){
            var order = {
                prod_name: "BFF Fries 'N McFloat Combo",
                prod_price: 221,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat3Item6'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat3Item6()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat3Item6 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "BFF Fries 'N McFloat Combo") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 221;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat3Item6").remove();
                }
            }
        }



        //Cat 4
        function submitCat4Item1 (){
            var order = {
                prod_name: "Chocolate Shake",
                prod_price: 94,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat4Item1'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat4Item1()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat4Item1 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Chocolate Shake") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 94;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat4Item1").remove();
                }
            }
        }
        
        function submitCat4Item2 (){
            var order = {
                prod_name: "Strawberry Shake",
                prod_price: 94,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat4Item2'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat4Item2()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat4Item2 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Strawberry Shake") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 94;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat4Item2").remove();
                }
            }
        }

        function submitCat4Item3 (){
            var order = {
                prod_name: "Fries",
                prod_price: 55,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat4Item3'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat4Item3()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat4Item3 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Fries") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 55;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat4Item3").remove();
                }
            }
        }

        function submitCat4Item4 (){
            var order = {
                prod_name: "BFF Fries",
                prod_price: 134,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat4Item4'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat4Item4()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat4Item4 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "BFF Fries") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 134;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat4Item4").remove();
                }
            }
        }

        function submitCat4Item5 (){
            var order = {
                prod_name: "Hashbrown",
                prod_price: 37,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat4Item5'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat4Item5()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat4Item5 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "Hashbrown") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 37;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat4Item5").remove();
                }
            }
        }

        function submitCat4Item6 (){
            var order = {
                prod_name: "McCrsipy Chicken Fillet w/ Rice and Egg",
                prod_price: 106,
            };
            cust__order.unshift(order);
            total +=cust__order[0].prod_price;
            document.getElementById("checkout").innerHTML += "<li class='list-group-item' id='checkOutCat4Item6'><strong>" + cust__order[0].prod_name + "</strong><br>" + cust__order[0].prod_price + " <span class='red' ONMOUSEOVER='this.style.cursor=\"pointer\"' onclick='removeCat4Item6()'>Remove</span></li>";
            document.getElementById("totaL").innerHTML = total;
        }
        
        function removeCat4Item6 (){
            for( var i = 0; i < cust__order.length; i++){ 
                                   
            if ( cust__order[i].prod_name === "McCrsipy Chicken Fillet w/ Rice and Egg") { 
                cust__order.splice(i, 1); 
                i--; 
                if(total > 0){
                total = total - 106;
                }
                document.getElementById("totaL").innerHTML = total;
                $("#checkOutCat4Item6").remove();
                }
            }
        }
    
        function finalCheckOut(){
            cust_order = JSON.stringify(cust__order);
        
            document.getElementById('hidden').value = cust_order;
        }
		
		/*Fade in*/
		
		