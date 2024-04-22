window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) {
        console.error("Canvas element not found.");
        return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get 2D context from canvas.");
        return;
    }

    // Set canvas width and height
    canvas.width = 480;
    canvas.height = 800;

    // Draw title text and start button
    drawTitleAndButton();

    // Add event listener for start button click
    canvas.addEventListener("click", function(event) {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;
        if (isMouseInsideButton(mouseX, mouseY)) {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw a single heart at a random position within the canvas area
            const heartX = Math.random() * (canvas.width - 100); // Adjust the range for x position
            const heartY = Math.random() * (canvas.height - 100); // Adjust the range for y position
            drawHeart(ctx, heartX, heartY);

            // Draw a single star at the center of the canvas
            const starSize = 70; // Adjust size as needed
            const starX = (canvas.width - starSize) / 2; // Center x position
            const starY = (canvas.height - starSize) / 2; // Center y position
            drawStar(ctx, starX, starY, starSize);

            // Hide start button
            hideStartButton();
        }
    });

    // Add event listeners for mouse hover and click on start button
    canvas.addEventListener("mousemove", function(event) {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;
        if (isMouseInsideButton(mouseX, mouseY)) {
            drawStartButton(ctx, "#F8CBAD");
        } else {
            drawStartButton(ctx, "#D0CECE");
        }
    });

    canvas.addEventListener("mousedown", function(event) {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;
        if (isMouseInsideButton(mouseX, mouseY)) {
            drawStartButton(ctx, "#002060");
        }
    });

    // Function to draw title text and start button
    function drawTitleAndButton() {
        // Draw title text
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("F학점 조지기", canvas.width / 2, canvas.height / 3);

        // Define start button properties
        const startButtonWidth = 200;
        const startButtonHeight = 50;
        const startButtonX = (canvas.width - startButtonWidth) / 2;
        const startButtonY = (canvas.height / 3) * 2;

        // Draw initial start button color
        drawStartButton(ctx, "#D0CECE");
    }

    // Function to check if mouse is inside the start button
    function isMouseInsideButton(mouseX, mouseY) {
        const startButtonWidth = 200;
        const startButtonHeight = 50;
        const startButtonX = (canvas.width - startButtonWidth) / 2;
        const startButtonY = (canvas.height / 3) * 2;
        return mouseX >= startButtonX && mouseX <= startButtonX + startButtonWidth &&
               mouseY >= startButtonY && mouseY <= startButtonY + startButtonHeight;
    }

    // Function to draw start button
    function drawStartButton(ctx, color) {
        // Define start button properties
        const startButtonWidth = 200;
        const startButtonHeight = 50;
        const startButtonX = (canvas.width - startButtonWidth) / 2;
        const startButtonY = (canvas.height / 3) * 2;

        // Clear the existing button
        ctx.clearRect(startButtonX, startButtonY, startButtonWidth, startButtonHeight);

        // Draw start button with specified color
        ctx.fillStyle = color;
        ctx.fillRect(startButtonX, startButtonY, startButtonWidth, startButtonHeight);

        // Draw start button text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("시작", canvas.width / 2, startButtonY + startButtonHeight / 2 + 8);
    }

    // Function to hide start button
    function hideStartButton() {
        const startButtonWidth = 200;
        const startButtonHeight = 50;
        const startButtonX = (canvas.width - startButtonWidth) / 2;
        const startButtonY = (canvas.height / 3) * 2;

        // Clear the start button area
        ctx.clearRect(startButtonX, startButtonY, startButtonWidth, startButtonHeight);
    }

    // Function to draw heart shape
    function drawHeart(ctx, x, y) {
        // Draw heart
        ctx.beginPath();
        ctx.moveTo(x + 50, y + 30);
        ctx.bezierCurveTo(x + 10, y + 20, x + 10, y + 50, x + 50, y + 60);
        ctx.bezierCurveTo(x + 90, y + 50, x + 90, y + 20, x + 50, y + 30);
        ctx.closePath();

        // Set fill color
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    // Function to draw star shape
    function drawStar(ctx, x, y, size) {
        // Draw star
        ctx.beginPath();
        ctx.moveTo(x + 0.5 * size, y + 0.2 * size);
        ctx.lineTo(x + 0.6 * size, y + 0.5 * size);
        ctx.lineTo(x + size, y + 0.5 * size);
        ctx.lineTo(x + 0.65 * size, y + 0.7 * size);
        ctx.lineTo(x + 0.72 * size, y + size);
        ctx.lineTo(x + 0.5 * size, y + 0.8 * size);
        ctx.lineTo(x + 0.28 * size, y + size);
        ctx.lineTo(x + 0.35 * size, y + 0.7 * size);
        ctx.lineTo(x + 0 * size, y + 0.5 * size);
        ctx.lineTo(x + 0.4 * size, y + 0.5 * size);
        ctx.closePath();

        // Set fill color
        ctx.fillStyle = '#FFC90E';
        ctx.fill();

        // Set stroke color
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
};
