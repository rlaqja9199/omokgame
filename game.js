const btn = document.querySelector('#restartBtn');
const player = document.querySelector('#player');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const tr = document.querySelector('tr');
const td = document.querySelector('td');
const turn = document.querySelector('#turn');

//tr과 td에 클래스추가
for(let i=0; i<tbody.children.length; i++){
    tbody.children[i].className = i
    for(let j=0; j<tbody.children[i].children.length; j++){
        tbody.children[i].children[j].className = j
    }
}

//시작 및 재시작 버튼
const startClick = ()=>{
    btn.innerHTML = '재시작';
    player.children[0].style.backgroundColor = 'red';
    player.children[1].style.backgroundColor = 'inherit';
    turn.innerHTML = 'player1의 차례입니다.';
    table.addEventListener('click',game);
    for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            tbody.children[i].children[j].innerHTML ='';
        }
    }
}
btn.addEventListener('click',startClick);

//오목게임
const game = (e)=>{
    const turnCheck = player.children[0].style.backgroundColor;
    if(!e.target.innerHTML){
        if(turnCheck === 'red'){
            e.target.innerHTML = 'O'
            player.children[0].style.backgroundColor = 'inherit';
            player.children[1].style.backgroundColor = 'red';
            turn.innerHTML = 'player2의 차례입니다.';
            checkWinner(e);
        }else if(turnCheck === 'inherit'){
            e.target.innerHTML = 'X'
            player.children[1].style.backgroundColor = 'inherit';
            player.children[0].style.backgroundColor = 'red';
            turn.innerHTML = 'player1의 차례입니다.';
            checkWinner(e)
        }
    }
}
table.addEventListener('click',game);

