import InputForm from './input-form';

export default {
    title: 'input-form',
    component: InputForm
}

export const FormInput = (args, { argTypes }) => ({
    components: { InputForm },
    props: Object.keys(argTypes),
    data() {
        return {
            inputValue: ''
        }
    },
    template: `
      <div>
        <input-form v-model="inputValue" style="margin-bottom: 15px;"/>
        <input-form v-model="inputValue" error-msg="Error message" style="margin-bottom: 15px;"/>
      </div>
    `
})