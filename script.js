document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('giftBox');
    const ribbonV = document.getElementById('ribbonV');
    const ribbonH = document.getElementById('ribbonH');
    const lid = document.getElementById('boxLid');
    const bouquet = document.getElementById('bouquet');
    const instruction = document.getElementById('instruction');
    const celebrationText = document.getElementById('celebrationText');
    const body = document.body;
    const chime = document.getElementById('chime-sound');
    const bgMusic = document.getElementById('bg-music');

    // 1. Falling Petals
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.width = Math.random() * 15 + 10 + 'px';
        petal.style.height = petal.style.width;
        petal.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('petal-container').appendChild(petal);
        setTimeout(() => { petal.remove(); }, 5000);
    }
    setInterval(createPetal, 300);

    // 2. Interaction Sequence
    giftBox.addEventListener('click', () => {
        instruction.style.opacity = '0';
        
        // Step A: Ribbons untie
        ribbonV.classList.add('ribbon-untie-v');
        ribbonH.classList.add('ribbon-untie-h');

        setTimeout(() => {
            // Step B: Lid opens
            lid.classList.add('lid-open');
            body.classList.add('dark-bg');

            setTimeout(() => {
                // Step C: Bouquet Reveal & Box Vanish
                bouquet.classList.add('bouquet-pop'); 
                giftBox.classList.add('gift-box-hide'); 
                
                chime.play();
                
                // Cinematic background music starts after chime
                setTimeout(() => {
                    bgMusic.play();
                }, 500);

                instruction.style.display = 'none';
                
                setTimeout(() => {
                    celebrationText.style.display = 'block';
                }, 500);
            }, 600);
        }, 800);
    }, { once: true });

    // 3. Navigation to Letter
    document.getElementById('toPage2').addEventListener('click', () => {
        document.getElementById('page-1').style.display = 'none';
        const page2 = document.getElementById('page-2');
        page2.style.display = 'flex';
        bgMusic.play(); // Backup in case it didn't trigger
        setTimeout(() => {
            document.querySelector('.letter-card').classList.add('show');
        }, 100);
    });
});