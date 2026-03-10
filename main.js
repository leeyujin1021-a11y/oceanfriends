const friends = [
    { emoji: "🐡", desc: "A cute puffer fish is bouncing around!" },
    { emoji: "🐠", desc: "A colorful tropical fish appeared!" },
    { emoji: "🪼", desc: "A mysterious jellyfish is floating by!" },
    { emoji: "🐚", desc: "You found a beautiful sea shell!" },
    { emoji: "🐋", desc: "A majestic humpback whale says hello!" },
    { emoji: "🦭", desc: "A cute little seal is waving at you!" },
    { emoji: "🦈", desc: "A cool shark is swimming around!" },
    { emoji: "🐳", desc: "A happy whale is spouting water!" },
    { emoji: "🐢", desc: "A cute sea turtle is swimming by!" },
    { emoji: "🦀", desc: "A tiny crab is scuttling on the sand!" },
    { emoji: "🦑", desc: "A shy squid is squirting some ink!" },
    { emoji: "🦦", desc: "A playful sea otter is floating on its back!" },
    { emoji: "🐬", desc: "A friendly dolphin is jumping over the waves!" },
    { emoji: "🏖️", desc: "You've reached a peaceful sunny beach!" }
];

document.addEventListener('DOMContentLoaded', () => {
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
            const randomFriend = friends[Math.floor(Math.random() * friends.length)];
            emojiDisplay.textContent = randomFriend.emoji;
            counter++;

            if (counter > 15) {
                clearInterval(shuffleInterval);
                finishDraw();
            }
        }, 100);

        function finishDraw() {
            const finalFriend = friends[Math.floor(Math.random() * friends.length)];
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
