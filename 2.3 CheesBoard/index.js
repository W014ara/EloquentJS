function CheesBoard(size) {
    let board = "";
    for (let row_index = 0; row_index < size; row_index++) {
        for (let col_index = 0; col_index < size; col_index++) {
            if ((row_index + col_index) % 2 == 0) {
                board += ' ';
            } else {
                board += '#';
            }
        }
        board += "\n";
    }
    console.log(board);
}

CheesBoard(8)