function adapter() {
    const width = document.documentElement.clientWidth
    const fontSize = width / 10
    document.documentElement.style.fontSize = fontSize + 'px'
}
adapter()
window.onresize = adapter