//게임 승리 조건 체크
const checkWinner = (e)=>{
    //전체 테이블 체크 후 조건 확인
    for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            if(i < 4){
                if(j < 4){
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j+1].innerHTML === 'O' &&
                        tbody.children[i].children[j+2].innerHTML === 'O' &&
                        tbody.children[i].children[j+3].innerHTML === 'O' &&
                        tbody.children[i].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('7번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j].innerHTML === 'O' &&
                        tbody.children[i+2].children[j].innerHTML === 'O' &&
                        tbody.children[i+3].children[j].innerHTML === 'O' &&
                        tbody.children[i+4].children[j].innerHTML === 'O'
                    ){
                        console.log('1번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j+1].innerHTML === 'X' &&
                        tbody.children[i].children[j+2].innerHTML === 'X' &&
                        tbody.children[i].children[j+3].innerHTML === 'X' &&
                        tbody.children[i].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'X' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'X' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'X' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'X'
                    ){
                        console.log('7번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j].innerHTML === 'X' &&
                        tbody.children[i+2].children[j].innerHTML === 'X' &&
                        tbody.children[i+3].children[j].innerHTML === 'X' &&
                        tbody.children[i+4].children[j].innerHTML === 'X'
                    ){
                        console.log('1번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }else if(j > 10){
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j].innerHTML === 'O' &&
                        tbody.children[i+2].children[j].innerHTML === 'O' &&
                        tbody.children[i+3].children[j].innerHTML === 'O' &&
                        tbody.children[i+4].children[j].innerHTML === 'O'
                    ){
                        console.log('2번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('5번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j-1].innerHTML === 'O' &&
                        tbody.children[i].children[j-2].innerHTML === 'O' &&
                        tbody.children[i].children[j-3].innerHTML === 'O' &&
                        tbody.children[i].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j].innerHTML === 'X' &&
                        tbody.children[i+2].children[j].innerHTML === 'X' &&
                        tbody.children[i+3].children[j].innerHTML === 'X' &&
                        tbody.children[i+4].children[j].innerHTML === 'X'
                    ){
                        console.log('2번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'X' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'X' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'X' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'X'
                    ){
                        console.log('5번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j-1].innerHTML === 'X' &&
                        tbody.children[i].children[j-2].innerHTML === 'X' &&
                        tbody.children[i].children[j-3].innerHTML === 'X' &&
                        tbody.children[i].children[j-4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }else{
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j+1].innerHTML === 'O' &&
                        tbody.children[i].children[j+2].innerHTML === 'O' &&
                        tbody.children[i].children[j+3].innerHTML === 'O' &&
                        tbody.children[i].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j].innerHTML === 'O' &&
                        tbody.children[i+2].children[j].innerHTML === 'O' &&
                        tbody.children[i+3].children[j].innerHTML === 'O' &&
                        tbody.children[i+4].children[j].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j+1].innerHTML === 'X' &&
                        tbody.children[i].children[j+2].innerHTML === 'X' &&
                        tbody.children[i].children[j+3].innerHTML === 'X' &&
                        tbody.children[i].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j].innerHTML === 'X' &&
                        tbody.children[i+2].children[j].innerHTML === 'X' &&
                        tbody.children[i+3].children[j].innerHTML === 'X' &&
                        tbody.children[i+4].children[j].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'X' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'X' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'X' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'X' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'X' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'X' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }
            }else if(i > 10){
                if(j < 4){
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j+1].innerHTML === 'O' &&
                        tbody.children[i].children[j+2].innerHTML === 'O' &&
                        tbody.children[i].children[j+3].innerHTML === 'O' &&
                        tbody.children[i].children[j+4].innerHTML === 'O'
                    ){
                        console.log('3번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i-2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i-3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i-4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('8번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j].innerHTML === 'O' &&
                        tbody.children[i-2].children[j].innerHTML === 'O' &&
                        tbody.children[i-3].children[j].innerHTML === 'O' &&
                        tbody.children[i-4].children[j].innerHTML === 'O'
                    ){
                        console.log('1번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j+1].innerHTML === 'X' &&
                        tbody.children[i].children[j+2].innerHTML === 'X' &&
                        tbody.children[i].children[j+3].innerHTML === 'X' &&
                        tbody.children[i].children[j+4].innerHTML === 'X'
                    ){
                        console.log('3번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j+1].innerHTML === 'X' &&
                        tbody.children[i-2].children[j+2].innerHTML === 'X' &&
                        tbody.children[i-3].children[j+3].innerHTML === 'X' &&
                        tbody.children[i-4].children[j+4].innerHTML === 'X'
                    ){
                        console.log('8번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j].innerHTML === 'X' &&
                        tbody.children[i-2].children[j].innerHTML === 'X' &&
                        tbody.children[i-3].children[j].innerHTML === 'X' &&
                        tbody.children[i-4].children[j].innerHTML === 'X'
                    ){
                        console.log('1번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }else if(j > 10){
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j-1].innerHTML === 'O' &&
                        tbody.children[i].children[j-2].innerHTML === 'O' &&
                        tbody.children[i].children[j-3].innerHTML === 'O' &&
                        tbody.children[i].children[j-4].innerHTML === 'O'
                    ){
                        console.log('3번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i-2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i-3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i-4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('6번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j].innerHTML === 'O' &&
                        tbody.children[i-2].children[j].innerHTML === 'O' &&
                        tbody.children[i-3].children[j].innerHTML === 'O' &&
                        tbody.children[i-4].children[j].innerHTML === 'O'
                    ){
                        console.log('2번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j-1].innerHTML === 'X' &&
                        tbody.children[i].children[j-2].innerHTML === 'X' &&
                        tbody.children[i].children[j-3].innerHTML === 'X' &&
                        tbody.children[i].children[j-4].innerHTML === 'X'
                    ){
                        console.log('3번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j-1].innerHTML === 'X' &&
                        tbody.children[i-2].children[j-2].innerHTML === 'X' &&
                        tbody.children[i-3].children[j-3].innerHTML === 'X' &&
                        tbody.children[i-4].children[j-4].innerHTML === 'X'
                    ){
                        console.log('6번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j].innerHTML === 'X' &&
                        tbody.children[i-2].children[j].innerHTML === 'X' &&
                        tbody.children[i-3].children[j].innerHTML === 'X' &&
                        tbody.children[i-4].children[j].innerHTML === 'X'
                    ){
                        console.log('2번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }else{
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j+1].innerHTML === 'O' &&
                        tbody.children[i].children[j+2].innerHTML === 'O' &&
                        tbody.children[i].children[j+3].innerHTML === 'O' &&
                        tbody.children[i].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j].innerHTML === 'O' &&
                        tbody.children[i-2].children[j].innerHTML === 'O' &&
                        tbody.children[i-3].children[j].innerHTML === 'O' &&
                        tbody.children[i-4].children[j].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i-2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i-3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i-4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i-2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i-3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i-4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j+1].innerHTML === 'X' &&
                        tbody.children[i].children[j+2].innerHTML === 'X' &&
                        tbody.children[i].children[j+3].innerHTML === 'X' &&
                        tbody.children[i].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j].innerHTML === 'X' &&
                        tbody.children[i-2].children[j].innerHTML === 'X' &&
                        tbody.children[i-3].children[j].innerHTML === 'X' &&
                        tbody.children[i-4].children[j].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j-1].innerHTML === 'X' &&
                        tbody.children[i-2].children[j-2].innerHTML === 'X' &&
                        tbody.children[i-3].children[j-3].innerHTML === 'X' &&
                        tbody.children[i-4].children[j-4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j+1].innerHTML === 'X' &&
                        tbody.children[i-2].children[j+2].innerHTML === 'X' &&
                        tbody.children[i-3].children[j+3].innerHTML === 'X' &&
                        tbody.children[i-4].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }
            }else if(4 <= i <= 10 ){
                if(j < 4){
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j].innerHTML === 'O' &&
                        tbody.children[i+2].children[j].innerHTML === 'O' &&
                        tbody.children[i+3].children[j].innerHTML === 'O' &&
                        tbody.children[i+4].children[j].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j+1].innerHTML === 'O' &&
                        tbody.children[i].children[j+2].innerHTML === 'O' &&
                        tbody.children[i].children[j+3].innerHTML === 'O' &&
                        tbody.children[i].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i-2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i-3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i-4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j].innerHTML === 'X' &&
                        tbody.children[i+2].children[j].innerHTML === 'X' &&
                        tbody.children[i+3].children[j].innerHTML === 'X' &&
                        tbody.children[i+4].children[j].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j+1].innerHTML === 'X' &&
                        tbody.children[i].children[j+2].innerHTML === 'X' &&
                        tbody.children[i].children[j+3].innerHTML === 'X' &&
                        tbody.children[i].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'X' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'X' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'X' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j+1].innerHTML === 'X' &&
                        tbody.children[i-2].children[j+2].innerHTML === 'X' &&
                        tbody.children[i-3].children[j+3].innerHTML === 'X' &&
                        tbody.children[i-4].children[j+4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }else if(j > 10){
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j].innerHTML === 'O' &&
                        tbody.children[i+2].children[j].innerHTML === 'O' &&
                        tbody.children[i+3].children[j].innerHTML === 'O' &&
                        tbody.children[i+4].children[j].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j-1].innerHTML === 'O' &&
                        tbody.children[i].children[j-2].innerHTML === 'O' &&
                        tbody.children[i].children[j-3].innerHTML === 'O' &&
                        tbody.children[i].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i-1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i-2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i-3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i-4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                    if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j].innerHTML === 'X' &&
                        tbody.children[i+2].children[j].innerHTML === 'X' &&
                        tbody.children[i+3].children[j].innerHTML === 'X' &&
                        tbody.children[i+4].children[j].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i].children[j-1].innerHTML === 'X' &&
                        tbody.children[i].children[j-2].innerHTML === 'X' &&
                        tbody.children[i].children[j-3].innerHTML === 'X' &&
                        tbody.children[i].children[j-4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'X' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'X' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'X' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'X' &&
                        tbody.children[i-1].children[j-1].innerHTML === 'X' &&
                        tbody.children[i-2].children[j-2].innerHTML === 'X' &&
                        tbody.children[i-3].children[j-3].innerHTML === 'X' &&
                        tbody.children[i-4].children[j-4].innerHTML === 'X'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player2가 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }else{
                    if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i].children[j+1].innerHTML === 'O' &&
                        tbody.children[i].children[j+2].innerHTML === 'O' &&
                        tbody.children[i].children[j+3].innerHTML === 'O' &&
                        tbody.children[i].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j].innerHTML === 'O' &&
                        tbody.children[i+2].children[j].innerHTML === 'O' &&
                        tbody.children[i+3].children[j].innerHTML === 'O' &&
                        tbody.children[i+4].children[j].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j+1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j+2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j+3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j+4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }else if(
                        tbody.children[i].children[j].innerHTML === 'O' &&
                        tbody.children[i+1].children[j-1].innerHTML === 'O' &&
                        tbody.children[i+2].children[j-2].innerHTML === 'O' &&
                        tbody.children[i+3].children[j-3].innerHTML === 'O' &&
                        tbody.children[i+4].children[j-4].innerHTML === 'O'
                    ){
                        console.log('4번째')
                        turn.innerHTML = '축하합니다. player1이 승리하였습니다.'
                        table.removeEventListener('click',game);
                    }
                }
            }
        }
    }
}
