/*// Imports the Google Cloud client library
var config = {
  projectId: 'sentiment-202321',
  keyFilename: 'sentiment-bb979b8a40e6.json'
};
const language = require('@google-cloud/language')(config);

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'Hello, world!';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log('Text: ${text}');
    console.log('Sentiment score: ${sentiment.score}');
    console.log('Sentiment magnitude: ${sentiment.magnitude}');
  })
  .catch(err => {
    console.error('ERROR:', err);
  });*/

  var speed = 50;
//---------------------------TIPOGRAFIA---------------------------------
//negativos
var style1 = {'color': 'black', 'font-weight': '700'};
var style2 = {'color':'black', 'font-weight': '700'};
var style3 = {'color':'black', 'font-weight': '700'};
var style4 = {'color':'black', 'font-weight': '600'};
var style5 = {'color':'black', 'font-weight': '600'};
var style6 = {'color':'black', 'font-weight': '400'};
var style7 = {'color':'black', 'font-weight': '400'};
var style8 = {'color':'black', 'font-weight': '300'};
var style9 = {'color':'black', 'font-weight': '300'};
var style10 = {'color':'black', 'font-weight': '100'};
//neutral
var style11 = {'color':'black', 'font-weight': '100'};
//positivos
var style12 = {'color':'black', 'font-weight': '100'};
var style13 = {'color':'black', 'font-weight': '300'};
var style14 = {'color':'black', 'font-weight': '300'};
var style15 = {'color':'black', 'font-weight': '400'};
var style16 = {'color':'black', 'font-weight': '400'};
var style17 = {'color':'black', 'font-weight': '600'};
var style18 = {'color':'black', 'font-weight': '600'};
var style19= {'color':'black', 'font-weight': '700'};
var style20 = {'color':'black', 'font-weight': '700'};
var style21 = {'color':'black', 'font-weight': '700'};

