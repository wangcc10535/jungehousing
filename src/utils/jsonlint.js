/*
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-11-02 15:11:24
 * @FilePath: \jungehousing\src\utils\jsonlint.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jsonlint=function(){function t(){this.yy={}}var e=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},i=[1,12],n=[1,13],s=[1,9],r=[1,10],h=[1,11],o=[1,14],l=[1,15],a=[14,18,22,24],c=[18,22],u=[22,24],y={trace:function(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,$accept:0,$end:1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function(t,e,i,n,s,r,h){var o=r.length-1;switch(s){case 1:this.$=t.replace(/\\(\\|")/g,"$1").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\v/g,"\v").replace(/\\f/g,"\f").replace(/\\b/g,"\b");break;case 2:this.$=t==String(Number(t))?Number(t):t;break;case 3:this.$=null;break;case 4:this.$=!0;break;case 5:this.$=!1;break;case 6:return this.$=r[o-1];case 13:this.$={};break;case 14:case 19:this.$=r[o-1];break;case 15:this.$=[r[o-2],r[o]];break;case 16:this.$={},this.$[r[o][0]]=r[o][1];break;case 17:this.$=r[o-2],r[o-2][r[o][0]]=r[o][1];break;case 18:this.$=[];break;case 20:this.$=[r[o]];break;case 21:this.$=r[o-2],r[o-2].push(r[o])}},table:[{3:5,4:i,5:6,6:n,7:3,8:s,9:4,10:r,11:h,12:1,13:2,15:7,16:8,17:o,23:l},{1:[3]},{14:[1,16]},e(a,[2,7]),e(a,[2,8]),e(a,[2,9]),e(a,[2,10]),e(a,[2,11]),e(a,[2,12]),e(a,[2,3]),e(a,[2,4]),e(a,[2,5]),e([14,18,21,22,24],[2,1]),e(a,[2,2]),{3:20,4:i,18:[1,17],19:18,20:19},{3:5,4:i,5:6,6:n,7:3,8:s,9:4,10:r,11:h,13:23,15:7,16:8,17:o,23:l,24:[1,21],25:22},{1:[2,6]},e(a,[2,13]),{18:[1,24],22:[1,25]},e(c,[2,16]),{21:[1,26]},e(a,[2,18]),{22:[1,28],24:[1,27]},e(u,[2,20]),e(a,[2,14]),{3:20,4:i,20:29},{3:5,4:i,5:6,6:n,7:3,8:s,9:4,10:r,11:h,13:30,15:7,16:8,17:o,23:l},e(a,[2,19]),{3:5,4:i,5:6,6:n,7:3,8:s,9:4,10:r,11:h,13:31,15:7,16:8,17:o,23:l},e(c,[2,17]),e(c,[2,15]),e(u,[2,21])],defaultActions:{16:[2,6]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[null],s=[],r=this.table,h="",o=0,l=0,a=0,c=2,u=1,y=s.slice.call(arguments,1),p=Object.create(this.lexer),f={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(f.yy[g]=this.yy[g]);p.setInput(t,f.yy),f.yy.lexer=p,f.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var m=p.yylloc;s.push(m);var _=p.options&&p.options.ranges;"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var d,b,k,x,S,v,E,N,$,I=function(){var t;return t=p.lex()||u,"number"!=typeof t&&(t=e.symbols_[t]||t),t},O={};;){if(k=i[i.length-1],this.defaultActions[k]?x=this.defaultActions[k]:(null==d&&(d=I()),x=r[k]&&r[k][d]),void 0===x||!x.length||!x[0]){var w="";for(v in $=[],r[k])this.terminals_[v]&&v>c&&$.push("'"+this.terminals_[v]+"'");w=p.showPosition?"Parse error on line "+(o+1)+":\n"+p.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(o+1)+": Unexpected "+(d==u?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(w,{text:p.match,token:this.terminals_[d]||d,line:p.yylineno,loc:m,expected:$})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+d);switch(x[0]){case 1:i.push(d),n.push(p.yytext),s.push(p.yylloc),i.push(x[1]),d=null,b?(d=b,b=null):(l=p.yyleng,h=p.yytext,o=p.yylineno,m=p.yylloc,a>0&&a--);break;case 2:if(E=this.productions_[x[1]][1],O.$=n[n.length-E],O._$={first_line:s[s.length-(E||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(E||1)].first_column,last_column:s[s.length-1].last_column},_&&(O._$.range=[s[s.length-(E||1)].range[0],s[s.length-1].range[1]]),S=this.performAction.apply(O,[h,l,o,f.yy,x[1],n,s].concat(y)),void 0!==S)return S;E&&(i=i.slice(0,-1*E*2),n=n.slice(0,-1*E),s=s.slice(0,-1*E)),i.push(this.productions_[x[1]][0]),n.push(O.$),s.push(O._$),N=r[i[i.length-2]][i[i.length-1]],i.push(N);break;case 3:return!0}}return!0}},p=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),n=t[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if(i=this._input.match(this.rules[s[r]]),i&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(t=this.test_match(i,s[r]),!1!==t)return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?(t=this.test_match(e,s[n]),!1!==t&&t):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,i,n){switch(i){case 0:break;case 1:return 6;case 2:return e.yytext=e.yytext.substr(1,e.yyleng-2),4;case 3:return 17;case 4:return 18;case 5:return 23;case 6:return 24;case 7:return 22;case 8:return 21;case 9:return 10;case 10:return 11;case 11:return 8;case 12:return 14;case 13:return"INVALID"}},rules:[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}}};return t}();return y.lexer=p,t.prototype=y,y.Parser=t,new t}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=jsonlint,exports.Parser=jsonlint.Parser,exports.parse=function(){return jsonlint.parse.apply(jsonlint,arguments)},exports.main=function(t){t[1]||(// //console.log("Usage: "+t[0]+" FILE"),process.exit(1));var e=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return exports.parser.parse(e)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1)));export default jsonlint;
