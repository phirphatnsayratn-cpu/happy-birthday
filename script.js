function surprise() {

    const music = document.getElementById("birthdayMusic");
music.play();
    message.classList.add("show");

    // สร้างหัวใจ
    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            const hearts = ["❤️", "💖", "💕", "💗", "💓", "✨"];

            heart.innerHTML =
                hearts[Math.floor(Math.random() * hearts.length)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom = "-30px";

            heart.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            document.getElementById("hearts")
                .appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);

        }, i * 80);
    }

    // เลื่อนลงไปอ่านข้อความ
    setTimeout(() => {

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);
}
