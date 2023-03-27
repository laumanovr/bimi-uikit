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
            inputValue: '',
            inputLinearValue: 'linear'
        }
    },
    template: `
      <div style="margin-top: 20px; display: flex">
          <div style="margin-right: 80px; min-width: 310px">
            <input-form v-model="inputValue" style="margin-bottom: 15px;"/>
            <input-form is-correct style="margin-bottom: 15px;"/>
            <input-form error-msg="Error message" style="margin-bottom: 15px;"/>
            <input-form is-disabled label-name="Disabled" style="margin-bottom: 15px;"/>
          </div>
          <div style="min-width: 310px">
            <input-form v-model="inputLinearValue" is-linear style="margin: 20px 0 25px;"/>
            <input-form is-linear is-correct style="margin-bottom: 25px;"/>
            <input-form is-linear error-msg="Error message" style="margin-bottom: 25px;"/>
            <input-form is-linear is-disabled label-name="Disabled" style="margin-bottom: 15px;"/>
          </div>
      </div>`
})