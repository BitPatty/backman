/*! Built with http://stenciljs.com */
webcomponents.loadBundle("g0dvkxm6",["exports","./chunk-604eb996.js"],function(t,e){var n=window.webcomponents.h,a=function(){function t(){this.invokeHitEnterCallback=function(){return null},this.invokeChangeCallback=function(){return null},this.invokeInputCallback=function(){return null},this.invokeFocusCallback=function(){return null},this.invokeBlurCallback=function(){return null},this.id="",this.srHint="",this.placeholder="",this.type="text",this.value="",this.clearable=!1,this.selectTextOnFocus=!1,this.inputStyle={},this.autocomplete=!0,this.editable=!0,this.valueState=""}return t.prototype.valueChanged=function(){this.valueState=this.value},t.prototype.hitEnterCallbackChanged=function(){this.setInvokeHitEnterCallback()},t.prototype.changeCallbackChanged=function(){this.setInvokeChangeCallback()},t.prototype.inputCallbackChanged=function(){this.setInvokeInputCallback()},t.prototype.focusCallbackChanged=function(){this.setInvokeFocusCallback()},t.prototype.blurCallbackChanged=function(){this.setInvokeBlurCallback()},t.prototype.valueStateChanged=function(){this.invokeChangeCallback(this.valueState)},t.prototype.getValue=function(){return this.valueState},t.prototype.setFocus=function(){this.inputEl.focus()},t.prototype.unsetFocus=function(){this.inputEl.blur()},t.prototype.componentWillLoad=function(){this.setInvokeHitEnterCallback(),this.setInvokeChangeCallback(),this.setInvokeInputCallback(),this.valueState=this.value},t.prototype.onFocus=function(){this.selectTextOnFocus&&this.selectText()},t.prototype.resetInput=function(){this.valueState="",this.invokeChangeCallback(this.valueState)},t.prototype.onInputKeyPress=function(t){13!==t.which||this.invokeHitEnterCallback()},t.prototype.onInputInput=function(t){this.valueState=t.target.value,this.invokeInputCallback(this.valueState)},t.prototype.setInvokeHitEnterCallback=function(){this.invokeHitEnterCallback=e.parseFunction(this.hitEnterCallback)},t.prototype.setInvokeChangeCallback=function(){this.invokeChangeCallback=e.parseFunction(this.changeCallback)},t.prototype.setInvokeInputCallback=function(){this.invokeInputCallback=e.parseFunction(this.inputCallback)},t.prototype.setInvokeFocusCallback=function(){this.invokeFocusCallback=e.parseFunction(this.focusCallback)},t.prototype.setInvokeBlurCallback=function(){this.invokeBlurCallback=e.parseFunction(this.blurCallback)},t.prototype.onInputFocus=function(){this.invokeFocusCallback()},t.prototype.onInputBlur=function(){this.invokeBlurCallback()},t.prototype.selectText=function(){var t=this;setTimeout(function(){t.inputEl.setSelectionRange(0,t.inputEl.value.length)})},t.prototype.render=function(){var t=this;return n("div",{class:"wrapper"},n("label",{htmlFor:this.id,class:"sr-only"},this.srHint),this.editable&&n("input",{id:this.id,class:"input",type:this.type,placeholder:""+this.placeholder,onInput:function(e){return t.onInputInput(e)},onKeyPress:function(e){return t.onInputKeyPress(e)},value:this.valueState,ref:function(e){return t.inputEl=e},style:this.inputStyle,onFocus:function(){return t.onInputFocus()},onBlur:function(){return t.onInputBlur()},autoComplete:this.autocomplete?void 0:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),this.editable&&this.clearable&&n("sdx-icon",{iconName:"icon-202-clear-circle",onClick:function(){return t.resetInput()},colorClass:"navy",hidden:!this.valueState}),!this.editable&&n("div",{class:"input",style:this.inputStyle,tabIndex:0},n("sdx-text-truncate",null,this.valueState)))},Object.defineProperty(t,"is",{get:function(){return"sdx-input"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autocomplete:{type:Boolean,attr:"autocomplete"},blurCallback:{type:String,attr:"blur-callback",watchCallbacks:["blurCallbackChanged"]},changeCallback:{type:String,attr:"change-callback",watchCallbacks:["changeCallbackChanged"]},clearable:{type:Boolean,attr:"clearable"},editable:{type:Boolean,attr:"editable"},el:{elementRef:!0},focusCallback:{type:String,attr:"focus-callback",watchCallbacks:["focusCallbackChanged"]},getValue:{method:!0},hitEnterCallback:{type:String,attr:"hit-enter-callback",watchCallbacks:["hitEnterCallbackChanged"]},id:{type:String,attr:"id"},inputCallback:{type:String,attr:"input-callback",watchCallbacks:["inputCallbackChanged"]},inputStyle:{type:"Any",attr:"input-style"},placeholder:{type:String,attr:"placeholder"},selectTextOnFocus:{type:Boolean,attr:"select-text-on-focus"},setFocus:{method:!0},srHint:{type:String,attr:"sr-hint"},type:{type:String,attr:"type"},unsetFocus:{method:!0},value:{type:String,attr:"value",watchCallbacks:["valueChanged"]},valueState:{state:!0,watchCallbacks:["valueStateChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"focus",method:"onFocus",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@charset \"UTF-8\";.sc-sdx-input-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-input, .sc-sdx-input:after, .sc-sdx-input:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sr-only.sc-sdx-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable.sc-sdx-input:active, .sr-only-focusable.sc-sdx-input:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.sc-sdx-input-h{width:100%}.sc-sdx-input-h   .wrapper.sc-sdx-input{display:-ms-flexbox;display:flex;position:relative;width:100%}.sc-sdx-input-h   .wrapper.sc-sdx-input > sdx-icon.sc-sdx-input{position:absolute;right:10px;top:2px;padding:10px;cursor:pointer}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input{border:1px solid #d6d6d6;border-radius:5px;height:48px;padding:0 16px;line-height:24px;letter-spacing:-.1px;font:inherit;font-size:18px;font-weight:300;position:relative;outline:none;background-color:#fff;width:100%;color:#333;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input, .sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input::-webkit-input-placeholder{-webkit-transition:all .15s cubic-bezier(.4,0,.2,1);transition:all .15s cubic-bezier(.4,0,.2,1)}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input, .sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:-ms-input-placeholder{-webkit-transition:all .15s cubic-bezier(.4,0,.2,1);transition:all .15s cubic-bezier(.4,0,.2,1)}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input, .sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input::-ms-input-placeholder{-webkit-transition:all .15s cubic-bezier(.4,0,.2,1);transition:all .15s cubic-bezier(.4,0,.2,1)}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input, .sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input::placeholder{-webkit-transition:all .15s cubic-bezier(.4,0,.2,1);transition:all .15s cubic-bezier(.4,0,.2,1)}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input::-webkit-input-placeholder{opacity:1;color:#bbb}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:-ms-input-placeholder{opacity:1;color:#bbb}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input::-ms-input-placeholder{opacity:1;color:#bbb}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input::placeholder{opacity:1;color:#bbb}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input[type=search].sc-sdx-input{-webkit-appearance:none}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input[type=search].sc-sdx-input::-webkit-search-cancel-button, .sc-sdx-input-h   .wrapper.sc-sdx-input   .input[type=search].sc-sdx-input::-webkit-search-decoration{-webkit-appearance:none}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input[type=search].sc-sdx-input::-ms-clear{display:none}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:focus:not([readonly]){border-color:#1781e3;color:#333}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:focus:not([readonly])::-webkit-input-placeholder{opacity:0}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:focus:not([readonly]):-ms-input-placeholder{opacity:0}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:focus:not([readonly])::-ms-input-placeholder{opacity:0}.sc-sdx-input-h   .wrapper.sc-sdx-input   .input.sc-sdx-input:focus:not([readonly])::placeholder{opacity:0}"},enumerable:!0,configurable:!0}),t}();t.SdxInput=a,Object.defineProperty(t,"__esModule",{value:!0})});