$(document).ready(function(){$("a.lightbulb").click(function(){$("body").toggleClass("mode--dark")}),$("a.notready").click(function(){alert("Soon")}),$(".menu_link").on("click",function(o){if(""!==this.hash){o.preventDefault();var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},400,function(){window.location.hash=n})}})});