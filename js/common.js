// 변수 선언
const searchEl = document.querySelector('.search'); //searchEl는 search라는 class 값이다
const searchInputEl = searchEl.querySelector('input'); //searchInputEl는 searchEl(search라는 class값) 안의 input 요소이다

searchEl.addEventListener('click', function () { //searchEl(search라는 class값)를 click하면 function을 실행하라
  searchInputEl.focus(); //searchInputEl(searchEl안의 input요소)를 focus하라
});

searchInputEl.addEventListener('focus', function () { //searchInputEl(searchEl안의 input요소)가 focus 되면 function을 실행하라
  searchEl.classList.add('focused'); // searchEl(search라는 class값)의 class에 'focused'를 add(추가)하라
  searchInputEl.setAttribute('placeholder', '통합검색'); //searchInputEl(searchEl안의 input요소)에 가주어(placeholder)를 '통합검색'이라고 속성을 설정하라(setAttribute)  
});

searchInputEl.addEventListener('blur', function () { //searchInputEl(searchEl안의 input요소)가 blur(foucs가 해제) 되면 function을 실행하라
  searchEl.classList.remove('focused'); //searchEl(search라는 class값)의 class에 'focused'를 remove(제거)하라
  searchInputEl.setAttribute('placeholder', ''); //searchInputEl(searchEl안의 input요소)에 가주어(placeholder)를 ('')공백로 설정하라(setAttribute)
});

/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()