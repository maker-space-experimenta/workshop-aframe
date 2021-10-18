
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


AFRAME.registerComponent('multiply', {
    init: function () {

        let from_x = parseInt(this.data.from.split(",")[0]);
        let to_x = parseInt(this.data.to.split(",")[0]);

        let from_y = parseInt(this.data.from.split(",")[1]);
        let to_y = parseInt(this.data.to.split(",")[1]);

        let from_z = parseInt(this.data.from.split(",")[2]);
        let to_z = parseInt(this.data.to.split(",")[2]);

        let scene = document.querySelector('a-scene');

        for (let i = 0; i < this.data.count; i++) {
            let tree = this.el.cloneNode(true);
            tree.removeAttribute("multiply");

            let pos = randomNumber(from_x, to_x) + " " + randomNumber(from_z, to_z) + " " + randomNumber(from_y, to_y);
            console.log(pos);

            tree.setAttribute("position", pos);
            scene.appendChild(tree);

        }
    }
});

