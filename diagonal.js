function countGapDiagonal(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    const n = matrix.length;
  
    for (let i = 0; i < n; i++) {
      firstDiagonal += matrix[i][i];
      secondDiagonal += matrix[i][n - 1 - i];
    }
  
    const gapDiagonal = firstDiagonal - secondDiagonal;
    console.log(`Maka hasil dari ${firstDiagonal} - ${secondDiagonal} = ${gapDiagonal}`);
    return gapDiagonal;
  }
  
  const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
  const gapDiagonal = countGapDiagonal(matrix);
  