(
    function( ){
        'use strict'
        if (window.trustedTypes && window.trustedTypes.createPolicy && !window.trustedTypes.defaultPolicy){
            window.trustedTypes.createPolicy('default',{
                createHTML: string => string,
                createScriptURL:string=>string,
                createScript : string =>string
            })
        }

        function expeliarmusLoad(attempts) {
            if(attempts===0){
                if(window.top === window.self){
                    console.log('starting expeliarmus ')
                }

            }

            if(attempts>=9){
                if(window.top === window.self){
                    conosole.log("couldn't Load Expeliarmus")
                    alert("couldn't Load Expeliarmus, Please Refresh your page and try again")
                }
                return
            }

            attempts++

            fetch('https://raw.githubusercontent.com/rigel6306/expeliarmus/refs/heads/main/expeliarmus.js')
            .then(res => res.text())
            .then(data=>{
                let element = document.createElement('script')
                element.innerHTML = data
                document.head.appendChild(element)
            })
            .catch(error=>{
                setTimeout(function(){
                    expeliarmusLoad(attempts)
                },500)
            })
        }
        expeliarmusLoad(0);
    })();