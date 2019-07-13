document.addEventListener('mouseover', e => {
    navigationSystems(e);
});

document.addEventListener('click', e => {
    navigationSystems(e);
});

let nodeCounter = 0;
let navSystemsFlag = false;

function navigationSystems(e) {
    if (e.target.dataset.systemControl === 'menu' && e.type === 'mouseover') {
        let nodes = e.target.children;

        function cycleThroughNodes() {
            if (nodeCounter !== nodes.length) {
                setTimeout(cycleThroughNodes, 100);
                nodes[nodeCounter].classList.add('show');
                nodeCounter++;
            }

            if (nodeCounter === nodes.length) {
                navSystemsFlag = true;
            }
        }

        if (navSystemsFlag === false) {
            cycleThroughNodes();
        }
    }

    if (e.target.dataset.moduleDeactivator === '' && e.type === 'click') {
        let nodes = e.target.parentNode.children;

        function uncycleThroughNodes() {
            if (nodeCounter > 0) {
                setTimeout(uncycleThroughNodes, 200);
                nodes[nodeCounter - 1].classList.remove('show');
                nodeCounter--;
            }

            if (nodeCounter === 0) {
                navSystemsFlag = false;
            }
        }

        if (navSystemsFlag === true) {
            uncycleThroughNodes();
        }
    }
}
