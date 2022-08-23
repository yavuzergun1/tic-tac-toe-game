function CalculateWinner(squares) {
    const lines = [
        [0,1,2], [3,4,5], [6,7,8], //satırlar
        [0,3,6], [1,4,7], [2,5,8], //sütunlar
        [0,4,8], [2,4,6], //çaprazlar
    ];

    for(let line of lines) {
        const [a,b,c] = line;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // X or O
        }
        // console.log(squares[a]);
    }
    return null
}

export default CalculateWinner;