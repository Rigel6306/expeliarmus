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


    // {"items":{"mediawiki.base@14o40":"mw.loader.impl(function(){return[\"mediawiki.base@14o40\",{\"main\":\"mediawiki.base.js\",\"files\":{\"mediawiki.base.js\":function(require,module,exports){'use strict';const slice=Array.prototype.slice;mw.config.set(require('./config.json'));require('./log.js');function Message(map,key,parameters){this.map=map;this.key=key;this.parameters=parameters||[];}Message.prototype={parser:function(format){let text=this.map.get(this.key);if(mw.config.get('wgUserLanguage')==='qqx'&&(!text||text==='('+this.key+')')){text='('+this.key+'$*)';}text=mw.format(text,...this.parameters);if(format==='parse'){text=mw.html.escape(text);}return text;},params:function(parameters){this.parameters.push(...parameters);return this;},toString:function(format){if(!this.exists()){if(mw.config.get('wgUserLanguage')!=='qqx'){return'⧼'+mw.html.escape(this.key)+'⧽';}}if(!format){format='text';}if(format==='plain'||format==='text'||format==='parse'){return this.parser(format);}return mw.html.escape(this.parser('escaped'));},parse:function(){return this.toString('parse');},plain:function(){return this.toString('plain');},text:function(){return this.toString('text');},\nescaped:function(){return this.toString('escaped');},exists:function(){return this.map.exists(this.key);}};mw.libs={};mw.widgets={};mw.inspect=function(...reports){mw.loader.using('mediawiki.inspect',()=>{mw.inspect.runReports(...reports);});};mw.internalDoTransformFormatForQqx=function(formatString,parameters){if(formatString.includes('$*')){let replacement='';if(parameters.length){replacement=': '+parameters.map((_,i)=>'$'+(i+1)).join(', ');}return formatString.replace('$*',replacement);}return formatString;};mw.internalWikiUrlencode=function(str){return encodeURIComponent(String(str)).replace(/'/g,'%27').replace(/%20/g,'_').replace(/%3B/g,';').replace(/%40/g,'@').replace(/%24/g,'$').replace(/%2C/g,',').replace(/%2F/g,'/').replace(/%3A/g,':');};mw.format=function(formatString,...parameters){formatString=mw.internalDoTransformFormatForQqx(formatString,parameters);return formatString.replace(/\\$(\\d+)/g,(str,match)=>{const index=parseInt(match,10)-1;return parameters[index]!==undefined?parameters[index]:'$'+match;\n});};mw.Message=Message;mw.message=function(key){const parameters=slice.call(arguments,1);return new Message(mw.messages,key,parameters);};mw.msg=function(key,...parameters){return mw.message(key,...parameters).text();};mw.notify=function(message,options){return mw.loader.using('mediawiki.notification').then(()=>mw.notification.notify(message,options));};const trackCallbacks=$.Callbacks('memory');let trackHandlers=[];mw.track=function(topic,...data){mw.trackQueue.push({topic,args:data});trackCallbacks.fire(mw.trackQueue);};mw.trackSubscribe=function(topic,callback){let seen=0;function handler(trackQueue){for(;seen<trackQueue.length;seen++){const event=trackQueue[seen];if(event.topic.startsWith(topic)){callback(event.topic,...event.args);}}}trackHandlers.push([handler,callback]);trackCallbacks.add(handler);};mw.trackUnsubscribe=function(callback){trackHandlers=trackHandlers.filter((fns)=>{if(fns[1]===callback){trackCallbacks.remove(fns[0]);return false;}return true;});};trackCallbacks.fire(mw.trackQueue);\nconst hooks=Object.create(null);mw.hook=function(name){return hooks[name]||(hooks[name]=(function(){let memory;let deprecated;const fns=[];function rethrow(e){setTimeout(()=>{throw e;});}return{add:function(){if(deprecated){deprecated();}for(let i=0;i<arguments.length;i++){fns.push(arguments[i]);if(memory){try{arguments[i].apply(null,memory);}catch(e){rethrow(e);}}}return this;},remove:function(){for(let i=0;i<arguments.length;i++){let j;while((j=fns.indexOf(arguments[i]))!==-1){fns.splice(j,1);}}return this;},deprecate:function(msg){deprecated=mw.log.makeDeprecated(`hook_${name}`,`mw.hook \"${name}\" is deprecated.`+(msg?' '+msg:''));return this;},fire:function(){if(deprecated&&fns.length){deprecated();}for(let i=0;i<fns.length;i++){try{fns[i].apply(null,arguments);}catch(e){rethrow(e);}}memory=slice.call(arguments);return this;}};}()));};funct