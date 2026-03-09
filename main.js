
document.addEventListener('DOMContentLoaded', () => {
    const emoticons = [
        '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83e\udd88', '\ud83d\udc0b', '\ud83d\udc33', 
        '\ud83d\udc2c', '\ud83e\udd90', '\ud83e\udd91', '\ud83d\udc19', '\ud83e\udd80', '\ud83c\udf0a',
        '\ud83c\udfdd', '\ud83d\udef3', '\u26f5', '\ud83c\udfa3', '\ud83c\udf9f', '\ud83d\udea2'
    ];

    const emoticonGrid = document.querySelector('.emoticon-grid');

    emoticons.forEach(emoticon => {
        const card = document.createElement('div');
        card.classList.add('emoticon-card');
        card.textContent = emoticon;
        card.addEventListener('click', () => {
            navigator.clipboard.writeText(emoticon).then(() => {
                alert(`Copied ${emoticon} to clipboard!`);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
        emoticonGrid.appendChild(card);
    });
});
