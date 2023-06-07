export function checkWinCondition(grid) {
    const winConditions = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],
      [0,4,7],[2,4,6]
    ];
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        grid[a].text &&
        grid[a].text === grid[b].text &&
        grid[a].text === grid[c].text
      ) {
        return true;
      }
    }
    return false;
}

