import"./modulepreload-polyfill-B5Qt9EMX.js";import{A as Kt,F as sr,U as Zi,a as wl}from"./UnitManager-BlGITi8m.js";import{A as bc,g as Tc}from"./mode-D7kfJILk.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="174",wc=0,fo=1,Ac=2,Al=1,Rc=2,dn=3,Dn=0,Re=1,qe=2,Pn=0,yi=1,Ji=2,po=3,mo=4,Cc=5,Xn=100,Pc=101,Lc=102,Dc=103,Ic=104,Uc=200,Nc=201,Fc=202,Oc=203,qr=204,Kr=205,Bc=206,zc=207,Gc=208,Hc=209,Vc=210,kc=211,Wc=212,Xc=213,$c=214,Zr=0,Jr=1,jr=2,bi=3,Qr=4,ta=5,ea=6,na=7,Rl=0,Yc=1,qc=2,Ln=0,Kc=1,Zc=2,Jc=3,Cl=4,jc=5,Qc=6,th=7,Pl=300,Ti=301,wi=302,ia=303,sa=304,rr=306,ra=1e3,Yn=1001,aa=1002,je=1003,eh=1004,hs=1005,Ue=1006,ur=1007,tn=1008,xn=1009,Ll=1010,Dl=1011,ji=1012,ka=1013,Kn=1014,pn=1015,ss=1016,Wa=1017,Xa=1018,Ai=1020,Il=35902,Ul=1021,Nl=1022,Ze=1023,Fl=1024,Ol=1025,Si=1026,Ri=1027,Bl=1028,$a=1029,zl=1030,Ya=1031,qa=1033,Hs=33776,Vs=33777,ks=33778,Ws=33779,oa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37808,ma=37809,ga=37810,va=37811,_a=37812,xa=37813,Ma=37814,ya=37815,Sa=37816,Ea=37817,ba=37818,Ta=37819,wa=37820,Aa=37821,Xs=36492,Ra=36494,Ca=36495,Gl=36283,Pa=36284,La=36285,Da=36286,nh=3200,ih=3201,Hl=0,sh=1,Rn="",Ge="srgb",Ci="srgb-linear",Ys="linear",ie="srgb",ti=7680,go=519,rh=512,ah=513,oh=514,Vl=515,lh=516,ch=517,hh=518,uh=519,Ia=35044,vo="300 es",mn=2e3,qs=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const Xi=Math.PI/180,Qi=180/Math.PI;function en(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ht(s,t,e){return Math.max(t,Math.min(e,s))}function Ka(s,t){return(s%t+t)%t}function dh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fh(s,t,e){return s!==t?(e-s)/(t-s):0}function $i(s,t,e){return(1-e)*s+e*t}function ph(s,t,e,n){return $i(s,t,1-Math.exp(-e*n))}function mh(s,t=1){return t-Math.abs(Ka(s,t*2)-t)}function gh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function vh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _h(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xh(s,t){return s+Math.random()*(t-s)}function Mh(s){return s*(.5-Math.random())}function yh(s){s!==void 0&&(_o=s);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sh(s){return s*Xi}function Eh(s){return s*Qi}function bh(s){return(s&s-1)===0&&s!==0}function Th(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ah(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:Xi,RAD2DEG:Qi,generateUUID:en,clamp:Ht,euclideanModulo:Ka,mapLinear:dh,inverseLerp:fh,lerp:$i,damp:ph,pingpong:mh,smoothstep:gh,smootherstep:vh,randInt:_h,randFloat:xh,randFloatSpread:Mh,seededRandom:yh,degToRad:Sh,radToDeg:Eh,isPowerOfTwo:bh,ceilPowerOfTwo:Th,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Ah,normalize:ne,denormalize:Ke};class K{constructor(t=0,e=0){K.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],b=i[1],y=i[4],_=i[7],L=i[2],A=i[5],C=i[8];return r[0]=a*v+o*b+l*L,r[3]=a*m+o*y+l*A,r[6]=a*p+o*_+l*C,r[1]=c*v+h*b+u*L,r[4]=c*m+h*y+u*A,r[7]=c*p+h*_+u*C,r[2]=f*v+d*b+g*L,r[5]=f*m+d*y+g*A,r[8]=f*p+d*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fr.makeScale(t,e)),this}rotate(t){return this.premultiply(fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Bt;function kl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rh(){const s=ts("canvas");return s.style.display="block",s}const xo={};function Vn(s){s in xo||(xo[s]=!0,console.warn(s))}function Ch(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ph(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Mo=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yo=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dh(){const s={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Ys:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ci]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:Mo,fromXYZ:yo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Mo,fromXYZ:yo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),s}const Jt=Dh();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ei(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class Ih{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=ts("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(pr(i[a].image)):r.push(pr(i[a]))}else r=pr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ih.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;class Ee extends Di{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Yn,i=Yn,r=Ue,a=tn,o=Ze,l=xn,c=Ee.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=en(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Pl;Ee.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(d+1)/2,L=(p+1)/2,A=(h+f)/4,C=(u+v)/4,D=(g+m)/4;return y>_&&y>L?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=C/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=D/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=D/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Za(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wl extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),A=Math.atan2(L,p*b);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const _=o*b;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mr.copy(this).projectOnVector(t),this.sub(mr)}reflect(t){return this.sub(mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new R,So=new rs;class as{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),ds.subVectors(this.max,Ni),ni.subVectors(t.a,Ni),ii.subVectors(t.b,Ni),si.subVectors(t.c,Ni),Mn.subVectors(ii,ni),yn.subVectors(si,ii),Fn.subVectors(ni,si);let e=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!gr(e,ni,ii,si,ds)||(e=[1,0,0,0,1,0,0,0,1],!gr(e,ni,ii,si,ds))?!1:(fs.crossVectors(Mn,yn),e=[fs.x,fs.y,fs.z],gr(e,ni,ii,si,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new R,new R,new R,new R,new R,new R,new R,new R],We=new R,us=new as,ni=new R,ii=new R,si=new R,Mn=new R,yn=new R,Fn=new R,Ni=new R,ds=new R,fs=new R,On=new R;function gr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){On.fromArray(s,r);const o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bh=new as,Fi=new R,vr=new R;class os{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(vr)),this.expandByPoint(Fi.copy(t.center).sub(vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new R,_r=new R,ps=new R,Sn=new R,xr=new R,ms=new R,Mr=new R;class Ja{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_r.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(_r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=Sn.dot(this.direction),l=-Sn.dot(ps),c=Sn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_r).addScaledVector(ps,f),d}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){xr.subVectors(e,t),ms.subVectors(n,t),Mr.crossVectors(xr,ms);let a=this.direction.dot(Mr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);const l=o*this.direction.dot(ms.crossVectors(Sn,ms));if(l<0)return null;const c=o*this.direction.dot(xr.cross(Sn));if(c<0||l+c>a)return null;const h=-o*Sn.dot(Mr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,g,v,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Gh)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),En.crossVectors(n,De),En.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),En.crossVectors(n,De)),En.normalize(),gs.crossVectors(De,En),i[0]=En.x,i[4]=gs.x,i[8]=De.x,i[1]=En.y,i[5]=gs.y,i[9]=De.y,i[2]=En.z,i[6]=gs.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],y=n[7],_=n[11],L=n[15],A=i[0],C=i[4],D=i[8],E=i[12],M=i[1],P=i[5],V=i[9],F=i[13],z=i[2],$=i[6],H=i[10],J=i[14],O=i[3],Z=i[7],it=i[11],pt=i[15];return r[0]=a*A+o*M+l*z+c*O,r[4]=a*C+o*P+l*$+c*Z,r[8]=a*D+o*V+l*H+c*it,r[12]=a*E+o*F+l*J+c*pt,r[1]=h*A+u*M+f*z+d*O,r[5]=h*C+u*P+f*$+d*Z,r[9]=h*D+u*V+f*H+d*it,r[13]=h*E+u*F+f*J+d*pt,r[2]=g*A+v*M+m*z+p*O,r[6]=g*C+v*P+m*$+p*Z,r[10]=g*D+v*V+m*H+p*it,r[14]=g*E+v*F+m*J+p*pt,r[3]=b*A+y*M+_*z+L*O,r[7]=b*C+y*P+_*$+L*Z,r[11]=b*D+y*V+_*H+L*it,r[15]=b*E+y*F+_*J+L*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+v*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,y=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,L=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,A=e*b+n*y+i*_+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=b*C,t[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*C,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*C,t[4]=y*C,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*C,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*C,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*C,t[8]=_*C,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*C,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*C,t[12]=L*C,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,b=l*c,y=l*h,_=l*u,L=n.x,A=n.y,C=n.z;return i[0]=(1-(v+p))*L,i[1]=(d+_)*L,i[2]=(g-y)*L,i[3]=0,i[4]=(d-_)*A,i[5]=(1-(f+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+y)*C,i[9]=(m-b)*C,i[10]=(1-(f+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/r,h=1/a,u=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=mn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===mn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===qs)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=mn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,d=(n+i)*h;let g,v;if(o===mn)g=(a+r)*u,v=-2*u;else if(o===qs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new R,Xe=new re,zh=new R(0,0,0),Gh=new R(1,1,1),En=new R,gs=new R,De=new R,Eo=new re,bo=new rs;class nn{constructor(t=0,e=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bo.setFromEuler(this),this.setFromQuaternion(bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hh=0;const To=new R,ai=new rs,cn=new re,vs=new R,Oi=new R,Vh=new R,kh=new rs,wo=new R(1,0,0),Ao=new R(0,1,0),Ro=new R(0,0,1),Co={type:"added"},Wh={type:"removed"},oi={type:"childadded",child:null},yr={type:"childremoved",child:null};class pe extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new R,e=new nn,n=new rs,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Bt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(wo,t)}rotateY(t){return this.rotateOnAxis(Ao,t)}rotateZ(t){return this.rotateOnAxis(Ro,t)}translateOnAxis(t,e){return To.copy(t).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wo,t)}translateY(t){return this.translateOnAxis(Ao,t)}translateZ(t){return this.translateOnAxis(Ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Oi,vs,this.up):cn.lookAt(vs,Oi,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(cn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Co),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),yr.child=t,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Co),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new R(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new R,hn=new R,Sr=new R,un=new R,li=new R,ci=new R,Po=new R,Er=new R,br=new R,Tr=new R,wr=new se,Ar=new se,Rr=new se;class He{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),hn.subVectors(n,e),Sr.subVectors(t,e);const a=$e.dot($e),o=$e.dot(hn),l=$e.dot(Sr),c=hn.dot(hn),h=hn.dot(Sr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return wr.setScalar(0),Ar.setScalar(0),Rr.setScalar(0),wr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,n),Rr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(wr,r.x),a.addScaledVector(Ar,r.y),a.addScaledVector(Rr,r.z),a}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),hn.subVectors(t,e),$e.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$e.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;li.subVectors(i,n),ci.subVectors(r,n),Er.subVectors(t,n);const l=li.dot(Er),c=ci.dot(Er);if(l<=0&&c<=0)return e.copy(n);br.subVectors(t,i);const h=li.dot(br),u=ci.dot(br);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(li,a);Tr.subVectors(t,r);const d=li.dot(Tr),g=ci.dot(Tr);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ci,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Po.subVectors(r,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Po,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Cr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Ka(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Cr(a,r,t+1/3),this.g=Cr(a,r,t),this.b=Cr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Jt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ht(ye.r*255,0,255))*65536+Math.round(Ht(ye.g*255,0,255))*256+Math.round(Ht(ye.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Ge){Jt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(_s);const n=$i(bn.h,_s.h,e),i=$i(bn.s,_s.s,e),r=$i(bn.l,_s.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new kt;kt.NAMES=$l;let Xh=0;class In extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=en(),this.name="",this.type="Material",this.blending=yi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Kr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new R,xs=new K;let $h=0;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ia,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class Yl extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ql extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yh=0;const Be=new re,Pr=new pe,hi=new R,Ie=new as,Bi=new as,ve=new R;class fe extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kl(t)?ql:Yl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ie.min,Bi.min),Ie.expandByPoint(ve),ve.addVectors(Ie.max,Bi.max),Ie.expandByPoint(ve)):(Ie.expandByPoint(Bi.min),Ie.expandByPoint(Bi.max))}Ie.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(t,c),ve.add(hi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new R,l[D]=new R;const c=new R,h=new R,u=new R,f=new K,d=new K,g=new K,v=new R,m=new R;function p(D,E,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(v),o[E].add(v),o[M].add(v),l[D].add(m),l[E].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,E=b.length;D<E;++D){const M=b[D],P=M.start,V=M.count;for(let F=P,z=P+V;F<z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new R,_=new R,L=new R,A=new R;function C(D){L.fromBufferAttribute(i,D),A.copy(L);const E=o[D];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),_.crossVectors(A,E);const P=_.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,E=b.length;D<E;++D){const M=b[D],P=M.start,V=M.count;for(let F=P,z=P+V;F<z;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new re,Bn=new Ja,Ms=new os,Do=new R,ys=new R,Ss=new R,Es=new R,Lr=new R,bs=new R,Io=new R,Ts=new R;class Dt extends pe{constructor(t=new fe,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Lr.fromBufferAttribute(u,t),a?bs.addScaledVector(Lr,h):bs.addScaledVector(Lr.sub(e),h))}e.add(bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Ms.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ms,Do)===null||Bn.origin.distanceToSquared(Do)>(t.far-t.near)**2))&&(Lo.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,L=y;_<L;_+=3){const A=o.getX(_),C=o.getX(_+1),D=o.getX(_+2);i=ws(this,p,t,n,c,h,u,A,C,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=ws(this,a,t,n,c,h,u,b,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,L=y;_<L;_+=3){const A=_,C=_+1,D=_+2;i=ws(this,p,t,n,c,h,u,A,C,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=m,y=m+1,_=m+2;i=ws(this,a,t,n,c,h,u,b,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function qh(s,t,e,n,i,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Dn,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ts);return c<e.near||c>e.far?null:{distance:c,point:Ts.clone(),object:s}}function ws(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ys),s.getVertexPosition(l,Ss),s.getVertexPosition(c,Es);const h=qh(s,t,e,n,ys,Ss,Es,Io);if(h){const u=new R;He.getBarycoord(Io,ys,Ss,Es,u),i&&(h.uv=He.getInterpolatedAttribute(i,o,l,c,u,new K)),r&&(h.uv1=He.getInterpolatedAttribute(r,o,l,c,u,new K)),a&&(h.normal=He.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};He.getNormal(ys,Ss,Es,f.normal),h.face=f,h.barycoord=u}return h}class Jn extends fe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(v,m,p,b,y,_,L,A,C,D,E){const M=_/C,P=L/D,V=_/2,F=L/2,z=A/2,$=C+1,H=D+1;let J=0,O=0;const Z=new R;for(let it=0;it<H;it++){const pt=it*P-F;for(let It=0;It<$;It++){const $t=It*M-V;Z[v]=$t*b,Z[m]=pt*y,Z[p]=z,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(It/C),u.push(1-it/D),J+=1}}for(let it=0;it<D;it++)for(let pt=0;pt<C;pt++){const It=f+pt+$*it,$t=f+pt+$*(it+1),X=f+(pt+1)+$*(it+1),at=f+(pt+1)+$*it;l.push(It,$t,at),l.push($t,X,at),O+=6}o.addGroup(d,O,E),d+=O,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){const t={};for(let e=0;e<s.length;e++){const n=Li(s[e]);for(const i in n)t[i]=n[i]}return t}function Kh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Zh={clone:Li,merge:we};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zl extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new R,Uo=new K,No=new K;class Pe extends Zl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,No),e.subVectors(No,Uo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class Qh extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pe(ui,di,t,e);i.layers=this.layers,this.add(i);const r=new Pe(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new Pe(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new Pe(ui,di,t,e);o.layers=this.layers,this.add(o);const l=new Pe(ui,di,t,e);l.layers=this.layers,this.add(l);const c=new Pe(ui,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jl extends Ee{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tu extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Jn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Pn});r.uniforms.tEquirect.value=e;const a=new Dt(i,r),o=e.minFilter;return e.minFilter===tn&&(e.minFilter=Ue),new Qh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Je extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eu={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class nu extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ia,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Te=new R;class Ks{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zs extends In{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fi;const zi=new R,pi=new R,mi=new R,gi=new K,Gi=new K,jl=new re,As=new R,Hi=new R,Rs=new R,Fo=new K,Ir=new K,Oo=new K;class Ua extends pe{constructor(t=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",fi===void 0){fi=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new iu(e,5);fi.setIndex([0,1,2,0,2,3]),fi.setAttribute("position",new Ks(n,3,0,!1)),fi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=fi,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pi.setFromMatrixScale(this.matrixWorld),jl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pi.multiplyScalar(-mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Cs(As.set(-.5,-.5,0),mi,a,pi,i,r),Cs(Hi.set(.5,-.5,0),mi,a,pi,i,r),Cs(Rs.set(.5,.5,0),mi,a,pi,i,r),Fo.set(0,0),Ir.set(1,0),Oo.set(1,1);let o=t.ray.intersectTriangle(As,Hi,Rs,!1,zi);if(o===null&&(Cs(Hi.set(-.5,.5,0),mi,a,pi,i,r),Ir.set(0,1),o=t.ray.intersectTriangle(As,Rs,Hi,!1,zi),o===null))return;const l=t.ray.origin.distanceTo(zi);l<t.near||l>t.far||e.push({distance:l,point:zi.clone(),uv:He.getInterpolation(zi,As,Hi,Rs,Fo,Ir,Oo,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cs(s,t,e,n,i,r){gi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Gi.x=r*gi.x-i*gi.y,Gi.y=i*gi.x+r*gi.y):Gi.copy(gi),s.copy(t),s.x+=Gi.x,s.y+=Gi.y,s.applyMatrix4(jl)}const Ur=new R,su=new R,ru=new Bt;class kn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ur.subVectors(n,e).cross(su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ru.getNormalMatrix(t),i=this.coplanarPoint(Ur).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new os,Ps=new R;class ja{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],b=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+a,f+h,m+g,_+b).normalize(),n[3].setComponents(l-a,f-h,m-g,_-b).normalize(),n[4].setComponents(l-o,f-u,m-v,_-y).normalize(),e===mn)n[5].setComponents(l+o,f+u,m+v,_+y).normalize();else if(e===qs)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ps.x=i.normal.x>0?t.max.x:t.min.x,Ps.y=i.normal.y>0?t.max.y:t.min.y,Ps.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Na extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Js=new R,js=new R,Bo=new re,Vi=new Ja,Ls=new os,Nr=new R,zo=new R;class Ql extends pe{constructor(t=new fe,e=new Na){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Js.fromBufferAttribute(e,i-1),js.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Js.distanceTo(js);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=r,t.ray.intersectsSphere(Ls)===!1)return;Bo.copy(i).invert(),Vi.copy(t.ray).applyMatrix4(Bo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=h.getX(v),b=h.getX(v+1),y=Ds(this,t,Vi,l,p,b,v);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Ds(this,t,Vi,l,v,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=Ds(this,t,Vi,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Ds(this,t,Vi,l,g-1,d,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ds(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(Js.fromBufferAttribute(o,i),js.fromBufferAttribute(o,r),e.distanceSqToSegment(Js,js,Nr,zo)>n)return;Nr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Nr);if(!(c<t.near||c>t.far))return{distance:c,point:zo.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Go=new R,Ho=new R;class au extends Ql{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Go.fromBufferAttribute(e,i),Ho.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Go.distanceTo(Ho);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tc extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vo=new re,Fa=new Ja,Is=new os,Us=new R;class ou extends pe{constructor(t=new fe,e=new tc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=r,t.ray.intersectsSphere(Is)===!1)return;Vo.copy(i).invert(),Fa.copy(t.ray).applyMatrix4(Vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);Us.fromBufferAttribute(u,m),ko(Us,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Us.fromBufferAttribute(u,g),ko(Us,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ko(s,t,e,n,i,r,a){const o=Fa.distanceSqToPoint(s);if(o<e){const l=new R;Fa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Oa extends Ee{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ec extends Ee{constructor(t,e,n,i,r,a,o,l,c,h=Si){if(h!==Si&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Kn),n===void 0&&h===Ri&&(n=Ai),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new K:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],r=[],a=[],o=new R,l=new re;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ht(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ht(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends rn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new K){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lu extends Qa{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function to(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ns=new R,Fr=new to,Or=new to,Br=new to;class nc extends rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ns.subVectors(i[0],i[1]).add(i[0]),c=Ns);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ns.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Fr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Or.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Br.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Fr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Or.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Br.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Fr.calc(l),Or.calc(l),Br.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function cu(s,t){const e=1-s;return e*e*t}function hu(s,t){return 2*(1-s)*s*t}function uu(s,t){return s*s*t}function Yi(s,t,e,n){return cu(s,t)+hu(s,e)+uu(s,n)}function du(s,t){const e=1-s;return e*e*e*t}function fu(s,t){const e=1-s;return 3*e*e*s*t}function pu(s,t){return 3*(1-s)*s*s*t}function mu(s,t){return s*s*s*t}function qi(s,t,e,n,i){return du(s,t)+fu(s,e)+pu(s,n)+mu(s,i)}class ic extends rn{constructor(t=new K,e=new K,n=new K,i=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new K){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qi(t,i.x,r.x,a.x,o.x),qi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gu extends rn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qi(t,i.x,r.x,a.x,o.x),qi(t,i.y,r.y,a.y,o.y),qi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sc extends rn{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends rn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rc extends rn{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Yi(t,i.x,r.x,a.x),Yi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ac extends rn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Yi(t,i.x,r.x,a.x),Yi(t,i.y,r.y,a.y),Yi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oc extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Wo(o,l.x,c.x,h.x,u.x),Wo(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new K().fromArray(i))}return this}}var Qs=Object.freeze({__proto__:null,ArcCurve:lu,CatmullRomCurve3:nc,CubicBezierCurve:ic,CubicBezierCurve3:gu,EllipseCurve:Qa,LineCurve:sc,LineCurve3:vu,QuadraticBezierCurve:rc,QuadraticBezierCurve3:ac,SplineCurve:oc});class _u extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Qs[i.type]().fromJSON(i))}return this}}class Xo extends _u{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sc(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new rc(this.currentPoint.clone(),new K(t,e),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new ic(this.currentPoint.clone(),new K(t,e),new K(n,i),new K(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new oc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Qa(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tr extends fe{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ht(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new R,f=new K,d=new R,g=new R,v=new R;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let b=0;b<=e;b++){const y=n+b*h*i,_=Math.sin(y),L=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*L,a.push(u.x,u.y,u.z),f.x=b/e,f.y=A/(t.length-1),o.push(f.x,f.y);const C=l[3*A+0]*_,D=l[3*A+1],E=l[3*A+0]*L;c.push(C,D,E)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){const _=y+b*t.length,L=_,A=_+t.length,C=_+t.length+1,D=_+1;r.push(L,A,D),r.push(C,D,A)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.points,t.segments,t.phiStart,t.phiLength)}}class er extends fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new K;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ze extends fe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function b(){const _=new R,L=new R;let A=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const E=[],M=D/r,P=M*(e-t)+t;for(let V=0;V<=i;V++){const F=V/i,z=F*l+o,$=Math.sin(z),H=Math.cos(z);L.x=P*$,L.y=-M*n+m,L.z=P*H,u.push(L.x,L.y,L.z),_.set($,C,H).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-M),E.push(g++)}v.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){const M=v[E][D],P=v[E+1][D],V=v[E+1][D+1],F=v[E][D+1];(t>0||E!==0)&&(h.push(M,P,F),A+=3),(e>0||E!==r-1)&&(h.push(P,V,F),A+=3)}c.addGroup(p,A,0),p+=A}function y(_){const L=g,A=new K,C=new R;let D=0;const E=_===!0?t:e,M=_===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let V=0;V<=i;V++){const z=V/i*l+o,$=Math.cos(z),H=Math.sin(z);C.x=E*H,C.y=m*M,C.z=E*$,u.push(C.x,C.y,C.z),f.push(0,M,0),A.x=$*.5+.5,A.y=H*.5*M+.5,d.push(A.x,A.y),g++}for(let V=0;V<i;V++){const F=L+V,z=P+V;_===!0?h.push(z,z+1,F):h.push(z+1,z,F),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nr extends ze{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new nr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class An extends Xo{constructor(t){super(t),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Xo().fromJSON(i))}return this}}class xu{static triangulate(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let a=lc(t,0,r,n,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,h,u,f,d,g;if(i&&(a=bu(t,e,a,n)),t.length>80*n){l=h=t[0],c=u=t[1];for(let v=n;v<r;v+=n)f=t[v],d=t[v+1],f<l&&(l=f),d<c&&(c=d),f>h&&(h=f),d>u&&(u=d);g=Math.max(h-l,u-c),g=g!==0?32767/g:0}return es(a,o,n,l,c,g,0),o}}function lc(s,t,e,n,i){let r,a;if(i===Nu(s,t,e,n)>0)for(r=t;r<e;r+=n)a=$o(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=$o(r,s[r],s[r+1],a);return a&&ar(a,a.next)&&(is(a),a=a.next),a}function jn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ar(e,e.next)||le(e.prev,e,e.next)===0)){if(is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function es(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Cu(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?yu(s,n,i,r):Mu(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),is(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Su(jn(s),t,e),es(s,t,e,n,i,r,2)):a===2&&Eu(s,t,e,n,i,r):es(jn(s),t,e,n,i,r,1);break}}}function Mu(s){const t=s.prev,e=s,n=s.next;if(le(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&_i(i,o,r,l,a,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yu(s,t,e,n){const i=s.prev,r=s,a=s.next;if(le(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ba(d,g,t,e,n),b=Ba(v,m,t,e,n);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=b;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&_i(o,h,l,u,c,f,y.x,y.y)&&le(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&_i(o,h,l,u,c,f,_.x,_.y)&&le(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&_i(o,h,l,u,c,f,y.x,y.y)&&le(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&_i(o,h,l,u,c,f,_.x,_.y)&&le(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Su(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!ar(i,r)&&cc(i,n,n.next,r)&&ns(i,r)&&ns(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),is(n),is(n.next),n=s=r),n=n.next}while(n!==s);return jn(n)}function Eu(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Du(a,o)){let l=hc(a,o);a=jn(a,a.next),l=jn(l,l.next),es(a,t,e,n,i,r,0),es(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function bu(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=lc(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Lu(c));for(i.sort(Tu),r=0;r<i.length;r++)e=wu(i[r],e);return e}function Tu(s,t){return s.x-t.x}function wu(s,t){const e=Au(s,t);if(!e)return t;const n=hc(e,s);return jn(n,n.next),jn(e,e.next)}function Au(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&_i(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ns(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Ru(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Ru(s,t){return le(s.prev,s,t.prev)<0&&le(t.next,s,s.next)<0}function Cu(s,t,e,n){let i=s;do i.z===0&&(i.z=Ba(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Pu(i)}function Pu(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Ba(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _i(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Du(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Iu(s,t)&&(ns(s,t)&&ns(t,s)&&Uu(s,t)&&(le(s.prev,s,t.prev)||le(s,t.prev,t))||ar(s,t)&&le(s.prev,s,s.next)>0&&le(t.prev,t,t.next)>0)}function le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ar(s,t){return s.x===t.x&&s.y===t.y}function cc(s,t,e,n){const i=Os(le(s,t,e)),r=Os(le(s,t,n)),a=Os(le(e,n,s)),o=Os(le(e,n,t));return!!(i!==r&&a!==o||i===0&&Fs(s,e,t)||r===0&&Fs(s,n,t)||a===0&&Fs(e,s,n)||o===0&&Fs(e,t,n))}function Fs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Os(s){return s>0?1:s<0?-1:0}function Iu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&cc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ns(s,t){return le(s.prev,s,s.next)<0?le(s,t,s.next)>=0&&le(s,s.prev,t)>=0:le(s,t,s.prev)<0||le(s,s.next,t)<0}function Uu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function hc(s,t){const e=new za(s.i,s.x,s.y),n=new za(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $o(s,t,e,n){const i=new za(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function is(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function za(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nu(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Ki{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Yo(t),qo(n,t);let a=t.length;e.forEach(Yo);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,qo(n,e[l]);const o=xu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Yo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class fn extends fe{constructor(t=new An([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Fu;let y,_=!1,L,A,C,D;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,L=p.computeFrenetFrames(h,!1),A=new R,C=new R,D=new R),f||(m=0,d=0,g=0,v=0);const E=o.extractPoints(c);let M=E.shape;const P=E.holes;if(!Ki.isClockWise(M)){M=M.reverse();for(let et=0,Q=P.length;et<Q;et++){const w=P[et];Ki.isClockWise(w)&&(P[et]=w.reverse())}}const F=Ki.triangulateShape(M,P),z=M;for(let et=0,Q=P.length;et<Q;et++){const w=P[et];M=M.concat(w)}function $(et,Q,w){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(Q,w)}const H=M.length,J=F.length;function O(et,Q,w){let Tt,nt,_t;const lt=et.x-Q.x,Pt=et.y-Q.y,mt=w.x-et.x,T=w.y-et.y,x=lt*lt+Pt*Pt,B=lt*T-Pt*mt;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(x),tt=Math.sqrt(mt*mt+T*T),q=Q.x-Pt/Y,wt=Q.y+lt/Y,ut=w.x-T/tt,xt=w.y+mt/tt,Xt=((ut-q)*T-(xt-wt)*mt)/(lt*T-Pt*mt);Tt=q+lt*Xt-et.x,nt=wt+Pt*Xt-et.y;const rt=Tt*Tt+nt*nt;if(rt<=2)return new K(Tt,nt);_t=Math.sqrt(rt/2)}else{let Y=!1;lt>Number.EPSILON?mt>Number.EPSILON&&(Y=!0):lt<-Number.EPSILON?mt<-Number.EPSILON&&(Y=!0):Math.sign(Pt)===Math.sign(T)&&(Y=!0),Y?(Tt=-Pt,nt=lt,_t=Math.sqrt(x)):(Tt=lt,nt=Pt,_t=Math.sqrt(x/2))}return new K(Tt/_t,nt/_t)}const Z=[];for(let et=0,Q=z.length,w=Q-1,Tt=et+1;et<Q;et++,w++,Tt++)w===Q&&(w=0),Tt===Q&&(Tt=0),Z[et]=O(z[et],z[w],z[Tt]);const it=[];let pt,It=Z.concat();for(let et=0,Q=P.length;et<Q;et++){const w=P[et];pt=[];for(let Tt=0,nt=w.length,_t=nt-1,lt=Tt+1;Tt<nt;Tt++,_t++,lt++)_t===nt&&(_t=0),lt===nt&&(lt=0),pt[Tt]=O(w[Tt],w[_t],w[lt]);it.push(pt),It=It.concat(pt)}for(let et=0;et<m;et++){const Q=et/m,w=d*Math.cos(Q*Math.PI/2),Tt=g*Math.sin(Q*Math.PI/2)+v;for(let nt=0,_t=z.length;nt<_t;nt++){const lt=$(z[nt],Z[nt],Tt);ot(lt.x,lt.y,-w)}for(let nt=0,_t=P.length;nt<_t;nt++){const lt=P[nt];pt=it[nt];for(let Pt=0,mt=lt.length;Pt<mt;Pt++){const T=$(lt[Pt],pt[Pt],Tt);ot(T.x,T.y,-w)}}}const $t=g+v;for(let et=0;et<H;et++){const Q=f?$(M[et],It[et],$t):M[et];_?(C.copy(L.normals[0]).multiplyScalar(Q.x),A.copy(L.binormals[0]).multiplyScalar(Q.y),D.copy(y[0]).add(C).add(A),ot(D.x,D.y,D.z)):ot(Q.x,Q.y,0)}for(let et=1;et<=h;et++)for(let Q=0;Q<H;Q++){const w=f?$(M[Q],It[Q],$t):M[Q];_?(C.copy(L.normals[et]).multiplyScalar(w.x),A.copy(L.binormals[et]).multiplyScalar(w.y),D.copy(y[et]).add(C).add(A),ot(D.x,D.y,D.z)):ot(w.x,w.y,u/h*et)}for(let et=m-1;et>=0;et--){const Q=et/m,w=d*Math.cos(Q*Math.PI/2),Tt=g*Math.sin(Q*Math.PI/2)+v;for(let nt=0,_t=z.length;nt<_t;nt++){const lt=$(z[nt],Z[nt],Tt);ot(lt.x,lt.y,u+w)}for(let nt=0,_t=P.length;nt<_t;nt++){const lt=P[nt];pt=it[nt];for(let Pt=0,mt=lt.length;Pt<mt;Pt++){const T=$(lt[Pt],pt[Pt],Tt);_?ot(T.x,T.y+y[h-1].y,y[h-1].x+w):ot(T.x,T.y,u+w)}}}X(),at();function X(){const et=i.length/3;if(f){let Q=0,w=H*Q;for(let Tt=0;Tt<J;Tt++){const nt=F[Tt];At(nt[2]+w,nt[1]+w,nt[0]+w)}Q=h+m*2,w=H*Q;for(let Tt=0;Tt<J;Tt++){const nt=F[Tt];At(nt[0]+w,nt[1]+w,nt[2]+w)}}else{for(let Q=0;Q<J;Q++){const w=F[Q];At(w[2],w[1],w[0])}for(let Q=0;Q<J;Q++){const w=F[Q];At(w[0]+H*h,w[1]+H*h,w[2]+H*h)}}n.addGroup(et,i.length/3-et,0)}function at(){const et=i.length/3;let Q=0;ht(z,Q),Q+=z.length;for(let w=0,Tt=P.length;w<Tt;w++){const nt=P[w];ht(nt,Q),Q+=nt.length}n.addGroup(et,i.length/3-et,1)}function ht(et,Q){let w=et.length;for(;--w>=0;){const Tt=w;let nt=w-1;nt<0&&(nt=et.length-1);for(let _t=0,lt=h+m*2;_t<lt;_t++){const Pt=H*_t,mt=H*(_t+1),T=Q+Tt+Pt,x=Q+nt+Pt,B=Q+nt+mt,Y=Q+Tt+mt;Vt(T,x,B,Y)}}}function ot(et,Q,w){l.push(et),l.push(Q),l.push(w)}function At(et,Q,w){bt(et),bt(Q),bt(w);const Tt=i.length/3,nt=b.generateTopUV(n,i,Tt-3,Tt-2,Tt-1);Wt(nt[0]),Wt(nt[1]),Wt(nt[2])}function Vt(et,Q,w,Tt){bt(et),bt(Q),bt(Tt),bt(Q),bt(w),bt(Tt);const nt=i.length/3,_t=b.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);Wt(_t[0]),Wt(_t[1]),Wt(_t[3]),Wt(_t[1]),Wt(_t[2]),Wt(_t[3])}function bt(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function Wt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ou(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Qs[i.type]().fromJSON(i)),new fn(n,t.options)}}const Fu={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new K(r,a),new K(o,l),new K(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new K(a,1-l),new K(c,1-u),new K(f,1-g),new K(v,1-p)]:[new K(o,1-l),new K(h,1-u),new K(d,1-g),new K(m,1-p)]}};function Ou(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class or extends fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let y=0;y<c;y++){const _=y*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const y=b+c*p,_=b+c*(p+1),L=b+1+c*(p+1),A=b+1+c*p;d.push(y,_,A),d.push(_,L,A)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cn extends fe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],y=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const A=L/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-y),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const y=h[p][b+1],_=h[p][b],L=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&d.push(y,_,A),(p!==n-1||l<Math.PI)&&d.push(_,L,A)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends fe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,b=(i+1)*d+g;a.push(v,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class eo extends fe{constructor(t=new ac(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new K;let h=new R;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),b(),p()}function m(y){h=t.getPointAt(y/e,h);const _=a.normals[y],L=a.binormals[y];for(let A=0;A<=i;A++){const C=A/i*Math.PI*2,D=Math.sin(C),E=-Math.cos(C);l.x=E*_.x+D*L.x,l.y=E*_.y+D*L.y,l.z=E*_.z+D*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=i;_++){const L=(i+1)*(y-1)+(_-1),A=(i+1)*y+(_-1),C=(i+1)*y+_,D=(i+1)*(y-1)+_;g.push(L,A,D),g.push(A,C,D)}}function b(){for(let y=0;y<=e;y++)for(let _=0;_<=i;_++)c.x=y/e,c.y=_/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new eo(new Qs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ye extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bu extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zu extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ko={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gu{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Hu=new Gu;class no{constructor(t){this.manager=t!==void 0?t:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";class Vu extends no{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ko.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ts("img");function l(){h(),Ko.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class zr extends no{constructor(t){super(t)}load(t,e,n,i){const r=new Ee,a=new Vu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class io extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Gr=new re,Zo=new R,Jo=new R;class uc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zo),Jo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jo),e.updateMatrixWorld(),Gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jo=new re,ki=new R,Hr=new R;class ku extends uc{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(ki),Hr.copy(n.position),Hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hr),n.updateMatrixWorld(),i.makeTranslation(-ki.x,-ki.y,-ki.z),jo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo)}}class wn extends io{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ku}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dc extends Zl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wu extends uc{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xu extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Wu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $u extends io{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yu extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Qo(s,t,e,n){const i=qu(n);switch(e){case Ul:return s*t;case Fl:return s*t;case Ol:return s*t*2;case Bl:return s*t/i.components*i.byteLength;case $a:return s*t/i.components*i.byteLength;case zl:return s*t*2/i.components*i.byteLength;case Ya:return s*t*2/i.components*i.byteLength;case Nl:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case qa:return s*t*4/i.components*i.byteLength;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ks:case Ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case la:case ha:return Math.max(s,16)*Math.max(t,8)/4;case oa:case ca:return Math.max(s,8)*Math.max(t,8)/2;case ua:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case xa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xs:case Ra:case Ca:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gl:case Pa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case La:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(s){switch(s){case xn:case Ll:return{byteLength:1,components:1};case ji:case Dl:case ss:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Kn:case ka:case pn:return{byteLength:4,components:1};case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ku(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,af=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:ju,alphamap_pars_fragment:Qu,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:ad,beginnormal_vertex:od,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:vd,color_vertex:_d,common:xd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:yd,displacementmap_pars_vertex:Sd,displacementmap_vertex:Ed,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:wd,colorspace_pars_fragment:Ad,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Vd,envmap_vertex:Dd,fog_vertex:Id,fog_pars_vertex:Ud,fog_fragment:Nd,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Hd,lights_toon_fragment:kd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:$d,lights_physical_fragment:Yd,lights_physical_pars_fragment:qd,lights_fragment_begin:Kd,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:af,metalnessmap_fragment:of,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:vf,normal_vertex:_f,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Ef,opaque_fragment:bf,packing:Tf,premultiplied_alpha_fragment:wf,project_vertex:Af,dithering_fragment:Rf,dithering_pars_fragment:Cf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:If,shadowmap_vertex:Uf,shadowmask_pars_fragment:Nf,skinbase_vertex:Ff,skinning_pars_vertex:Of,skinning_vertex:Bf,skinnormal_vertex:zf,specularmap_fragment:Gf,specularmap_pars_fragment:Hf,tonemapping_fragment:Vf,tonemapping_pars_fragment:kf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:$f,uv_pars_vertex:Yf,uv_vertex:qf,worldpos_vertex:Kf,background_vert:Zf,background_frag:Jf,backgroundCube_vert:jf,backgroundCube_frag:Qf,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distanceRGBA_vert:sp,distanceRGBA_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:Mp,meshphysical_frag:yp,meshtoon_vert:Sp,meshtoon_frag:Ep,points_vert:bp,points_frag:Tp,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},ct={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Qe={basic:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:we([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:we([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:we([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:we([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:we([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:we([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:we([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:we([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:we([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:we([ct.lights,ct.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Qe.physical={uniforms:we([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Bs={r:0,b:0,g:0},Gn=new nn,Pp=new re;function Lp(s,t,e,n,i,r,a){const o=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const L=g(y);L===null?p(o,l):L&&L.isColor&&(p(L,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const L=g(_);L&&(L.isCubeTexture||L.mapping===rr)?(h===void 0&&(h=new Dt(new Jn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Li(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Gn.copy(_.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Gn)),h.material.toneMapped=Jt.getTransfer(L.colorSpace)!==ie,(u!==L||f!==L.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=L,f=L.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Dt(new or(2,2),new sn({name:"BackgroundMaterial",uniforms:Li(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(L.colorSpace)!==ie,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Bs,Kl(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,_,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m,dispose:b}}function Dp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,P,V,F,z){let $=!1;const H=u(F,V,P);r!==H&&(r=H,c(r.object)),$=d(M,F,V,z),$&&g(M,F,V,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(M,P,V,F),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,V){const F=V.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let $=z[P.id];$===void 0&&($={},z[P.id]=$);let H=$[F];return H===void 0&&(H=f(l()),$[F]=H),H}function f(M){const P=[],V=[],F=[];for(let z=0;z<e;z++)P[z]=0,V[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,P,V,F){const z=r.attributes,$=P.attributes;let H=0;const J=V.getAttributes();for(const O in J)if(J[O].location>=0){const it=z[O];let pt=$[O];if(pt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),it===void 0||it.attribute!==pt||pt&&it.data!==pt.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(M,P,V,F){const z={},$=P.attributes;let H=0;const J=V.getAttributes();for(const O in J)if(J[O].location>=0){let it=$[O];it===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));const pt={};pt.attribute=it,it&&it.data&&(pt.data=it.data),z[O]=pt,H++}r.attributes=z,r.attributesNum=H,r.index=F}function v(){const M=r.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const V=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;V[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),z[M]!==P&&(s.vertexAttribDivisor(M,P),z[M]=P)}function b(){const M=r.newAttributes,P=r.enabledAttributes;for(let V=0,F=P.length;V<F;V++)P[V]!==M[V]&&(s.disableVertexAttribArray(V),P[V]=0)}function y(M,P,V,F,z,$,H){H===!0?s.vertexAttribIPointer(M,P,V,z,$):s.vertexAttribPointer(M,P,V,F,z,$)}function _(M,P,V,F){v();const z=F.attributes,$=V.getAttributes(),H=P.defaultAttributeValues;for(const J in $){const O=$[J];if(O.location>=0){let Z=z[J];if(Z===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const it=Z.normalized,pt=Z.itemSize,It=t.get(Z);if(It===void 0)continue;const $t=It.buffer,X=It.type,at=It.bytesPerElement,ht=X===s.INT||X===s.UNSIGNED_INT||Z.gpuType===ka;if(Z.isInterleavedBufferAttribute){const ot=Z.data,At=ot.stride,Vt=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<O.locationSize;bt++)p(O.location+bt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<O.locationSize;bt++)m(O.location+bt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let bt=0;bt<O.locationSize;bt++)y(O.location+bt,pt/O.locationSize,X,it,At*at,(Vt+pt/O.locationSize*bt)*at,ht)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<O.locationSize;ot++)p(O.location+ot,Z.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<O.locationSize;ot++)m(O.location+ot);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ot=0;ot<O.locationSize;ot++)y(O.location+ot,pt/O.locationSize,X,it,pt*at,pt/O.locationSize*ot*at,ht)}}else if(H!==void 0){const it=H[J];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(O.location,it);break;case 3:s.vertexAttrib3fv(O.location,it);break;case 4:s.vertexAttrib4fv(O.location,it);break;default:s.vertexAttrib1fv(O.location,it)}}}}b()}function L(){D();for(const M in n){const P=n[M];for(const V in P){const F=P[V];for(const z in F)h(F[z].object),delete F[z];delete P[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const V in P){const F=P[V];for(const z in F)h(F[z].object),delete F[z];delete P[V]}delete n[M.id]}function C(M){for(const P in n){const V=n[P];if(V[M.id]===void 0)continue;const F=V[M.id];for(const z in F)h(F[z].object),delete F[z];delete V[M.id]}}function D(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Ip(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Up(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Ze&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:A}}function Np(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new kn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,y=b*4;let _=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let L=0;L!==y;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Fp(s){let t=new WeakMap;function e(a,o){return o===ia?a.mapping=Ti:o===sa&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ia||o===sa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const xi=4,tl=[.125,.215,.35,.446,.526,.582],$n=20,Vr=new dc,el=new kt;let kr=null,Wr=0,Xr=0,$r=!1;const Wn=(1+Math.sqrt(5))/2,vi=1/Wn,nl=[new R(-Wn,vi,0),new R(Wn,vi,0),new R(-vi,0,Wn),new R(vi,0,Wn),new R(0,Wn,-vi),new R(0,Wn,vi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Op=new R;class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Op}=r;kr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Wr,Xr),this._renderer.xr.enabled=$r,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:ss,format:Ze,colorSpace:Ci,depthBuffer:!1},i=sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=zp(r,t,e)}return i}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,i,r){const l=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(el),u.toneMapping=Ln,u.autoClear=!1;const g=new Pi({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),v=new Dt(new Jn,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(el),m=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const _=this._cubeSize;zs(i,y*_,b>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ti||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nl[(i-r-1)%nl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$n-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const p=[];let b=0;for(let C=0;C<$n;++C){const D=C/v,E=Math.exp(-D*D/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[i],L=3*_*(i>y-xi?i-y+xi:0),A=4*(this._cubeSize-_);zs(e,L,A,3*_,2*_),l.setRenderTarget(e),l.render(u,Vr)}}function Bp(s){const t=[],e=[],n=[];let i=s;const r=s-xi+1+tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-xi?l=tl[a-s+xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,D=A>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(E,v*g*A),y.set(f,m*g*A);const M=[A,A,A,A,A,A];_.set(M,p*g*A)}const L=new fe;L.setAttribute("position",new Ne(b,v)),L.setAttribute("uv",new Ne(y,m)),L.setAttribute("faceIndex",new Ne(_,p)),t.push(L),i>xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sl(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function zp(s,t,e){const n=new Float32Array($n),i=new R(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function rl(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function al(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===sa,h=l===Ti||l===wi;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new il(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new il(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Vn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vp(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let y=0,_=b.length;y<_;y+=3){const L=b[y+0],A=b[y+1],C=b[y+2];f.push(L,A,A,C,C,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const L=y+0,A=y+1,C=y+2;f.push(L,A,A,C,C,L)}}else return;const m=new(kl(f)?ql:Yl)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*v[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xp(s,t,e){const n=new WeakMap,i=new se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const A=new Float32Array(_*L*4*u),C=new Wl(A,_,L,u);C.type=pn,C.needsUpdate=!0;const D=y*4;for(let M=0;M<u;M++){const P=m[M],V=p[M],F=b[M],z=_*L*4*M;for(let $=0;$<P.count;$++){const H=$*D;d===!0&&(i.fromBufferAttribute(P,$),A[z+H+0]=i.x,A[z+H+1]=i.y,A[z+H+2]=i.z,A[z+H+3]=0),g===!0&&(i.fromBufferAttribute(V,$),A[z+H+4]=i.x,A[z+H+5]=i.y,A[z+H+6]=i.z,A[z+H+7]=0),v===!0&&(i.fromBufferAttribute(F,$),A[z+H+8]=i.x,A[z+H+9]=i.y,A[z+H+10]=i.z,A[z+H+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new K(_,L)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function $p(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const pc=new Ee,ol=new ec(1,1),mc=new Wl,gc=new Oh,vc=new Jl,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Ii(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lr(s,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Yp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function Zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Jp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;dl.set(n),s.uniformMatrix2fv(this.addr,!1,dl),ge(e,n)}}function jp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ul.set(n),s.uniformMatrix3fv(this.addr,!1,ul),ge(e,n)}}function Qp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),ge(e,n)}}function tm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function sm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function lm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ol.compareFunction=Vl,r=ol):r=pc,e.setTexture2D(t||r,i)}function cm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gc,i)}function hm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vc,i)}function um(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mc,i)}function dm(s){switch(s){case 5126:return Yp;case 35664:return qp;case 35665:return Kp;case 35666:return Zp;case 35674:return Jp;case 35675:return jp;case 35676:return Qp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(s,t){s.uniform1fv(this.addr,t)}function pm(s,t){const e=Ii(t,this.size,2);s.uniform2fv(this.addr,e)}function mm(s,t){const e=Ii(t,this.size,3);s.uniform3fv(this.addr,e)}function gm(s,t){const e=Ii(t,this.size,4);s.uniform4fv(this.addr,e)}function vm(s,t){const e=Ii(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _m(s,t){const e=Ii(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xm(s,t){const e=Ii(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mm(s,t){s.uniform1iv(this.addr,t)}function ym(s,t){s.uniform2iv(this.addr,t)}function Sm(s,t){s.uniform3iv(this.addr,t)}function Em(s,t){s.uniform4iv(this.addr,t)}function bm(s,t){s.uniform1uiv(this.addr,t)}function Tm(s,t){s.uniform2uiv(this.addr,t)}function wm(s,t){s.uniform3uiv(this.addr,t)}function Am(s,t){s.uniform4uiv(this.addr,t)}function Rm(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||pc,r[a])}function Cm(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gc,r[a])}function Pm(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||vc,r[a])}function Lm(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mc,r[a])}function Dm(s){switch(s){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return Mm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}class Im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dm(e.type)}}class Um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dm(e.type)}}class Nm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function fl(s,t){s.seq.push(t),s.map[t.id]=t}function Fm(s,t,e){const n=s.name,i=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),a=Yr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fl(e,c===void 0?new Im(o,s,t):new Um(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Nm(o),fl(e,u)),e=u}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Fm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function pl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Om=37297;let Bm=0;function zm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ml=new Bt;function Gm(s){Jt._getMatrix(ml,Jt.workingColorSpace,s);const t=`mat3( ${ml.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Ys:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zm(s.getShaderSource(t),a)}else return i}function Hm(s,t){const e=Gm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vm(s,t){let e;switch(t){case Kc:e="Linear";break;case Zc:e="Reinhard";break;case Jc:e="Cineon";break;case Cl:e="ACESFilmic";break;case Qc:e="AgX";break;case th:e="Neutral";break;case jc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new R;function km(){Jt.getLuminanceCoefficients(Gs);const s=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Xm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Wi(s){return s!==""}function vl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(s){return s.replace(Ym,Km)}const qm=new Map;function Km(s,t){let e=Gt[t];if(e===void 0){const n=qm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}const Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(s){return s.replace(Zm,Jm)}function Jm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ml(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case wi:t="ENVMAP_TYPE_CUBE";break;case rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function eg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Yc:t="ENVMAP_BLENDING_MIX";break;case qc:t="ENVMAP_BLENDING_ADD";break}return t}function ng(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ig(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=jm(e),c=Qm(e),h=tg(e),u=eg(e),f=ng(e),d=Wm(e),g=Xm(r),v=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),p.length>0&&(p+=`
`)):(m=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),p=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Hm("linearToOutputTexel",e.outputColorSpace),km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),a=Ga(a),a=vl(a,e),a=_l(a,e),o=Ga(o),o=vl(o,e),o=_l(o,e),a=xl(a),o=xl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+m+a,_=b+p+o,L=pl(i,i.VERTEX_SHADER,y),A=pl(i,i.FRAGMENT_SHADER,_);i.attachShader(v,L),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(P){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(L).trim(),z=i.getShaderInfoLog(A).trim();let $=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,A);else{const J=gl(i,L,"vertex"),O=gl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+J+`
`+O)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||z==="")&&(H=!1);H&&(P.diagnostics={runnable:$,programLog:V,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(L),i.deleteShader(A),D=new $s(i,v),E=$m(i,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Om)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let sg=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ag(t),e.set(t,n)),n}}class ag{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function og(s,t,e,n,i,r,a){const o=new Xl,l=new rg,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,V,F){const z=V.fog,$=F.geometry,H=E.isMeshStandardMaterial?V.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),O=J&&J.mapping===rr?J.image.height:null,Z=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const it=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pt=it!==void 0?it.length:0;let It=0;$.morphAttributes.position!==void 0&&(It=1),$.morphAttributes.normal!==void 0&&(It=2),$.morphAttributes.color!==void 0&&(It=3);let $t,X,at,ht;if(Z){const ee=Qe[Z];$t=ee.vertexShader,X=ee.fragmentShader}else $t=E.vertexShader,X=E.fragmentShader,l.update(E),at=l.getVertexShaderID(E),ht=l.getFragmentShaderID(E);const ot=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,Wt=!!E.map,et=!!E.matcap,Q=!!J,w=!!E.aoMap,Tt=!!E.lightMap,nt=!!E.bumpMap,_t=!!E.normalMap,lt=!!E.displacementMap,Pt=!!E.emissiveMap,mt=!!E.metalnessMap,T=!!E.roughnessMap,x=E.anisotropy>0,B=E.clearcoat>0,Y=E.dispersion>0,tt=E.iridescence>0,q=E.sheen>0,wt=E.transmission>0,ut=x&&!!E.anisotropyMap,xt=B&&!!E.clearcoatMap,Xt=B&&!!E.clearcoatNormalMap,rt=B&&!!E.clearcoatRoughnessMap,yt=tt&&!!E.iridescenceMap,Lt=tt&&!!E.iridescenceThicknessMap,Ut=q&&!!E.sheenColorMap,St=q&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,zt=!!E.specularColorMap,ae=!!E.specularIntensityMap,I=wt&&!!E.transmissionMap,dt=wt&&!!E.thicknessMap,W=!!E.gradientMap,j=!!E.alphaMap,vt=E.alphaTest>0,gt=!!E.alphaHash,Ot=!!E.extensions;let ce=Ln;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ce=s.toneMapping);const xe={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:X,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:ht,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ci,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:et,envMap:Q,envMapMode:Q&&J.mapping,envMapCubeUVHeight:O,aoMap:w,lightMap:Tt,bumpMap:nt,normalMap:_t,displacementMap:f&&lt,emissiveMap:Pt,normalMapObjectSpace:_t&&E.normalMapType===sh,normalMapTangentSpace:_t&&E.normalMapType===Hl,metalnessMap:mt,roughnessMap:T,anisotropy:x,anisotropyMap:ut,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:rt,dispersion:Y,iridescence:tt,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:Yt,specularColorMap:zt,specularIntensityMap:ae,transmission:wt,transmissionMap:I,thicknessMap:dt,gradientMap:W,opaque:E.transparent===!1&&E.blending===yi&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:vt,alphaHash:gt,combine:E.combine,mapUv:Wt&&v(E.map.channel),aoMapUv:w&&v(E.aoMap.channel),lightMapUv:Tt&&v(E.lightMap.channel),bumpMapUv:nt&&v(E.bumpMap.channel),normalMapUv:_t&&v(E.normalMap.channel),displacementMapUv:lt&&v(E.displacementMap.channel),emissiveMapUv:Pt&&v(E.emissiveMap.channel),metalnessMapUv:mt&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ut&&v(E.anisotropyMap.channel),clearcoatMapUv:xt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(E.sheenRoughnessMap.channel),specularMapUv:Yt&&v(E.specularMap.channel),specularColorMapUv:zt&&v(E.specularColorMap.channel),specularIntensityMapUv:ae&&v(E.specularIntensityMap.channel),transmissionMapUv:I&&v(E.transmissionMap.channel),thicknessMapUv:dt&&v(E.thicknessMap.channel),alphaMapUv:j&&v(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(_t||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Wt||j),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===ie,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qe,flipSided:E.side===Re,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=g[E.type];let P;if(M){const V=Qe[M];P=Zh.clone(V.uniforms)}else P=E.uniforms;return P}function L(E,M){let P;for(let V=0,F=h.length;V<F;V++){const z=h[V];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new ig(s,M,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function lg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function cg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||cg),n.length>1&&n.sort(f||yl),i.length>1&&i.sort(f||yl)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function hg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Sl,s.set(n,[a])):i>=r.length?(a=new Sl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ug(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new kt};break;case"SpotLight":e={position:new R,direction:new R,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function dg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let fg=0;function pg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mg(s){const t=new ug,e=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new re,a=new re;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,y=0,_=0,L=0,A=0,C=0;c.sort(pg);for(let E=0,M=c.length;E<M;E++){const P=c[E],V=P.color,F=P.intensity,z=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*F,u+=V.g*F,f+=V.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);C++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,O=e.get(P);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=H,d++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(V).multiplyScalar(F),H.distance=z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const J=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,J.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=$,_++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(V).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const J=P.shadow,O=e.get(P);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=L,D.numLightProbes=C,n.version=fg++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function El(s){const t=new mg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gg(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new El(s),t.set(i,[o])):r>=a.length?(o=new El(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xg(s,t,e){let n=new ja;const i=new K,r=new K,a=new se,o=new Bu({depthPacking:ih}),l=new zu,c={},h=e.maxTextureSize,u={[Dn]:Re,[Re]:Dn,[qe]:qe},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:vg,fragmentShader:_g}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let p=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Pn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=p!==dn&&this.type===dn,z=p===dn&&this.type!==dn;for(let $=0,H=A.length;$<H;$++){const J=A[$],O=J.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Z=O.getFrameExtents();if(i.multiply(Z),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||F===!0||z===!0){const pt=this.type!==dn?{minFilter:je,magFilter:je}:{};O.map!==null&&O.map.dispose(),O.map=new Zn(i.x,i.y,pt),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const it=O.getViewportCount();for(let pt=0;pt<it;pt++){const It=O.getViewport(pt);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),V.viewport(a),O.updateMatrices(J,pt),n=O.getFrustum(),_(C,D,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===dn&&b(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,P)};function b(A,C){const D=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,D,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,D,d,v,null)}function y(A,C,D,E){let M=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,F=C.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let $=z[F];$===void 0&&($=M.clone(),z[F]=$,C.addEventListener("dispose",L)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,E===dn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=s.properties.get(M);V.light=D}return M}function _(A,C,D,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=t.update(A),z=A.material;if(Array.isArray(z)){const $=F.groups;for(let H=0,J=$.length;H<J;H++){const O=$[H],Z=z[O.materialIndex];if(Z&&Z.visible){const it=y(A,Z,E,M);A.onBeforeShadow(s,A,C,D,F,it,O),s.renderBufferDirect(D,null,F,it,A,O),A.onAfterShadow(s,A,C,D,F,it,O)}}}else if(z.visible){const $=y(A,z,E,M);A.onBeforeShadow(s,A,C,D,F,$,null),s.renderBufferDirect(D,null,F,$,A,null),A.onAfterShadow(s,A,C,D,F,$,null)}}const V=A.children;for(let F=0,z=V.length;F<z;F++)_(V[F],C,D,E,M)}function L(A){A.target.removeEventListener("dispose",L);for(const D in c){const E=c[D],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Mg={[Zr]:Jr,[jr]:ea,[Qr]:na,[bi]:ta,[Jr]:Zr,[ea]:jr,[na]:Qr,[ta]:bi};function yg(s,t){function e(){let I=!1;const dt=new se;let W=null;const j=new se(0,0,0,0);return{setMask:function(vt){W!==vt&&!I&&(s.colorMask(vt,vt,vt,vt),W=vt)},setLocked:function(vt){I=vt},setClear:function(vt,gt,Ot,ce,xe){xe===!0&&(vt*=ce,gt*=ce,Ot*=ce),dt.set(vt,gt,Ot,ce),j.equals(dt)===!1&&(s.clearColor(vt,gt,Ot,ce),j.copy(dt))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function n(){let I=!1,dt=!1,W=null,j=null,vt=null;return{setReversed:function(gt){if(dt!==gt){const Ot=t.get("EXT_clip_control");dt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const ce=vt;vt=null,this.setClear(ce)}dt=gt},getReversed:function(){return dt},setTest:function(gt){gt?ot(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(gt){W!==gt&&!I&&(s.depthMask(gt),W=gt)},setFunc:function(gt){if(dt&&(gt=Mg[gt]),j!==gt){switch(gt){case Zr:s.depthFunc(s.NEVER);break;case Jr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case Qr:s.depthFunc(s.EQUAL);break;case ta:s.depthFunc(s.GEQUAL);break;case ea:s.depthFunc(s.GREATER);break;case na:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=gt}},setLocked:function(gt){I=gt},setClear:function(gt){vt!==gt&&(dt&&(gt=1-gt),s.clearDepth(gt),vt=gt)},reset:function(){I=!1,W=null,j=null,vt=null,dt=!1}}}function i(){let I=!1,dt=null,W=null,j=null,vt=null,gt=null,Ot=null,ce=null,xe=null;return{setTest:function(ee){I||(ee?ot(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!I&&(s.stencilMask(ee),dt=ee)},setFunc:function(ee,Ve,an){(W!==ee||j!==Ve||vt!==an)&&(s.stencilFunc(ee,Ve,an),W=ee,j=Ve,vt=an)},setOp:function(ee,Ve,an){(gt!==ee||Ot!==Ve||ce!==an)&&(s.stencilOp(ee,Ve,an),gt=ee,Ot=Ve,ce=an)},setLocked:function(ee){I=ee},setClear:function(ee){xe!==ee&&(s.clearStencil(ee),xe=ee)},reset:function(){I=!1,dt=null,W=null,j=null,vt=null,gt=null,Ot=null,ce=null,xe=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,y=null,_=null,L=null,A=null,C=new kt(0,0,0),D=0,E=!1,M=null,P=null,V=null,F=null,z=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=J>=2);let Z=null,it={};const pt=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),$t=new se().fromArray(pt),X=new se().fromArray(It);function at(I,dt,W,j){const vt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(I,gt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<W;Ot++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(dt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return gt}const ht={};ht[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(bi),nt(!1),_t(fo),ot(s.CULL_FACE),w(Pn);function ot(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function At(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Vt(I,dt){return u[I]!==dt?(s.bindFramebuffer(I,dt),u[I]=dt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function bt(I,dt){let W=d,j=!1;if(I){W=f.get(dt),W===void 0&&(W=[],f.set(dt,W));const vt=I.textures;if(W.length!==vt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Ot=vt.length;gt<Ot;gt++)W[gt]=s.COLOR_ATTACHMENT0+gt;W.length=vt.length,j=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,j=!0);j&&s.drawBuffers(W)}function Wt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const et={[Xn]:s.FUNC_ADD,[Pc]:s.FUNC_SUBTRACT,[Lc]:s.FUNC_REVERSE_SUBTRACT};et[Dc]=s.MIN,et[Ic]=s.MAX;const Q={[Uc]:s.ZERO,[Nc]:s.ONE,[Fc]:s.SRC_COLOR,[qr]:s.SRC_ALPHA,[Vc]:s.SRC_ALPHA_SATURATE,[Gc]:s.DST_COLOR,[Bc]:s.DST_ALPHA,[Oc]:s.ONE_MINUS_SRC_COLOR,[Kr]:s.ONE_MINUS_SRC_ALPHA,[Hc]:s.ONE_MINUS_DST_COLOR,[zc]:s.ONE_MINUS_DST_ALPHA,[kc]:s.CONSTANT_COLOR,[Wc]:s.ONE_MINUS_CONSTANT_COLOR,[Xc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function w(I,dt,W,j,vt,gt,Ot,ce,xe,ee){if(I===Pn){v===!0&&(At(s.BLEND),v=!1);return}if(v===!1&&(ot(s.BLEND),v=!0),I!==Cc){if(I!==m||ee!==E){if((p!==Xn||_!==Xn)&&(s.blendEquation(s.FUNC_ADD),p=Xn,_=Xn),ee)switch(I){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ji:s.blendFunc(s.ONE,s.ONE);break;case po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ji:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,L=null,A=null,C.set(0,0,0),D=0,m=I,E=ee}return}vt=vt||dt,gt=gt||W,Ot=Ot||j,(dt!==p||vt!==_)&&(s.blendEquationSeparate(et[dt],et[vt]),p=dt,_=vt),(W!==b||j!==y||gt!==L||Ot!==A)&&(s.blendFuncSeparate(Q[W],Q[j],Q[gt],Q[Ot]),b=W,y=j,L=gt,A=Ot),(ce.equals(C)===!1||xe!==D)&&(s.blendColor(ce.r,ce.g,ce.b,xe),C.copy(ce),D=xe),m=I,E=!1}function Tt(I,dt){I.side===qe?At(s.CULL_FACE):ot(s.CULL_FACE);let W=I.side===Re;dt&&(W=!W),nt(W),I.blending===yi&&I.transparent===!1?w(Pn):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function _t(I){I!==wc?(ot(s.CULL_FACE),I!==P&&(I===fo?s.cullFace(s.BACK):I===Ac?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),P=I}function lt(I){I!==V&&(H&&s.lineWidth(I),V=I)}function Pt(I,dt,W){I?(ot(s.POLYGON_OFFSET_FILL),(F!==dt||z!==W)&&(s.polygonOffset(dt,W),F=dt,z=W)):At(s.POLYGON_OFFSET_FILL)}function mt(I){I?ot(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+$-1),Z!==I&&(s.activeTexture(I),Z=I)}function x(I,dt,W){W===void 0&&(Z===null?W=s.TEXTURE0+$-1:W=Z);let j=it[W];j===void 0&&(j={type:void 0,texture:void 0},it[W]=j),(j.type!==I||j.texture!==dt)&&(Z!==W&&(s.activeTexture(W),Z=W),s.bindTexture(I,dt||ht[I]),j.type=I,j.texture=dt)}function B(){const I=it[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(I){$t.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function St(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Yt(I,dt){let W=c.get(dt);W===void 0&&(W=new WeakMap,c.set(dt,W));let j=W.get(I);j===void 0&&(j=s.getUniformBlockIndex(dt,I.name),W.set(I,j))}function zt(I,dt){const j=c.get(dt).get(I);l.get(dt)!==j&&(s.uniformBlockBinding(dt,j,I.__bindingPointIndex),l.set(dt,j))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,it={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,y=null,_=null,L=null,A=null,C=new kt(0,0,0),D=0,E=!1,M=null,P=null,V=null,F=null,z=null,$t.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:At,bindFramebuffer:Vt,drawBuffers:bt,useProgram:Wt,setBlending:w,setMaterial:Tt,setFlipSided:nt,setCullFace:_t,setLineWidth:lt,setPolygonOffset:Pt,setScissorTest:mt,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:tt,texImage2D:yt,texImage3D:Lt,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:Xt,texStorage3D:rt,texSubImage2D:q,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:xt,scissor:Ut,viewport:St,reset:ae}}function Sg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return d?new OffscreenCanvas(T,x):ts("canvas")}function v(T,x,B){let Y=1;const tt=mt(T);if((tt.width>B||tt.height>B)&&(Y=B/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*tt.width),wt=Math.floor(Y*tt.height);u===void 0&&(u=g(q,wt));const ut=x?g(q,wt):u;return ut.width=q,ut.height=wt,ut.getContext("2d").drawImage(T,0,0,q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+wt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,x,B,Y,tt=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),x===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),x===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),x===s.RGBA){const wt=tt?Ys:Jt.getTransfer(Y);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=wt===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(T,x){let B;return T?x===null||x===Kn||x===Ai?B=s.DEPTH24_STENCIL8:x===pn?B=s.DEPTH32F_STENCIL8:x===ji&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===Ai?B=s.DEPTH_COMPONENT24:x===pn?B=s.DEPTH_COMPONENT32F:x===ji&&(B=s.DEPTH_COMPONENT16),B}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==Ue?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),D(x),x.isVideoTexture&&h.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),M(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,Y=f.get(B);if(Y){const tt=Y[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(Y).length===0&&f.delete(B)}n.remove(T)}function E(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const B=T.source,Y=f.get(B);delete Y[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let tt=0;tt<x.__webglFramebuffer[Y].length;tt++)s.deleteFramebuffer(x.__webglFramebuffer[Y][tt]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let Y=0,tt=B.length;Y<tt;Y++){const q=n.get(B[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(T)}let P=0;function V(){P=0}function F(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){const B=n.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,T,x);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function H(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function J(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function O(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){at(B,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const Z={[ra]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[aa]:s.MIRRORED_REPEAT},it={[je]:s.NEAREST,[eh]:s.NEAREST_MIPMAP_NEAREST,[hs]:s.NEAREST_MIPMAP_LINEAR,[Ue]:s.LINEAR,[ur]:s.LINEAR_MIPMAP_NEAREST,[tn]:s.LINEAR_MIPMAP_LINEAR},pt={[rh]:s.NEVER,[uh]:s.ALWAYS,[ah]:s.LESS,[Vl]:s.LEQUAL,[oh]:s.EQUAL,[hh]:s.GEQUAL,[lh]:s.GREATER,[ch]:s.NOTEQUAL};function It(T,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ue||x.magFilter===ur||x.magFilter===hs||x.magFilter===tn||x.minFilter===Ue||x.minFilter===ur||x.minFilter===hs||x.minFilter===tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Z[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Z[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Z[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,it[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===je||x.minFilter!==hs&&x.minFilter!==tn||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));const q=z(x);if(q!==T.__cacheKey){tt[q]===void 0&&(tt[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[q].usedTimes++;const wt=tt[T.__cacheKey];wt!==void 0&&(tt[T.__cacheKey].usedTimes--,wt.usedTimes===0&&E(x)),T.__cacheKey=q,T.__webglTexture=tt[q].texture}return B}function X(T,x,B){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);const tt=$t(T,x),q=x.source;e.bindTexture(Y,T.__webglTexture,s.TEXTURE0+B);const wt=n.get(q);if(q.version!==wt.__version||tt===!0){e.activeTexture(s.TEXTURE0+B);const ut=Jt.getPrimaries(Jt.workingColorSpace),xt=x.colorSpace===Rn?null:Jt.getPrimaries(x.colorSpace),Xt=x.colorSpace===Rn||ut===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let rt=v(x.image,!1,i.maxTextureSize);rt=Pt(x,rt);const yt=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type);let Ut=y(x.internalFormat,yt,Lt,x.colorSpace,x.isVideoTexture);It(Y,x);let St;const Yt=x.mipmaps,zt=x.isVideoTexture!==!0,ae=wt.__version===void 0||tt===!0,I=q.dataReady,dt=L(x,rt);if(x.isDepthTexture)Ut=_(x.format===Ri,x.type),ae&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,yt,Lt,null));else if(x.isDataTexture)if(Yt.length>0){zt&&ae&&e.texStorage2D(s.TEXTURE_2D,dt,Ut,Yt[0].width,Yt[0].height);for(let W=0,j=Yt.length;W<j;W++)St=Yt[W],zt?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,St.width,St.height,yt,Lt,St.data):e.texImage2D(s.TEXTURE_2D,W,Ut,St.width,St.height,0,yt,Lt,St.data);x.generateMipmaps=!1}else zt?(ae&&e.texStorage2D(s.TEXTURE_2D,dt,Ut,rt.width,rt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,yt,Lt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,yt,Lt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ut,Yt[0].width,Yt[0].height,rt.depth);for(let W=0,j=Yt.length;W<j;W++)if(St=Yt[W],x.format!==Ze)if(yt!==null)if(zt){if(I)if(x.layerUpdates.size>0){const vt=Qo(St.width,St.height,x.format,x.type);for(const gt of x.layerUpdates){const Ot=St.data.subarray(gt*vt/St.data.BYTES_PER_ELEMENT,(gt+1)*vt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,gt,St.width,St.height,1,yt,Ot)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,rt.depth,yt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ut,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,rt.depth,yt,Lt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ut,St.width,St.height,rt.depth,0,yt,Lt,St.data)}else{zt&&ae&&e.texStorage2D(s.TEXTURE_2D,dt,Ut,Yt[0].width,Yt[0].height);for(let W=0,j=Yt.length;W<j;W++)St=Yt[W],x.format!==Ze?yt!==null?zt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,St.width,St.height,yt,Lt,St.data):e.texImage2D(s.TEXTURE_2D,W,Ut,St.width,St.height,0,yt,Lt,St.data)}else if(x.isDataArrayTexture)if(zt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ut,rt.width,rt.height,rt.depth),I)if(x.layerUpdates.size>0){const W=Qo(rt.width,rt.height,x.format,x.type);for(const j of x.layerUpdates){const vt=rt.data.subarray(j*W/rt.data.BYTES_PER_ELEMENT,(j+1)*W/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,yt,Lt,vt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Lt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,yt,Lt,rt.data);else if(x.isData3DTexture)zt?(ae&&e.texStorage3D(s.TEXTURE_3D,dt,Ut,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Lt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,yt,Lt,rt.data);else if(x.isFramebufferTexture){if(ae)if(zt)e.texStorage2D(s.TEXTURE_2D,dt,Ut,rt.width,rt.height);else{let W=rt.width,j=rt.height;for(let vt=0;vt<dt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ut,W,j,0,yt,Lt,null),W>>=1,j>>=1}}else if(Yt.length>0){if(zt&&ae){const W=mt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ut,W.width,W.height)}for(let W=0,j=Yt.length;W<j;W++)St=Yt[W],zt?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,yt,Lt,St):e.texImage2D(s.TEXTURE_2D,W,Ut,yt,Lt,St);x.generateMipmaps=!1}else if(zt){if(ae){const W=mt(rt);e.texStorage2D(s.TEXTURE_2D,dt,Ut,W.width,W.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Lt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ut,yt,Lt,rt);m(x)&&p(Y),wt.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function at(T,x,B){if(x.image.length!==6)return;const Y=$t(T,x),tt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);const q=n.get(tt);if(tt.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+B);const wt=Jt.getPrimaries(Jt.workingColorSpace),ut=x.colorSpace===Rn?null:Jt.getPrimaries(x.colorSpace),xt=x.colorSpace===Rn||wt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!Xt&&!rt?yt[j]=v(x.image[j],!0,i.maxCubemapSize):yt[j]=rt?x.image[j].image:x.image[j],yt[j]=Pt(x,yt[j]);const Lt=yt[0],Ut=r.convert(x.format,x.colorSpace),St=r.convert(x.type),Yt=y(x.internalFormat,Ut,St,x.colorSpace),zt=x.isVideoTexture!==!0,ae=q.__version===void 0||Y===!0,I=tt.dataReady;let dt=L(x,Lt);It(s.TEXTURE_CUBE_MAP,x);let W;if(Xt){zt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Yt,Lt.width,Lt.height);for(let j=0;j<6;j++){W=yt[j].mipmaps;for(let vt=0;vt<W.length;vt++){const gt=W[vt];x.format!==Ze?Ut!==null?zt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,gt.width,gt.height,Ut,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,Yt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,gt.width,gt.height,Ut,St,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,Yt,gt.width,gt.height,0,Ut,St,gt.data)}}}else{if(W=x.mipmaps,zt&&ae){W.length>0&&dt++;const j=mt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Yt,j.width,j.height)}for(let j=0;j<6;j++)if(rt){zt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Ut,St,yt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,yt[j].width,yt[j].height,0,Ut,St,yt[j].data);for(let vt=0;vt<W.length;vt++){const Ot=W[vt].image[j].image;zt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Ot.width,Ot.height,Ut,St,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,Yt,Ot.width,Ot.height,0,Ut,St,Ot.data)}}else{zt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,St,yt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,Ut,St,yt[j]);for(let vt=0;vt<W.length;vt++){const gt=W[vt];zt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Ut,St,gt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,Yt,Ut,St,gt.image[j])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),q.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ht(T,x,B,Y,tt,q){const wt=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),xt=y(B.internalFormat,wt,ut,B.colorSpace),Xt=n.get(x),rt=n.get(B);if(rt.__renderTarget=x,!Xt.__hasExternalTextures){const yt=Math.max(1,x.width>>q),Lt=Math.max(1,x.height>>q);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,xt,yt,Lt,x.depth,0,wt,ut,null):e.texImage2D(tt,q,xt,yt,Lt,0,wt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),_t(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,tt,rt.__webglTexture,0,nt(x)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,tt,rt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(T,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,q=_(x.stencilBuffer,tt),wt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=nt(x);_t(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,q,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,T)}else{const Y=x.textures;for(let tt=0;tt<Y.length;tt++){const q=Y[tt],wt=r.convert(q.format,q.colorSpace),ut=r.convert(q.type),xt=y(q.internalFormat,wt,ut,q.colorSpace),Xt=nt(x);B&&_t(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,xt,x.width,x.height):_t(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,xt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,xt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const tt=Y.__webglTexture,q=nt(x);if(x.depthTexture.format===Si)_t(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Ri)_t(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Vt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),ot(x.__webglDepthbuffer[Y],T,!1);else{const tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ot(x.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(T,x,B){const Y=n.get(T);x!==void 0&&ht(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Vt(T)}function Wt(T){const x=T.texture,B=n.get(T),Y=n.get(x);T.addEventListener("dispose",C);const tt=T.textures,q=T.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let xt=0;xt<x.mipmaps.length;xt++)B.__webglFramebuffer[ut][xt]=s.createFramebuffer()}else B.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)B.__webglFramebuffer[ut]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ut=0,xt=tt.length;ut<xt;ut++){const Xt=n.get(tt[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const xt=tt[ut];B.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);const Xt=r.convert(xt.format,xt.colorSpace),rt=r.convert(xt.type),yt=y(xt.internalFormat,Xt,rt,xt.colorSpace,T.isXRRenderTarget===!0),Lt=nt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,yt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),It(s.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)ht(B.__webglFramebuffer[ut][xt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else ht(B.__webglFramebuffer[ut],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,xt=tt.length;ut<xt;ut++){const Xt=tt[ut],rt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),It(s.TEXTURE_2D,Xt),ht(B.__webglFramebuffer,T,Xt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),It(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)ht(B.__webglFramebuffer[xt],T,x,s.COLOR_ATTACHMENT0,ut,xt);else ht(B.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ut,0);m(x)&&p(ut),e.unbindTexture()}T.depthBuffer&&Vt(T)}function et(T){const x=T.textures;for(let B=0,Y=x.length;B<Y;B++){const tt=x[B];if(m(tt)){const q=b(T),wt=n.get(tt).__webglTexture;e.bindTexture(q,wt),p(q),e.unbindTexture()}}}const Q=[],w=[];function Tt(T){if(T.samples>0){if(_t(T)===!1){const x=T.textures,B=T.width,Y=T.height;let tt=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(T),ut=x.length>1;if(ut)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Xt=n.get(x[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,tt,s.NEAREST),l===!0&&(Q.length=0,w.length=0,Q.push(s.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(q),w.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,w)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Xt=n.get(x[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function nt(T){return Math.min(i.maxSamples,T.samples)}function _t(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Pt(T,x){const B=T.colorSpace,Y=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ci&&B!==Rn&&(Jt.getTransfer(B)===ie?(Y!==Ze||tt!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=bt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=_t}function Eg(s,t){function e(n,i=Rn){let r;const a=Jt.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return s.BYTE;if(n===Dl)return s.SHORT;if(n===ji)return s.UNSIGNED_SHORT;if(n===ka)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===ss)return s.HALF_FLOAT;if(n===Ul)return s.ALPHA;if(n===Nl)return s.RGB;if(n===Ze)return s.RGBA;if(n===Fl)return s.LUMINANCE;if(n===Ol)return s.LUMINANCE_ALPHA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===Bl)return s.RED;if(n===$a)return s.RED_INTEGER;if(n===zl)return s.RG;if(n===Ya)return s.RG_INTEGER;if(n===qa)return s.RGBA_INTEGER;if(n===Hs||n===Vs||n===ks||n===Ws)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ua||n===da)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Ta||n===wa||n===Aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xs||n===Ra||n===Ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xs)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Pa||n===La||n===Da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:bg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ag extends Di{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new wg,m=e.getContextAttributes();let p=null,b=null;const y=[],_=[],L=new K;let A=null;const C=new Pe;C.viewport=new se;const D=new Pe;D.viewport=new se;const E=[C,D],M=new Yu;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let at=y[X];return at===void 0&&(at=new Dr,y[X]=at),at.getTargetRaySpace()},this.getControllerGrip=function(X){let at=y[X];return at===void 0&&(at=new Dr,y[X]=at),at.getGripSpace()},this.getHand=function(X){let at=y[X];return at===void 0&&(at=new Dr,y[X]=at),at.getHandSpace()};function F(X){const at=_.indexOf(X.inputSource);if(at===-1)return;const ht=y[at];ht!==void 0&&(ht.update(X.inputSource,X.frame,c||a),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",$);for(let X=0;X<y.length;X++){const at=_[X];at!==null&&(_[X]=null,y[X].disconnect(at))}P=null,V=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",z),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,ot=null,At=null;m.depth&&(At=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?Ri:Si,ot=m.stencil?Ai:Kn);const Vt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Zn(f.textureWidth,f.textureHeight,{format:Ze,type:xn,depthTexture:new ec(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Zn(d.framebufferWidth,d.framebufferHeight,{format:Ze,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(X){for(let at=0;at<X.removed.length;at++){const ht=X.removed[at],ot=_.indexOf(ht);ot>=0&&(_[ot]=null,y[ot].disconnect(ht))}for(let at=0;at<X.added.length;at++){const ht=X.added[at];let ot=_.indexOf(ht);if(ot===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=_.length){_.push(ht),ot=Vt;break}else if(_[Vt]===null){_[Vt]=ht,ot=Vt;break}if(ot===-1)break}const At=y[ot];At&&At.connect(ht)}}const H=new R,J=new R;function O(X,at,ht){H.setFromMatrixPosition(at.matrixWorld),J.setFromMatrixPosition(ht.matrixWorld);const ot=H.distanceTo(J),At=at.projectionMatrix.elements,Vt=ht.projectionMatrix.elements,bt=At[14]/(At[10]-1),Wt=At[14]/(At[10]+1),et=(At[9]+1)/At[5],Q=(At[9]-1)/At[5],w=(At[8]-1)/At[0],Tt=(Vt[8]+1)/Vt[0],nt=bt*w,_t=bt*Tt,lt=ot/(-w+Tt),Pt=lt*-w;if(at.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const mt=bt+lt,T=Wt+lt,x=nt-Pt,B=_t+(ot-Pt),Y=et*Wt/T*mt,tt=Q*Wt/T*mt;X.projectionMatrix.makePerspective(x,B,Y,tt,mt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,at){at===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(at.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let at=X.near,ht=X.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),M.near=D.near=C.near=at,M.far=D.far=C.far=ht,(P!==M.near||V!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),C.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,M.layers.mask=C.layers.mask|D.layers.mask;const ot=X.parent,At=M.cameras;Z(M,ot);for(let Vt=0;Vt<At.length;Vt++)Z(At[Vt],ot);At.length===2?O(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),it(X,M,ot)};function it(X,at,ht){ht===null?X.matrix.copy(at.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(at.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let pt=null;function It(X,at){if(h=at.getViewerPose(c||a),g=at,h!==null){const ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ot=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let bt=0;bt<ht.length;bt++){const Wt=ht[bt];let et=null;if(d!==null)et=d.getViewport(Wt);else{const w=u.getViewSubImage(f,Wt);et=w.viewport,bt===0&&(t.setRenderTargetTextures(b,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(b))}let Q=E[bt];Q===void 0&&(Q=new Pe,Q.layers.enable(bt),Q.viewport=new se,E[bt]=Q),Q.matrix.fromArray(Wt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Wt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(et.x,et.y,et.width,et.height),bt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Q)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const bt=u.getDepthInformation(ht[0]);bt&&bt.isValid&&bt.texture&&v.init(t,bt,i.renderState)}}for(let ht=0;ht<y.length;ht++){const ot=_[ht],At=y[ht];ot!==null&&At!==void 0&&At.update(ot,at,c||a)}pt&&pt(X,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const $t=new fc;$t.setAnimationLoop(It),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}}const Hn=new nn,Rg=new re;function Cg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),y=b.envMap,_=b.envMapRotation;y&&(m.envMap.value=y,Hn.copy(_),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Hn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const _=y.program;n.uniformBlockBinding(b,_)}function c(b,y){let _=i[b.id];_===void 0&&(g(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(b,L);const A=t.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const y=u();b.__bindingPointIndex=y;const _=s.createBuffer(),L=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=i[b.id],_=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,C=_.length;A<C;A++){const D=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,M=D.length;E<M;E++){const P=D[E];if(d(P,A,E,L)===!0){const V=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let $=0;$<F.length;$++){const H=F[$],J=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,V+z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,y,_,L){const A=b.value,C=y+"_"+_;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{const D=L[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(b){const y=b.uniforms;let _=0;const L=16;for(let C=0,D=y.length;C<D;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,P=E.length;M<P;M++){const V=E[M],F=Array.isArray(V.value)?V.value:[V.value];for(let z=0,$=F.length;z<$;z++){const H=F[z],J=v(H),O=_%L,Z=O%J.boundary,it=O+Z;_+=Z,it!==0&&L-it<J.storage&&(_+=L-it),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=J.storage}}}const A=_%L;return A>0&&(_+=L-A),b.__size=_,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Lg{constructor(t={}){const{canvas:e=Rh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Ln,this.toneMappingExposure=1;const _=this;let L=!1,A=0,C=0,D=null,E=-1,M=null;const P=new se,V=new se;let F=null;const z=new kt(0);let $=0,H=e.width,J=e.height,O=1,Z=null,it=null;const pt=new se(0,0,H,J),It=new se(0,0,H,J);let $t=!1;const X=new ja;let at=!1,ht=!1;this.transmissionResolutionScale=1;const ot=new re,At=new re,Vt=new R,bt=new se,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Q(){return D===null?O:1}let w=n;function Tt(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),w===null){const U="webgl2";if(w=Tt(U,S),w===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let nt,_t,lt,Pt,mt,T,x,B,Y,tt,q,wt,ut,xt,Xt,rt,yt,Lt,Ut,St,Yt,zt,ae,I;function dt(){nt=new Hp(w),nt.init(),zt=new Eg(w,nt),_t=new Up(w,nt,t,zt),lt=new yg(w,nt),_t.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Pt=new Wp(w),mt=new lg,T=new Sg(w,nt,lt,mt,_t,zt,Pt),x=new Fp(_),B=new Gp(_),Y=new Ku(w),ae=new Dp(w,Y),tt=new Vp(w,Y,Pt,ae),q=new $p(w,tt,Y,Pt),Ut=new Xp(w,_t,T),rt=new Np(mt),wt=new og(_,x,B,nt,_t,ae,rt),ut=new Cg(_,mt),xt=new hg,Xt=new gg(nt),Lt=new Lp(_,x,B,lt,q,d,l),yt=new xg(_,q,_t),I=new Pg(w,Pt,_t,lt),St=new Ip(w,nt,Pt),Yt=new kp(w,nt,Pt),Pt.programs=wt.programs,_.capabilities=_t,_.extensions=nt,_.properties=mt,_.renderLists=xt,_.shadowMap=yt,_.state=lt,_.info=Pt}dt();const W=new Ag(_,w);this.xr=W,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(H,J,!1))},this.getSize=function(S){return S.set(H,J)},this.setSize=function(S,U,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,J=U,e.width=Math.floor(S*O),e.height=Math.floor(U*O),G===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(H*O,J*O).floor()},this.setDrawingBufferSize=function(S,U,G){H=S,J=U,O=G,e.width=Math.floor(S*G),e.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,G,k){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,G,k),lt.viewport(P.copy(pt).multiplyScalar(O).round())},this.getScissor=function(S){return S.copy(It)},this.setScissor=function(S,U,G,k){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,U,G,k),lt.scissor(V.copy(It).multiplyScalar(O).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(S){lt.setScissorTest($t=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,G=!0){let k=0;if(S){let N=!1;if(D!==null){const st=D.texture.format;N=st===qa||st===Ya||st===$a}if(N){const st=D.texture.type,ft=st===xn||st===Kn||st===ji||st===Ai||st===Wa||st===Xa,Mt=Lt.getClearColor(),Et=Lt.getClearAlpha(),Nt=Mt.r,Ft=Mt.g,Rt=Mt.b;ft?(g[0]=Nt,g[1]=Ft,g[2]=Rt,g[3]=Et,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Nt,v[1]=Ft,v[2]=Rt,v[3]=Et,w.clearBufferiv(w.COLOR,0,v))}else k|=w.COLOR_BUFFER_BIT}U&&(k|=w.DEPTH_BUFFER_BIT),G&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Lt.dispose(),xt.dispose(),Xt.dispose(),mt.dispose(),x.dispose(),B.dispose(),q.dispose(),ae.dispose(),I.dispose(),wt.dispose(),W.dispose(),W.removeEventListener("sessionstart",ro),W.removeEventListener("sessionend",ao),Un.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=Pt.autoReset,U=yt.enabled,G=yt.autoUpdate,k=yt.needsUpdate,N=yt.type;dt(),Pt.autoReset=S,yt.enabled=U,yt.autoUpdate=G,yt.needsUpdate=k,yt.type=N}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){const U=S.target;U.removeEventListener("dispose",Ot),ce(U)}function ce(S){xe(S),mt.remove(S)}function xe(S){const U=mt.get(S).programs;U!==void 0&&(U.forEach(function(G){wt.releaseProgram(G)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,k,N,st){U===null&&(U=Wt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=_c(S,U,G,k,N);lt.setMaterial(k,ft);let Et=G.index,Nt=1;if(k.wireframe===!0){if(Et=tt.getWireframeAttribute(G),Et===void 0)return;Nt=2}const Ft=G.drawRange,Rt=G.attributes.position;let qt=Ft.start*Nt,jt=(Ft.start+Ft.count)*Nt;st!==null&&(qt=Math.max(qt,st.start*Nt),jt=Math.min(jt,(st.start+st.count)*Nt)),Et!==null?(qt=Math.max(qt,0),jt=Math.min(jt,Et.count)):Rt!=null&&(qt=Math.max(qt,0),jt=Math.min(jt,Rt.count));const ue=jt-qt;if(ue<0||ue===1/0)return;ae.setup(N,k,Mt,G,Et);let he,Zt=St;if(Et!==null&&(he=Y.get(Et),Zt=Yt,Zt.setIndex(he)),N.isMesh)k.wireframe===!0?(lt.setLineWidth(k.wireframeLinewidth*Q()),Zt.setMode(w.LINES)):Zt.setMode(w.TRIANGLES);else if(N.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),lt.setLineWidth(Ct*Q()),N.isLineSegments?Zt.setMode(w.LINES):N.isLineLoop?Zt.setMode(w.LINE_LOOP):Zt.setMode(w.LINE_STRIP)}else N.isPoints?Zt.setMode(w.POINTS):N.isSprite&&Zt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Vn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,_e=N._multiDrawCounts,Qt=N._multiDrawCount,ke=Et?Y.get(Et).bytesPerElement:1,Qn=mt.get(k).currentProgram.getUniforms();for(let Le=0;Le<Qt;Le++)Qn.setValue(w,"_gl_DrawID",Le),Zt.render(Ct[Le]/ke,_e[Le])}else if(N.isInstancedMesh)Zt.renderInstances(qt,ue,N.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_e=Math.min(G.instanceCount,Ct);Zt.renderInstances(qt,ue,_e)}else Zt.render(qt,ue)};function ee(S,U,G){S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Re,S.needsUpdate=!0,cs(S,U,G),S.side=Dn,S.needsUpdate=!0,cs(S,U,G),S.side=qe):cs(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),p=Xt.get(G),p.init(U),y.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==G&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const Mt=st[ft];ee(Mt,G,N),k.add(Mt)}else ee(st,G,N),k.add(st)}),p=y.pop(),k},this.compileAsync=function(S,U,G=null){const k=this.compile(S,U,G);return new Promise(N=>{function st(){if(k.forEach(function(ft){mt.get(ft).currentProgram.isReady()&&k.delete(ft)}),k.size===0){N(S);return}setTimeout(st,10)}nt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ve=null;function an(S){Ve&&Ve(S)}function ro(){Un.stop()}function ao(){Un.start()}const Un=new fc;Un.setAnimationLoop(an),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){Ve=S,W.setAnimationLoop(S),S===null?Un.stop():Un.start()},W.addEventListener("sessionstart",ro),W.addEventListener("sessionend",ao),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,D),p=Xt.get(S,y.length),p.init(U),y.push(p),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(At),ht=this.localClippingEnabled,at=rt.init(this.clippingPlanes,ht),m=xt.get(S,b.length),m.init(),b.push(m),W.enabled===!0&&W.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&cr(st,U,-1/0,_.sortObjects)}cr(S,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Z,it),et=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,et&&Lt.addToRenderList(m,S),this.info.render.frame++,at===!0&&rt.beginShadows();const G=p.state.shadowsArray;yt.render(G,S,U),at===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let ft=0,Mt=st.length;ft<Mt;ft++){const Et=st[ft];lo(k,N,S,Et)}et&&Lt.render(S);for(let ft=0,Mt=st.length;ft<Mt;ft++){const Et=st[ft];oo(m,S,Et,Et.viewport)}}else N.length>0&&lo(k,N,S,U),et&&Lt.render(S),oo(m,S,U);D!==null&&C===0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(_,S,U),ae.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],at===!0&&rt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function cr(S,U,G,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){k&&bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const ft=q.update(S),Mt=S.material;Mt.visible&&m.push(S,ft,Mt,G,bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const ft=q.update(S),Mt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),bt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),bt.copy(ft.boundingSphere.center)),bt.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(Mt)){const Et=ft.groups;for(let Nt=0,Ft=Et.length;Nt<Ft;Nt++){const Rt=Et[Nt],qt=Mt[Rt.materialIndex];qt&&qt.visible&&m.push(S,ft,qt,G,bt.z,Rt)}}else Mt.visible&&m.push(S,ft,Mt,G,bt.z,null)}}const st=S.children;for(let ft=0,Mt=st.length;ft<Mt;ft++)cr(st[ft],U,G,k)}function oo(S,U,G,k){const N=S.opaque,st=S.transmissive,ft=S.transparent;p.setupLightsView(G),at===!0&&rt.setGlobalState(_.clippingPlanes,G),k&&lt.viewport(P.copy(k)),N.length>0&&ls(N,U,G),st.length>0&&ls(st,U,G),ft.length>0&&ls(ft,U,G),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function lo(S,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ss:xn,minFilter:tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const st=p.state.transmissionRenderTarget[k.id],ft=k.viewport||P;st.setSize(ft.z*_.transmissionResolutionScale,ft.w*_.transmissionResolutionScale);const Mt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(z),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),et&&Lt.render(G);const Et=_.toneMapping;_.toneMapping=Ln;const Nt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),at===!0&&rt.setGlobalState(_.clippingPlanes,k),ls(S,G,k),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Rt=0,qt=U.length;Rt<qt;Rt++){const jt=U[Rt],ue=jt.object,he=jt.geometry,Zt=jt.material,Ct=jt.group;if(Zt.side===qe&&ue.layers.test(k.layers)){const _e=Zt.side;Zt.side=Re,Zt.needsUpdate=!0,co(ue,G,k,he,Zt,Ct),Zt.side=_e,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}_.setRenderTarget(Mt),_.setClearColor(z,$),Nt!==void 0&&(k.viewport=Nt),_.toneMapping=Et}function ls(S,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=S.length;N<st;N++){const ft=S[N],Mt=ft.object,Et=ft.geometry,Nt=k===null?ft.material:k,Ft=ft.group;Mt.layers.test(G.layers)&&co(Mt,U,G,Et,Nt,Ft)}}function co(S,U,G,k,N,st){S.onBeforeRender(_,U,G,k,N,st),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,U,G,k,S,st),N.transparent===!0&&N.side===qe&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,_.renderBufferDirect(G,U,k,N,S,st),N.side=Dn,N.needsUpdate=!0,_.renderBufferDirect(G,U,k,N,S,st),N.side=qe):_.renderBufferDirect(G,U,k,N,S,st),S.onAfterRender(_,U,G,k,N,st)}function cs(S,U,G){U.isScene!==!0&&(U=Wt);const k=mt.get(S),N=p.state.lights,st=p.state.shadowsArray,ft=N.state.version,Mt=wt.getParameters(S,N.state,st,U,G),Et=wt.getProgramCacheKey(Mt);let Nt=k.programs;k.environment=S.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",Ot),Nt=new Map,k.programs=Nt);let Ft=Nt.get(Et);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===ft)return uo(S,Mt),Ft}else Mt.uniforms=wt.getUniforms(S),S.onBeforeCompile(Mt,_),Ft=wt.acquireProgram(Mt,Et),Nt.set(Et,Ft),k.uniforms=Mt.uniforms;const Rt=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),uo(S,Mt),k.needsLights=Mc(S),k.lightsStateVersion=ft,k.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ft,k.uniformsList=null,Ft}function ho(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=$s.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function uo(S,U){const G=mt.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function _c(S,U,G,k,N){U.isScene!==!0&&(U=Wt),T.resetTextureUnits();const st=U.fog,ft=k.isMeshStandardMaterial?U.environment:null,Mt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ci,Et=(k.isMeshStandardMaterial?B:x).get(k.envMap||ft),Nt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!G.morphAttributes.position,qt=!!G.morphAttributes.normal,jt=!!G.morphAttributes.color;let ue=Ln;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ue=_.toneMapping);const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Zt=he!==void 0?he.length:0,Ct=mt.get(k),_e=p.state.lights;if(at===!0&&(ht===!0||S!==M)){const be=S===M&&k.id===E;rt.setState(k,S,be)}let Qt=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==_e.state.version||Ct.outputColorSpace!==Mt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Et||k.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ft||Ct.morphTargets!==Rt||Ct.morphNormals!==qt||Ct.morphColors!==jt||Ct.toneMapping!==ue||Ct.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,Ct.__version=k.version);let ke=Ct.currentProgram;Qt===!0&&(ke=cs(k,U,N));let Qn=!1,Le=!1,Ui=!1;const oe=ke.getUniforms(),Fe=Ct.uniforms;if(lt.useProgram(ke.program)&&(Qn=!0,Le=!0,Ui=!0),k.id!==E&&(E=k.id,Le=!0),Qn||M!==S){lt.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),Ph(ot),Lh(ot),oe.setValue(w,"projectionMatrix",ot)):oe.setValue(w,"projectionMatrix",S.projectionMatrix),oe.setValue(w,"viewMatrix",S.matrixWorldInverse);const Ce=oe.map.cameraPosition;Ce!==void 0&&Ce.setValue(w,Vt.setFromMatrixPosition(S.matrixWorld)),_t.logarithmicDepthBuffer&&oe.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&oe.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Le=!0,Ui=!0)}if(N.isSkinnedMesh){oe.setOptional(w,N,"bindMatrix"),oe.setOptional(w,N,"bindMatrixInverse");const be=N.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),oe.setValue(w,"boneTexture",be.boneTexture,T))}N.isBatchedMesh&&(oe.setOptional(w,N,"batchingTexture"),oe.setValue(w,"batchingTexture",N._matricesTexture,T),oe.setOptional(w,N,"batchingIdTexture"),oe.setValue(w,"batchingIdTexture",N._indirectTexture,T),oe.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(w,"batchingColorTexture",N._colorsTexture,T));const Oe=G.morphAttributes;if((Oe.position!==void 0||Oe.normal!==void 0||Oe.color!==void 0)&&Ut.update(N,G,ke),(Le||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,oe.setValue(w,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fe.envMap.value=Et,Fe.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Le&&(oe.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&xc(Fe,Ui),st&&k.fog===!0&&ut.refreshFogUniforms(Fe,st),ut.refreshMaterialUniforms(Fe,k,O,J,p.state.transmissionRenderTarget[S.id]),$s.upload(w,ho(Ct),Fe,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($s.upload(w,ho(Ct),Fe,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&oe.setValue(w,"center",N.center),oe.setValue(w,"modelViewMatrix",N.modelViewMatrix),oe.setValue(w,"normalMatrix",N.normalMatrix),oe.setValue(w,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const be=k.uniformsGroups;for(let Ce=0,hr=be.length;Ce<hr;Ce++){const Nn=be[Ce];I.update(Nn,ke),I.bind(Nn,ke)}}return ke}function xc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Mc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,G){mt.get(S.texture).__webglTexture=U,mt.get(S.depthTexture).__webglTexture=G;const k=mt.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const G=mt.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const yc=w.createFramebuffer();this.setRenderTarget=function(S,U=0,G=0){D=S,A=U,C=G;let k=!0,N=null,st=!1,ft=!1;if(S){const Et=mt.get(S);if(Et.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Et.__hasExternalTextures)T.rebindTextures(S,mt.get(S.texture).__webglTexture,mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Rt=S.depthTexture;if(Et.__boundDepthTexture!==Rt){if(Rt!==null&&mt.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);const Ft=mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][G]:N=Ft[U],st=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=mt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[G]:N=Ft,P.copy(S.viewport),V.copy(S.scissor),F=S.scissorTest}else P.copy(pt).multiplyScalar(O).floor(),V.copy(It).multiplyScalar(O).floor(),F=$t;if(G!==0&&(N=yc),lt.bindFramebuffer(w.FRAMEBUFFER,N)&&k&&lt.drawBuffers(S,N),lt.viewport(P),lt.scissor(V),lt.setScissorTest(F),st){const Et=mt.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,G)}else if(ft){const Et=mt.get(S.texture),Nt=U;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Et.__webglTexture,G,Nt)}else if(S!==null&&G!==0){const Et=mt.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Et.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(S,U,G,k,N,st,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){lt.bindFramebuffer(w.FRAMEBUFFER,Mt);try{const Et=S.texture,Nt=Et.format,Ft=Et.type;if(!_t.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&G>=0&&G<=S.height-N&&w.readPixels(U,G,k,N,zt.convert(Nt),zt.convert(Ft),st)}finally{const Et=D!==null?mt.get(D).__webglFramebuffer:null;lt.bindFramebuffer(w.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,k,N,st,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const Et=S.texture,Nt=Et.format,Ft=Et.type;if(!_t.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-k&&G>=0&&G<=S.height-N){lt.bindFramebuffer(w.FRAMEBUFFER,Mt);const Rt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Rt),w.bufferData(w.PIXEL_PACK_BUFFER,st.byteLength,w.STREAM_READ),w.readPixels(U,G,k,N,zt.convert(Nt),zt.convert(Ft),0);const qt=D!==null?mt.get(D).__webglFramebuffer:null;lt.bindFramebuffer(w.FRAMEBUFFER,qt);const jt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ch(w,jt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Rt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,st),w.deleteBuffer(Rt),w.deleteSync(jt),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,G=0){S.isTexture!==!0&&(Vn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-G),N=Math.floor(S.image.width*k),st=Math.floor(S.image.height*k),ft=U!==null?U.x:0,Mt=U!==null?U.y:0;T.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,ft,Mt,N,st),lt.unbindTexture()};const Sc=w.createFramebuffer(),Ec=w.createFramebuffer();this.copyTextureToTexture=function(S,U,G=null,k=null,N=0,st=null){S.isTexture!==!0&&(Vn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],U=arguments[2],st=arguments[3]||0,G=null),st===null&&(N!==0?(Vn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=N,N=0):st=0);let ft,Mt,Et,Nt,Ft,Rt,qt,jt,ue;const he=S.isCompressedTexture?S.mipmaps[st]:S.image;if(G!==null)ft=G.max.x-G.min.x,Mt=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,Ft=G.min.y,Rt=G.isBox3?G.min.z:0;else{const Oe=Math.pow(2,-N);ft=Math.floor(he.width*Oe),Mt=Math.floor(he.height*Oe),S.isDataArrayTexture?Et=he.depth:S.isData3DTexture?Et=Math.floor(he.depth*Oe):Et=1,Nt=0,Ft=0,Rt=0}k!==null?(qt=k.x,jt=k.y,ue=k.z):(qt=0,jt=0,ue=0);const Zt=zt.convert(U.format),Ct=zt.convert(U.type);let _e;U.isData3DTexture?(T.setTexture3D(U,0),_e=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),_e=w.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),_e=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=w.getParameter(w.UNPACK_ROW_LENGTH),ke=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Qn=w.getParameter(w.UNPACK_SKIP_PIXELS),Le=w.getParameter(w.UNPACK_SKIP_ROWS),Ui=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,he.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,he.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Nt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rt);const oe=S.isDataArrayTexture||S.isData3DTexture,Fe=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Oe=mt.get(S),be=mt.get(U),Ce=mt.get(Oe.__renderTarget),hr=mt.get(be.__renderTarget);lt.bindFramebuffer(w.READ_FRAMEBUFFER,Ce.__webglFramebuffer),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let Nn=0;Nn<Et;Nn++)oe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,mt.get(S).__webglTexture,N,Rt+Nn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,st,ue+Nn)),w.blitFramebuffer(Nt,Ft,ft,Mt,qt,jt,ft,Mt,w.DEPTH_BUFFER_BIT,w.NEAREST);lt.bindFramebuffer(w.READ_FRAMEBUFFER,null),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||mt.has(S)){const Oe=mt.get(S),be=mt.get(U);lt.bindFramebuffer(w.READ_FRAMEBUFFER,Sc),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ec);for(let Ce=0;Ce<Et;Ce++)oe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Oe.__webglTexture,N,Rt+Ce):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Oe.__webglTexture,N),Fe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,be.__webglTexture,st,ue+Ce):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,be.__webglTexture,st),N!==0?w.blitFramebuffer(Nt,Ft,ft,Mt,qt,jt,ft,Mt,w.COLOR_BUFFER_BIT,w.NEAREST):Fe?w.copyTexSubImage3D(_e,st,qt,jt,ue+Ce,Nt,Ft,ft,Mt):w.copyTexSubImage2D(_e,st,qt,jt,Nt,Ft,ft,Mt);lt.bindFramebuffer(w.READ_FRAMEBUFFER,null),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Fe?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(_e,st,qt,jt,ue,ft,Mt,Et,Zt,Ct,he.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(_e,st,qt,jt,ue,ft,Mt,Et,Zt,he.data):w.texSubImage3D(_e,st,qt,jt,ue,ft,Mt,Et,Zt,Ct,he):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,st,qt,jt,ft,Mt,Zt,Ct,he.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,st,qt,jt,he.width,he.height,Zt,he.data):w.texSubImage2D(w.TEXTURE_2D,st,qt,jt,ft,Mt,Zt,Ct,he);w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Qn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ui),st===0&&U.generateMipmaps&&w.generateMipmap(_e),lt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,G=null,k=null,N=0){return S.isTexture!==!0&&(Vn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Vn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,G,k,N)},this.initRenderTarget=function(S){mt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),lt.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,lt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class qn{group;currentType="business_jet";modelGroup;navLights=[];strobeLights=[];strobeMeshes=[];glowSprites=[];strobeGlow=null;strobeTimer=0;static glowTexture=null;static getGlowTexture(){if(!qn.glowTexture)try{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)return null;const i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.28,"rgba(255,255,255,0.85)"),i.addColorStop(.62,"rgba(255,255,255,0.22)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),qn.glowTexture=new Oa(e)}catch{return null}return qn.glowTexture}addGlowSprite(t,e,n,i,r=.9){const a=qn.getGlowTexture();if(!a)return null;const o=new Zs({map:a,color:i,transparent:!0,opacity:r,blending:Ji,depthWrite:!1}),l=new Ua(o);return l.position.set(t,e,n),l.scale.set(.3,.3,1),l.userData={isAircraftGlow:!0},this.modelGroup.add(l),this.glowSprites.push(l),l}getGlowSprites(){return this.glowSprites}constructor(t="business_jet"){this.group=new Je,this.modelGroup=new Je,this.group.add(this.modelGroup),this.setAircraftType(t)}getAircraftType(){return this.currentType}static resolveTypeFromAircraftName(t){if(!t)return"widebody_airliner";const e=t.toLowerCase();return/gulfstream|g650|g550|g500|g280|global\s?(5000|6000|7000|7500|8000|express)?\b|bombardier|challenger|learjet|cessna|citation|phenom|praetor|falcon|legacy|hawker|private|business\s?jet/.test(e)?"business_jet":"widebody_airliner"}setAircraftType(t){for(this.currentType=t;this.modelGroup.children.length>0;)this.modelGroup.remove(this.modelGroup.children[0]);this.navLights=[],this.strobeLights=[],this.strobeMeshes=[],this.glowSprites=[],this.strobeGlow=null,t==="business_jet"?this.buildPrivateBusinessJet():this.buildWidebodyAirliner()}buildPrivateBusinessJet(){const t=new Ye({color:16120059,roughness:.16,metalness:.2,side:qe}),e=new Ye({color:660512,roughness:.04,metalness:.95}),n=new Ye({color:14214381,roughness:.1,metalness:.92}),i=new Ye({color:1450546,roughness:.3,metalness:.55}),r=new Ye({color:13938487,roughness:.2,metalness:.75}),a=[new K(.001,4.3),new K(.12,4.18),new K(.24,3.9),new K(.35,3.5),new K(.42,3),new K(.44,2.3),new K(.44,0),new K(.44,-1.8),new K(.4,-2.6),new K(.32,-3.4),new K(.19,-4),new K(.07,-4.25),new K(.001,-4.3)],o=new tr(a,36);o.rotateX(Math.PI/2),o.computeVertexNormals();const l=new Dt(o,t);this.modelGroup.add(l);const c=new ze(.444,.444,.75,32,1,!1,-Math.PI/3.2,2*Math.PI/3.2);c.rotateX(Math.PI/2);const h=new Dt(c,e);h.position.set(0,.03,3.25),this.modelGroup.add(h);const u=new ze(.447,.447,.06,32,1,!1,-Math.PI/3.2,2*Math.PI/3.2);u.rotateX(Math.PI/2);const f=new Dt(u,n);f.position.set(0,.03,3.6),this.modelGroup.add(f);const d=new ze(.443,.443,4.4,32,1,!0);d.rotateX(Math.PI/2);const g=new Dt(d,r);g.scale.set(1.002,.035,1),g.position.set(0,.05,.2),this.modelGroup.add(g);const v=new An;v.moveTo(0,1),v.lineTo(.8,.9),v.lineTo(5.8,-1.6),v.lineTo(5.6,-2.1),v.lineTo(1.1,-1),v.lineTo(0,-.6),v.closePath();const m=new fn(v,{depth:.07,bevelEnabled:!0,bevelSegments:2,bevelSize:.02,bevelThickness:.02});m.rotateX(Math.PI/2),m.computeVertexNormals();const p=new Dt(m,t);p.position.set(.2,-.08,.3),p.rotation.z=-.05,this.modelGroup.add(p);const b=m.clone();b.scale(-1,1,1);const y=new Dt(b,t);y.position.set(-.2,-.08,.3),y.rotation.z=.05,this.modelGroup.add(y);const _=new An;_.moveTo(0,0),_.lineTo(.15,.7),_.lineTo(-.1,.7),_.lineTo(-.2,0),_.closePath();const L=new fn(_,{depth:.04,bevelEnabled:!1}),A=new Dt(L,t);A.position.set(5.75,.12,-1.8),A.rotation.z=-.3,A.rotation.y=-.08,this.modelGroup.add(A);const C=L.clone();C.scale(-1,1,1);const D=new Dt(C,t);D.position.set(-5.75,.12,-1.8),D.rotation.z=.3,D.rotation.y=.08,this.modelGroup.add(D);const E=at=>{const ht=new Je,ot=new ze(.26,.23,1.8,24);ot.rotateX(Math.PI/2);const At=new Dt(ot,t);ht.add(At);const Vt=new ir(.25,.03,16,24),bt=new Dt(Vt,n);bt.position.set(0,0,.9),ht.add(bt);const Wt=new er(.24,24),et=new Dt(Wt,i);et.position.set(0,0,.75),ht.add(et);const Q=new nr(.08,.22,16);Q.rotateX(-Math.PI/2);const w=new Dt(Q,n);w.position.set(0,0,.85),ht.add(w);const Tt=new ze(.21,.17,.35,24);Tt.rotateX(Math.PI/2);const nt=new Dt(Tt,i);nt.position.set(0,0,-1),ht.add(nt);const _t=new Jn(.35,.08,.9),lt=new Dt(_t,i);return lt.position.set(at?-.22:.22,0,0),ht.add(lt),ht.position.set(at?.72:-.72,.22,-2.1),ht};this.modelGroup.add(E(!0)),this.modelGroup.add(E(!1));const M=new An;M.moveTo(0,0),M.lineTo(1.6,2.3),M.lineTo(2.2,2.3),M.lineTo(1.6,0),M.closePath();const P=new fn(M,{depth:.06,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015});P.rotateY(Math.PI/2);const V=new Dt(P,t);V.position.set(-.03,.25,-2.1),this.modelGroup.add(V);const F=new An;F.moveTo(0,0),F.lineTo(1.8,-.6),F.lineTo(1.6,-.9),F.lineTo(0,-.4),F.closePath();const z=new fn(F,{depth:.05,bevelEnabled:!1});z.rotateX(Math.PI/2);const $=new Dt(z,t);$.position.set(.02,2.57,-3.75),this.modelGroup.add($);const H=z.clone();H.scale(-1,1,1);const J=new Dt(H,t);J.position.set(-.02,2.57,-3.75),this.modelGroup.add(J);const O=new wn(16711731,1.2,6);O.position.set(-5.75,.1,-1.8),this.modelGroup.add(O),this.navLights.push(O);const Z=new wn(65382,1.2,6);Z.position.set(5.75,.1,-1.8),this.modelGroup.add(Z),this.navLights.push(Z);const it=new wn(16777215,1,5);it.position.set(0,2.55,-4.35),this.modelGroup.add(it),this.navLights.push(it);const pt=new wn(16777215,2.5,8);pt.position.set(0,.46,.2),this.modelGroup.add(pt),this.strobeLights.push(pt);const It=new Cn(.11,8,8),$t=new Pi({color:16777215}),X=new Dt(It,$t);X.position.set(0,.46,.2),this.modelGroup.add(X),this.strobeMeshes.push(X),this.addGlowSprite(-5.85,.45,-1.8,16724048),this.addGlowSprite(5.85,.45,-1.8,3014512),this.addGlowSprite(0,2.62,-4.4,16777215,.75),this.strobeGlow=this.addGlowSprite(0,.46,.2,16777215,.95)}buildWidebodyAirliner(){const t=new Ye({color:16120059,roughness:.15,metalness:.18,side:qe}),e=new Ye({color:660512,roughness:.04,metalness:.95}),n=new Ye({color:14214381,roughness:.1,metalness:.92}),i=new Ye({color:993092,roughness:.25,metalness:.45}),r=new Ye({color:1925032,roughness:.28,metalness:.35}),a=[new K(.001,5),new K(.18,4.88),new K(.34,4.52),new K(.46,4),new K(.52,3.2),new K(.52,0),new K(.52,-2.4),new K(.48,-3.4),new K(.38,-4.2),new K(.22,-4.8),new K(.08,-5.15),new K(.001,-5.2)],o=new tr(a,36);o.rotateX(Math.PI/2),o.computeVertexNormals();const l=new Dt(o,t);this.modelGroup.add(l);const c=new ze(.523,.523,.85,32,1,!1,-Math.PI/3.4,2*Math.PI/3.4);c.rotateX(Math.PI/2);const h=new Dt(c,e);h.position.set(0,.04,4),this.modelGroup.add(h);const u=new ze(.524,.524,5.2,32,1,!0,Math.PI/3,4*Math.PI/3);u.rotateX(Math.PI/2);const f=new Dt(u,i);f.position.set(0,-.05,.2),this.modelGroup.add(f);const d=new An;d.moveTo(0,1.3),d.lineTo(1.2,1.15),d.lineTo(6.6,-1.8),d.lineTo(6.4,-2.35),d.lineTo(1.4,-1.2),d.lineTo(0,-.8),d.closePath();const g=new fn(d,{depth:.09,bevelEnabled:!0,bevelSegments:2,bevelSize:.025,bevelThickness:.025});g.rotateX(Math.PI/2),g.computeVertexNormals();const v=new Dt(g,t);v.position.set(.3,-.12,.4),v.rotation.z=-.06,this.modelGroup.add(v);const m=g.clone();m.scale(-1,1,1);const p=new Dt(m,t);p.position.set(-.3,-.12,.4),p.rotation.z=.06,this.modelGroup.add(p);const b=O=>{const Z=new Je,it=new ze(.38,.35,2,28);it.rotateX(Math.PI/2);const pt=new Dt(it,t);Z.add(pt);const It=new ir(.36,.035,16,28),$t=new Dt(It,n);$t.position.set(0,0,1),Z.add($t);const X=new er(.35,24),at=new Dt(X,i);at.position.set(0,0,.85),Z.add(at);const ht=new nr(.1,.28,16);ht.rotateX(-Math.PI/2);const ot=new Dt(ht,n);ot.position.set(0,0,.95),Z.add(ot);const At=new ze(.31,.24,.4,24);At.rotateX(Math.PI/2);const Vt=new Dt(At,i);Vt.position.set(0,0,-1.1),Z.add(Vt);const bt=new Jn(.1,.35,1.1),Wt=new Dt(bt,i);return Wt.position.set(0,.3,0),Z.add(Wt),Z.position.set(O?2:-2,-.62,.5),Z};this.modelGroup.add(b(!0)),this.modelGroup.add(b(!1));const y=new An;y.moveTo(0,0),y.lineTo(1.7,2.7),y.lineTo(2.3,2.7),y.lineTo(1.6,0),y.closePath();const _=new fn(y,{depth:.08,bevelEnabled:!0,bevelSize:.02});_.rotateY(Math.PI/2);const L=new Dt(_,r);L.position.set(-.04,.35,-2.7),this.modelGroup.add(L);const A=new An;A.moveTo(0,0),A.lineTo(2.3,-.8),A.lineTo(2.1,-1.2),A.lineTo(0,-.5),A.closePath();const C=new fn(A,{depth:.06,bevelEnabled:!1});C.rotateX(Math.PI/2);const D=new Dt(C,t);D.position.set(.15,.1,-4.2),D.rotation.z=-.06,this.modelGroup.add(D);const E=C.clone();E.scale(-1,1,1);const M=new Dt(E,t);M.position.set(-.15,.1,-4.2),M.rotation.z=.06,this.modelGroup.add(M);const P=new wn(16711731,1.2,6);P.position.set(-6.5,.1,-2.1),this.modelGroup.add(P),this.navLights.push(P);const V=new wn(65382,1.2,6);V.position.set(6.5,.1,-2.1),this.modelGroup.add(V),this.navLights.push(V);const F=new wn(16777215,1,5);F.position.set(0,2.95,-5.05),this.modelGroup.add(F),this.navLights.push(F);const z=new wn(16777215,2.5,10);z.position.set(0,.55,.2),this.modelGroup.add(z),this.strobeLights.push(z);const $=new Cn(.13,8,8),H=new Pi({color:16777215}),J=new Dt($,H);J.position.set(0,.55,.2),this.modelGroup.add(J),this.strobeMeshes.push(J),this.addGlowSprite(-6.55,.42,-2.1,16724048),this.addGlowSprite(6.55,.42,-2.1,3014512),this.addGlowSprite(0,3.02,-5.08,16777215,.75),this.strobeGlow=this.addGlowSprite(0,.55,.2,16777215,.95)}update(t){this.strobeTimer+=t;const e=this.strobeTimer%1.2<.08||this.strobeTimer%1.2>.16&&this.strobeTimer%1.2<.24;for(const n of this.strobeLights)n.intensity=e?3:0;for(const n of this.strobeMeshes)n.visible=e;this.strobeGlow&&(this.strobeGlow.visible=e)}}const bl={uniforms:{glowColor:{value:new kt(43263)},sunDirection:{value:new R(1,0,0)}},vertexShader:`
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    uniform vec3 glowColor;
    uniform float coefficient;
    uniform float power;
    uniform vec3 sunDirection;

    void main() {
      // Limb intensity based on view normal
      float intensity = pow(max(0.0, coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0))), power);

      // Solar lighting modulation: atmosphere shines brightest on the sun-facing hemisphere
      float sunDot = dot(vWorldNormal, normalize(sunDirection));
      float sunIllum = smoothstep(-0.25, 0.35, sunDot);

      // Warm twilight scattering rim (golden/crimson dawn & dusk)
      float twilight = smoothstep(-0.18, 0.02, sunDot) * smoothstep(0.22, 0.02, sunDot);
      vec3 scatterColor = mix(glowColor * 0.3, glowColor, sunIllum);
      scatterColor += vec3(0.95, 0.42, 0.12) * (twilight * 0.75);

      gl_FragColor = vec4(scatterColor, intensity * (0.25 + 0.65 * sunIllum));
    }
  `},Tl={uniforms:{sunDirection:{value:new R(1,0,0)}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;
    uniform vec3 sunDirection;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vSunDir = normalize(sunDirection);
      vViewDir = normalize(cameraPosition - worldPosition.xyz);
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,fragmentShader:`
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform sampler2D specularMap;
    uniform sampler2D bumpMap;
    uniform int mapStyle;
    uniform float reliefStrength;
    uniform int illuminationMode;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;

    void main() {
      // Elevation bump relief perturbation (controlled by reliefStrength)
      vec3 perturbedNormal = vNormal;
      if (reliefStrength > 0.01) {
        float hCenter = texture2D(bumpMap, vUv).r;
        float hEast = texture2D(bumpMap, vUv + vec2(0.00030, 0.0)).r;
        float hNorth = texture2D(bumpMap, vUv + vec2(0.0, 0.00045)).r;
        vec3 delta = vec3((hCenter - hEast) * 4.2, (hCenter - hNorth) * 4.2, 0.0) * reliefStrength;
        perturbedNormal = normalize(vNormal + delta);
      }

      float sunDot = dot(perturbedNormal, vSunDir);
      float smoothSunDot = dot(vNormal, vSunDir);

      // Terminator transition with illuminationMode overrides
      float dayFactor;
      float nightFactor;
      float twilight = 0.0;

      if (illuminationMode == 1) {
        // Force Day
        dayFactor = 1.0;
        nightFactor = 0.0;
      } else if (illuminationMode == 2) {
        // Force Night
        dayFactor = 0.0;
        nightFactor = 1.0;
      } else {
        // Real-time Astronomical Solar Terminator
        dayFactor = smoothstep(-0.06, 0.14, smoothSunDot);
        nightFactor = smoothstep(0.06, -0.08, smoothSunDot);
        twilight = smoothstep(-0.10, 0.03, smoothSunDot) * smoothstep(0.16, 0.03, smoothSunDot);
      }

      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv);
      vec4 specMask = texture2D(specularMap, vUv);
      float isWater = smoothstep(0.35, 0.65, specMask.r);

      // Crisp pinpoint incandescent city lights
      vec3 cityLuma = pow(nightColor.rgb, vec3(1.30));
      vec3 nightCity = cityLuma * 3.1 * nightFactor;

      // --- REGULAR CARTOGRAPHIC MAP (Clean Geopolitical Navigation Map, No Relief) ---
      if (mapStyle == 1) {
        // Clean cartographic Day palette: elegant neutral continent with subtle terrain tone, sapphire ocean
        vec3 landDay = mix(vec3(0.20, 0.23, 0.27), dayColor.rgb * 0.60 + vec3(0.12, 0.14, 0.16), 0.35);
        vec3 oceanDay = vec3(0.06, 0.17, 0.32);
        vec3 cartoDay = mix(landDay, oceanDay, isWater);

        // Soft solar illumination modulation on regular map
        if (illuminationMode == 0) {
          cartoDay *= clamp(dot(vNormal, vSunDir) * 0.45 + 0.65, 0.30, 1.0);
        }

        // Clean cartographic Night palette: tactical dark slate continent, abyss indigo ocean
        vec3 landNight = vec3(0.035, 0.050, 0.070);
        vec3 oceanNight = vec3(0.012, 0.020, 0.040);
        vec3 cartoNight = mix(landNight, oceanNight, isWater);

        // Pinpoint night lights over land
        cartoNight += cityLuma * 3.2 * (1.0 - isWater) * nightFactor;

        // Blend Day and Night
        vec3 regularColor = mix(cartoNight, cartoDay, dayFactor);

        // Twilight scattering rim along terminator
        if (illuminationMode == 0) {
          regularColor += vec3(0.95, 0.42, 0.12) * (twilight * 0.35);
        }

        gl_FragColor = vec4(regularColor, 1.0);
        return;
      }

      // --- REALISTIC SATELLITE MAP (NASA Blue Marble + Elevation Relief) ---
      float diffuse = clamp(sunDot * 0.85 + 0.15, 0.08, 1.0);
      vec3 dayLighting = dayColor.rgb * diffuse * dayFactor;
      vec3 twilightGlow = vec3(0.95, 0.42, 0.12) * (twilight * 0.45);

      // Specular ocean sheen on the sunlit hemisphere
      if (smoothSunDot > 0.0 && dayFactor > 0.01) {
        vec3 halfVector = normalize(vSunDir + vViewDir);
        float specAngle = max(dot(vNormal, halfVector), 0.0);
        float specular = pow(specAngle, 36.0) * isWater * 0.70;
        dayLighting += vec3(specular * 0.85, specular * 0.92, specular) * dayFactor;
      }

      vec3 finalColor = dayLighting + nightCity + twilightGlow;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};class Ae{static instance;currentThemeId="cyan";listeners=[];static THEMES={cyan:{id:"cyan",name:"Cyberpunk Cyan HUD",accent:"#00e5ff",accentDim:"#0284c7",hex3D:58879,glow3D:43263},stealth:{id:"stealth",name:"Stealth Monochrome",accent:"#ffffff",accentDim:"#94a3b8",hex3D:16777215,glow3D:12636384},amber:{id:"amber",name:"Amber CRT Phosphor",accent:"#ffb000",accentDim:"#d48800",hex3D:16756736,glow3D:16750848},emerald:{id:"emerald",name:"Emerald Matrix Green",accent:"#00ff66",accentDim:"#00cc44",hex3D:65382,glow3D:56661},plasma:{id:"plasma",name:"Ultraviolet Plasma",accent:"#bd00ff",accentDim:"#a855f7",hex3D:12386559,glow3D:10289407},crimson:{id:"crimson",name:"Solar Crimson Red",accent:"#ff2a55",accentDim:"#dc2626",hex3D:16722517,glow3D:14753096}};constructor(){const t=localStorage.getItem("flightmap_theme");t&&Ae.THEMES[t]&&(this.currentThemeId=t),this.applyTheme(this.currentThemeId)}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}getCurrentTheme(){return Ae.THEMES[this.currentThemeId]||Ae.THEMES.cyan}setTheme(t){Ae.THEMES[t]&&(this.currentThemeId=t,localStorage.setItem("flightmap_theme",t),this.applyTheme(t))}applyTheme(t){const e=Ae.THEMES[t]||Ae.THEMES.cyan,n=document.documentElement;n.style.setProperty("--accent-cyan",e.accent),n.style.setProperty("--accent-cyan-dim",e.accentDim),n.style.setProperty("--panel-border",`${e.accent}2e`),n.style.setProperty("--panel-glow",`${e.accent}14`);for(const i of this.listeners)i(e)}onThemeChanged(t){return this.listeners.push(t),t(this.getCurrentTheme()),()=>{this.listeners=this.listeners.filter(e=>e!==t)}}}class gn{static STORAGE_KEY="flightmap_texture_tier";static resolve(t){const e=gn.getOverride();if(e)return e;if(t<8192)return"mobile";const n=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,i=Math.min(window.screen?.width||0,window.screen?.height||0),r=i>0&&i<=900,a=navigator.deviceMemory,o=typeof a=="number"&&a<=4;return n||r||o?"mobile":"full"}static getOverride(){try{const t=localStorage.getItem(gn.STORAGE_KEY);if(t==="full"||t==="mobile")return t}catch{}return null}static setOverride(t){try{t?localStorage.setItem(gn.STORAGE_KEY,t):localStorage.removeItem(gn.STORAGE_KEY)}catch{}}static basePath(t){const e="/FlightMap/".replace(/\/$/,"");return t==="mobile"?`${e}/assets/textures/mobile`:`${e}/assets/textures`}static getLabel(t){return t==="mobile"?"4K HD":"8K ULTRA"}static getDescription(t){return t==="mobile"?"4096x2048 High Definition":"8192x4096 Ultra HD"}}class Ha{static getSubsolarPoint(t){const i=t.getTime()/864e5+24405875e-1-2451545,a=((357.529+.98560028*i)%360+360)%360*Math.PI/180,o=((280.459+.98564736*i)%360+360)%360,c=((o+1.915*Math.sin(a)+.02*Math.sin(2*a))%360+360)%360*Math.PI/180,u=(23.439-36e-8*i)*Math.PI/180,f=Math.sin(u)*Math.sin(c),d=Math.asin(f)*(180/Math.PI),g=(Math.atan2(Math.cos(u)*Math.sin(c),Math.cos(c))*(180/Math.PI)%360+360)%360,v=((280.46061837+360.98564736629*i)%360+360)%360;let m=(g-v)%360;m>180&&(m-=360),m<-180&&(m+=360);const p=(o-g)*4;return{lat:d,lon:m,declinationDeg:d,equationOfTimeMinutes:p}}static getSunVector(t,e=350){const n=this.getSubsolarPoint(t),i=Kt.latLonToVector3(n.lat,n.lon,e);return new R(i.x,i.y,i.z)}static getLocalSolarInfo(t,e,n){const i=this.getSubsolarPoint(n),r=t*Math.PI/180,a=i.lat*Math.PI/180,l=(e-i.lon)*Math.PI/180,c=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(l),h=Math.asin(Math.max(-1,Math.min(1,c)))*(180/Math.PI),u=Math.cos(h*(Math.PI/180));let f=180;if(Math.abs(u)>.001){const m=(Math.sin(a)-Math.sin(r)*c)/(Math.cos(r)*u),p=Math.max(-1,Math.min(1,m));f=Math.acos(p)*(180/Math.PI),Math.sin(l)>0&&(f=360-f)}let d,g,v;return h>0?(d="day",g="DAYLIGHT",v="☀️"):h>-6?(d="civil_twilight",g="CIVIL TWILIGHT",v="🌅"):h>-12?(d="nautical_twilight",g="NAUTICAL TWILIGHT",v="🌆"):h>-18?(d="astronomical_twilight",g="DUSK / DAWN",v="🌌"):(d="night",g="NIGHT",v="🌙"),{elevationDeg:Math.round(h*10)/10,azimuthDeg:Math.round(f),phase:d,phaseLabel:g,phaseIcon:v}}}class Se{scene;renderer;earthMesh;atmosphereMesh;cloudsMesh;earthShaderMat;atmosShaderMat;aircraft;flightPathGroup;bordersGroup;countryLabelsGroup;sunLight;ambientLight;textureTier;textureBase;static MAP_STYLE_STORAGE_KEY="flightmap_map_style";static RELIEF_STORAGE_KEY="flightmap_relief_enabled";static ILLUM_STORAGE_KEY="flightmap_illum_mode";mapStyle="satellite";reliefEnabled=!0;illuminationMode="auto";solarMode="utc";manualSolarDate=new Date;currentSunPosition=new R(250,60,150);currentSolarInfo=null;static GLOBE_RADIUS=100;currentFlightPlan=null;currentTheme=Ae.getInstance().getCurrentTheme();constructor(t){this.scene=new nu,this.scene.background=new kt(132106),this.renderer=new Lg({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.toneMapping=Cl,this.renderer.toneMappingExposure=1.15,this.textureTier=gn.resolve(this.renderer.capabilities.maxTextureSize),this.textureBase=gn.basePath(this.textureTier);try{const n=localStorage.getItem(Se.MAP_STYLE_STORAGE_KEY);(n==="satellite"||n==="regular")&&(this.mapStyle=n);const i=localStorage.getItem(Se.RELIEF_STORAGE_KEY);i!==null&&(this.reliefEnabled=i==="1");const r=localStorage.getItem(Se.ILLUM_STORAGE_KEY);(r==="auto"||r==="day"||r==="night")&&(this.illuminationMode=r)}catch{}const e=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(e),console.log(`[GlobeScene] Texture tier: ${this.textureTier} (maxTextureSize=${this.renderer.capabilities.maxTextureSize}, pixelRatio=${e}, mapStyle=${this.mapStyle})`),this.aircraft=new qn("business_jet"),this.scene.add(this.aircraft.group),this.flightPathGroup=new Je,this.bordersGroup=new Je,this.countryLabelsGroup=new Je,this.scene.add(this.flightPathGroup),this.scene.add(this.bordersGroup),this.scene.add(this.countryLabelsGroup),this.initLighting(),this.initStarfield(),this.initEarth(),this.initAtmosphere(),this.initClouds(),this.updateSunPosition(),this.loadCountryBorders(),this.initThemeListener()}setAircraftType(t){this.aircraft.setAircraftType(t)}setSolarMode(t){this.solarMode=t,this.updateSunPosition()}setManualSolarDate(t){this.manualSolarDate=t,this.updateSunPosition()}updateSunPosition(t){let n=t||new Date;this.solarMode==="manual"&&(n=this.manualSolarDate);let i;if(this.solarMode==="local_noon"){const l=this.aircraft.group.position,c=l.length();if(c>.1){const h=Kt.vector3ToLatLon(l.x,l.y,l.z,c);i=Kt.latLonToVector3(h.lat,h.lon,350)}else i=Kt.latLonToVector3(51.5,-.1,350)}else{const l=Ha.getSubsolarPoint(n);i=Kt.latLonToVector3(l.lat,l.lon,350)}this.currentSunPosition.set(i.x,i.y,i.z),this.sunLight&&this.sunLight.position.copy(this.currentSunPosition);const r=this.currentSunPosition.clone().normalize();this.earthShaderMat&&this.earthShaderMat.uniforms.sunDirection&&this.earthShaderMat.uniforms.sunDirection.value.copy(r),this.atmosShaderMat&&this.atmosShaderMat.uniforms.sunDirection&&this.atmosShaderMat.uniforms.sunDirection.value.copy(r);const a=this.aircraft.group.position,o=a.length();if(o>.1){const l=Kt.vector3ToLatLon(a.x,a.y,a.z,o);this.currentSolarInfo=Ha.getLocalSolarInfo(l.lat,l.lon,n)}}initThemeListener(){Ae.getInstance().onThemeChanged(t=>{if(this.currentTheme=t,this.atmosphereMesh&&this.atmosphereMesh.material&&this.atmosphereMesh.material.uniforms.glowColor.value.setHex(t.glow3D),this.currentFlightPlan&&this.updateFlightPlanVisuals(this.currentFlightPlan),this.bordersGroup.children.length>0){const e=this.bordersGroup.children[0];e&&e.material&&e.material.color.setHex(t.hex3D)}})}initLighting(){this.ambientLight=new $u(16777215,.45),this.scene.add(this.ambientLight),this.sunLight=new Xu(16777215,1.85),this.sunLight.position.set(250,60,150),this.scene.add(this.sunLight)}initStarfield(){const t=this.textureTier==="mobile"?900:1800,e=new fe,n=new Float32Array(t*3),i=new Float32Array(t*3);for(let o=0;o<t;o++){const l=400+Math.random()*300,c=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1);n[o*3]=l*Math.sin(h)*Math.cos(c),n[o*3+1]=l*Math.sin(h)*Math.sin(c),n[o*3+2]=l*Math.cos(h);const u=.8+Math.random()*.2;i[o*3]=u,i[o*3+1]=u,i[o*3+2]=1}e.setAttribute("position",new Ne(n,3)),e.setAttribute("color",new Ne(i,3));const r=new tc({size:1.5,vertexColors:!0,transparent:!0,opacity:.8}),a=new ou(e,r);this.scene.add(a)}initEarth(){const t=new zr,e=this.textureTier==="mobile"?64:96,n=new Cn(Se.GLOBE_RADIUS,e,e),i=t.load(`${this.textureBase}/earth_day.jpg`),r=t.load(`${this.textureBase}/earth_night.jpg`),a=t.load(`${this.textureBase}/earth_specular.png`),o=t.load(`${this.textureBase}/earth_bump.jpg`),l=this.renderer.capabilities.getMaxAnisotropy();[i,r,a,o].forEach(c=>{c.anisotropy=l,c.minFilter=tn,c.magFilter=Ue,c.generateMipmaps=!0}),this.earthShaderMat=new sn({uniforms:{dayTexture:{value:i},nightTexture:{value:r},specularMap:{value:a},bumpMap:{value:o},sunDirection:{value:this.sunLight.position.clone().normalize()},mapStyle:{value:this.mapStyle==="regular"?1:0},reliefStrength:{value:this.mapStyle==="regular"||!this.reliefEnabled?0:1},illuminationMode:{value:this.illuminationMode==="day"?1:this.illuminationMode==="night"?2:0}},vertexShader:Tl.vertexShader,fragmentShader:Tl.fragmentShader}),this.earthMesh=new Dt(n,this.earthShaderMat),this.scene.add(this.earthMesh)}initAtmosphere(){const t=this.textureTier==="mobile"?40:64,e=new Cn(Se.GLOBE_RADIUS*1.025,t,t);this.atmosShaderMat=new sn({uniforms:{glowColor:{value:new kt(43263)},coefficient:{value:.72},power:{value:3.2},sunDirection:{value:this.sunLight.position.clone().normalize()}},vertexShader:bl.vertexShader,fragmentShader:bl.fragmentShader,side:Re,blending:Ji,transparent:!0}),this.atmosphereMesh=new Dt(e,this.atmosShaderMat),this.scene.add(this.atmosphereMesh)}initClouds(){const t=new Cn(Se.GLOBE_RADIUS*1.006,this.textureTier==="mobile"?40:64,this.textureTier==="mobile"?40:64),e=new zr().load(`${this.textureBase}/earth_clouds.jpg`),n=new Ye({map:e,transparent:!0,opacity:.35,blending:Ji});this.cloudsMesh=new Dt(t,n),this.mapStyle==="regular"&&(this.cloudsMesh.visible=!1),this.scene.add(this.cloudsMesh)}async loadCountryBorders(){try{const t="/FlightMap/".replace(/\/$/,""),e=await fetch(`${t}/assets/data/countries.geojson`);if(!e.ok)return;const n=await e.json(),i=[],r=Se.GLOBE_RADIUS*1.0028;for(const c of n.features){if(!c.geometry)continue;const h=c.geometry.type,u=c.geometry.coordinates,f=d=>{for(let g=0;g<d.length-1;g++){const v=Kt.latLonToVector3(d[g][1],d[g][0],r),m=Kt.latLonToVector3(d[g+1][1],d[g+1][0],r);i.push(v.x,v.y,v.z,m.x,m.y,m.z)}};if(h==="Polygon")for(const d of u)f(d);else if(h==="MultiPolygon")for(const d of u)for(const g of d)f(g)}const a=new fe;a.setAttribute("position",new te(i,3));const o=new Na({color:this.currentTheme.hex3D||58879,transparent:!0,opacity:.85,depthTest:!0,depthWrite:!1}),l=new au(a,o);this.bordersGroup.add(l),console.log(`[GlobeScene] Loaded ${i.length/6} world country vector boundary segments.`),this.createCountryLabels(n.features)}catch(t){console.warn("[GlobeScene] Could not load country boundaries & names:",t)}}createCountryLabels(t){for(;this.countryLabelsGroup.children.length>0;){const n=this.countryLabelsGroup.children[0];n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose()),this.countryLabelsGroup.remove(n)}const e=Se.GLOBE_RADIUS*1.006;for(const n of t){const i=n.properties;if(!i||!i.NAME||typeof i.LABEL_Y!="number"||typeof i.LABEL_X!="number")continue;const r=i.NAME.toUpperCase(),a=typeof i.LABELRANK=="number"?i.LABELRANK:typeof i.scalerank=="number"?i.scalerank:3,o=typeof i.POP_RANK=="number"?i.POP_RANK:10,l=document.createElement("canvas"),c=l.getContext("2d");if(!c)continue;const h=48;c.font=`bold ${h}px "Segoe UI", -apple-system, Roboto, sans-serif`;const u=c.measureText(r),f=Math.ceil(u.width),d=36,g=20,v=Math.max(140,f+d*2),m=h+g*2;l.width=v,l.height=m,c.font=`bold ${h}px "Segoe UI", -apple-system, Roboto, sans-serif`,c.textAlign="center",c.textBaseline="middle";const p=v/2,b=m/2;c.lineWidth=10,c.strokeStyle="rgba(2, 6, 23, 0.96)",c.strokeText(r,p,b),c.lineWidth=4.5,c.strokeStyle="rgba(15, 23, 42, 0.85)",c.strokeText(r,p,b),c.fillStyle="#f8fafc",c.fillText(r,p,b);const y=new Oa(l);y.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),y.minFilter=tn,y.magFilter=Ue,y.generateMipmaps=!0;const _=new Zs({map:y,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1}),L=new Ua(_);L.center.set(.5,.1);const A=Kt.latLonToVector3(i.LABEL_Y,i.LABEL_X,e);L.position.set(A.x,A.y,A.z);const C=.8,D=C*(v/m);L.scale.set(D,C,1),L.userData={name:r,labelRank:a,popRank:o,lat:i.LABEL_Y,lon:i.LABEL_X,normal:new R(A.x,A.y,A.z).normalize(),baseWidth:D,baseHeight:C,aspectRatio:v/m},this.countryLabelsGroup.add(L)}console.log(`[GlobeScene] Created ${this.countryLabelsGroup.children.length} autozoomable 3D country labels.`)}airportLabelSprites=[];updateFlightPlanVisuals(t){for(this.currentFlightPlan=t;this.flightPathGroup.children.length>0;){const i=this.flightPathGroup.children[0];this.flightPathGroup.remove(i)}this.airportLabelSprites=[];const e=[],n=Se.GLOBE_RADIUS;for(const i of t.waypoints){const r=Math.max(.08,(i.altitude||0)/38e3*2.2-.45),a=Kt.latLonToVector3(i.lat,i.lon,n+r);e.push(new R(a.x,a.y,a.z))}if(e.length>1){const i=new nc(e),r=new eo(i,200,.08,12,!1),a=new Pi({color:this.currentTheme.hex3D,transparent:!0,opacity:.92}),o=new Dt(r,a);this.flightPathGroup.add(o),this.addAirportPin(t.origin.lat,t.origin.lon,t.origin.iata,65416),this.addAirportPin(t.destination.lat,t.destination.lon,t.destination.iata,this.currentTheme.hex3D)}}addAirportPin(t,e,n,i){const r=Se.GLOBE_RADIUS,a=Kt.latLonToVector3(t,e,r),o=Kt.latLonToVector3(t,e,r+.8),l=new fe().setFromPoints([new R(a.x,a.y,a.z),new R(o.x,o.y,o.z)]),c=new Ql(l,new Na({color:i,linewidth:2}));this.flightPathGroup.add(c);const h=new Cn(.22,16,16),u=new Pi({color:i}),f=new Dt(h,u);f.position.set(o.x,o.y,o.z),this.flightPathGroup.add(f);try{const d=document.createElement("canvas");d.width=256,d.height=128;const g=d.getContext("2d");if(g){g.fillStyle="rgba(10, 16, 29, 0.9)",g.strokeStyle="#00e5ff",g.lineWidth=4,typeof g.roundRect=="function"?g.roundRect(8,8,240,112,16):g.rect(8,8,240,112),g.fill(),g.stroke(),g.fillStyle="#ffffff",g.font='bold 54px "Segoe UI", Roboto, sans-serif',g.textAlign="center",g.textBaseline="middle",g.fillText(n,128,64);const v=new Oa(d);v.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const m=new Zs({map:v,depthTest:!0,depthWrite:!1,transparent:!0}),p=new Ua(m);p.scale.set(.85,.42,1),p.position.set(o.x*1.004,o.y*1.004,o.z*1.004),p.userData={isAirportLabel:!0,worldPos:new R(o.x,o.y,o.z),baseScale:new K(.85,.42)},this.flightPathGroup.add(p),this.airportLabelSprites.push(p)}}catch(d){console.warn("[GlobeScene] Label sprite generation skipped:",d)}}updateAircraftTelemetry(t){const e=Se.GLOBE_RADIUS,n=t.altitude/38e3*2.2,i=e+n,r=Kt.latLonToVector3(t.lat,t.lon,i);this.aircraft.group.position.set(r.x,r.y,r.z);const a=new R(r.x,r.y,r.z).normalize(),o=Kt.latLonToVector3(Math.min(89.9,t.lat+.1),t.lon,i),l=new R(o.x,o.y,o.z).sub(this.aircraft.group.position).normalize(),c=new R().crossVectors(l,a).normalize(),h=new R().crossVectors(a,c).normalize(),u=t.heading*Math.PI/180,f=new R().addScaledVector(h,Math.cos(u)).addScaledVector(c,Math.sin(u)).normalize(),d=new R().crossVectors(a,f).normalize(),g=new R().crossVectors(f,d).normalize(),v=new re().makeBasis(d,g,f);this.aircraft.group.setRotationFromMatrix(v);const m=t.pitch*Math.PI/180,p=t.roll*Math.PI/180;this.aircraft.group.rotateX(m),this.aircraft.group.rotateZ(-p)}update(t,e){if(this.aircraft.update(t),e){const n=e.position.distanceTo(this.aircraft.group.position);let i;n<25?i=.42:i=Math.min(.34,Math.max(.16,.12+n/200*.1));const r=this.aircraft.group.scale.x,a=dr.lerp(r,i,.15);this.aircraft.group.scale.setScalar(a),this.updateAircraftGlowScale(e,n),this.updateSunPosition();const o=e.position,l=o.length(),c=l<125,h=[],u=this.renderer.domElement.clientWidth||window.innerWidth,f=this.renderer.domElement.clientHeight||window.innerHeight,d=new R;for(let g=0;g<this.countryLabelsGroup.children.length;g++){const v=this.countryLabelsGroup.children[g],m=v.userData.normal;if(!m)continue;const p=o.clone().sub(v.position),b=p.length(),y=p.normalize(),_=m.dot(y);let L=0;if(c)if(b>32||b<4.5||_<.12)L=0;else{L=Math.min(1,Math.max(0,(32-b)/10))*.9;const E=Math.min(1,Math.max(.48,b/22));v.scale.set(v.userData.baseWidth*E,v.userData.baseHeight*E,1)}else if(_<.16)L=0;else{const D=v.userData.labelRank;let E=0;if(D<=2?E=1:D===3?E=Math.min(1,Math.max(0,(245-l)/35)):D===4?E=Math.min(1,Math.max(0,(205-l)/35)):D===5?E=Math.min(1,Math.max(0,(165-l)/27)):E=Math.min(1,Math.max(0,(140-l)/20)),E<=.01)L=0;else{const M=b/95,P=Math.min(1.35,Math.max(.4,Math.pow(M,.72)));v.scale.set(v.userData.baseWidth*P,v.userData.baseHeight*P,1);const V=Math.min(1,(_-.16)*4.5);if(L=.88*E*V,L>.15&&l>140&&(d.copy(v.position).project(e),d.z<1)){const F=(d.x+1)*.5*u,z=(-d.y+1)*.5*f;let $=!1;const H=l>200?50:36;for(let J=0;J<h.length;J++){const O=h[J],Z=O.x-F,it=O.y-z;if(Z*Z+it*it<H*H&&O.rank<=D){$=!0;break}}$?L=0:h.push({x:F,y:z,rank:D})}}}const A=v.material.opacity,C=dr.lerp(A,L,.2);v.material.opacity=C,v.visible=C>.02}if(this.airportLabelSprites.length>0){const v=o.distanceTo(this.aircraft.group.position)<25;for(const m of this.airportLabelSprites){const p=m.userData.worldPos;if(!p)continue;const b=o.distanceTo(p);if(v&&b<30||b<14)m.visible=!1;else{m.visible=!0;const y=Math.min(1.1,Math.max(.45,l/200)),_=m.userData.baseScale;m.scale.set(_.x*y,_.y*y,1)}}}}this.cloudsMesh&&(this.cloudsMesh.rotation.y+=t*.002)}updateAircraftGlowScale(t,e){const n=this.aircraft.getGlowSprites();if(n.length===0||!(t instanceof Pe))return;const i=Math.max(.5,e),r=this.renderer.domElement.clientHeight||window.innerHeight||900,a=2*i*Math.tan(t.fov*Math.PI/360)/r,o=this.aircraft.group.scale.x||1,c=dr.clamp(i*.075,5.5,12)*a/o;for(const h of n)h.scale.set(c,c,1)}render(t){this.renderer.render(this.scene,t)}switchTextureTier(t){if(this.textureTier===t&&this.earthMesh)return;this.textureTier=t,this.textureBase=gn.basePath(t),gn.setOverride(t),console.log(`[GlobeScene] Switching to texture tier: ${t} (${this.textureBase})`);const e=new zr,n=e.load(`${this.textureBase}/earth_day.jpg`),i=e.load(`${this.textureBase}/earth_night.jpg`),r=e.load(`${this.textureBase}/earth_specular.png`),a=e.load(`${this.textureBase}/earth_bump.jpg`),o=this.renderer.capabilities.getMaxAnisotropy();if([n,i,r,a].forEach(l=>{l.anisotropy=o,l.minFilter=tn,l.magFilter=Ue,l.generateMipmaps=!0}),this.earthShaderMat&&(this.earthShaderMat.uniforms.dayTexture.value=n,this.earthShaderMat.uniforms.nightTexture.value=i,this.earthShaderMat.uniforms.specularMap.value=r,this.earthShaderMat.uniforms.bumpMap.value=a,this.earthShaderMat.needsUpdate=!0),this.cloudsMesh&&this.cloudsMesh.material){const l=e.load(`${this.textureBase}/earth_clouds.jpg`);this.cloudsMesh.material.map=l,this.cloudsMesh.material.needsUpdate=!0}}setMapStyle(t){this.mapStyle=t;try{localStorage.setItem(Se.MAP_STYLE_STORAGE_KEY,t)}catch{}if(this.earthShaderMat&&(this.earthShaderMat.uniforms.mapStyle.value=t==="regular"?1:0,t==="regular"?this.earthShaderMat.uniforms.reliefStrength.value=0:this.earthShaderMat.uniforms.reliefStrength.value=this.reliefEnabled?1:0,this.earthShaderMat.needsUpdate=!0),this.cloudsMesh&&(this.cloudsMesh.visible=t==="satellite"),this.bordersGroup.children.length>0){const e=this.bordersGroup.children[0];e&&e.material&&(e.material.opacity=t==="regular"?.95:.85)}}setReliefEnabled(t){this.reliefEnabled=t;try{localStorage.setItem(Se.RELIEF_STORAGE_KEY,t?"1":"0")}catch{}this.earthShaderMat&&(this.mapStyle==="regular"?this.earthShaderMat.uniforms.reliefStrength.value=0:this.earthShaderMat.uniforms.reliefStrength.value=t?1:0,this.earthShaderMat.needsUpdate=!0)}setIlluminationMode(t){this.illuminationMode=t;try{localStorage.setItem(Se.ILLUM_STORAGE_KEY,t)}catch{}this.earthShaderMat&&(this.earthShaderMat.uniforms.illuminationMode.value=t==="day"?1:t==="night"?2:0,this.earthShaderMat.needsUpdate=!0)}getMapModeLabel(){const t=this.textureTier==="full"?"8K":"4K";return this.mapStyle==="regular"?this.illuminationMode==="day"?`REGULAR DAY (${t})`:this.illuminationMode==="night"?`REGULAR NIGHT (${t})`:`REGULAR AUTO (${t})`:`SATELLITE ${t}`}onResize(t,e){const n=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e)}}class Dg{camera;mode="orbit";globeScene;orbitDistance=205;orbitTheta=0;orbitTilt=.42;smoothedForward=new R(0,0,1);isDragging=!1;prevMouseX=0;prevMouseY=0;constructor(t,e){this.globeScene=t,this.camera=new Pe(45,e.clientWidth/e.clientHeight,.1,2e3),this.initEventListeners(e)}getMode(){return this.mode}setMode(t){this.mode=t,t==="orbit"?this.orbitDistance=Math.min(260,Math.max(160,this.orbitDistance)):t==="tactical"&&(this.orbitDistance=140)}frameRouteOverview(t){this.mode="orbit";const e=t.totalDistanceNM||1500;let n=Math.min(255,Math.max(175,165+e/6e3*75));this.camera.aspect<1&&(n*=Math.min(1.22,1.08/Math.max(.55,this.camera.aspect))),this.orbitDistance=n,this.orbitTilt=.42;try{const i=t.waypoints||[],r=i.length>0?i[Math.min(i.length-1,Math.max(1,Math.floor(i.length*.08)))]:t.destination,a=Kt.calculateBearing({lat:t.origin.lat,lon:t.origin.lon},{lat:r.lat,lon:r.lon});this.orbitTheta=-(a*Math.PI)/180}catch{this.orbitTheta=0}}initEventListeners(t){t.addEventListener("mousedown",n=>{this.isDragging=!0,this.prevMouseX=n.clientX,this.prevMouseY=n.clientY}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",n=>{if(!this.isDragging)return;const i=n.clientX-this.prevMouseX,r=n.clientY-this.prevMouseY;this.prevMouseX=n.clientX,this.prevMouseY=n.clientY,(this.mode==="orbit"||this.mode==="tactical")&&(this.orbitTheta-=i*.005,this.orbitTilt=Math.max(.02,Math.min(1.35,this.orbitTilt+r*.005)))}),t.addEventListener("wheel",n=>{n.preventDefault();const i=.05;(this.mode==="orbit"||this.mode==="tactical")&&(this.orbitDistance=Math.max(115,Math.min(450,this.orbitDistance+n.deltaY*i)))},{passive:!1});let e=0;t.addEventListener("touchstart",n=>{n.cancelable&&n.preventDefault(),n.touches.length===1?(this.isDragging=!0,this.prevMouseX=n.touches[0].clientX,this.prevMouseY=n.touches[0].clientY):n.touches.length===2&&(this.isDragging=!1,e=Math.hypot(n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY))},{passive:!1}),t.addEventListener("touchmove",n=>{if(n.cancelable&&n.preventDefault(),n.touches.length===1&&this.isDragging){const i=n.touches[0].clientX-this.prevMouseX,r=n.touches[0].clientY-this.prevMouseY;this.prevMouseX=n.touches[0].clientX,this.prevMouseY=n.touches[0].clientY,(this.mode==="orbit"||this.mode==="tactical")&&(this.orbitTheta-=i*.006,this.orbitTilt=Math.max(.02,Math.min(1.35,this.orbitTilt+r*.006)))}else if(n.touches.length===2){const i=Math.hypot(n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY),r=e-i;e=i,(this.mode==="orbit"||this.mode==="tactical")&&(this.orbitDistance=Math.max(115,Math.min(450,this.orbitDistance+r*.25)))}},{passive:!1}),window.addEventListener("touchend",()=>{this.isDragging=!1})}update(){const t=this.globeScene.aircraft.group,e=t.position.clone(),n=new R(0,0,1).applyQuaternion(t.quaternion).normalize(),i=new R(0,1,0).applyQuaternion(t.quaternion).normalize(),r=new R(1,0,0).applyQuaternion(t.quaternion).normalize();let a=new R,o=new R;switch(this.mode){case"cockpit":{a.copy(e).addScaledVector(n,3.2).addScaledVector(i,.45),o.copy(a).addScaledVector(n,50),this.camera.position.copy(a),this.camera.up.copy(i),this.camera.lookAt(o);return}case"wing":{a.copy(e).addScaledVector(r,-4.5).addScaledVector(n,-1.2).addScaledVector(i,.8),o.copy(e).addScaledVector(n,8).addScaledVector(r,-1.5),this.camera.position.copy(a),this.camera.up.copy(i),this.camera.lookAt(o);return}case"chase":{a.copy(e).addScaledVector(n,-14).addScaledVector(i,4.2),o.copy(e).addScaledVector(n,12),this.camera.position.lerp(a,.1),this.camera.up.lerp(i,.1),this.camera.lookAt(o);return}case"tactical":{const l=e.clone().normalize();a.copy(e).addScaledVector(l,35),o.copy(e),this.camera.position.lerp(a,.1),this.camera.up.lerp(n,.1),this.camera.lookAt(o);return}case"orbit":default:{const l=e.clone().normalize(),c=Kt.vector3ToLatLon(e.x,e.y,e.z,Math.max(.001,e.length())),h=Kt.latLonToVector3(Math.min(89.9,c.lat+.35),c.lon,1),u=new R(h.x,h.y,h.z).sub(l).normalize(),f=new R().crossVectors(u,l).normalize();u.crossVectors(l,f).normalize();const d=l.clone().applyAxisAngle(f,this.orbitTilt).applyAxisAngle(l,this.orbitTheta),g=Math.max(4,this.orbitDistance-e.length());a.copy(e).addScaledVector(d,g);const v=new R(0,0,1).applyQuaternion(t.quaternion).normalize();this.smoothedForward.lerp(v,.06).normalize();const m=Math.min(12,g*.09);o.copy(e).addScaledVector(this.smoothedForward,m),this.camera.position.lerp(a,.1);const p=Math.min(1,this.orbitTilt/1.2),b=u.clone().lerp(l,p).normalize();this.camera.up.lerp(b,.15).normalize(),this.camera.lookAt(o);return}}}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}class vn{static instance;state;listeners=[];flightPlanManager;activeSource="simulation";simProgress=.35;simSpeedMultiplier=10;simIsPaused=!1;simTimer=null;lastSimTimestamp=performance.now();geoWatchId=null;serialPort=null;serialReader=null;ws=null;wsConnected=!1;relayEnabled=!0;phoneConnected=!1;phoneListeners=[];cameraListeners=[];flightPlanListeners=[];onCameraCommand(t){return this.cameraListeners.push(t),()=>{this.cameraListeners=this.cameraListeners.filter(e=>e!==t)}}broadcastCameraMode(t){if(this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"camera_active",mode:t,timestamp:Date.now()}))}catch{}}onFlightPlanCommand(t){return this.flightPlanListeners.push(t),()=>{this.flightPlanListeners=this.flightPlanListeners.filter(e=>e!==t)}}broadcastFlightPlan(t){if(this.ws&&this.ws.readyState===WebSocket.OPEN&&t)try{this.ws.send(JSON.stringify({type:"flight_plan_active",from:t.origin?.iata||t.from,to:t.destination?.iata||t.to,originCity:t.origin?.city,destCity:t.destination?.city,flightNumber:t.flightNumber,airline:t.airline,aircraft:t.aircraftType,totalDistanceNM:t.totalDistanceNM,destTz:t.destination?.tz,timestamp:Date.now()}))}catch{}}broadcastUnitSystem(t){if(this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"unit_system",system:t,timestamp:Date.now()}))}catch{}}broadcastSimState(){if(this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"sim_speed_active",speed:this.simSpeedMultiplier,isPaused:this.simIsPaused,timestamp:Date.now()}))}catch{}}broadcastFlightProgress(){if(!(!this.ws||this.ws.readyState!==WebSocket.OPEN||!this.flightPlanManager.getActivePlan()))try{this.ws.send(JSON.stringify({type:"flight_progress",progressFraction:this.state.progressFraction,distanceTraveledNM:this.state.distanceTraveledNM,distanceRemainingNM:this.state.distanceRemainingNM,eteSeconds:this.state.eteSeconds,groundSpeed:this.state.groundSpeed,altitude:this.state.altitude,source:this.state.source,timestamp:Date.now()}))}catch{}}onPhoneStatus(t){return this.phoneListeners.push(t),t(this.phoneConnected,this.activeSource==="mobile_gps"),()=>{this.phoneListeners=this.phoneListeners.filter(e=>e!==t)}}isPhoneConnected(){return this.phoneConnected}setRelayEnabled(t){if(this.relayEnabled=t,t)this.initWebSocket();else if(this.ws){try{this.ws.close()}catch{}this.ws=null,this.wsConnected=!1}}isWebSocketConnected(){return this.wsConnected}stopSimulation(){this.simTimer!==null&&(cancelAnimationFrame(this.simTimer),this.simTimer=null)}constructor(){this.flightPlanManager=sr.getInstance(),this.flightPlanManager.onPlanChanged(()=>{this.simProgress=.02,this.updateSimulationStep(0)}),this.state={lat:52.4539,lon:-1.748,altitude:37e3,groundSpeed:450,heading:110,pitch:1.5,roll:0,verticalSpeed:0,distanceTraveledNM:418,distanceRemainingNM:777,progressFraction:.35,eteSeconds:6200,eta:new Date(Date.now()+6200*1e3),source:"simulation",gpsAccuracyMeters:3.5,satellites:12,atmosphere:Kt.calculateAtmosphere(37e3,450),timestamp:Date.now()},this.relayEnabled=!0,this.initWebSocket(),this.startSimulationLoop(),window.setInterval(()=>this.broadcastFlightProgress(),2e3)}static getInstance(){return vn.instance||(vn.instance=new vn),vn.instance}getState(){return this.state}getSource(){return this.activeSource}setSource(t){if(this.activeSource!==t){this.activeSource=t,t==="mobile_gps"&&(this.wsConnected||this.initWebSocket()),t==="browser_gps"?this.startBrowserGeolocation():this.stopBrowserGeolocation(),t!=="simulation"?this.simIsPaused=!0:this.simIsPaused=!1;for(const e of this.phoneListeners)e(this.phoneConnected,this.activeSource==="mobile_gps");this.state={...this.state,source:this.activeSource},this.emitState()}}subscribe(t){return this.listeners.push(t),t(this.state),()=>{this.listeners=this.listeners.filter(e=>e!==t)}}setSimulationSpeed(t){this.simSpeedMultiplier=Math.max(1,Math.min(200,t)),this.broadcastSimState(),this.emitState()}getSimulationSpeed(){return this.simSpeedMultiplier}setSimulationProgress(t){this.simProgress=Math.max(0,Math.min(1,t)),this.updateSimulationStep(0)}toggleSimulationPause(){return this.simIsPaused=!this.simIsPaused,this.broadcastSimState(),this.simIsPaused}isPaused(){return this.simIsPaused}updateManualAttitude(t,e){this.state.pitch=t,this.state.roll=e,this.emitState()}ingestGpsUpdate(t){const e=this.state.altitude,n=Date.now(),i=(n-this.state.timestamp)/1e3,r=t.lat!==void 0?t.lat:this.state.lat,a=t.lon!==void 0?t.lon:this.state.lon,o=t.altitude!==void 0?t.altitude:this.state.altitude,l=t.groundSpeed!==void 0?t.groundSpeed:this.state.groundSpeed,c=t.heading!==void 0?t.heading:this.state.heading,h=t.pitch!==void 0?t.pitch:this.state.pitch,u=t.roll!==void 0?t.roll:this.state.roll;let f=this.state.verticalSpeed;i>.5&&(f=Math.round((o-e)/i*60));const d=this.flightPlanManager.getActivePlan();let g=this.state.distanceRemainingNM,v=this.state.distanceTraveledNM,m=this.state.progressFraction,p=this.state.eteSeconds;if(d){g=Kt.calculateDistanceNM({lat:r,lon:a},{lat:d.destination.lat,lon:d.destination.lon}),v=Math.max(0,d.totalDistanceNM-g),m=d.totalDistanceNM>0?Math.min(1,v/d.totalDistanceNM):0;const y=Math.max(50,l);p=Math.round(g/y*3600)}const b=Kt.calculateAtmosphere(o,l);this.state={lat:r,lon:a,altitude:o,groundSpeed:l,heading:c,pitch:h,roll:u,verticalSpeed:f,distanceTraveledNM:v,distanceRemainingNM:g,progressFraction:m,eteSeconds:p,eta:new Date(n+p*1e3),source:t.source||this.activeSource,gpsAccuracyMeters:t.gpsAccuracyMeters!==void 0?t.gpsAccuracyMeters:this.state.gpsAccuracyMeters,satellites:t.satellites!==void 0?t.satellites:this.state.satellites,atmosphere:b,timestamp:n},this.emitState()}initWebSocket(){if(!this.relayEnabled)return;const e=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/telemetry`,n=()=>{try{this.ws=new WebSocket(e),this.ws.onopen=()=>{this.wsConnected=!0,console.log("[TelemetryManager] WebSocket connected to relay hub");try{this.ws?.send(JSON.stringify({type:"client_hello",role:"laptop",name:"FlightMap 3D Moving Map"}));const i=this.flightPlanManager.getActivePlan();i&&this.broadcastFlightPlan(i),this.broadcastUnitSystem(Zi.getInstance().getSystem()),this.broadcastSimState()}catch{}},this.ws.onmessage=i=>{try{const r=JSON.parse(i.data);if(r.type==="peer_status"||r.type==="server_hello"){if(this.phoneConnected=!!r.phoneOnline,this.phoneConnected){this.broadcastSimState();const a=this.flightPlanManager.getActivePlan();a&&this.broadcastFlightPlan(a),this.broadcastFlightProgress()}for(const a of this.phoneListeners)a(this.phoneConnected,this.activeSource==="mobile_gps")}if(r.type==="gps_update"){this.phoneConnected=!0,this.activeSource="mobile_gps",this.stopBrowserGeolocation(),this.simIsPaused=!0,this.ingestGpsUpdate({lat:r.lat,lon:r.lon,altitude:r.altitude?Math.round(r.altitude*Kt.FEET_PER_METER):void 0,groundSpeed:r.speed?Math.round(r.speed*Kt.MPS_TO_KNOTS):void 0,heading:r.heading!==null&&r.heading!==void 0?r.heading:void 0,pitch:r.pitch,roll:r.roll,gpsAccuracyMeters:r.accuracy,source:"mobile_gps"});for(const a of this.phoneListeners)a(!0,!0);try{this.ws?.send(JSON.stringify({type:"laptop_ack",packetId:r.timestamp,receivedAt:Date.now()}))}catch{}}if(r.type==="camera_command"&&r.mode){console.log("[TelemetryManager] Received remote camera command from phone:",r.mode);for(const a of this.cameraListeners)a(r.mode);try{this.ws?.send(JSON.stringify({type:"camera_ack",mode:r.mode,timestamp:Date.now()}))}catch{}}if(r.type==="flight_plan_command"&&r.from&&r.to){console.log("[TelemetryManager] Received remote flight plan command from phone:",r.from,"->",r.to);for(const a of this.flightPlanListeners)a(r);try{this.ws?.send(JSON.stringify({type:"flight_plan_ack",from:r.from,to:r.to,flightNumber:r.flightNumber,timestamp:Date.now()}))}catch{}}r.type==="unit_system"&&r.system&&Zi.getInstance().setSystem(r.system),r.type==="sim_speed_command"&&r.speed&&(console.log("[TelemetryManager] Received remote simulation speed command:",r.speed),this.setSimulationSpeed(r.speed),this.activeSource!=="simulation"&&this.setSource("simulation"),this.broadcastSimState()),r.type==="sim_pause_command"&&(console.log("[TelemetryManager] Received remote simulation pause command, isPaused:",r.isPaused),typeof r.isPaused=="boolean"?(this.simIsPaused=r.isPaused,this.broadcastSimState()):this.toggleSimulationPause(),this.emitState())}catch(r){console.error("[TelemetryManager] Error parsing WS message:",r)}},this.ws.onclose=()=>{this.wsConnected=!1,this.phoneConnected=!1;for(const i of this.phoneListeners)i(!1,this.activeSource==="mobile_gps");this.relayEnabled&&setTimeout(n,3e3)}}catch(i){console.warn("[TelemetryManager] WebSocket connection failed (offline mode):",i)}};n()}startBrowserGeolocation(){if(!navigator.geolocation){alert("Geolocation is not supported by your browser.");return}this.stopBrowserGeolocation(),this.geoWatchId=navigator.geolocation.watchPosition(t=>{const e=t.coords,n=e.altitude!==null?e.altitude*Kt.FEET_PER_METER:36e3,i=e.speed!==null?e.speed*3.6/Kt.KNOTS_TO_KMH:470,r=e.heading!==null?e.heading:this.state.heading;this.ingestGpsUpdate({lat:e.latitude,lon:e.longitude,altitude:Math.round(n),groundSpeed:Math.round(i),heading:Math.round(r),gpsAccuracyMeters:e.accuracy,source:"browser_gps"})},t=>{console.warn("[TelemetryManager] Geolocation error:",t.message)},{enableHighAccuracy:!0,maximumAge:1e3,timeout:1e4})}stopBrowserGeolocation(){this.geoWatchId!==null&&(navigator.geolocation.clearWatch(this.geoWatchId),this.geoWatchId=null)}async connectSerialGps(){if(!("serial"in navigator))return alert("Web Serial API is not supported in this browser. Please use Chrome or Edge."),!1;try{return this.serialPort=await navigator.serial.requestPort(),await this.serialPort.open({baudRate:4800}),this.activeSource="serial_nmea",this.simIsPaused=!0,this.readSerialStream(),!0}catch(t){return console.error("[TelemetryManager] Serial GPS connection error:",t),!1}}async readSerialStream(){const t=new TextDecoderStream;this.serialPort.readable.pipeTo(t.writable),this.serialReader=t.readable.getReader();let e="";try{for(;;){const{value:n,done:i}=await this.serialReader.read();if(i)break;e+=n;const r=e.split(`\r
`);e=r.pop()||"";for(const a of r)this.parseNmeaSentence(a)}}catch(n){console.error("[TelemetryManager] Serial read error:",n)}}parseNmeaSentence(t){if(t.startsWith("$GPRMC")||t.startsWith("$GNRMC")){const e=t.split(",");if(e[2]==="A"){const n=parseFloat(e[3]),i=e[4],r=parseFloat(e[5]),a=e[6],o=parseFloat(e[7]),l=parseFloat(e[8]),c=(Math.floor(n/100)+n%100/60)*(i==="S"?-1:1),h=(Math.floor(r/100)+r%100/60)*(a==="W"?-1:1);this.ingestGpsUpdate({lat:c,lon:h,groundSpeed:Math.round(o),heading:Math.round(l||this.state.heading),source:"serial_nmea"})}}else if(t.startsWith("$GPGGA")||t.startsWith("$GNGGA")){const e=t.split(","),n=parseFloat(e[9]),i=parseInt(e[7],10);isNaN(n)||this.ingestGpsUpdate({altitude:Math.round(n*Kt.FEET_PER_METER),satellites:i||this.state.satellites,source:"serial_nmea"})}}startSimulationLoop(){const t=()=>{const e=performance.now(),n=(e-this.lastSimTimestamp)/1e3;this.lastSimTimestamp=e,this.activeSource==="simulation"&&!this.simIsPaused&&this.updateSimulationStep(n),this.simTimer=requestAnimationFrame(t)};this.simTimer=requestAnimationFrame(t),window.setInterval(()=>{const e=performance.now();if(document.hidden){const n=(e-this.lastSimTimestamp)/1e3;this.lastSimTimestamp=e,this.activeSource==="simulation"&&!this.simIsPaused&&this.updateSimulationStep(n)}else this.lastSimTimestamp=e},1e3)}updateSimulationStep(t){const e=this.flightPlanManager.getActivePlan();if(!e||e.waypoints.length<2)return;const n=t/e.estimatedEnrouteSeconds*this.simSpeedMultiplier;this.simProgress=(this.simProgress+n)%1;const i=e.waypoints.length,r=this.simProgress*(i-1),a=Math.floor(r),o=Math.min(i-1,a+1),l=r-a,c=e.waypoints[a],h=e.waypoints[o],u=Kt.intermediatePoint(c,h,l),f=Math.round(c.altitude+(h.altitude-c.altitude)*l),d=Math.round(Kt.calculateBearing(c,h)),g=this.state.heading;let v=d-g;v>180&&(v-=360),v<-180&&(v+=360);const m=Math.max(-25,Math.min(25,-v*2.5)),p=this.state.roll+(m-this.state.roll)*.05;let b=0,y=1;this.simProgress<.15?(y=3.5,b=1800):this.simProgress>.85&&(y=-2,b=-1500);const _=Math.round(e.totalDistanceNM*this.simProgress),L=Math.max(0,e.totalDistanceNM-_),A=Math.round(L/e.cruiseSpeedKnots*3600),C=Kt.calculateAtmosphere(f,e.cruiseSpeedKnots);this.state={lat:u.lat,lon:u.lon,altitude:f,groundSpeed:e.cruiseSpeedKnots,heading:d,pitch:y,roll:p,verticalSpeed:b,distanceTraveledNM:_,distanceRemainingNM:L,progressFraction:this.simProgress,eteSeconds:A,eta:new Date(Date.now()+A*1e3),source:"simulation",gpsAccuracyMeters:2.1,satellites:14,atmosphere:C,timestamp:Date.now()},this.emitState()}emitState(){for(const t of this.listeners)t(this.state)}}class Mi{static instance;flightPlanManager;telemetryManager;constructor(){this.flightPlanManager=sr.getInstance(),this.telemetryManager=vn.getInstance()}static getInstance(){return Mi.instance||(Mi.instance=new Mi),Mi.instance}showRouteModal(){const t=document.getElementById("route-modal");t&&t.remove();const e=wl.getInstance(),n=document.createElement("div");n.id="route-modal",n.className="modal-backdrop",n.innerHTML=`
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">✈</span>
            <span>Flight Plan & Route Selector</span>
          </div>
          <button class="modal-close" id="btn-close-route">&times;</button>
        </div>

        <div class="modal-body">
          <div class="preset-section">
            <div class="section-label">FAVORITE ROUTES & PRESETS</div>
            <div class="presets-grid" id="presets-container"></div>
          </div>

          <div class="custom-route-section">
            <div class="section-label">CUSTOM AIRPORT SEARCH (7,900+ WORLD AIRPORTS)</div>
            <div class="search-inputs-grid">
              <div class="input-group">
                <label>ORIGIN (IATA/CITY)</label>
                <input type="text" id="input-origin" placeholder="e.g. BHX or Birmingham" value="BHX" autocomplete="off" />
                <div class="search-results" id="results-origin"></div>
              </div>
              <div class="input-group">
                <label>DESTINATION (IATA/CITY)</label>
                <input type="text" id="input-dest" placeholder="e.g. OTP or Bucharest" value="OTP" autocomplete="off" />
                <div class="search-results" id="results-dest"></div>
              </div>
            </div>

            <div class="route-meta-grid">
              <div class="input-group">
                <label>FLIGHT NUMBER</label>
                <input type="text" id="input-flight-no" value="W4-3002" />
              </div>
              <div class="input-group">
                <label>CRUISE ALTITUDE</label>
                <select id="select-altitude">
                  <option value="36000">FL360 (36,000 FT)</option>
                  <option value="37000" selected>FL370 (37,000 FT)</option>
                  <option value="38000">FL380 (38,000 FT)</option>
                  <option value="40000">FL400 (40,000 FT)</option>
                  <option value="43000">FL430 (43,000 FT)</option>
                </select>
              </div>
              <div class="input-group">
                <label>CRUISE SPEED</label>
                <select id="select-speed">
                  <option value="450" selected>Mach 0.76 (450 KTS)</option>
                  <option value="460">Mach 0.78 (460 KTS)</option>
                  <option value="485">Mach 0.82 (485 KTS)</option>
                  <option value="510">Mach 0.86 (510 KTS)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-secondary" id="btn-cancel-route">Cancel</button>
          <button class="btn-secondary btn-fav-action" id="btn-save-route-fav" title="Save current route to favorites">⭐ Save as Favorite</button>
          <button class="btn-primary" id="btn-apply-route">Activate Flight Plan</button>
        </div>
      </div>
    `,document.body.appendChild(n),document.getElementById("btn-close-route")?.addEventListener("click",()=>n.remove()),document.getElementById("btn-cancel-route")?.addEventListener("click",()=>n.remove());const i=()=>{const a=document.getElementById("presets-container");if(!a)return;const o=this.flightPlanManager.getFavoriteRoutes();a.innerHTML=o.map(l=>`
        <button class="preset-btn ${l.isCustom?"custom-fav":""}" data-from="${l.from}" data-to="${l.to}" data-flight="${l.flightNumber}" data-airline="${l.airline}" data-aircraft="${l.aircraft}" data-alt="${l.cruiseAltitudeFt||37e3}" data-speed="${l.cruiseSpeedKnots||450}">
          <div class="preset-header-row">
            <span class="preset-flight">${l.flightNumber}</span>
            ${l.isCustom?`<span class="preset-fav-icon">⭐</span><span class="btn-del-fav" data-del-from="${l.from}" data-del-to="${l.to}" title="Remove favorite">&times;</span>`:""}
          </div>
          <span class="preset-route">${l.from} &rarr; ${l.to}</span>
          <span class="preset-meta">${l.airline}</span>
        </button>
      `).join(""),a.querySelectorAll(".preset-btn").forEach(l=>{l.addEventListener("click",async c=>{const h=c.target.closest(".btn-del-fav");if(h){c.stopPropagation();const y=h.dataset.delFrom,_=h.dataset.delTo;this.flightPlanManager.removeFavoriteRoute(y,_),i();return}const u=c.currentTarget,f=u.dataset.from,d=u.dataset.to,g=u.dataset.flight,v=u.dataset.airline,m=u.dataset.aircraft,p=parseInt(u.dataset.alt||"37000",10),b=parseInt(u.dataset.speed||"450",10);await this.flightPlanManager.createPlan(f,d,g,v,m,p,b),this.telemetryManager.setSimulationProgress(.05),n.remove()})})};i(),document.getElementById("btn-save-route-fav")?.addEventListener("click",()=>{const a=document.getElementById("input-origin")?.value.trim().toUpperCase(),o=document.getElementById("input-dest")?.value.trim().toUpperCase(),l=document.getElementById("input-flight-no")?.value.trim().toUpperCase()||`${a}-${o}`,c=parseInt(document.getElementById("select-altitude")?.value||"37000",10),h=parseInt(document.getElementById("select-speed")?.value||"450",10),u=e.getByCode(a),f=e.getByCode(o);if(!u||!f){alert(`Please enter valid airport codes (e.g. BHX, OTP). Could not find: ${u?o:a}`);return}const d=u.country===f.country?"Domestic Route":`${u.iata} &rarr; ${f.iata}`;this.flightPlanManager.saveFavoriteRoute({from:a,to:o,flightNumber:l,airline:d,aircraft:"Airbus A321neo",cruiseAltitudeFt:c,cruiseSpeedKnots:h});const g=document.getElementById("btn-save-route-fav");g&&(g.textContent="✓ Saved to Favorites!",g.style.color="var(--accent-green, #00ff66)",setTimeout(()=>{g.textContent="⭐ Save as Favorite",g.style.color=""},1800)),i()});const r=(a,o)=>{const l=document.getElementById(a),c=document.getElementById(o);l?.addEventListener("input",()=>{const h=l.value.trim();if(h.length<2){c.innerHTML="";return}const u=e.search(h,5);c.innerHTML=u.map(f=>`
          <div class="result-item" data-code="${f.iata}">
            <span class="code">${f.iata}</span>
            <span class="name">${f.name}</span>
            <span class="location">${f.city}, ${f.country}</span>
          </div>
        `).join(""),c.querySelectorAll(".result-item").forEach(f=>{f.addEventListener("click",d=>{const g=d.currentTarget.dataset.code;l.value=g,c.innerHTML=""})})})};r("input-origin","results-origin"),r("input-dest","results-dest"),document.getElementById("btn-apply-route")?.addEventListener("click",async()=>{const a=document.getElementById("input-origin").value.trim().toUpperCase(),o=document.getElementById("input-dest").value.trim().toUpperCase(),l=document.getElementById("input-flight-no").value.trim(),c=parseInt(document.getElementById("select-altitude").value,10),h=parseInt(document.getElementById("select-speed").value,10);try{await this.flightPlanManager.createPlan(a,o,l,"rTech Airways","Boeing 787-9 Dreamliner",c,h),this.telemetryManager.setSimulationProgress(.05),n.remove()}catch(u){alert(u.message)}})}async showGpsModal(){const t=document.getElementById("gps-modal");t&&t.remove();const e=document.createElement("div");e.id="gps-modal",e.className="modal-backdrop";const n=this.telemetryManager.getSource(),i=this.telemetryManager.getSimulationSpeed();let r=`${window.location.origin}/mobile.html`;try{const l=await fetch("/api/mobile-url");if(l.ok){const c=await l.json();c.url&&(r=c.url)}}catch{}e.innerHTML=`
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">📡</span>
            <span>GPS Sensor & Mobile Cross-Device Pairing</span>
          </div>
          <button class="modal-close" id="btn-close-gps">&times;</button>
        </div>

        <div class="modal-body">
          <div class="gps-sources-grid">
            <!-- Mobile GPS Relay Card -->
            <div class="source-card ${n==="mobile_gps"?"active":""}" id="card-mobile-gps">
              <div class="source-header">
                <span class="source-badge">PHONE SATELLITE GNSS</span>
                <span class="source-title">Mobile GPS Transmitter</span>
              </div>
              <p class="source-desc">
                Smartphones have dedicated GNSS chips that receive satellite signals through airplane windows. Connect your phone to your laptop Wi-Fi/Hotspot and scan this QR code:
              </p>
              <div class="qr-container">
                <img id="qr-code-img" src="/api/pair-qr" alt="Mobile Pairing QR" onerror="this.style.display='none'" />
                <div class="qr-url"><a href="${r}" target="_blank">${r}</a></div>
              </div>
              <div class="source-status" id="mobile-gps-status">
                ${n==="mobile_gps"?"🟢 Actively receiving phone telemetry":this.telemetryManager.isPhoneConnected()?"🟡 Phone connected to relay hub":"⚪ Waiting for phone connection"}
              </div>
              <button class="btn-action" id="btn-enable-mobile-gps">
                ${n==="mobile_gps"?"✓ Currently Active":"Switch to Mobile GPS"}
              </button>
            </div>

            <!-- Laptop Browser Geolocation -->
            <div class="source-card ${n==="browser_gps"?"active":""}" id="card-browser-gps">
              <div class="source-header">
                <span class="source-badge">LAPTOP LOCATION</span>
                <span class="source-title">Browser Geolocation API</span>
              </div>
              <p class="source-desc">
                Use this machine's built-in Windows location service (effective when laptop has cellular/GPS modem or connected to aircraft Wi-Fi).
              </p>
              <button class="btn-action" id="btn-enable-browser-gps">
                ${n==="browser_gps"?"✓ Currently Active":"Switch to Laptop GPS"}
              </button>
            </div>

            <!-- USB Serial NMEA GPS -->
            <div class="source-card ${n==="serial_nmea"?"active":""}" id="card-serial-gps">
              <div class="source-header">
                <span class="source-badge">USB / BLUETOOTH</span>
                <span class="source-title">External NMEA GPS Puck</span>
              </div>
              <p class="source-desc">
                Connect an external USB or Bluetooth GPS receiver (e.g. Garmin GLO, u-blox USB dongle) via the browser Web Serial API.
              </p>
              <button class="btn-action" id="btn-connect-serial">Connect USB GPS Dongle</button>
            </div>

            <!-- Offline Simulation Controls -->
            <div class="source-card ${n==="simulation"?"active":""}" id="card-simulation">
              <div class="source-header">
                <span class="source-badge">DEMO / AISLE SEAT</span>
                <span class="source-title">Offline Flight Simulator</span>
              </div>
              <p class="source-desc">
                Realistic autonomous flight physics along the active Great-Circle flight plan.
              </p>
              <div class="sim-speed-controls">
                <span>SIM SPEED:</span>
                <button class="speed-pill ${i===1?"active":""}" data-speed="1">1x</button>
                <button class="speed-pill ${i===10?"active":""}" data-speed="10">10x</button>
                <button class="speed-pill ${i===25?"active":""}" data-speed="25">25x</button>
                <button class="speed-pill ${i===50?"active":""}" data-speed="50">50x</button>
                <button class="speed-pill ${i===75?"active":""}" data-speed="75">75x</button>
                <button class="speed-pill ${i===100?"active":""}" data-speed="100">100x</button>
              </div>
              <button class="btn-action" id="btn-enable-simulation">
                ${n==="simulation"?"✓ Currently Active":"Switch to Flight Simulation"}
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span class="modal-footer-attribution">
            Earth imagery &copy; Solar System Scope, NASA-derived, CC BY 4.0
          </span>
          <button class="btn-primary" id="btn-close-gps-footer">Done</button>
        </div>
      </div>
    `,document.body.appendChild(e);const a=this.telemetryManager.onPhoneStatus((l,c)=>{const h=document.getElementById("mobile-gps-status"),u=document.getElementById("card-mobile-gps"),f=document.getElementById("btn-enable-mobile-gps"),d=this.telemetryManager.getSource()==="mobile_gps";h&&(d||c?(h.textContent="🟢 Actively receiving phone satellite telemetry",h.style.color="var(--accent-green, #00ff66)"):l?(h.textContent="🟡 Phone connected to relay hub • Transmitting fixes",h.style.color="var(--accent-gold, #ffb000)"):(h.textContent="⚪ Waiting for phone connection",h.style.color="")),u&&f&&(d?(u.classList.add("active"),f.textContent="✓ Currently Active"):(u.classList.remove("active"),f.textContent="Switch to Mobile GPS"))}),o=()=>{a(),e.remove()};document.getElementById("btn-close-gps")?.addEventListener("click",o),document.getElementById("btn-close-gps-footer")?.addEventListener("click",o),document.getElementById("btn-enable-mobile-gps")?.addEventListener("click",()=>{this.telemetryManager.setSource("mobile_gps"),o()}),document.getElementById("btn-enable-browser-gps")?.addEventListener("click",()=>{this.telemetryManager.setSource("browser_gps"),o()}),document.getElementById("btn-connect-serial")?.addEventListener("click",async()=>{await this.telemetryManager.connectSerialGps()&&o()}),document.getElementById("btn-enable-simulation")?.addEventListener("click",()=>{this.telemetryManager.setSource("simulation"),o()}),e.querySelectorAll(".speed-pill").forEach(l=>{l.addEventListener("click",c=>{e.querySelectorAll(".speed-pill").forEach(g=>g.classList.remove("active"));const h=c.currentTarget;h.classList.add("active");const u=parseInt(h.dataset.speed||"10",10);this.telemetryManager.setSimulationSpeed(u);const f=document.getElementById("sim-speed-tag");f&&(f.textContent=`${u}x`);const d=document.getElementById("gps-source-label");d&&this.telemetryManager.getSource()==="simulation"&&(d.textContent=`SIM ${u}x`)})})}showAboutModal(t){const e=document.getElementById("about-modal");e&&e.remove();const n=document.createElement("div");n.id="about-modal",n.className="modal-backdrop";let i="WebGL 2.0 Hardware Accelerated",r="Standard GPU Vendor",a="4096 x 4096";try{const c=document.createElement("canvas"),h=c.getContext("webgl2")||c.getContext("webgl");if(h){const u=h.getExtension("WEBGL_debug_renderer_info");u&&(r=h.getParameter(u.UNMASKED_VENDOR_WEBGL)||r,i=h.getParameter(u.UNMASKED_RENDERER_WEBGL)||i);const f=h.getParameter(h.MAX_TEXTURE_SIZE);a=`${f} x ${f}`}}catch{}const o=this.telemetryManager.getSource(),l=t?t.textureTier:"mobile";n.innerHTML=`
      <div class="modal-card about-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">✈️</span>
            <span>rTech Systems // FlightMap Control Center</span>
          </div>
          <button class="modal-close" id="btn-close-about">&times;</button>
        </div>

        <div class="modal-body">
          <div class="about-hero">
            <div class="about-logo-badge">rTech</div>
            <div class="about-hero-text">
              <h2>FlightMap 3D // In-Flight Entertainment (IFE)</h2>
              <span class="about-version-tag">${bc}</span>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">CARTOGRAPHIC TEXTURE RESOLUTION & FIDELITY</div>
            <div class="tier-selector" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px;">
              <button class="preset-btn ${l==="mobile"?"active":""}" id="btn-select-tier-4k" style="padding: 10px; text-align: left;">
                <span class="preset-flight" style="display: flex; align-items: center; justify-content: space-between;">
                  <span>4K HIGH DEFINITION</span>
                  <span style="font-size: 10px; color: #38bdf8;">${l==="mobile"?"● ACTIVE":""}</span>
                </span>
                <span class="preset-route" style="font-size: 11px;">4096 &times; 2048 Sharp Textures</span>
                <span class="preset-meta" style="font-size: 10px; opacity: 0.75;">Optimized for Mobile & OLED • Fast PWA Caching</span>
              </button>
              <button class="preset-btn ${l==="full"?"active":""}" id="btn-select-tier-8k" style="padding: 10px; text-align: left;">
                <span class="preset-flight" style="display: flex; align-items: center; justify-content: space-between;">
                  <span>8K ULTRA HD</span>
                  <span style="font-size: 10px; color: #38bdf8;">${l==="full"?"● ACTIVE":""}</span>
                </span>
                <span class="preset-route" style="font-size: 11px;">8192 &times; 4096 Master Resolution</span>
                <span class="preset-meta" style="font-size: 10px; opacity: 0.75;">Extreme Detail • High-VRAM & Desktop Tier</span>
              </button>
            </div>
            <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 6px;">
              <button class="preset-btn" id="btn-open-settings-from-about" style="width: 100%; padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
                <span style="display: flex; align-items: center; gap: 8px;">
                  <span>⚙️</span>
                  <span style="font-weight: 600;">System Settings & Units (Speed / Distance)</span>
                </span>
                <span style="color: #38bdf8; font-size: 11px;">${Zi.getInstance().getSystemLabel()} &rarr;</span>
              </button>
              <button class="preset-btn" id="btn-open-layers-from-about" style="width: 100%; padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
                <span style="display: flex; align-items: center; gap: 8px;">
                  <span>🗺️</span>
                  <span style="font-weight: 600;">Configure Map Layers, Regular Map & Day/Night</span>
                </span>
                <span style="color: #38bdf8; font-size: 11px;">${t?t.getMapModeLabel():""} &rarr;</span>
              </button>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">SYSTEM ARCHITECTURE & CAPABILITIES</div>
            <div class="about-specs-grid">
              <div class="about-spec-item">
                <span class="spec-name">3D Graphic Engine</span>
                <span class="spec-value">Three.js WebGL2 (Double-Buffered, 60 FPS)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Cartographic Textures</span>
                <span class="spec-value">${l==="full"?"8K Ultra HD (8192x4096)":"4K High Definition (4096x2048)"} Blue Marble</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Geopolitical Vectors</span>
                <span class="spec-value">Natural Earth 50m (97,981 Segments, Single GPU Draw)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Country Annotations</span>
                <span class="spec-value">242 3D Canvas Billboards with Horizon Occlusion Culling</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Flight Dynamics</span>
                <span class="spec-value">Slerp Great-Circle Orthodromic Navigation</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Active Telemetry Mode</span>
                <span class="spec-value">${o.toUpperCase().replace("_"," ")}</span>
              </div>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">HARDWARE ACCELERATION & RENDERER</div>
            <div class="about-specs-grid">
              <div class="about-spec-item">
                <span class="spec-name">GPU Vendor</span>
                <span class="spec-value">${r}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Graphics Device</span>
                <span class="spec-value">${i}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Max Texture Resolution</span>
                <span class="spec-value">${a} (16x Anisotropic Filtering)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Color Depth & Palettes</span>
                <span class="spec-value">6 Synchronized HUD Aviation Themes</span>
              </div>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">MOBILE TELEMETRY & CROSS-DEVICE GNSS RELAY</div>
            <p class="about-desc">
              FlightMap features zero-install cross-device satellite GNSS streaming. Scan the QR code from any smartphone on your local hotspot to relay raw GPS satellite fixes through aircraft windows into your laptop's moving map in real-time.
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <div class="about-footer-copy">&copy; 2026 rTech Systems. All rights reserved.</div>
          <button class="btn-primary" id="btn-close-about-footer">Close</button>
        </div>
      </div>
    `,document.body.appendChild(n),document.getElementById("btn-select-tier-4k")?.addEventListener("click",()=>{t?.switchTextureTier("mobile"),this.showAboutModal(t)}),document.getElementById("btn-select-tier-8k")?.addEventListener("click",()=>{t?.switchTextureTier("full"),this.showAboutModal(t)}),document.getElementById("btn-open-settings-from-about")?.addEventListener("click",()=>{n.remove(),this.showSettingsModal(t)}),document.getElementById("btn-open-layers-from-about")?.addEventListener("click",()=>{n.remove(),t&&this.showMapLayersModal(t)}),document.getElementById("btn-close-about")?.addEventListener("click",()=>n.remove()),document.getElementById("btn-close-about-footer")?.addEventListener("click",()=>n.remove())}showMapLayersModal(t,e){const n=document.getElementById("map-layers-modal");n&&n.remove();const i=document.createElement("div");i.id="map-layers-modal",i.className="modal-backdrop";const r=t.mapStyle==="satellite",a=t.mapStyle==="regular",o=t.illuminationMode==="day",l=t.illuminationMode==="night",c=t.illuminationMode==="auto",h=t.reliefEnabled&&r,u=t.textureTier==="mobile",f=t.textureTier==="full";i.innerHTML=`
      <div class="modal-card about-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">🗺️</span>
            <span>Map Layers & Cartographic Display</span>
          </div>
          <button class="modal-close" id="btn-close-layers">&times;</button>
        </div>

        <div class="modal-body">
          <!-- PRESET QUICK MODES -->
          <div class="about-section">
            <div class="section-label">QUICK MAP VIEW PRESETS</div>
            <div class="presets-grid layers-presets-grid">
              <button class="preset-btn ${r?"active":""}" id="preset-sat-relief">
                <span class="preset-flight">🛰️ Satellite 3D</span>
                <span class="preset-route">NASA Blue Marble</span>
                <span class="preset-meta">Photorealistic • Clouds & Relief</span>
              </button>

              <button class="preset-btn ${a&&o?"active":""}" id="preset-reg-day">
                <span class="preset-flight">☀️ Regular (Day)</span>
                <span class="preset-route">Clean Day Cartography</span>
                <span class="preset-meta">No Relief • Crisp Geopolitical Nav</span>
              </button>

              <button class="preset-btn ${a&&l?"active":""}" id="preset-reg-night">
                <span class="preset-flight">🌙 Regular (Night)</span>
                <span class="preset-route">Tactical Dark + Lights</span>
                <span class="preset-meta">No Relief • Incandescent Clusters</span>
              </button>

              <button class="preset-btn ${a&&c?"active":""}" id="preset-reg-auto">
                <span class="preset-flight">🌗 Regular (Auto)</span>
                <span class="preset-route">Astronomical Terminator</span>
                <span class="preset-meta">No Relief • Realtime UTC Cycle</span>
              </button>
            </div>
          </div>

          <!-- MAP STYLE -->
          <div class="about-section">
            <div class="section-label">CARTOGRAPHIC STYLE</div>
            <div class="layers-style-grid">
              <button class="preset-btn ${r?"active":""}" id="btn-style-sat">
                <span class="preset-flight">🛰️ Satellite Imagery</span>
                <span class="preset-meta">NASA Blue Marble Texture</span>
              </button>
              <button class="preset-btn ${a?"active":""}" id="btn-style-reg">
                <span class="preset-flight">🗺️ Regular Cartographic</span>
                <span class="preset-meta">Smooth Flat Geopolitical Map</span>
              </button>
            </div>
          </div>

          <!-- ILLUMINATION / DAY & NIGHT -->
          <div class="about-section">
            <div class="section-label">ILLUMINATION / DAY & NIGHT VERSION</div>
            <div class="layers-illum-grid">
              <button class="preset-btn ${o?"active":""}" id="btn-illum-day">
                <span class="preset-flight" style="font-size: 11px;">☀️ Day</span>
                <span class="preset-meta" style="font-size: 9px;">Worldwide Daylight</span>
              </button>
              <button class="preset-btn ${l?"active":""}" id="btn-illum-night">
                <span class="preset-flight" style="font-size: 11px;">🌙 Night</span>
                <span class="preset-meta" style="font-size: 9px;">City Lights On</span>
              </button>
              <button class="preset-btn ${c?"active":""}" id="btn-illum-auto">
                <span class="preset-flight" style="font-size: 11px;">🌗 Solar Auto</span>
                <span class="preset-meta" style="font-size: 9px;">Astronomical UTC</span>
              </button>
            </div>
          </div>

          <!-- 3D ELEVATION RELIEF -->
          <div class="about-section">
            <div class="section-label">EARTH 3D ELEVATION RELIEF (BUMP)</div>
            <div class="layers-relief-grid">
              <button class="preset-btn ${h?"active":""}" id="btn-relief-on" ${a?'disabled style="opacity: 0.45; cursor: not-allowed;"':""}>
                <span class="preset-flight">⛰️ 3D Relief ON</span>
                <span class="preset-meta">Elevation Bump Shading</span>
              </button>
              <button class="preset-btn ${h?"":"active"}" id="btn-relief-off">
                <span class="preset-flight">🌐 No Relief (Flat Surface)</span>
                <span class="preset-meta">Smooth Spherical Surface</span>
              </button>
            </div>
          </div>

          <!-- TEXTURE RESOLUTION SWITCHER -->
          <div class="about-section">
            <div class="section-label">TEXTURE RESOLUTION TIER</div>
            <div class="layers-res-grid">
              <button class="preset-btn ${u?"active":""}" id="btn-layers-res-4k">
                <span class="preset-flight">4K HIGH DEFINITION</span>
                <span class="preset-meta">4096x2048 • Fast, Low VRAM</span>
              </button>
              <button class="preset-btn ${f?"active":""}" id="btn-layers-res-8k">
                <span class="preset-flight">8K ULTRA HD</span>
                <span class="preset-meta">8192x4096 • Extreme Detail</span>
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-close-layers-footer">Done</button>
        </div>
      </div>
    `,document.body.appendChild(i);const d=()=>{e&&e(),this.showMapLayersModal(t,e)};document.getElementById("preset-sat-relief")?.addEventListener("click",()=>{t.setMapStyle("satellite"),t.setReliefEnabled(!0),t.setIlluminationMode("auto"),d()}),document.getElementById("preset-reg-day")?.addEventListener("click",()=>{t.setMapStyle("regular"),t.setIlluminationMode("day"),d()}),document.getElementById("preset-reg-night")?.addEventListener("click",()=>{t.setMapStyle("regular"),t.setIlluminationMode("night"),d()}),document.getElementById("preset-reg-auto")?.addEventListener("click",()=>{t.setMapStyle("regular"),t.setIlluminationMode("auto"),d()}),document.getElementById("btn-style-sat")?.addEventListener("click",()=>{t.setMapStyle("satellite"),d()}),document.getElementById("btn-style-reg")?.addEventListener("click",()=>{t.setMapStyle("regular"),d()}),document.getElementById("btn-illum-day")?.addEventListener("click",()=>{t.setIlluminationMode("day"),d()}),document.getElementById("btn-illum-night")?.addEventListener("click",()=>{t.setIlluminationMode("night"),d()}),document.getElementById("btn-illum-auto")?.addEventListener("click",()=>{t.setIlluminationMode("auto"),d()}),document.getElementById("btn-relief-on")?.addEventListener("click",()=>{t.setReliefEnabled(!0),d()}),document.getElementById("btn-relief-off")?.addEventListener("click",()=>{t.setReliefEnabled(!1),d()}),document.getElementById("btn-layers-res-4k")?.addEventListener("click",()=>{t.switchTextureTier("mobile"),d()}),document.getElementById("btn-layers-res-8k")?.addEventListener("click",()=>{t.switchTextureTier("full"),d()}),document.getElementById("btn-close-layers")?.addEventListener("click",()=>i.remove()),document.getElementById("btn-close-layers-footer")?.addEventListener("click",()=>i.remove())}showSolarModal(t){const e=document.getElementById("solar-modal");e&&e.remove();const n=document.createElement("div");n.id="solar-modal",n.className="modal-backdrop";const i=t.solarMode,r=new Date,a=r.getUTCHours(),o=r.getUTCMinutes(),l=a*60+o,c=Ha.getSubsolarPoint(r),h=t.currentSolarInfo;n.innerHTML=`
      <div class="modal-card solar-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">☀️</span>
            <span>Day / Night Map & Solar Illumination Controls</span>
          </div>
          <button class="modal-close" id="btn-close-solar">&times;</button>
        </div>

        <div class="modal-body">
          <div class="about-hero" style="margin-bottom: 20px;">
            <div class="about-logo-badge" style="background: linear-gradient(135deg, #f59e0b, #ef4444); color: white;">SUN</div>
            <div class="about-hero-text">
              <h2>Astronomical Day / Night Terminator Engine</h2>
              <span class="about-version-tag">EARTH ILLUMINATION • TWILIGHT SCATTERING • CITY NIGHT LIGHTS</span>
            </div>
          </div>

          <!-- Mode Selectors Grid -->
          <div class="solar-modes-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
            <button class="solar-mode-btn ${i==="utc"?"active":""}" id="mode-btn-utc" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px; border-radius: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid ${i==="utc"?"#00e5ff":"rgba(255, 255, 255, 0.1)"}; color: #f8fafc; cursor: pointer; text-align: left;">
              <span style="font-weight: 700; font-size: 14px; color: ${i==="utc"?"#00e5ff":"#94a3b8"};">⏱️ REAL-TIME UTC</span>
              <span style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">Matches current world time and coordinates. Shows true day and night worldwide.</span>
            </button>

            <button class="solar-mode-btn ${i==="local_noon"?"active":""}" id="mode-btn-noon" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px; border-radius: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid ${i==="local_noon"?"#00e5ff":"rgba(255, 255, 255, 0.1)"}; color: #f8fafc; cursor: pointer; text-align: left;">
              <span style="font-weight: 700; font-size: 14px; color: ${i==="local_noon"?"#00e5ff":"#94a3b8"};">☀️ LOCAL NOON (DAYLIGHT)</span>
              <span style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">Positions Sun overhead the flight route for clear daytime visibility everywhere.</span>
            </button>

            <button class="solar-mode-btn ${i==="sim"?"active":""}" id="mode-btn-sim" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px; border-radius: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid ${i==="sim"?"#00e5ff":"rgba(255, 255, 255, 0.1)"}; color: #f8fafc; cursor: pointer; text-align: left;">
              <span style="font-weight: 700; font-size: 14px; color: ${i==="sim"?"#00e5ff":"#94a3b8"};">⏩ SIMULATION SYNC</span>
              <span style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">Terminator advances with accelerated flight speed (10x, 20x).</span>
            </button>
          </div>

          <!-- Manual 24-Hour Solar Scrubber -->
          <div class="solar-scrubber-section" style="background: rgba(15, 23, 42, 0.5); padding: 16px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: #94a3b8;">MANUAL 24-HOUR SOLAR TIME SCRUBBER</span>
              <span id="slider-time-readout" style="font-family: monospace; font-size: 14px; font-weight: 700; color: #00e5ff;">${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")} UTC</span>
            </div>
            <input type="range" id="solar-time-slider" min="0" max="1439" value="${l}" style="width: 100%; cursor: pointer; accent-color: #00e5ff;" />
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: #64748b; margin-top: 4px;">
              <span>00:00 (Midnight)</span>
              <span>06:00 (Dawn)</span>
              <span>12:00 (Noon)</span>
              <span>18:00 (Dusk)</span>
              <span>23:59</span>
            </div>
          </div>

          <!-- Telemetry Specs Readout -->
          <div class="about-section">
            <div class="section-label">LIVE SOLAR TELEMETRY & ASTRONOMICAL STATUS</div>
            <div class="about-specs-grid">
              <div class="about-spec-item">
                <span class="spec-name">Aircraft Solar Phase</span>
                <span class="spec-value" id="modal-solar-phase">${h?`${h.phaseIcon} ${h.phaseLabel}`:"☀️ DAYLIGHT"}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Sun Elevation Angle</span>
                <span class="spec-value" id="modal-solar-elevation">${h?`${h.elevationDeg>0?"+":""}${h.elevationDeg}°`:"+45.0°"}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Subsolar Declination</span>
                <span class="spec-value">${c.declinationDeg>0?"+":""}${c.declinationDeg.toFixed(2)}° (${c.declinationDeg>0?"Northern":"Southern"} Summer)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Subsolar Longitude</span>
                <span class="spec-value">${c.lon.toFixed(2)}° (${c.lon>=0?"East":"West"})</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-close-solar-footer">Done</button>
        </div>
      </div>
    `,document.body.appendChild(n);const u=()=>n.remove();document.getElementById("btn-close-solar")?.addEventListener("click",u),document.getElementById("btn-close-solar-footer")?.addEventListener("click",u);const f=v=>{["mode-btn-utc","mode-btn-noon","mode-btn-sim"].forEach(m=>{const p=document.getElementById(m);p&&(p.classList.toggle("active",m===v),p.style.borderColor=m===v?"#00e5ff":"rgba(255, 255, 255, 0.1)")})};document.getElementById("mode-btn-utc")?.addEventListener("click",()=>{t.setSolarMode("utc"),f("mode-btn-utc")}),document.getElementById("mode-btn-noon")?.addEventListener("click",()=>{t.setSolarMode("local_noon"),f("mode-btn-noon")}),document.getElementById("mode-btn-sim")?.addEventListener("click",()=>{t.setSolarMode("sim"),f("mode-btn-sim")});const d=document.getElementById("solar-time-slider"),g=document.getElementById("slider-time-readout");d&&g&&d.addEventListener("input",()=>{const v=parseInt(d.value,10),m=Math.floor(v/60),p=v%60;g.textContent=`${String(m).padStart(2,"0")}:${String(p).padStart(2,"0")} UTC`;const b=new Date;b.setUTCHours(m,p,0,0),t.setSolarMode("manual"),t.setManualSolarDate(b),f("")})}showSettingsModal(t){const e=document.getElementById("settings-modal");e&&e.remove();const n=Zi.getInstance(),i=n.getSystem(),r=n.getCoordinateFormat(),a=document.createElement("div");a.id="settings-modal",a.className="modal-backdrop",a.innerHTML=`
      <div class="modal-card settings-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">⚙️</span>
            <span>Settings & Measurement Units</span>
          </div>
          <button class="modal-close" id="btn-close-settings">&times;</button>
        </div>

        <div class="modal-body">
          <!-- UNITS SELECTION SECTION -->
          <div class="about-section">
            <div class="section-label">SPEED & DISTANCE MEASUREMENT SYSTEM</div>
            <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; line-height: 1.4;">
              Select your preferred measurement units for ground speed, journey distance, flight levels, and HUD tapes. Changes apply instantly across the moving map.
            </p>

            <div class="settings-units-grid">
              <!-- MARITIME (AVIATION) -->
              <div class="unit-option-card ${i==="maritime"?"active":""}" data-system="maritime" id="unit-opt-maritime">
                <div class="unit-card-header">
                  <div class="unit-card-title-row">
                    <span class="unit-card-icon">⚓</span>
                    <span class="unit-card-name">Maritime / Aviation</span>
                  </div>
                  <span class="unit-card-badge ${i==="maritime"?"active-badge":""}">
                    ${i==="maritime"?"✓ ACTIVE":"ICAO STD"}
                  </span>
                </div>
                <div class="unit-specs-list">
                  <div class="unit-spec-row">
                    <span class="spec-k">Speed</span>
                    <span class="spec-v">Knots (KTS)</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Distance</span>
                    <span class="spec-v">Nautical Miles (NM)</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Altitude</span>
                    <span class="spec-v">Feet (FT) / Flight Levels</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Temperature</span>
                    <span class="spec-v">Celsius (&deg;C)</span>
                  </div>
                </div>
              </div>

              <!-- METRIC (SI) -->
              <div class="unit-option-card ${i==="metric"?"active":""}" data-system="metric" id="unit-opt-metric">
                <div class="unit-card-header">
                  <div class="unit-card-title-row">
                    <span class="unit-card-icon">🌍</span>
                    <span class="unit-card-name">Metric (SI)</span>
                  </div>
                  <span class="unit-card-badge ${i==="metric"?"active-badge":""}">
                    ${i==="metric"?"✓ ACTIVE":"GLOBAL SI"}
                  </span>
                </div>
                <div class="unit-specs-list">
                  <div class="unit-spec-row">
                    <span class="spec-k">Speed</span>
                    <span class="spec-v">Kilometers / Hour (KM/H)</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Distance</span>
                    <span class="spec-v">Kilometers (KM)</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Altitude</span>
                    <span class="spec-v">Meters (M) / Flight Levels</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Temperature</span>
                    <span class="spec-v">Celsius (&deg;C)</span>
                  </div>
                </div>
              </div>

              <!-- IMPERIAL (STATUTE) -->
              <div class="unit-option-card ${i==="imperial"?"active":""}" data-system="imperial" id="unit-opt-imperial">
                <div class="unit-card-header">
                  <div class="unit-card-title-row">
                    <span class="unit-card-icon">🚗</span>
                    <span class="unit-card-name">Imperial (Statute)</span>
                  </div>
                  <span class="unit-card-badge ${i==="imperial"?"active-badge":""}">
                    ${i==="imperial"?"✓ ACTIVE":"US / UK"}
                  </span>
                </div>
                <div class="unit-specs-list">
                  <div class="unit-spec-row">
                    <span class="spec-k">Speed</span>
                    <span class="spec-v">Miles / Hour (MPH)</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Distance</span>
                    <span class="spec-v">Statute Miles (MI)</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Altitude</span>
                    <span class="spec-v">Feet (FT) / Flight Levels</span>
                  </div>
                  <div class="unit-spec-row">
                    <span class="spec-k">Temperature</span>
                    <span class="spec-v">Fahrenheit (&deg;F)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- COORDINATES FORMAT SECTION -->
          <div class="about-section">
            <div class="section-label">COORDINATES & NAVIGATION DISPLAY</div>
            <div class="coord-format-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 8px;">
              <button class="preset-btn ${r==="dms"?"active":""}" id="btn-coord-dms" style="padding: 12px; text-align: left;">
                <div class="preset-flight" style="display: flex; justify-content: space-between;">
                  <span>2-Row DMS (Standard)</span>
                  <span style="font-size: 10px; color: var(--accent-cyan);">${r==="dms"?"● SELECTED":""}</span>
                </div>
                <div class="preset-route" style="font-family: var(--font-mono); font-size: 12px; margin-top: 4px;">
                  LAT 51&deg; 28' 12" N<br>LON 000&deg; 27' 42" W
                </div>
                <div class="preset-meta" style="font-size: 10px; margin-top: 4px;">High-legibility split rows for N/S & E/W</div>
              </button>

              <button class="preset-btn ${r==="decimal"?"active":""}" id="btn-coord-decimal" style="padding: 12px; text-align: left;">
                <div class="preset-flight" style="display: flex; justify-content: space-between;">
                  <span>Decimal Degrees</span>
                  <span style="font-size: 10px; color: var(--accent-cyan);">${r==="decimal"?"● SELECTED":""}</span>
                </div>
                <div class="preset-route" style="font-family: var(--font-mono); font-size: 12px; margin-top: 4px;">
                  LAT +51.4700&deg; N<br>LON -000.4617&deg; W
                </div>
                <div class="preset-meta" style="font-size: 10px; margin-top: 4px;">Standard GIS decimal degrees format</div>
              </button>
            </div>
          </div>

          <!-- QUICK LINKS SECTION -->
          <div class="about-section">
            <div class="section-label">SYSTEM & DISPLAY CONFIGURATION</div>
            <div class="quick-links-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 8px;">
              <button class="btn-secondary" id="btn-open-map-layers" style="text-align: left; padding: 10px 12px; font-size: 12px; display: flex; align-items: center; gap: 8px;">
                <span>🗺️</span>
                <span>Map Layers & Cartography</span>
              </button>
              <button class="btn-secondary" id="btn-open-solar-settings" style="text-align: left; padding: 10px 12px; font-size: 12px; display: flex; align-items: center; gap: 8px;">
                <span>☀️</span>
                <span>Day/Night Solar Simulator</span>
              </button>
              <button class="btn-secondary" id="btn-open-route-settings" style="text-align: left; padding: 10px 12px; font-size: 12px; display: flex; align-items: center; gap: 8px;">
                <span>✈️</span>
                <span>Flight Plan & Route Selector</span>
              </button>
              <button class="btn-secondary" id="btn-open-gps-settings" style="text-align: left; padding: 10px 12px; font-size: 12px; display: flex; align-items: center; gap: 8px;">
                <span>📱</span>
                <span>GPS Relay & Hardware Connect</span>
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div style="font-size: 11px; color: var(--text-dim); display: flex; align-items: center; gap: 6px;">
            <span>Active Unit System:</span>
            <span style="font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 700;" id="footer-active-system">${n.getSystemLabel()}</span>
          </div>
          <button class="btn-primary" id="btn-close-settings-footer">Close</button>
        </div>
      </div>
    `,document.body.appendChild(a);const o=h=>{a.querySelectorAll(".unit-option-card").forEach(f=>{const d=f.dataset.system,g=f.querySelector(".unit-card-badge");d===h?(f.classList.add("active"),g&&(g.classList.add("active-badge"),g.textContent="✓ ACTIVE")):(f.classList.remove("active"),g&&(g.classList.remove("active-badge"),g.textContent=d==="maritime"?"ICAO STD":d==="metric"?"GLOBAL SI":"US / UK"))});const u=document.getElementById("footer-active-system");u&&(u.textContent=n.getSystemLabel())};a.querySelectorAll(".unit-option-card").forEach(h=>{h.addEventListener("click",()=>{const u=h.dataset.system;n.setSystem(u),o(u),this.telemetryManager.broadcastUnitSystem(u)})});const l=document.getElementById("btn-coord-dms"),c=document.getElementById("btn-coord-decimal");l?.addEventListener("click",()=>{n.setCoordinateFormat("dms"),l.classList.add("active"),c?.classList.remove("active")}),c?.addEventListener("click",()=>{n.setCoordinateFormat("decimal"),c.classList.add("active"),l?.classList.remove("active")}),document.getElementById("btn-open-map-layers")?.addEventListener("click",()=>{a.remove(),t&&this.showMapLayersModal(t)}),document.getElementById("btn-open-solar-settings")?.addEventListener("click",()=>{a.remove(),t&&this.showSolarModal(t)}),document.getElementById("btn-open-route-settings")?.addEventListener("click",()=>{a.remove(),this.showRouteModal()}),document.getElementById("btn-open-gps-settings")?.addEventListener("click",()=>{a.remove(),this.showGpsModal()}),document.getElementById("btn-close-settings")?.addEventListener("click",()=>a.remove()),document.getElementById("btn-close-settings-footer")?.addEventListener("click",()=>a.remove())}}class Ig{container;cameraManager;globeScene;telemetryManager;flightPlanManager;modalDialogs;themeManager;unitManager;currentAircraftType="widebody_airliner";constructor(t,e,n){this.container=t,this.cameraManager=e,this.globeScene=n,this.telemetryManager=vn.getInstance(),this.flightPlanManager=sr.getInstance(),this.modalDialogs=Mi.getInstance(),this.themeManager=Ae.getInstance(),this.unitManager=Zi.getInstance(),this.renderBaseLayout(),this.initEventListeners(),this.subscribeToUpdates()}renderBaseLayout(){this.container.innerHTML=`
      <div class="hud-root">
        <!-- TOP IFE FLIGHT HEADER -->
        <header class="hud-top-bar">
          <div class="flight-badge">
            <span class="airline-tag" id="hud-airline">Wizz Air</span>
            <span class="flight-no" id="hud-flight-no">W4-3002</span>
          </div>

          <div class="route-tracker">
            <div class="airport-origin">
              <span class="iata" id="hud-origin-iata">BHX</span>
              <span class="city" id="hud-origin-city">Birmingham</span>
            </div>

            <div class="progress-track-wrapper">
              <div class="progress-track">
                <div class="progress-fill" id="hud-progress-fill" style="width: 0%;"></div>
                <div class="progress-airplane" id="hud-progress-plane" style="left: 0%;">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="#00e5ff" style="transform: rotate(90deg);"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                </div>
              </div>
              <div class="route-metrics">
                <span class="metric" id="hud-distance-traveled">0 NM</span>
                <span class="metric center" id="hud-ete-time">
                  <span class="ete-val" id="hud-ete-val">ETE --:--</span>
                  <span class="time-sep">•</span>
                  <span class="eta-val" id="hud-eta-val">ETA --:--</span>
                </span>
                <span class="metric right" id="hud-distance-remaining">1,195 NM</span>
              </div>
            </div>

            <div class="airport-dest">
              <span class="iata" id="hud-dest-iata">OTP</span>
              <span class="city" id="hud-dest-city">Bucharest</span>
            </div>
          </div>

          <div class="hud-top-actions">
            <!-- Theme Palette Toggle Button -->
            <button class="hud-pill-btn btn-secondary-compact" id="btn-toggle-theme" title="Toggle Theme Palette">
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61.42.53 1.13.79 1.8.64.67-.15 1.23-.67 1.23-1.37v-1.38c0-.83.67-1.5 1.5-1.5h1.5c2.76 0 5-2.24 5-5 0-3.31-2.69-6-6-6zm-4.5 9c-.83 0-1.5-.67-1.5-1.5S6.67 9 7.5 9s1.5.67 1.5 1.5S8.33 12 7.5 12zm3-4c-.83 0-1.5-.67-1.5-1.5S9.67 5 10.5 5s1.5.67 1.5 1.5S11.33 8 10.5 8zm3 0c-.83 0-1.5-.67-1.5-1.5S12.67 5 13.5 5s1.5.67 1.5 1.5S14.33 8 13.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S15.67 9 16.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </span>
              <span id="theme-btn-label">THEME</span>
            </button>

            <!-- Aircraft Type Switcher -->
            <button class="hud-pill-btn" id="btn-toggle-aircraft" title="Toggle Aircraft Type">
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
              </span>
              <span id="aircraft-btn-label">AIRLINER</span>
            </button>

            <button class="hud-pill-btn" id="btn-open-route" title="Change Route & Airport">
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M10.18 9L2.5 5.16v1.94l6.09 3.05-6.09 3.04v1.94L10.18 11.2V19l2 1 2-1v-7.8l7.68 3.84v-1.94L15.77 9.1l6.09-3.04V4.12L14.18 8V2.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9h-1z"/></svg>
              </span>
              <span>ROUTE</span>
            </button>
            <button class="hud-pill-btn" id="btn-open-gps" title="Connect Phone GPS or Hardware">
              <span class="pulse-dot" id="gps-status-dot"></span>
              <span id="gps-source-label">SIM 10x</span>
            </button>
            <button class="hud-pill-btn" id="btn-open-settings" title="Settings: Units (Maritime / Metric / Imperial) & Display Options">
              <span class="btn-icon">⚙️</span>
              <span id="settings-btn-label">${this.unitManager.getSystemLabel()}</span>
            </button>
            <button class="hud-icon-btn" id="btn-open-about" title="System Specifications & About">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </button>
            <button class="hud-icon-btn" id="btn-switch-mode" title="Switch Mode (Map / GPS Relay)">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
            </button>
            <button class="hud-icon-btn" id="btn-toggle-fs" title="Toggle Fullscreen">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
            </button>
          </div>
        </header>

        <!-- LEFT FLIGHT INSTRUMENTS TAPES -->
        <div class="hud-left-instruments">
          <!-- Speed Tape -->
          <div class="instrument-tape speed-tape">
            <div class="tape-label">KTS</div>
            <div class="tape-window">
              <div class="tape-readout" id="tape-speed-value">485</div>
            </div>
            <div class="tape-sub-metric" id="tape-mach-value">M 0.82</div>
          </div>

          <!-- Altitude Tape -->
          <div class="instrument-tape altitude-tape">
            <div class="tape-label">ALT / FT</div>
            <div class="tape-window">
              <div class="tape-readout" id="tape-altitude-value">38,000</div>
            </div>
            <div class="tape-sub-metric" id="tape-flightlevel-value">FL380</div>
          </div>

          <!-- Vertical Speed Indicator (VSI) -->
          <div class="vsi-gauge" title="Vertical Speed Indicator">
            <div class="vsi-needle" id="vsi-needle"></div>
            <div class="vsi-center-line"></div>
            <span class="vsi-label">+VSI</span>
            <span class="vsi-readout" id="vsi-readout">0 FPM</span>
          </div>
        </div>

        <!-- DOCKED BOTTOM CONSOLE (CAMERA ROW 1 & TELEMETRY ROW 2 ON MOBILE) -->
        <div class="hud-bottom-console">
          <!-- CAMERA VIEW CONTROLLER (ROW 1 ON MOBILE) -->
          <div class="hud-right-camera-panel">
            <div class="panel-header">CAMERA ANGLE</div>
            <div class="camera-buttons-group">
              <button class="cam-btn" data-cam="cockpit" title="Cockpit View">
                <span class="cam-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h2v5h-2V6zm-6 0h4v5H5V6zm0 7h4v5H5v-5zm6 5v-5h2v5h-2zm8 0h-4v-5h4v5zm0-7h-4V6h4v5z"/></svg>
                </span>
                <span>Cockpit</span>
              </button>
              <button class="cam-btn" data-cam="wing" title="Wing Cam">
                <span class="cam-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21 3L3 10.53v2.13l8.03 2.68L13.71 21h2.13L21 3z"/></svg>
                </span>
                <span>Wing Cam</span>
              </button>
              <button class="cam-btn" data-cam="chase" title="Chase Cam">
                <span class="cam-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                </span>
                <span>Chase Cam</span>
              </button>
              <button class="cam-btn active" data-cam="orbit" title="Globe Orbit">
                <span class="cam-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </span>
                <span>Globe Orbit</span>
              </button>
              <button class="cam-btn" data-cam="tactical" title="2D Tactical">
                <span class="cam-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>
                </span>
                <span>2D Tactical</span>
              </button>
            </div>

            <!-- Simulation Quick Controls -->
            <div class="sim-quick-bar" id="sim-quick-bar">
              <button class="sim-ctrl-btn" id="btn-sim-pause" title="Pause / Resume Simulation">
                <svg id="sim-pause-icon" viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </button>
              <button class="sim-ctrl-btn sim-speed-tag" id="btn-sim-speed" title="Cycle Simulation Speed (1x, 10x, 25x, 50x, 75x, 100x)">
                <span id="sim-speed-tag">${this.telemetryManager.getSimulationSpeed()}x</span>
              </button>
            </div>
          </div>

          <!-- BOTTOM TELEMETRY STRIP (ROW 2 ON MOBILE) -->
          <footer class="hud-bottom-bar">
            <!-- 1. GROUND SPEED -->
            <div class="telemetry-card ground-speed-card clickable-card" id="card-groundspeed" title="Ground Speed (Click to open Settings / Toggle Units: Maritime / Metric / Imperial)">
              <div class="card-top-row">
                <span class="label">GROUND SPEED</span>
                <span class="unit-system-tag" id="tag-speed-system">${this.unitManager.getSystemLabel()}</span>
              </div>
              <div class="telemetry-body-center">
                <div class="primary-val-row">
                  <span class="big-val" id="val-groundspeed">485</span>
                  <span class="unit" id="unit-groundspeed">KTS</span>
                </div>
                <div class="sub-val" id="val-speed-kmh">898 KM/H</div>
              </div>
            </div>

            <!-- 2. OUTSIDE AIR TEMP -->
            <div class="telemetry-card">
              <div class="card-top-row">
                <span class="label">OUTSIDE AIR TEMP (OAT)</span>
                <span class="card-mini-badge" id="lbl-isa-dev">ISA STD</span>
              </div>
              <div class="telemetry-body-center">
                <div class="primary-val-row">
                  <span class="big-val" id="val-oat-c">-52</span>
                  <span class="unit" id="unit-oat">&deg;C</span>
                </div>
                <div class="sub-val" id="val-oat-f">-61&deg;F</div>
              </div>
            </div>

            <!-- 3. TRUE TRACK / HEADING -->
            <div class="telemetry-card">
              <div class="card-top-row">
                <span class="label">TRUE TRACK / HEADING</span>
                <span class="card-mini-badge">GYRO</span>
              </div>
              <div class="telemetry-body-center">
                <div class="primary-val-row">
                  <span class="big-val" id="val-heading">285&deg;</span>
                  <span class="unit">TRUE</span>
                </div>
                <div class="sub-val" id="val-pitch-roll">+1.5&deg; / 0.0&deg;</div>
              </div>
            </div>

            <!-- 4. COORDINATES (2-ROW DMS) -->
            <div class="telemetry-card coord-card" id="card-coordinates" title="WGS84 Coordinates: Latitude (N/S) & Longitude (E/W)">
              <div class="card-top-row">
                <span class="label">COORDINATES</span>
                <span class="card-mini-badge" id="badge-coord-fmt">2-ROW DMS</span>
              </div>
              <div class="coord-rows">
                <div class="coord-row">
                  <span class="coord-axis">LAT</span>
                  <span class="coord-num" id="val-coord-lat">51° 28' 12"</span>
                  <span class="coord-cardinal dir-n" id="val-coord-lat-dir">N</span>
                </div>
                <div class="coord-row">
                  <span class="coord-axis">LON</span>
                  <span class="coord-num" id="val-coord-lon">000° 27' 42"</span>
                  <span class="coord-cardinal dir-w" id="val-coord-lon-dir">W</span>
                </div>
              </div>
              <span class="coord-val" id="val-coordinates" style="display: none;">51°28'12"N 000°27'42"W</span>
            </div>

            <!-- 5. FLIGHT ROUTE CLOCKS & SOLAR LOCAL POSITION -->
            <div class="telemetry-card clocks-card">
              <div class="flight-clocks-section">
                <div class="card-top-row">
                  <span class="label">ROUTE CLOCKS</span>
                </div>
                <div class="clocks-grid">
                  <div class="clock-col">
                    <div class="clock-header">
                      <span class="clock-iata" id="lbl-origin-iata">BHX</span>
                      <span class="clock-tag">DEP</span>
                    </div>
                    <span class="clock-val" id="val-origin-clock">--:--</span>
                  </div>
                  <div class="clock-col is-utc">
                    <div class="clock-header">
                      <span class="clock-iata">UTC</span>
                      <span class="clock-tag">ZULU</span>
                    </div>
                    <span class="clock-val" id="val-utc-clock">13:15</span>
                  </div>
                  <div class="clock-col">
                    <div class="clock-header">
                      <span class="clock-iata" id="lbl-dest-iata">OTP</span>
                      <span class="clock-tag">ARR</span>
                    </div>
                    <span class="clock-val" id="val-dest-clock">14:45</span>
                  </div>
                </div>
              </div>

              <div class="solar-section clickable-card" id="col-solar-status" title="Local Solar Phase & Elevation (Click to configure Day/Night map)">
                <div class="card-top-row">
                  <span class="label">SOLAR</span>
                  <span class="card-mini-badge" id="badge-solar-mode">LIVE</span>
                </div>
                <div class="solar-body-center">
                  <div class="solar-phase-row">
                    <span class="solar-phase-icon" id="solar-phase-icon">☀️</span>
                    <span class="solar-phase-name" id="solar-phase-name">DAY</span>
                  </div>
                  <div class="solar-elev-badge" id="solar-elev-badge">
                    <span class="elev-tag">ELEV</span>
                    <span class="elev-val" id="solar-elev-val">+42.0°</span>
                  </div>
                </div>
                <!-- Legacy/fallback hooks for backward compatibility -->
                <span id="lbl-origin-clock" style="display: none;"></span>
                <span id="lbl-dest-clock" style="display: none;"></span>
                <span id="val-solar-status" style="display: none;">☀️ DAY</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    `}setCameraMode(t){if(this.container.querySelectorAll(".cam-btn").forEach(e=>{e.dataset.cam===t?e.classList.add("active"):e.classList.remove("active")}),this.cameraManager.setMode(t),t==="orbit"){const e=this.flightPlanManager.getActivePlan();e&&this.cameraManager.frameRouteOverview(e)}}setAircraftType(t){this.currentAircraftType=t,this.globeScene.setAircraftType(t);const e=document.getElementById("aircraft-btn-label");e&&(e.textContent=t==="business_jet"?"PRIVATE JET":"AIRLINER (B787)")}initEventListeners(){this.container.querySelectorAll(".cam-btn").forEach(o=>{o.addEventListener("click",l=>{const h=l.currentTarget.dataset.cam;h&&(this.setCameraMode(h),vn.getInstance().broadcastCameraMode(h))})});const t=Object.keys(Ae.THEMES),e=document.getElementById("btn-toggle-theme"),n=document.getElementById("theme-btn-label");n&&(n.textContent=this.themeManager.getCurrentTheme().name.split(" ")[0].toUpperCase()),e?.addEventListener("click",()=>{const o=this.themeManager.getCurrentTheme().id,l=t.indexOf(o),c=t[(l+1)%t.length];this.themeManager.setTheme(c),n&&(n.textContent=this.themeManager.getCurrentTheme().name.split(" ")[0].toUpperCase())}),document.getElementById("btn-toggle-aircraft")?.addEventListener("click",()=>{this.setAircraftType(this.currentAircraftType==="business_jet"?"widebody_airliner":"business_jet")}),document.getElementById("btn-open-route")?.addEventListener("click",()=>{this.modalDialogs.showRouteModal()}),document.getElementById("btn-open-gps")?.addEventListener("click",()=>{this.modalDialogs.showGpsModal()}),document.getElementById("btn-open-about")?.addEventListener("click",()=>{this.modalDialogs.showAboutModal(this.globeScene)}),document.getElementById("btn-open-settings")?.addEventListener("click",()=>{this.modalDialogs.showSettingsModal(this.globeScene)}),document.getElementById("card-groundspeed")?.addEventListener("click",()=>{this.modalDialogs.showSettingsModal(this.globeScene)}),document.getElementById("tag-speed-system")?.addEventListener("click",o=>{o.stopPropagation();const l=this.unitManager.cycleSystem();this.telemetryManager.broadcastUnitSystem(l)}),document.getElementById("card-coordinates")?.addEventListener("click",()=>{const o=this.unitManager.getCoordinateFormat()==="dms"?"decimal":"dms";this.unitManager.setCoordinateFormat(o)}),this.unitManager.onSystemChange(()=>{const o=this.unitManager.getSystemLabel(),l=document.getElementById("tag-speed-system");l&&(l.textContent=o);const c=document.getElementById("settings-btn-label");c&&(c.textContent=o)}),document.getElementById("col-solar-status")?.addEventListener("click",()=>{this.modalDialogs.showSolarModal(this.globeScene)}),document.getElementById("btn-switch-mode")?.addEventListener("click",()=>{window.location.href="/FlightMap/start.html"}),document.getElementById("btn-toggle-fs")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}),document.getElementById("btn-sim-pause")?.addEventListener("click",()=>{const o=this.telemetryManager.toggleSimulationPause(),l=document.getElementById("btn-sim-pause"),c=document.getElementById("sim-pause-icon");l&&c&&(o?(l.classList.add("paused"),l.title="Resume Simulation",c.innerHTML='<path d="M8 5v14l11-7z"/>'):(l.classList.remove("paused"),l.title="Pause Simulation",c.innerHTML='<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'))});const r=[1,10,25,50,75,100],a=()=>{this.telemetryManager.getSource()!=="simulation"&&this.telemetryManager.setSource("simulation");const o=this.telemetryManager.getSimulationSpeed();let l=r.indexOf(o)+1;(l<=0||l>=r.length)&&(l=0);const c=r[l];this.telemetryManager.setSimulationSpeed(c);const h=document.getElementById("sim-speed-tag");h&&(h.textContent=`${c}x`);const u=document.getElementById("gps-source-label");u&&this.telemetryManager.getSource()==="simulation"&&(u.textContent=`SIM ${c}x`),document.querySelectorAll(".speed-pill").forEach(f=>{const d=f;parseInt(d.dataset.speed||"0",10)===c?d.classList.add("active"):d.classList.remove("active")})};document.getElementById("btn-sim-speed")?.addEventListener("click",a)}subscribeToUpdates(){this.telemetryManager.subscribe(t=>{this.updateHudState(t)}),this.flightPlanManager.onPlanChanged(t=>{this.updateFlightPlan(t),this.cameraManager.frameRouteOverview(t),this.container.querySelectorAll(".cam-btn").forEach(e=>e.classList.remove("active")),this.container.querySelector('[data-cam="orbit"]')?.classList.add("active")})}updateFlightPlan(t){const e=(n,i)=>{const r=document.getElementById(n);r&&(r.textContent=i)};e("hud-airline",t.airline),e("hud-flight-no",t.flightNumber),e("hud-origin-iata",t.origin.iata),e("hud-origin-city",t.origin.city),e("hud-dest-iata",t.destination.iata),e("hud-dest-city",t.destination.city),e("lbl-origin-iata",t.origin.iata),e("lbl-dest-iata",t.destination.iata),e("lbl-origin-clock",`${t.origin.iata} (ORIGIN)`),e("lbl-dest-clock",`${t.destination.iata} (DEST)`)}updateHudState(t){const e=(O,Z)=>{const it=document.getElementById(O);it&&(it.textContent=Z)},n=this.unitManager.formatSpeed(t.groundSpeed);e("tape-speed-value",n.value.toString());const i=this.container.querySelector(".speed-tape .tape-label");i&&(i.textContent=n.unit),e("tape-mach-value",`M ${t.atmosphere.mach.toFixed(2)}`);const r=this.unitManager.formatAltitude(t.altitude);e("tape-altitude-value",r.value.toLocaleString()),e("tape-flightlevel-value",r.flightLevelStr);const a=this.container.querySelector(".altitude-tape .tape-label");a&&(a.textContent=r.unit==="M"?"ALT / M":"ALT / FT");const o=document.getElementById("vsi-needle");if(o){const Z=-(Math.max(-3e3,Math.min(3e3,t.verticalSpeed))/3e3)*36;o.style.transform=`translateY(${Z}px)`}const l=t.verticalSpeed>0?"+":"";e("vsi-readout",`${l}${t.verticalSpeed} FPM`);const c=(t.progressFraction*100).toFixed(1),h=document.getElementById("hud-progress-fill"),u=document.getElementById("hud-progress-plane");h&&(h.style.width=`${c}%`),u&&(u.style.left=`${c}%`);const f=this.unitManager.formatDistance(t.distanceTraveledNM);e("hud-distance-traveled",f.displayStr);const d=Kt.formatDuration(t.eteSeconds);let g="--:--",v="";const m=this.flightPlanManager.getActivePlan();if(t.eteSeconds>0){const O=new Date(Date.now()+t.eteSeconds*1e3);if(m&&m.destination)if(v=m.destination.iata||"",m.destination.tz)try{g=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:m.destination.tz,hour12:!1}).format(O)}catch{const Z=m.destination.lon/15,it=new Date(O.getTime()+Z*3600*1e3);g=`${String(it.getUTCHours()).padStart(2,"0")}:${String(it.getUTCMinutes()).padStart(2,"0")}`}else{const Z=m.destination.lon/15,it=new Date(O.getTime()+Z*3600*1e3);g=`${String(it.getUTCHours()).padStart(2,"0")}:${String(it.getUTCMinutes()).padStart(2,"0")}`}else g=`${String(O.getUTCHours()).padStart(2,"0")}:${String(O.getUTCMinutes()).padStart(2,"0")}`}e("hud-ete-val",`ETE ${d}`),e("hud-eta-val",`ETA ${g}${v?" "+v:""}`);const p=document.getElementById("hud-ete-time");p&&!document.getElementById("hud-ete-val")&&(p.textContent=`ETE ${d} • ETA ${g}${v?" "+v:""}`);const b=this.unitManager.formatDistance(t.distanceRemainingNM);e("hud-distance-remaining",b.displayStr),e("val-groundspeed",n.value.toString()),e("unit-groundspeed",n.unit),e("val-speed-kmh",`${n.secondaryValue} ${n.secondaryUnit}`),e("tag-speed-system",this.unitManager.getSystemLabel()),e("settings-btn-label",this.unitManager.getSystemLabel());const y=this.unitManager.formatTemperature(t.atmosphere.temperatureC,t.atmosphere.temperatureF);e("val-oat-c",`${y.primaryValue}`),e("unit-oat",y.primaryUnit),e("val-oat-f",`${y.secondaryValue}${y.secondaryUnit}`),e("val-heading",`${Math.round(t.heading)}°`);const _=t.pitch>=0?"+":"",L=t.roll>=0?"+":"";if(e("val-pitch-roll",`${_}${t.pitch.toFixed(1)}° / ${L}${t.roll.toFixed(1)}°`),this.unitManager.getCoordinateFormat()==="decimal"){const O=t.lat>=0?"N":"S",Z=t.lon>=0?"E":"W";e("val-coord-lat",`${Math.abs(t.lat).toFixed(4)}°`),e("val-coord-lat-dir",O),e("val-coord-lon",`${Math.abs(t.lon).toFixed(4)}°`),e("val-coord-lon-dir",Z),e("badge-coord-fmt","DEC DEG")}else{const O=Kt.formatCoordinateRow(t.lat,!0),Z=Kt.formatCoordinateRow(t.lon,!1);e("val-coord-lat",O.dms),e("val-coord-lat-dir",O.cardinal),e("val-coord-lon",Z.dms),e("val-coord-lon-dir",Z.cardinal),e("badge-coord-fmt","2-ROW DMS")}const C=Kt.formatDMS(t.lat,!0),D=Kt.formatDMS(t.lon,!1);e("val-coordinates",`${C} ${D}`);const E=document.getElementById("gps-status-dot"),M=document.getElementById("gps-source-label");E&&M&&(t.source==="mobile_gps"?(E.className="pulse-dot active-green",M.textContent="PHONE GPS"):t.source==="browser_gps"?(E.className="pulse-dot active-cyan",M.textContent="LAPTOP GPS"):t.source==="serial_nmea"?(E.className="pulse-dot active-gold",M.textContent=`USB GPS (${t.satellites} S)`):(E.className="pulse-dot active-blue",M.textContent=`SIM ${this.telemetryManager.getSimulationSpeed()}x`));const P=this.telemetryManager.getSimulationSpeed(),V=document.getElementById("sim-speed-tag");V&&V.textContent!==`${P}x`&&(V.textContent=`${P}x`);const F=document.getElementById("btn-sim-pause"),z=document.getElementById("sim-pause-icon"),$=this.telemetryManager.isPaused();F&&z&&($?F.classList.contains("paused")||(F.classList.add("paused"),F.title="Resume Simulation",z.innerHTML='<path d="M8 5v14l11-7z"/>'):F.classList.contains("paused")&&(F.classList.remove("paused"),F.title="Pause Simulation",z.innerHTML='<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'));const H=new Date;if(e("val-utc-clock",`${String(H.getUTCHours()).padStart(2,"0")}:${String(H.getUTCMinutes()).padStart(2,"0")}`),m){const O=m.origin.lon/15,Z=m.destination.lon/15,it=new Date(H.getTime()+O*3600*1e3),pt=new Date(H.getTime()+Z*3600*1e3);e("val-origin-clock",`${String(it.getUTCHours()).padStart(2,"0")}:${String(it.getUTCMinutes()).padStart(2,"0")}`),e("val-dest-clock",`${String(pt.getUTCHours()).padStart(2,"0")}:${String(pt.getUTCMinutes()).padStart(2,"0")}`)}const J=this.globeScene.currentSolarInfo;if(J){const O=J.elevationDeg>0?"+":"",Z=J.phase==="day"?"DAY":J.phase==="night"?"NIGHT":"TWILIGHT";e("solar-phase-icon",J.phaseIcon),e("solar-phase-name",Z),e("solar-elev-val",`${O}${J.elevationDeg.toFixed(1)}°`),e("val-solar-status",`${J.phaseIcon} ${Z} (${O}${J.elevationDeg}°)`);const it=document.getElementById("badge-solar-mode");it&&(it.textContent=this.globeScene.solarMode==="sim"?"SIM":"LIVE")}}}window.addEventListener("scroll",()=>{(window.scrollX!==0||window.scrollY!==0)&&window.scrollTo(0,0)});if(window.visualViewport){const s=()=>{(window.scrollX!==0||window.scrollY!==0)&&window.scrollTo(0,0)};window.visualViewport.addEventListener("resize",s),window.visualViewport.addEventListener("scroll",s)}document.addEventListener("gesturestart",s=>s.preventDefault());document.addEventListener("gesturechange",s=>s.preventDefault());document.addEventListener("gestureend",s=>s.preventDefault());function Ug(){let s=null;const t=async()=>{try{"wakeLock"in navigator&&(s=await navigator.wakeLock.request("screen"))}catch{}};document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?t():s&&(s.release().catch(()=>{}),s=null)}),t()}async function Ng(){console.log("[FlightMap] Initializing In-Flight Moving Map System...");const s=document.getElementById("webgl-canvas"),t=document.getElementById("hud-overlay");if(!s||!t)throw new Error("Required DOM containers not found");const e=new Se(s),n=new Dg(e,s),i=vn.getInstance();i.subscribe(f=>{e.updateAircraftTelemetry(f)});const r=new Ig(t,n,e);if(i.onCameraCommand(f=>{r.setCameraMode(f)}),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(f=>{for(const d of f)d.unregister()}),"caches"in window&&caches.keys().then(f=>{for(const d of f)caches.delete(d)}));else if("serviceWorker"in navigator){let f=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{f||(f=!0,window.location.reload())})}const a=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";Tc()==="map"&&!a&&("geolocation"in navigator&&i.setSource("browser_gps"),Ug());const l=()=>{const f=document.getElementById("canvas-container")||s.parentElement||document.body,d=f.clientWidth||window.innerWidth,g=f.clientHeight||window.innerHeight;s.width=d,s.height=g,e.onResize(d,g),n.onResize(d,g)};window.addEventListener("resize",l),window.addEventListener("orientationchange",()=>{setTimeout(l,120)});const c=document.getElementById("canvas-container");c&&typeof ResizeObserver<"u"&&new ResizeObserver(()=>{l()}).observe(c),l();let h=performance.now();const u=()=>{const f=performance.now(),d=Math.min((f-h)/1e3,.1);h=f,n.update(),e.update(d,n.camera),e.render(n.camera),requestAnimationFrame(u)};requestAnimationFrame(u),console.log("[FlightMap] WebGL render loop and HUD initialized.");try{await wl.getInstance().load();const d=sr.getInstance();d.onPlanChanged(v=>{e.updateFlightPlanVisuals(v),i.broadcastFlightPlan(v),r.setAircraftType(qn.resolveTypeFromAircraftName(v.aircraftType))}),i.onFlightPlanCommand(async v=>{try{console.log("[Main] Received remote flight plan command from mobile:",v);const m=await d.createPlan(v.from,v.to,v.flightNumber||`${v.from}-${v.to}`,v.airline||"rTech Airways",v.aircraft||"Airbus A321neo",v.cruiseAltitude||37e3,v.cruiseSpeed||450);i.setSimulationProgress(.05),n.frameRouteOverview(m)}catch(m){console.warn("[Main] Failed to apply remote flight plan:",m)}});const g=await d.createPlan("BHX","OTP","W4-3002","Wizz Air","Airbus A321neo",37e3,450);e.updateFlightPlanVisuals(g),n.frameRouteOverview(g),i.broadcastFlightPlan(g),console.log("[FlightMap] Default flight plan loaded successfully.")}catch(f){console.warn("[FlightMap] Flight plan init warning:",f)}}Ng().catch(s=>{console.error("[FlightMap] Fatal bootstrap error:",s)});
