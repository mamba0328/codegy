export function removeHTMLTags(html:string):string{
    const regX = /(<([^>]+)>|&[a-zA-Z0-9]+;)/ig;
    return html.replace(regX, "");
}

export function getFormattedDate(created_at:string):string{
    const date = new Date(created_at);
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return [date.getMonth()+1, date.getDate(), date.getFullYear()].join('.') + ' '+ [date.getHours(), minutes,].join(':');
}