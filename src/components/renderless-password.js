import { computed } from 'vue';

export function isMatching(password, confirmation) {
    if (!password || !confirmation) {
        return false;
    }
    return password === confirmation;
}

export function calcComplexity(val) {
    if (!val) {
        return 0;
    }
    if (val.length >= 10) {
        return 3;
    }
    if (val.length >= 7) {
        return 2;
    }
    if (val.length >= 5) {
        return 2;
    }
    return 0;
}

export default {
    props: {
        password: {
            type: String
        },
        confirmation: {
            type: String
        },
        minComplexity: {
            type: Number,
            default: 3
        }
    },
    render() {
        const matching = computed(() => isMatching(
            this.password, this.confirmation
        ));
        const complexity = computed(() => calcComplexity(
           this.password
        ));
        const isValid = computed(() =>
           complexity.value >= this.minComplexity && matching.value
        );
        return this.$slots.default({
            matching: matching.value,
            complexity: complexity.value,
            isValid: isValid.value
        });
    }
}