//---------------------------BACKGROUND---------------------------------




  console.log( JSON.stringify(mensajes) );

  console.log( mensajes.length );

  for( var i = 0; i < mensajes.length; i++){

    console.log( mensajes[ i ][ 'date' ] );
  }

  var contador = 0;
  var indexMsj = 0;
  

  setInterval( function(){
    var frase = mensajes[ indexMsj ][ 'message' ];
    var palabras = frase.split( ' ' );
    $( 'h1' ).html( palabras[ contador ] );
    if( contador < palabras.length ){
      contador++;
    }else{
      contador = 0;
      indexMsj++;
    }
    if( indexMsj >= mensajes.length ){
      indexMsj = 0;
    }
/*
    var score = mensajes[indexMsj]['score'];
    if (score>-1.0 && score <= -0.9) {
      $( 'h1' ).css(style1);
    }else if (score>-0.9&& score <=-0.8) {
      $( 'h1' ).css(style2);
    }else if (score>-0.8&& score <=-0.7) {
      $( 'h1' ).css(style3);
    }else if (score>-0.7&& score <=-0.6) {
      $( 'h1' ).css(style4);
    }else if (score>-0.6&& score <=-0.5) {
      $( 'h1' ).css(style5);
    }else if (score>-0.5&& score <=-0.4) {
      $( 'h1' ).css(style6);
    }else if (score>-0.4&& score <=-0.3) {
      $( 'h1' ).css(style7);
    }else if (score>-0.3&& score <=-0.2) {
      $( 'h1' ).css(style8);
    }else if (score>-0.2&& score <=-0.1) {
      $( 'h1' ).css(style9);
    }else if (score>-0.1&& score <=0) {
      $( 'h1' ).css(style10);
    }else if (score>0&& score <=0.1) {
      $( 'h1' ).css(style11);
    }else if (score>0.1 && score <=0.2) {
      $( 'h1' ).css(style12);
    }else if (score>0.2&& score <=0.3) {
      $( 'h1' ).css(style13);
    }else if (score>0.3&& score <=0.4) {
      $( 'h1' ).css(style14);
    }else if (score>0.4&& score <=0.5) {
      $( 'h1' ).css(style15);
    }else if (score>0.5&& score <=0.6) {
      $( 'h1' ).css(style16);
    }else if (score>0.6&& score <=0.7) {
      $( 'h1' ).css(style17);
    }else if (score>0.7&& score <=0.8) {
      $( 'h1' ).css(style18);
    }else if (score>0.8&& score <=0.9) {
      $( 'h1' ).css(style19);
    }else if (score>0.9&& score <=1) {
      $( 'h1' ).css(style20);

*/
function scaleHeader() {
  var scalable = document.querySelectorAll('.scale--js');
  var margin = 10;
  for (var i = 0; i < scalable.length; i++) {
    var scalableContainer = scalable[i].parentNode;
    scalable[i].style.transform = 'scale(1)';
    var scalableContainerWidth = scalableContainer.offsetWidth - margin;
    var scalableWidth = scalable[i].offsetWidth;
    scalable[i].style.transform = 'scale(' + scalableContainerWidth / scalableWidth + ') translate( 0%, -50%)';
    scalableContainer.style.height = scalable[i].getBoundingClientRect().height + 'px';
  }
} 

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};



var myScaleFunction = debounce(function() {
  scaleHeader();
}, speed);

myScaleFunction();

window.addEventListener('resize', myScaleFunction);



//fullwidth end



    var score = mensajes[indexMsj]['score'];

    if (score==-1) {
      $('body').animate({
         backgroundColor: "black"
     }, speed );
      $( 'h1' ).css(style2);
      
    }else if (score==-.9) {
      $('body').animate({
         backgroundColor: "rgb(255,25,25)"
     }, speed );
      $( 'h1' ).css(style2);
      
    }else if (score==-.8) {
      $('body').animate({
         backgroundColor: "rgb(55,51,51)"
     }, speed );
      $( 'h1' ).css(style3);
      
    }else if (score==-.7) {
      $( 'h1' ).css(style4);
    $('body').animate({
         backgroundColor: "rgb(255,77,77)"
       }, speed);
    }else if (score==-.6) {
      $( 'h1' ).css(style5);
          $('body').animate({
         backgroundColor: "rgb(255,102,102)"
       }, speed);
    }else if (score==-.5) {
      $( 'h1' ).css(style6);
          $('body').animate({
         backgroundColor: "rgb(255,128,128)"
       }, speed);
    }else if (score==-.4) {
      $( 'h1' ).css(style7);
                $('body').animate({
         backgroundColor: "rgb(255,153,153)"
       }, speed);
    }else if (score==-.3) {
      $( 'h1' ).css(style8);
                $('body').animate({
         backgroundColor: "rgb(230,186,186)"
       }, speed);
    }else if (score==-.2) {
      $( 'h1' ).css(style9);
                $('body').animate({
         backgroundColor: "rgb(212,184,184)"
       }, speed);
    }else if (score==-.1) {
      $( 'h1' ).css(style10);
                $('body').animate({
         backgroundColor: "rgb(201,85,85)"
       }, speed);
    }else if (score==0) {
      $( 'h1' ).css(style11);
                $('body').animate({
         backgroundColor: "rgb(173,173,173)"
       }, speed);
    }else if (score==.1) {
      $( 'h1' ).css(style12);
                $('body').animate({
         backgroundColor: "rgb(178,192,194)"
       }, speed);
    }else if (score==.2) {
      $( 'h1' ).css(style13);
                $('body').animate({
         backgroundColor: "rgb(165,197,201)"
       }, speed);
    }else if (score==.3) {
      $( 'h1' ).css(style14);
                $('body').animate({
         backgroundColor: "rgb(163,205,212)"
       }, speed);
    }else if (score==.4) {
      $( 'h1' ).css(style15);
                $('body').animate({
         backgroundColor: "rgb(148,214,224)"
       }, speed);
    }else if (score==.5) {
      $( 'h1' ).css(style16);
                $('body').animate({
         backgroundColor: "rgb(139,226,240)"
       }, speed);
    }else if (score==.6) {
      $( 'h1' ).css(style17);
                $('body').animate({
         backgroundColor: "rgb(125,238,255)"
       }, speed);
    }else if (score==.7) {
      $( 'h1' ).css(style18);
                $('body').animate({
         backgroundColor: "rgb(98,232,252)"
       }, speed);
    }else if (score==.8) {
      $( 'h1' ).css(style19);
                $('body').animate({
         backgroundColor: "rgb(63,227,252)"
       }, speed);
    }else if (score==.9) {
      $( 'h1' ).css(style20);
                $('body').animate({
         backgroundColor: "rgb(38,226,255)"
       }, speed);
    }else if (score==1) {
      $( 'h1' ).css(style21);
                $('body').animate({
         backgroundColor: "rgb(0,221,255)"
       }, speed);
    }

    
  }, speed );

