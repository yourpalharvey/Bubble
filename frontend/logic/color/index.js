export const validInputColor = (validity) => {
    
    // color variable;
    var color = '#000000';
    
    switch (validity) {
        case 'valid':
            color = '#51B960';
        case 'invalid':
            color = '#ff6961';
        default:
            color = '#000000';
    }
    
    return color;
}