export default {
    created() {
        document.addEventListener('click', this.clickListener)
    },
    methods: {
        clickListener(event) {
            const outsideClicked = !event.target.className.includes('dropdown');
            if (outsideClicked) {
                this.isOpened = false;
            }
        }
    },
    beforeDestroy() {
        document.removeEventListener('click', this.clickListener);
    }
}
