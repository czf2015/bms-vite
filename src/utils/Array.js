export const swap = (arr, a, b) => {
    if (a === b) return
    let flag = 0;
    const len = arr.length;
    let a_index, b_index;
    for (let i = len - 1; flag < 2 && i >= 0; i--) {
        switch (arr[i].id) {
            case a:
                flag++;
                a_index = i;
                break;
            case b:
                flag++;
                b_index = i;
                break;
            default:
                break;
        }
    }
    let tmp = arr[a_index];
    arr[a_index] = arr[b_index];
    arr[b_index] = tmp;
};