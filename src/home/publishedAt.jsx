export function publishedAt(post) {
    let published_At = new Date(post.published_at);
    let actualDate = new Date();

    const utcPublished_At = Date.UTC(published_At.getFullYear(), published_At.getMonth(), published_At.getDate(), published_At.getHours());
    const utcActualDate = Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate(), actualDate.getHours());

    let result = ((utcActualDate - utcPublished_At) / (1000 * 60 * 60));

    if (result > 24) {
        let dias = `${Math.floor(result / 24)} `;

        return dias + (result > 48 ? 'dias atrás' : 'dia atrás');
    }
    

    return result + ' horas atrás';
}
