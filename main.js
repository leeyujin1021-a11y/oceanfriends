document.addEventListener('DOMContentLoaded', () => {
    const oceanFriends = [
        { emoji: '🐬', name: '영리한 돌고래', desc: '영리한 돌고래를 만났어요!' },
        { emoji: '🐢', name: '느긋한 거북이', desc: '느긋한 거북이와 산책해봐요!' },
        { emoji: '🐙', name: '호기심 많은 문어', desc: '호기심 많은 문어가 반겨주네요!' },
        { emoji: '🦀', name: '부지런한 게', desc: '부지런한 게가 모래성을 쌓고 있어요!' },
        { emoji: '🐳', name: '거대한 고래', desc: '거대한 고래의 든든한 호위를 받으세요!' }
    ];

    const drawBtn = document.getElementById('draw-btn');
    const emojiDisplay = document.getElementById('emoji-display');
    const descriptionDisplay = document.getElementById('description-display');

    let isDrawing = false;

    drawBtn.addEventListener('click', () => {
        if (isDrawing) return;
        
        isDrawing = true;
        drawBtn.disabled = true;
        descriptionDisplay.textContent = '찾는 중...';
        emojiDisplay.classList.add('shuffle');

        let counter = 0;
        const shuffleInterval = setInterval(() => {
            const randomFriend = oceanFriends[Math.floor(Math.random() * oceanFriends.length)];
            emojiDisplay.textContent = randomFriend.emoji;
            counter++;

            if (counter > 15) {
                clearInterval(shuffleInterval);
                finishDraw();
            }
        }, 100);

        function finishDraw() {
            const finalFriend = oceanFriends[Math.floor(Math.random() * oceanFriends.length)];
            emojiDisplay.textContent = finalFriend.emoji;
            descriptionDisplay.textContent = finalFriend.desc;
            
            emojiDisplay.classList.remove('shuffle');
            
            // 박진감 넘치는 마무리를 위한 살짝 커지는 효과
            emojiDisplay.style.transform = 'scale(1.5)';
            setTimeout(() => {
                emojiDisplay.style.transform = 'scale(1)';
            }, 300);

            drawBtn.disabled = false;
            isDrawing = false;
        }
    });
});
