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
            option.addEventListener('mouseover', function() {
                document.querySelectorAll(".our_card").forEach(removeActive => {
                    removeActive.classList.remove("active")
                })
                option.classList.add("active")
            })
        })
      
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
    var fullTxt = Array.from(this.toRotate[i]).slice(0, this.toRotate[i].length).join('');
  
    if (this.isDeleting) {
      let max = this.txt.length === fullTxt.length ? 4 : 1
      this.txt = Array.from(fullTxt).slice(0, this.txt.length - max).join('')
    } else {
      this.txt = Array.from(fullTxt).slice(0, this.txt.length + 1).join('')
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt.length === fullTxt.length) {
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