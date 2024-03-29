export function publishedAt(published_at, actualDate = new Date()) {
    if(!published_at) return 'published_at is a mandatory parameter'

    if (!(published_at instanceof Date && actualDate instanceof Date)){
        return 'the parameters do not have a Date type'
    } 
    
    const utcPublished_At = getUtcDate(published_at)
    const utcActualDate = getUtcDate(actualDate)

    let result = ((utcActualDate - utcPublished_At) / (1000 * 60));

    if(result < 0){
        return 'Do you have a time machine? published_at is bigger on then actualDate'
    }

    if(result < 60){
        return `${result + (result > 1 ? ' minutos ' : ' minuto ')}atrás`;
    }
    if((result / 60 ) < 24){
        let horas = Math.floor(result / 60)
        return `${horas + (horas > 1 ? ' horas' : ' hora')} atrás`;
    }

    let dias = `${Math.floor(result / 60 / 24)} `;

    return `${dias + (dias >= 2 ? 'dias' : 'dia')} atrás`;
}

function getUtcDate(data){
    return Date.UTC(
        data.getFullYear(), 
        data.getMonth(), 
        data.getDate(), 
        data.getHours(),
        data.getMinutes()
    )
}