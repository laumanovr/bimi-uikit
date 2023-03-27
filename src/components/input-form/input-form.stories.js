import InputForm from './input-form';

export default {
    title: 'input-form',
    component: InputForm
}

export const FormInput = (args, {argTypes}) => ({
    components: {InputForm},
    props: Object.keys(argTypes),
    data() {
        return {
            inputValue: ''
        }
    },
    template: `
      <div style="margin-top: 20px; display: flex">
          <div style="margin-right: 80px; min-width: 310px">
            <input-form v-model="inputValue" style="margin-bottom: 15px;"/>
            <input-form v-model="inputValue" is-correct style="margin-bottom: 15px;"/>
            <input-form v-model="inputValue" error-msg="Error message" style="margin-bottom: 15px;"/>
            <input-form v-model="inputValue" is-disabled label-name="Disabled" style="margin-bottom: 15px;"/>
          </div>
          <div style="min-width: 310px">
            <input-form v-model="inputValue" is-linear style="margin: 20px 0 25px;"/>
            <input-form v-model="inputValue" is-linear is-correct style="margin-bottom: 25px;"/>
            <input-form v-model="inputValue" is-linear error-msg="Error message" style="margin-bottom: 25px;"/>
            <input-form v-model="inputValue" is-linear is-disabled label-name="Disabled" style="margin-bottom: 15px;"/>
          </div>
      </div>`
})