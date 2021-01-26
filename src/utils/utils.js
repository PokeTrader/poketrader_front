export const getExpSum = (group) => {
    return group
        .filter((pokemon) => pokemon != null)
        .map((pokemon) => pokemon.baseExp)
        .reduce((acc, cur) => acc + cur, 0);
};