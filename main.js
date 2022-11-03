//responsive menu

var small_menu = document.querySelector('.toggle_menu')
        var menu = document.querySelector('.menu')
    
        small_menu.onclick = function(){
             small_menu.classList.toggle('active');
             menu.classList.toggle('responsive');
        }

//slider
        const options = document.querySelectorAll(".our_card")
        console.log(options)
        options.forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll(".our_card").forEach(removeActive => {
                    removeActive.classList.remove("active")
                })
                option.classList.add("active")
            })
        })
  //filtreur d'articles("tous");
        function filterarticles(c){
          console.log(c)
          document.querySelectorAll('.card').forEach(function(article) {
           console.log(article)
           if(c == 'all') {
             article.style.display = 'block';
           }
           else if(article.classList.contains(c)) {
             article.style.display = 'block';
           } else {
             article.style.display = 'none';
           }
         })
     
          /*var x,i;
         x = document.getElementsByClassName("card");
          if (c == "all") c = ""
          for (i = 0; i< x.length; i++) {
            removeClass(x[i], "show");
            if(x[i].className.indexOf(c)> -1) addClass(x[i],"show");
          }*/
        }
      
//animation text JS

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };