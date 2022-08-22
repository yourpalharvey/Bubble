export const validInputColor = (validity) => {

    if (validity === 'valid')
    {
        return '#51B960';
    }
    else if (validity === 'invalid')
    {
        return '#ff6961';
    }
    else
    {
        return '#000000';
    };
}