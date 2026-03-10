document.addEventListener('DOMContentLoaded', () => {
    const oceanFriends = [
        { emoji: '🐬', name: 'Smart Dolphin', desc: 'You met a smart dolphin!' },
        { emoji: '🐢', name: 'Relaxed Turtle', desc: 'Take a stroll with a relaxed turtle!' },
        { emoji: '🐙', name: 'Curious Octopus', desc: 'A curious octopus says hello!' },
        { emoji: '🦀', name: 'Busy Crab', desc: 'A busy crab is building a sandcastle!' },
        { emoji: '🐳', name: 'Giant Whale', desc: 'Get a reliable escort from a giant whale!' }
    ];

    const drawBtn = document.getElementById('draw-btn');
    const emojiDisplay = document.getElementById('emoji-display');
    const descriptionDisplay = document.getElementById('description-display');

    let isDrawing = false;

    drawBtn.addEventListener('click', () => {
        if (isDrawing) return;
        
        isDrawing = true;
        drawBtn.disabled = true;
        descriptionDisplay.textContent = 'Searching...';
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
