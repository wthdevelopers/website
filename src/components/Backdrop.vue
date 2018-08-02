<template>
  <canvas id="canvas"></canvas>
</template>


<script>

export default {
  name: 'Backdrop',
  mounted() {
    var Canvas = document.getElementById('canvas');
    var ctx = Canvas.getContext('2d');

    var resize = function() {
        Canvas.width = Canvas.clientWidth;
        Canvas.height = Canvas.clientHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    var elements = [];
    var presets = {};

    presets.o = function (x, y, s) {
      return {
        x: x,
        y: y,
        r: 15 * s,
        w: 5 * s,
        draw: function(ctx, t) {
          this.x += 0;
          this.y += 0;

          ctx.beginPath();
          ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
          ctx.lineWidth = this.w;
          ctx.strokeStyle = "#ffa6c7";
          ctx.stroke();
        }
      }
    };

    presets.round_rect = function(x, y, s, r, dr, fill) {
      return {
        x: x, // initial x pos
        y: y, // initial y pos
        s: 30 * s, // scale factor
        r: r, // starting angle
        dr: dr, // speed of rotation
        w: 5 * s, // stroke line width

        draw: function(ctx, t) {
          var _this = this;
          var s = _this.s; 
          this.r += this.dr; // increment the rotation speed
          this.x += 0; // increment the x position
          this.y += 0; // increment the y position

          // Reference to the center of the rectangle
          var rec = function(x, y, r) {
            ctx.beginPath();
            ctx.moveTo(-1*(s/2)*(x-r), -1*(s/2)*y);
            ctx.lineTo((s/2)*(x-r), -1*(s/2)*y);
            ctx.quadraticCurveTo((s/2)*x, -1*(s/2)*y, (s/2)*x, -1*(s/2)*(y-r));
            ctx.lineTo((s/2)*x, (s/2)*(y-r));
            ctx.quadraticCurveTo((s/2)*x, (s/2)*y, (s/2)*(x-r), (s/2)*y);
            ctx.lineTo(-1*(s/2)*(x-r), (s/2)*y);
            ctx.quadraticCurveTo(-1*(s/2)*x, (s/2)*y, -1*(s/2)*x, (s/2)*(y-r));
            ctx.lineTo(-1*(s/2)*x, -1*(s/2)*(y-r));
            ctx.quadraticCurveTo(-1*(s/2)*x, -1*(s/2)*y, -1*(s/2)*(x-r), -1*(s/2)*y);
            ctx.closePath();
            ctx.strokeStyle = "#ffa6c7";
            ctx.lineWidth = _this.w;
            ctx.stroke();
            if (fill) {
              ctx.fillStyle="#ffebf1";
              ctx.fill();
            }
          };

          ctx.save();

          // Move the origin point of the rectangle(centre of the rectangle) with sin function to make it move
          ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 10, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
          // Rotate the rectangle
          ctx.rotate(this.r * Math.PI / 180);

          rec(2, 2, 1);
          ctx.restore();
        }
      }
    };
    // Math.floor(Math.random() * 11)
    for(var x = 0; x < Canvas.width; x++) {
        for(var y = 0; y < Canvas.height; y++) {
            if(Math.round(Math.random() * 3000) == 1) {
                var s = (Math.random() * 6) / 10;
                if(Math.round(Math.random()) == 1)
                    elements.push(presets.o(x, y, s, 0, 0));
                else
                    elements.push(presets.round_rect(x, y, s, (Math.random() * 360), (Math.random() * 6) / 10, Math.floor(Math.random() * 2)));
            }
        }
    }

    setInterval(function() {
        ctx.clearRect(0, 0, Canvas.width, Canvas.height);

        var time = new Date().getTime();

        for (var e in elements)
        elements[e].draw(ctx, time);
    }, 10);   
  }
}

</script>

<style scoped>

#canvas {
  width: 100%;
  height: 100%;
}
</style>