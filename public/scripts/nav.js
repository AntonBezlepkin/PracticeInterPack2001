function nav_main(hrf) {

 document.write('<div class="nav-scroller">');
 document.write('<nav class="nav-scroller__items dragscroll">');

 if(hrf=="main") {
   document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Главная</a>');
 }
 else {
  document.write('<a href="/" class="nav-scroller__item">Главная</a>');
 }
  if(hrf=="labels") {
   document.write('<a href="#" class="nav-scroller__item  nav-scroller__item_active">Самоклеящиеся этикетки</a>');
  }
  else {
   document.write('<a href="/labels" class="nav-scroller__item">Самоклеящиеся этикетки</a>');
 }
  if(hrf=="disciplines") {
    document.write(' <a href="#" class="nav-scroller__item   nav-scroller__item_active">Дисциплины</a>');
   }
  else {
   document.write(' <a href="/disciplines" class="nav-scroller__item">Дисциплины</a>');
  }
  if(hrf=="materials") {
     document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Материалы</a>');
   }
   else {
   document.write('<a href="/materials" class="nav-scroller__item">Материалы</a>');
  }
  if(hrf=="contacts") {
      document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Контакты</a>');
  }
  else {
  document.write('<a href="/contacts" class="nav-scroller__item">Контакты</a>');
  }
 document.write('</nav>');
 document.write('</div>');
}
