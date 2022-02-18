function solution( month ){
    // 여기에 switch를 이용해 각 달의 날짜수를 반환하는 프로그램을 작성하세요.
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 2:
            return 28;
        default:
            return 30; 
    }
}