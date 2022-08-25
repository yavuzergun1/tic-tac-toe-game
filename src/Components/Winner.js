function CalculateWinner(squares) {
    const lines = [
        [0,1,2], [3,4,5], [6,7,8], //satırlar
        [0,3,6], [1,4,7], [2,5,8], //sütunlar
        [0,4,8], [2,4,6], //çaprazlar
    ];

    for(let line of lines) {
        /* Yukarıda satır sütun ve çaprazların tamamı lines olarak tanımlandı. Bu dizilerin her biri de line olarak tanımlandı. a b ve c değerleri line içindeki 1. 2. ve 3. elemanları temsil ediyor. for döngüsü ile tüm line'lar incelendikten sonra eğer a değerinin b ve c değerine eşit olduğu bir line tespit edilirse buradaki square[a] değeri CalculateWinner sonucu olarak atanır. */
        const [a,b,c] = line;
        // console.log(a);
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // X veya  O'yu belirler
        }
        console.log("squares[a]=",squares[a]);
        console.log("squares[b]=",squares[b]);
        console.log("squares[c]=",squares[c]);
    }
    return null
}

export default CalculateWinner;